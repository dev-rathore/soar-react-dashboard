import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { getGradient } from '../../../utils/chart';

ChartJS.register(
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
);

const options = {
  responsive: true,
  aspectRatio: 1.5,
  plugins: {
    legend: {
      display: false,
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
  scales: {
    x: {
      grid: {
        color: '#F3F3F5',
        style: 'dash',
      },
      ticks: {
        color: '#718EBF',
        font: {
          size: 14,
        },
      },
      border: {
        dash: [10, 10],
        color: '#DFE5EE',
      },
    },
    y: {
      grid: {
        color: '#F3F3F5',
        style: 'dash',
      },
      ticks: {
        stepSize: 200,
        color: '#718EBF',
        font: {
          size: 14,
        },
      },
      border: {
        dash: [10, 10],
        color: '#DFE5EE',
      },
      beginAtZero: true
    }
  },
};

interface LineChartProps {
  data: number[];
  labels: string[];
};

const LineChart: React.FC<LineChartProps> = ({
  data,
  labels,
}) => {
  const lineChartData = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data,
        fill: true,
        tension: 0.4,
        borderColor: "#1814F3",
        backgroundColor: (context: {
          chart: {
            ctx: CanvasRenderingContext2D;
            chartArea: {
              right: number;
              left: number;
              bottom: number;
              top: number;
            };
          };
        }) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }

          return getGradient(ctx, chartArea);
        },
      },
    ],
  };

  return (
    <Line
      datasetIdKey='id3'
      data={lineChartData}
      options={options}
    />
  );
};

export default LineChart;
