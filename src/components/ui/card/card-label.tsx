interface CardLabelProps {
  action?: React.ReactNode;
  label: string;
}

const CardLabel: React.FC<CardLabelProps> = ({
  action,
  label,
}) => {
  return (
    <div className="flex gap-4 items-start">
      <h3
        className="flex-1 text-xl text-app-dark font-semibold mb-4"
      >
        {label}
      </h3>
      {action}
    </div>
  );
};

export default CardLabel;
