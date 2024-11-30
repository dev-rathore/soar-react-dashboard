import { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/tailwind";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  iconColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconColor = "text-accent-100",
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center rounded-full bg-accent p-3 ${className}`,
        iconColor,
        variant === "secondary" && "w-12 h-12 bg-white rounded-full shadow-icon hover:bg-gray-50 transition-colors"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
