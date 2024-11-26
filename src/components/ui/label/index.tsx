import { PropsWithChildren } from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, PropsWithChildren { }

const Label: React.FC<LabelProps> = ({
  children,
  ...props
}) => {
  return (
    <label
      className="block text-base mb-3 text-app-black"
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
