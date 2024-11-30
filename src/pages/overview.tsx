import { Card, CardLabel } from "../components/ui";
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
    <div className="flex-grow overflow-y-auto">
      <div className="grid grid-cols-3 gap-8 mb-6">
        <div className="col-span-2">
          <CardLabel label="My Cards" />
          <CreditCardContainer />
        </div>
        <div className="col-span-1">
          <CardLabel label="Recent Transaction" />
          <TransactionCardContainer />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-6">
        <div className="col-span-2">
          <CardLabel label="Weekly Activity" />
          <Card>
            <BarChartContainer />
          </Card>
        </div>
        <div className="col-span-1">
          <CardLabel label="Expense Statistics" />
          <Card className="flex justify-center items-center">
            <PieChartContainer />
          </Card>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-full max-w-xl">
          <CardLabel label="Quick Transfer" />
          <Card>
            <QuickTransferContainer />
          </Card>
        </div>
        <div className="flex-1">
          <CardLabel label="Balance History" />
          <Card>
            <LineChartContainer />
          </Card>
        </div>
      </div>
    </div>
  )
};

export default Overview;
