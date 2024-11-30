import { formatAmount, formateDate } from '../../../utils/format';

import dollarCoin from '../../../assets/icons/dollar-coin.svg';
import paypal from '../../../assets/icons/paypal-payment.svg';
import creditCard from '../../../assets/icons/card.svg';

interface Transaction {
  icon: string;
  title: string;
  date: Date;
  amount: number;
}

interface TransactionCardProps {
  transactions: Transaction[];
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  transactions,
}) => {
  const getIcon = (
    type: Transaction['icon'],
  ) => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-[#FFF5D9] w-14 h-14 p-4 rounded-full flex items-center justify-center">
            <img
              src={creditCard}
              alt="Credit Card"
              width={24}
              height={24}
            />
          </div>
        )
      case 'paypal':
        return (
          <div className="bg-[#E7EDFF] w-14 h-14 p-4 rounded-full flex items-center justify-center">
            <img
              src={paypal}
              alt="Paypal"
              width={22}
              height={22}
            />
          </div>
        )
      case 'dollar':
        return (
          <div className="bg-[#DCFAF8] w-14 h-14 p-4 rounded-full flex items-center justify-center">
            <img
              src={dollarCoin}
              alt="Dollar"
              width={22}
              height={22}
            />
          </div>
        )
    }
  }

  return (
    <div className="max-h-[236px] sm:max-h-[252px] flex flex-col overflow-y-auto bg-white rounded-3xl px-2 py-4 sm:p-6 w-full sm:shadow-sm">
      <div className="space-y-5">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {getIcon(transaction.icon)}
              <div>
                <h3 className="text-app-black font-medium">{transaction.title}</h3>
                <p className="text-accent-100 text-sm">
                  {formateDate(transaction.date)}
                </p>
              </div>
            </div>
            <span
              className={`font-medium ${transaction.amount < 0 ? 'text-app-red' : 'text-app-green'
                }`}
            >
              {formatAmount(transaction.amount, true)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionCard;
