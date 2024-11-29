interface CardLabelProps {
  label: string;
}

const CardLabel: React.FC<CardLabelProps> = ({ label }) => {
  return (
    <h3 className="text-xl text-app-dark font-semibold mb-4">{label}</h3>
  );
};

export default CardLabel;
