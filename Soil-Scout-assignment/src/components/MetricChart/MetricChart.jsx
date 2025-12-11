import React from "react";
import styles from "./MetricChart.module.css";
// import mockData from "../../../data/data.json";
import { Line } from "react-chartjs-2";
import "../../lib/chartConfig";

export const MetricChart = ({ labels, data, datasetLabel}) => {
    const rootStyles = getComputedStyle(document.documentElement);
    const borderColor = rootStyles.getPropertyValue('--color-secondary');
    const backgroundColor = rootStyles.getPropertyValue('--color-background');
    const dataObject = {
    labels: labels,
    datasets: [
        {
        label: datasetLabel,
        data: data,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        }
    ]
    }
    const optionsObject = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            tooltip: { mode: "index" }
        },
        scales: {
            y: { beginAtZero: true },
            x: { display: true }
        }
    };
    return (
        <div className={styles.chartContainer} id="metric-chart">
            <Line data={dataObject} options={optionsObject} />
        </div>
    );
};