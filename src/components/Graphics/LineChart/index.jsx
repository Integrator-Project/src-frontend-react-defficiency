import React from 'react';
import { Chart } from 'chart.js';

import { Container } from './styles'

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.months;
    this.myChart.data.datasets[0].data = this.props.data.vaccines;
    this.myChart.data.datasets[1].data = this.props.data.deaths;
    this.myChart.data.datasets[2].data = this.props.data.cases;
    this.myChart.data.datasets[3].data = this.props.data.active_cases;
    this.myChart.data.datasets[4].data = this.props.data.recovered_cases;

    this.myChart.update();
  }

  componentDidMount() {
    
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'line',
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
        labels: this.props.data.months,
        datasets: [{
          label: this.props.title,
          data: this.props.data.vaccines,
          fill: 'none',
          backgroundColor: this.props.color,
          pointRadius: 1,
          borderColor: this.props.color,
          borderWidth: 3,
          lineTension: 0
        },
        {
          label: 'Mortes',
          data: this.props.data.deaths,
          fill: 'none',
          backgroundColor: '#7d1024',
          pointRadius: 1,
          borderColor: '#7d1024',
          borderWidth: 3,
          lineTension: 0
        },
        {
          label: 'Casos',
          data: this.props.data.cases,
          fill: 'none',
          backgroundColor: '#9c8e13',
          pointRadius: 1,
          borderColor: '#9c8e13',
          borderWidth: 3,
          lineTension: 0
        },
        {
          label: 'Casos Ativos',
          data: this.props.data.active_cases,
          fill: 'none',
          backgroundColor: '#913082',
          pointRadius: 1,
          borderColor: '#913082',
          borderWidth: 3,
          lineTension: 0
        },
        {
          label: 'Casos Recuperados',
          data: this.props.data.recovered_cases,
          fill: 'none',
          backgroundColor: '#417a0b',
          pointRadius: 1,
          borderColor: '#417a0b',
          borderWidth: 3,
          lineTension: 0
        }
      ]
      }
    });
  }

  render() {
    return <Container>
      <canvas ref={this.canvasRef} />
    </Container>;
  }
}

export default LineChart;