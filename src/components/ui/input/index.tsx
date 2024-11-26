interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<InputProps> = ({
  ...props
}) => {
  return (
    <input
      type="text"
      className="text-accent-100 block w-full rounded-2xl border border-app-gray-200 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent-200"
      {...props}
    />
  );
};

export default Input;
