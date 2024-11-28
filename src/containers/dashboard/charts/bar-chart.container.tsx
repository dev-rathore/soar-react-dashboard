import { BarChart } from "../../../components/dashboard";

const BarChartContainer: React.FC = () => {
  return (
    <BarChart
      data={[
        {
          label: 'Deposit',
          values: [480, 350, 325, 480, 150, 390, 400], // Deposit data
        },
        {
          label: 'Withdraw',
          values: [240, 140, 270, 370, 250, 250, 330], // Withdraw data
        },
      ]}
      labels={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
    />
  );
};

export default BarChartContainer;
