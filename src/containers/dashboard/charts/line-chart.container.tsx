import { LineChart } from "../../../components/dashboard"

const LineChartContainer: React.FC = () => {
  return (
    <LineChart
      data={[0, 300, 210, 500, 450, 800, 200, 580, 210, 630, 600]} // Sales data
      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']}
    />
  );
};

export default LineChartContainer;
