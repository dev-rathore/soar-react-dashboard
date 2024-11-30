interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-full flex-1 bg-white rounded-2xl md:rounded-3xl sm:shadow-sm px-0 py-0 sm:py-8 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
