import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
);

const options = {
  plugins: {
    legend: {
      align: 'end' as const,
      labels: {
        usePointStyle: true,
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
  categoryPercentage: 0.5,
  barPercentage: 0.5,
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#718EBF',
        font: {
          size: 14,
        },
      },
    },
    y: {
      grid: {
        color: '#F3F3F5',
      },
      ticks: {
        stepSize: 100,
        color: '#718EBF',
        font: {
          size: 14,
        },
      },
      beginAtZero: true
    }
  },
}

interface BarChartProps {
  data: {
    label: string;
    values: number[];
  }[];
  labels: string[];
};

const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
}) => {
  const barChartData = {
    labels,
    datasets: [{
      label: data[0].label,
      backgroundColor: '#232323',
      barThickness: 30,
      base: 2,
      borderColor: '#ffffff',
      borderRadius: 25,
      borderSkipped: false,
      borderWidth: 4,
      data: data[0].values,
      hoverBorderColor: '#ffffff',
    }, {
      label: data[1].label,
      backgroundColor: '#396AFF',
      barThickness: 30,
      base: 2,
      borderColor: '#ffffff',
      borderRadius: 25,
      borderSkipped: false,
      borderWidth: 4,
      data: data[1].values,
      hoverBorderColor: '#ffffff',
    }]
  };

  return (
    <Bar
      style={{
        backgroundColor: '#ffffff',
      }}
      datasetIdKey='id1'
      data={barChartData}
      options={options}
    />
  );
};

export default BarChart;
