import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const TargetsVisualization = () => {
    const data = {
        analytics: {
            target: 1000,
            achieved: 700
        },
        finance: {
            target: 800,
            achieved: 600
        },
        timetable: {
            target: 500,
            achieved: 300
        }
    };

    const createChartData = (target, achieved) => ({
        labels: ['Achieved', 'Remaining'],
        datasets: [{
            data: [achieved, target - achieved],
            backgroundColor: ['#4CAF50', '#FFC107'],
        }]
    });

    const createChartOptions = () => ({
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw;
                        const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            }
        }
    });

    return (
        <div className="container mt-5">
            <h2 className="text-center mt-3">Zeraki Targets Visualization</h2>
            <div className="row mt-4">
                <div className="col-md-4 ">
                    <h3 className="text-center">Zeraki Analytics</h3>
                    <Pie data={createChartData(data.analytics.target, data.analytics.achieved)} options={createChartOptions()} />
                </div>
                <div className="col-md-4">
                    <h3 className="text-center">Zeraki Finance</h3>
                    <Pie data={createChartData(data.finance.target, data.finance.achieved)} options={createChartOptions()} />
                </div>
                <div className="col-md-4">
                    <h3 className="text-center">Zeraki Timetable</h3>
                    <Pie data={createChartData(data.timetable.target, data.timetable.achieved)} options={createChartOptions()} />
                </div>
            </div>
        </div>
    );
};

export default TargetsVisualization;
