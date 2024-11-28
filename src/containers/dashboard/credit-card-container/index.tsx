import { CreditCard } from "../../../components/dashboard"

const CreditCardContainer: React.FC = () => {
  const data = {
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    cardNumber: '3778 **** **** 1234',
    validThru: '12/22',
  };

  return (
    <CreditCard
      variant="primary"
      data={data}
    />
  );
};

export default CreditCardContainer;
