import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
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
