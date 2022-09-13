import React, { useState } from "react";
import { Chart as Chartjs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from "react-chartjs-2";
Chartjs.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)
Chartjs.defaults.scale.grid.display = false;
//  Chartjs.defaults.scale.ticks..display = false;




const BarChar = () => {
    const [data, SetData] = useState({
        type: "scatter",
        data: {
            options: {
                legend: {
                    display: false
                 },
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            display: false,
                        },
                    },
                }
            },
            labels: ['JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"],
            datasets: [{
                display: false,
                label: 'My First dataset',
                backgroundColor: 'rgba(65,166,246,255)',
                borderColor: 'rgba(65,166,246,255)',
                data: [4, 3, 5, 2, 4, 3, 10, 7, 7, 9, 6, 15],
                tension: 0.6,

            },
            {
                display: false,
                label: 'My First dataset',
                backgroundColor: 'rgba(189, 195, 199, 1)',
                borderColor: 'rgba(189, 195, 199, 1)',
                data: [3, 4, 2, 5, 3, 4, 3, 10, 7, 9, 6, 15],
                tension: 0.6,

            }],
            
        },
        
    },


    )
    return (
        <div className="chartBox">
            <Line data={data.data} ></Line>

        </div>
    )
}

export default BarChar;