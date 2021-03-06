import React from 'react';
import { Chart } from 'chart.js';

import { Container } from './styles'

class DoughnutChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = ['População Mundial não vacinada', 'Vacinas aplicadas no mundo'];
      this.myChart.data.datasets[0].data = this.props.data;
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'doughnut',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
                position: 'bottom'
            },
          }
        },
        data: {
          labels: ['População Mundial não vacinada', 'Vacinas aplicadas no mundo'],
          datasets: [{
            data: this.props.data,
            backgroundColor: ['#a8e0ff', '#BBB6DF']
          },
        ]
        }
      });
    }
  
    render() {
      return <Container>
        <canvas ref={this.chartRef} />
      </Container>;
    }
}

export default DoughnutChart;