interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = ({
  ...props
}) => {
  return (
    <button
      className="w-full text-white bg-app-black rounded-2xl px-6 py-3"
      {...props}
    />
  );
};

export default Button;
