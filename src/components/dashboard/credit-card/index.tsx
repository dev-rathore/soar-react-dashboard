import { formatAmount } from "../../../utils/format";
import { cn } from "../../../utils/tailwind";

import ChipCardPrimary from '../../../assets/icons/chip-card-primary.png';
import ChipCardSecondary from '../../../assets/icons/chip-card-secondary.png';

interface CreditCardData {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
};

interface CreditCardProps {
  data: CreditCardData;
  variant?: 'primary' | 'secondary';
}

const CreditCard: React.FC<CreditCardProps> = ({
  data,
  variant = 'primary',
}) => {
  return (
    <div
      className={cn(
        'flex-1 rounded-[28px] bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white',
        variant === 'secondary' && 'bg-gradient-to-b from-white to-white text-app-dark border border-app-gray-200',
      )}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm font-light opacity-80">Balance</p>
            <p className="text-2xl font-semibold">{formatAmount(data.balance)}</p>
          </div>
          <div className="w-9 h-9">
            <img
              src={variant === 'primary' ? ChipCardPrimary : ChipCardSecondary}
              alt={`Chip Card ${variant}`}
              width={36}
              height={36}
            />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <p className="text-sm font-light opacity-80">CARD HOLDER</p>
              <p className="font-medium">{data.cardHolder}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-light opacity-80">VALID THRU</p>
              <p className="font-medium">{data.validThru}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "p-6 flex justify-between items-center",
          variant === 'primary' && 'bg-gradient-to-b from-white-15 to-white-0',
          variant === 'secondary' && 'border-t border-app-gray-200',
        )}
      >
        <p className="text-lg tracking-wider">
          {data.cardNumber}
        </p>
        <div className="flex -space-x-3">
          <div
            className={cn(
              "w-8 h-8 rounded-full",
              variant === 'secondary' ? 'bg-[#9199AF80]' : 'bg-white/50',
            )}
          />
          <div
            className={cn(
              "w-8 h-8 rounded-full",
              variant === 'secondary' ? 'bg-[#9199AF80]' : 'bg-white/50',
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default CreditCard;
