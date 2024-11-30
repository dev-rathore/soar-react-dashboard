import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { PrimaryInput } from '../../ui';
import { cn } from '../../../utils/tailwind'
import { toast } from 'react-toastify';
import { formatAmount } from '../../../utils/format';
import IconButton from '../../ui/icon-button';

export interface QuickTransferData {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface QuickTransferProps {
  data: QuickTransferData[];
}

const QuickTransfer: React.FC<QuickTransferProps> = ({
  data,
}) => {
  const [selectedMember, setSelectedMember] = useState<QuickTransferData | null>(null);
  const [amount, setAmount] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleCount = 3;

  const canSlideLeft = startIndex > 0;
  const canSlideRight = startIndex + visibleCount < data.length;

  const handleSlide = (direction: 'left' | 'right') => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (direction === 'left' && canSlideLeft) {
      setStartIndex(prev => prev - 1);
    } else if (direction === 'right' && canSlideRight) {
      setStartIndex(prev => prev + 1);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }

  const handleSelect = (data: QuickTransferData | null) => {
    setSelectedMember(data);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || !isNaN(Number(value))) {
      setAmount(value);
    }
  };

  const onTransfer = () => {
    if (!selectedMember) {
      toast.error('Please select a member to transfer');
      return;
    } else if (!amount) {
      toast.error('Please enter an amount to transfer');
      return;
    }

    toast.success(`Transferred ${formatAmount(parseFloat(amount))} to ${selectedMember.name}`);
    setAmount('');
  }

  useEffect(() => {
    if (containerRef.current) {
      const userWidth = containerRef.current.children[0].clientWidth
      containerRef.current.style.transform = `translateX(-${startIndex * userWidth}px)`
    }
  }, [startIndex])

  return (
    <div className="overflow-x-hidden relative">
      <div
        className={cn(
          `flex justify-center mb-8 relative transition-all duration-300 ease-in-out`,
          !canSlideRight ? 'pl-14' : 'pl-6',
          !canSlideLeft ? 'pr-14' : 'pr-6',
        )}
      >
        {canSlideLeft && (
          <IconButton
            variant='secondary'
            onClick={() => handleSlide('left')}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 translate-x-0 sm:-translate-x-4"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-accent-100" />
          </IconButton>
        )}

        <div className="w-full overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ width: `${(100 * data.length) / visibleCount}%` }}
          >
            {data.map((member) => (
              <div
                key={member.id}
                className={cn(
                  "cursor-pointer flex flex-col items-center py-4 rounded-lg transition-colors",
                )}
                onClick={() => {
                  handleSelect(selectedMember?.id === member.id ? null : member);
                }}
                style={{ width: `${100 / data.length}%` }}
              >
                <div className="w-12 h-12 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className={cn(
                    "text-base sm:text-lg text-center text-app-black font-normal",
                    selectedMember?.id === member.id && 'font-bold',
                  )}
                >
                  {member.name}
                </h3>
                <p
                  className={cn(
                    "text-sm text-center text-accent-100 font-normal",
                    selectedMember?.id === member.id && 'font-bold',
                  )}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {canSlideRight && (
          <IconButton
            variant='secondary'
            onClick={() => handleSlide('right')}
            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 translate-x-0 sm:translate-x-4"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-accent-100" />
          </IconButton>
        )}
      </div>

      <div className="flex gap-4 sm:gap-8 h-14">
        <h3 className="text-base font-normal text-accent-100 flex items-center">
          Write Amount
        </h3>
        <PrimaryInput
          autoComplete='off'
          name='amount'
          value={amount || ''}
          type="text"
          onChange={handleAmountChange}
          containerClassName='flex-1'
          action={onTransfer}
          actionLabel={
            <>
              Send
              <Send className="w-6 h-6" />
            </>
          }
          placeholder="525.50"
        />
      </div>
    </div>
  )
}

export default QuickTransfer;
