import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register the components
ChartJS.register(BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const SignupsOverview = () => {
    const data = {
        analytics: {
            Primary: 300,
            Secondary: 500,
            IGCSE: 200
        },
        finance: {
            Primary: 400,
            Secondary: 600,
            IGCSE: 300
        },
        timetable: {
            Primary: 250,
            Secondary: 450,
            IGCSE: 150
        }
    };

    const createBarChartData = (productData) => ({
        labels: ['Primary', 'Secondary', 'IGCSE'],
        datasets: [{
            label: 'Sign-ups',
            data: [productData.Primary, productData.Secondary, productData.IGCSE],
            backgroundColor: ['#4CAF50', '#FFC107', '#2196F3']
        }]
    });

    const createBarChartOptions = (title) => ({
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: title
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.dataset.label || '';
                        return `${label}: ${context.raw}`;
                    }
                }
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const datasetIndex = elements[0].datasetIndex;
                const dataIndex = elements[0].index;
                const label = event.chart.data.labels[dataIndex];
                const value = event.chart.data.datasets[datasetIndex].data[dataIndex];
                alert(`Detailed stats for ${label}: ${value}`);
            }
        }
    });

    return (
        <div className="container my-4">
            <h2 className="text-center">Signups Overview</h2>
            <div className="row">
                <div className="col-md-4">
                    <h3 className="text-center">Zeraki Analytics</h3>
                    <Bar data={createBarChartData(data.analytics)} options={createBarChartOptions('Zeraki Analytics Signups')} />
                </div>
                <div className="col-md-4">
                    <h3 className="text-center">Zeraki Finance</h3>
                    <Bar data={createBarChartData(data.finance)} options={createBarChartOptions('Zeraki Finance Signups')} />
                </div>
                <div className="col-md-4">
                    <h3 className="text-center">Zeraki Timetable</h3>
                    <Bar data={createBarChartData(data.timetable)} options={createBarChartOptions('Zeraki Timetable Signups')} />
                </div>
            </div>
        </div>
    );
};

export default SignupsOverview;
