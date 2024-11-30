import { CardLabel } from "../components/ui";
import {
  BarChartContainer,
  CreditCardContainer,
  LineChartContainer,
  PieChartContainer,
  QuickTransferContainer,
  TransactionCardContainer,
} from "../containers/dashboard";

const Overview: React.FC = () => {
  return (
    <div className="flex-grow h-full overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-6">
        <div className="col-span-1 xl:col-span-2">
          <CardLabel
            label="My Cards"
            action={
              <button
                className="text-lg text-app-dark font-medium"
                onClick={() => console.log('See All')}
              >
                See All
              </button>
            }
          />
          <CreditCardContainer />
        </div>
        <div className="col-span-1">
          <CardLabel label="Recent Transaction" />
          <TransactionCardContainer />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <div className="col-span-1 md:col-span-2">
          <CardLabel label="Weekly Activity" />
          <BarChartContainer />
        </div>
        <div className="col-span-1">
          <CardLabel label="Expense Statistics" />
          <PieChartContainer />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:max-w-md lg:max-w-xl">
          <CardLabel label="Quick Transfer" />
          <QuickTransferContainer />
        </div>
        <div className="flex-1">
          <CardLabel label="Balance History" />
          <LineChartContainer />
        </div>
      </div >
    </div >
  )
};

export default Overview;
