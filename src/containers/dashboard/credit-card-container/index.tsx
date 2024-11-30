import { CreditCard } from "../../../components/dashboard"

const CreditCardContainer: React.FC = () => {
  const data = {
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    cardNumber: '3778 **** **** 1234',
    validThru: '12/22',
  };

  return (
    <div className="flex gap-8 overflow-x-auto">
      {
        Array.from({ length: 3 }).map((_, i) => (
          <CreditCard
            key={i}
            variant={i === 0 ? 'primary' : 'secondary'}
            data={data}
          />
        ))
      }
    </div>
  );
};

export default CreditCardContainer;
