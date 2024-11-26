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
      className={`w-full flex-1 bg-white rounded-2xl md:rounded-3xl shadow-sm p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
