import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Chart.css';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daily : 101.325, 
            monthly : 3039.767,
            solarDataDaily : {
                labels: [
                "12:00am",	"1:00am",	
                "2:00am",	"3:00am",	"4:00am",
                "5:00am",	"6:00am",
                "7:00am", "8:00am",	'9:00am',
                "10:00am",  "11:00am",  "12:00pm",	
                "1:00pm",	"2:00pm",	"3:00pm",	"4:00pm",	
                "5:00pm",	"6:00pm",	"7:00pm",	"8:00pm",	
                "9:00pm",	"10:00pm",	"11:00pm"
                ],
                datasets : [
                    {
                    label: 'Solar Radiation(Wh)',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(64,115,158, 0.7)',
                    borderColor: 'rgba(64,115,158, 1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(64,115,158, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(64,115,158, 1)',
                    pointHoverBorderColor: 'rgba(64,115,158, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: 
                    [
                        0,  0,  0,  0,  0,  0,	
                        51.5,	161.6,	459.1,	633.7,
                        653.1, 603.4,   726.6,  684.2,	
                        424.8,	150.4,  71.1, 0.7,    
                        0,	0,  0,  0,  0,  0
                    ]
                    }
                ]
            },
            loadDataDaily : {
                labels: [
                "12:00am",	"1:00am",	
                "2:00am",	"3:00am",	"4:00am",
                "5:00am",	"6:00am",
                "7:00am", "8:00am",	'9:00am',
                "10:00am",  "11:00am",  "12:00pm",	
                "1:00pm",	"2:00pm",	"3:00pm",	"4:00pm",	
                "5:00pm",	"6:00pm",	"7:00pm",	"8:00pm",	
                "9:00pm",	"10:00pm",	"11:00pm"
                ],
                datasets : [
                    {
                    label: 'Load(Wh)',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(64,115,158, 0.7)',
                    borderColor: 'rgba(64,115,158, 1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(64,115,158, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(64,115,158, 1)',
                    pointHoverBorderColor: 'rgba(64,115,158, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: 
                    [
                        266.6133333,	
                        186.9866667,
                        279.92,
                        319.2266667,
                        208.9866667,
                        372.32,
                        385.4933333,
                        281.7866667,
                        309.2266667,
                        370.6133333,
                        439.44,
                        403.3866667,
                        564.1333333,
                        536.6133333,
                        611.2266667,	
                        562.1866667,
                        550.2933333,
                        586.88,
                        520.4533333,
                        542.4533333,
                        442.48,
                        322.0533333,
                        277.52,
                        147.0933333
                    ]
                    }
                ]
            },
            netDataDaily : {
                labels: [
                "12:00am",	"1:00am",	
                "2:00am",	"3:00am",	"4:00am",
                "5:00am",	"6:00am",
                "7:00am", "8:00am",	'9:00am',
                "10:00am",  "11:00am",  "12:00pm",	
                "1:00pm",	"2:00pm",	"3:00pm",	"4:00pm",	
                "5:00pm",	"6:00pm",	"7:00pm",	"8:00pm",	
                "9:00pm",	"10:00pm",	"11:00pm"
                ],
                datasets : [
                    {
                    label: 'Net(Wh)',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(64,115,158, 0.7)',
                    borderColor: 'rgba(64,115,158, 1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(64,115,158, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(64,115,158, 1)',
                    pointHoverBorderColor: 'rgba(64,115,158, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: 
                    [
                        266.6133333,	
                        186.9866667,
                        279.92,
                        319.2266667,
                        208.9866667,
                        372.32,
                        333.9933,
                        230.286,
                        147.666,
                        -263.087,
                        -213.66,
                        -200.013,
                        -162.467,
                        -147.587,
                        -313.573,
                        411.7866,
                        479.1933,
                        586.18,
                        520.4533333,
                        542.4533333,
                        442.48,
                        322.0533333,
                        277.52,
                        147.0933333
                    ]
                    }
                ]
            },      
        }
    }

    static defaultProps = {
        displayTitle : true,
        displayLegend : true,
        legendPos : 'right'
    }

    render() { 
        return ( 
            <div className="chart">
            <h1>Daily Cost of Electricity</h1>
            <h3>The daily cost of electricity : ₹{this.state.daily}</h3>
            <Line
                data={this.state.solarDataDaily}
                options={{ 
                    title:{
                        display : this.props.displayTitle,
                        text : 'Solar Power Production',
                        fontSize : 25
                    },
                    legend:{
                        display : this.props.displayLegend,
                        position : this.props.legendPos
                    },
                 }}
            /><br/>
            <Line
                data={this.state.loadDataDaily}
                options={{ 
                    title:{
                        display : this.props.displayTitle,
                        text : 'Power Grid',
                        fontSize : 25
                    },
                    legend:{
                        display : this.props.displayLegend,
                        position : this.props.legendPos
                    },
                 }}
            /><br/>
            <Line
                data={this.state.netDataDaily}
                options={{ 
                    title:{
                        display : this.props.displayTitle,
                        text : 'Net power',
                        fontSize : 25
                    },
                    legend:{
                        display : this.props.displayLegend,
                        position : this.props.legendPos
                    },
                 }}
            /><br/><br/>
            <h3>To Calculate Monthly Cost of Electricity</h3>
            <Link to='/monthly'><Button color="danger">Continue</Button></Link>
            </div>
         );
    }
}
 
export default Chart;