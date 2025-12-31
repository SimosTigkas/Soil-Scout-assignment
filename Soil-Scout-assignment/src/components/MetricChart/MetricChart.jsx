import React from "react";
import styles from "./MetricChart.module.css";
import { Line } from "react-chartjs-2";
import "../../lib/chartConfig";

export const MetricChart = ({ labels, data, datasetLabel}) => {
    const rootStyles = getComputedStyle(document.documentElement);
    const borderColor = rootStyles.getPropertyValue('--color-primary');
    const backgroundColor = rootStyles.getPropertyValue('--color-secondary');
    const dataObject = {
    labels: labels,
    datasets: [
        {
        label: datasetLabel,
        data: data,
        tension: 0.4,
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