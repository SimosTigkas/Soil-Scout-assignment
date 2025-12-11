import React from "react";
import styles from "./SiteHealthDashboard.module.css";
import mockData from "../../../data/data.json";
import { MetricChart } from "../../MetricChart/MetricChart";
import { MetricCard } from "../../MetricCard/MetricCard";

export const SiteHealthDashboard = () => {
    let [selectedMetric, setSelectedMetric] = React.useState("soilMoisture");
    const labels = mockData.map(entry => entry.day);
    const metricValues = mockData.map(entry => Number(entry[selectedMetric]));
    const currentValue = metricValues[metricValues.length - 1];
    const minValue = Math.min(...metricValues);
    const maxValue = Math.max(...metricValues);

    return (
        <div className={styles.dashboardContainer} id="site-health-dashboard">
            <h2>Site Health Dashboard</h2>
            < MetricChart labels={labels} data={metricValues} datasetLabel={selectedMetric} />
            < MetricCard  currentValue={currentValue} min={minValue} max={maxValue}/>
            <div className={styles.toggleContainer}>
                <button className={selectedMetric === "soilMoisture" ? styles.active : ""} onClick={() => setSelectedMetric("soilMoisture")}>
                    Soil Moisture
                </button>
                <button className={selectedMetric === "temperature" ? styles.active : ""} onClick={() => setSelectedMetric("temperature")}>
                    Temperature
                </button>
            </div>
        </div>
    );
};
