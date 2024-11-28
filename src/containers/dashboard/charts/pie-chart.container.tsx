import { PieChart } from "../../../components/dashboard"

const PieChartContainer: React.FC = () => {
  return (
    <PieChart
      data={[30, 15, 35, 20]}
      labels={['Entertainment', 'Bill Expense', 'Others', 'Investment', 'Purple', 'Orange']}
    />
  );
};

export default PieChartContainer;
