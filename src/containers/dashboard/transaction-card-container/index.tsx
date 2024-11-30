import { TransactionCard } from "../../../components/dashboard";

const TransactionCardContainer: React.FC = () => {
  const transactions = [
    {
      icon: 'card' as const,
      title: 'Deposit from my Card',
      date: new Date('28 January 2021'),
      amount: -850,
    },
    {
      icon: 'paypal' as const,
      title: 'Deposit Paypal',
      date: new Date('25 January 2021'),
      amount: 2500,
    },
    {
      icon: 'dollar' as const,
      title: 'Jemi Wilson',
      date: new Date('21 January 2021'),
      amount: 5400,
    },
    {
      icon: 'paypal' as const,
      title: 'Deposit Paypal',
      date: new Date('15 January 2021'),
      amount: 500,
    },
    {
      icon: 'dollar' as const,
      title: 'Jemi Wilson',
      date: new Date('12 January 2021'),
      amount: 1400,
    },
    {
      icon: 'card' as const,
      title: 'Deposit from my Card',
      date: new Date('18 January 2021'),
      amount: -450,
    },
  ];

  return <TransactionCard transactions={transactions} />
};

export default TransactionCardContainer;
