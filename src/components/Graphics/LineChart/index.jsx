import React from 'react';
import { Chart } from 'chart.js';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.date;
    this.myChart.data.datasets[0].data = this.props.data.total_vacination;
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'line',
      options: {
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'week'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        },
      },
      data: {
        labels: this.props.data.date,
        datasets: [{
          label: this.props.title,
          data: this.props.data.total_vacination,
          fill: 'none',
          backgroundColor: this.props.color,
          pointRadius: 1,
          borderColor: this.props.color,
          borderWidth: 1,
          lineTension: 0
        }]
      }
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default LineChart;