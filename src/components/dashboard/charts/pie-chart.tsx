import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend, Tooltip);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      align: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 3,
      font: {
        size: 18,
      },
      formatter: (value: number) => {
        return value + '%';
      },
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
};

interface PieChartProps {
  data: number[];
  labels: string[];
};

const PieChart: React.FC<PieChartProps> = ({
  data,
  labels,
}) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        label: '#',
        data,
        backgroundColor: [
          '#343C6A',
          '#FC7900',
          '#232323',
          '#396AFF',
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 15,
        offset: 5,
        rotation: -55,
        hoverBorderColor: '#ffffff',
      },
    ],
  };

  return (
    <Pie
      datasetIdKey='id2'
      data={pieChartData}
      options={options}
    />
  );
};

export default PieChart;
