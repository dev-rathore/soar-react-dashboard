import { cn } from "../../../utils/tailwind";

interface ErrorProps {
  classname?: string;
  message: string | undefined;
}

const Error: React.FC<ErrorProps> = ({
  classname,
  message,
}) => {
  return (
    <p
      className={cn(
        "text-red-500 text-sm mt-1",
        classname,
      )}
    >
      {message}
    </p>
  );
};

export default Error;
