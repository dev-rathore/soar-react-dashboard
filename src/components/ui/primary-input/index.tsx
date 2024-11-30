import { cn } from '../../../utils/tailwind';

interface PrimaryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  action?: () => void;
  actionLabel?: string | React.ReactNode;
  className?: string;
  containerClassName?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({
  action,
  actionLabel,
  className = "",
  containerClassName = "",
  icon,
  iconClassName = "",
  ...props
}) => {
  return (
    <div className={`relative flex ${containerClassName}`}>
      {
        icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-200">
            {icon}
          </div>
        )
      }
      <input
        className={cn(
          'w-full bg-accent rounded-full py-3 text-base placeholder:text-accent-100 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-shadow',
          icon ? 'pl-12' : 'pl-6',
          action && actionLabel ? 'pr-16' : 'pr-6',
          className,
        )}
        {...props}
      />
      {
        action && actionLabel && (
          <button
            className="-ml-14 px-6 sm:px-8 py-3 bg-app-black text-white rounded-[50px] flex items-center gap-3 hover:bg-gray-700 transition-colors"
            onClick={action}
          >
            {actionLabel}
          </button>
        )
      }
    </div>
  );
}

export default PrimaryInput;
