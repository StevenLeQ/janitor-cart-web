import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Point,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip
);

// TODO replace this any 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const gradient = (context: any) => {
  const chart = context.chart as ChartJS<'line'>;
  const ctx = chart.ctx;
  const gradient = ctx.createLinearGradient(
    0,
    0,
    0,
    chart.height || 0
  );
  gradient.addColorStop(0.2, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");
  return gradient;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index" as const,
  },

  elements: {
    point: {
      radius: 0,
    },
  },

  scales: {
    x: {
      grid: {
        color: gradient,
      },
      border: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },

  plugins: {
    legend: {
      position: "top" as const,
    },

    title: {
      display: true,
      text: "$35,8K" as const,
      font: {
        size: 28,
        weight: "bold",
      },
      color: "#212B36",
      align: "start" as const, 
      position: "top" as const, 
    },

    subtitle: {
      display: true,
      text: "Overall Revenue" as const,
      font: {
        size: 16, 
        weight: "normal",
      },
      align: "start" as const, 
      position: "top" as const, 
      padding: {
        top: -7,
        bottom: 20
      }
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Monthly Revenue",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(0, 40, 190, 0.8)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0.4,
    },
  ],
};

export default function RevenueLineChart() {
  return <Line options={options} data={data} />;
}
