import { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/tailwind";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const IconButton: React.FC<IconButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center rounded-full bg-accent p-3 ${className}`,
        variant === "primary" ? "text-accent-100" : "text-app-blue"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
