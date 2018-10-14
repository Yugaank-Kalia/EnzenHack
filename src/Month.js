import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './Month.css';

class Month extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthly : 3039.767,
            solarDataMonthly : {
                labels: [
                'day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 
                'day 7', 'day 8', 'day 9', 'day 10', 'day 11','day 12', 'day 13', 
                'day 14', 'day 15', 'day 16', 'day 17', 'day 18', 'day 19', 'day 20', 
                'day 21', 'day 22', 'day 23', 'day 24', 'day 25', 'day 26', 'day 27', 
                'day 28', 'day 29', 'day 30', 'day 31', 'day 32', 'day 33', 'day 34', 
                'day 35', 'day 36', 'day 37', 'day 38', 'day 39', 'day 40', 'day 41', 
                'day 42', 'day 43', 'day 44', 'day 45', 'day 46', 'day 47', 'day 48', 
                'day 49', 'day 50', 'day 51', 'day 52', 'day 53', 'day 54', 'day 55', 
                'day 56', 'day 57', 'day 58', 'day 59', 'day 60', 'day 61'
            ],
                datasets : [
                    {
                    label: 'Net(Wh)',
                    fill: true,
                    lineTension:  0.5,
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
                        5007,
                        5608,
                        4450,
                        3640,
                        4052,
                        4039,
                        4433,
                        5377,
                        3664,
                        5533,
                        1639,
                        4646,
                        5862,
                        5975,
                        5895,
                        6119,
                        6207,
                        5052,
                        6132,
                        2215,
                        3620,
                        3782,
                        1957,
                        6639,
                        3476,
                        6445,
                        6393,
                        5314,
                        6439,
                        3876,
                        5382,
                        6744,
                        6607,
                        6763,
                        5626,
                        6989,
                        7175,
                        7225,
                        6557,
                        3469,
                        3383,
                        3888,
                        6703,
                        5321,
                        3733,
                        7533,
                        5856,
                        6851,
                        7564,
                        8072,
                        8140,
                        6033,
                        6326,
                        8821,
                        8577,
                        8157,
                        6176,
                        8382,
                        5420,
                        8845,
                        7443
                    ]
                    }
                ]
            },
            loadDataMonthly : {
                labels: [
                    'day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 
                    'day 7', 'day 8', 'day 9', 'day 10', 'day 11','day 12', 'day 13', 
                    'day 14', 'day 15', 'day 16', 'day 17', 'day 18', 'day 19', 'day 20', 
                    'day 21', 'day 22', 'day 23', 'day 24', 'day 25', 'day 26', 'day 27', 
                    'day 28', 'day 29', 'day 30', 'day 31', 'day 32', 'day 33', 'day 34', 
                    'day 35', 'day 36', 'day 37', 'day 38', 'day 39', 'day 40', 'day 41', 
                    'day 42', 'day 43', 'day 44', 'day 45', 'day 46', 'day 47', 'day 48', 
                    'day 49', 'day 50', 'day 51', 'day 52', 'day 53', 'day 54', 'day 55', 
                    'day 56', 'day 57', 'day 58', 'day 59', 'day 60', 'day 61'
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
                        16975,
                        17032,
                        16957,
                        17300,
                        17151,
                        17375,
                        17384,
                        17438,
                        17409,
                        17173,
                        17121,
                        17023,
                        16802,
                        16926,
                        16916,
                        16832,
                        17081,
                        17101,
                        17043,
                        17066,
                        17014,
                        16975,
                        16915,
                        16704,
                        16454,
                        16341,
                        16266,
                        16356,
                        16475,
                        16345,
                        16086,
                        16393,
                        16704,
                        16923,
                        16734,
                        16715,
                        16615,
                        16298,
                        16209,
                        16137,
                        16310,
                        16606,
                        16586,
                        16859,
                        16936,
                        16982,
                        17001,
                        17085,
                        17090,
                        16873,
                        16845,
                        17003,
                        17180,
                        17276,
                        17107,
                        17131,
                        17230,
                        17288,
                        17330,
                        17251,
                        17268
                    ]
                    }
                ]
            },
            netDataMonthly : {
                labels: [
                    'day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 
                    'day 7', 'day 8', 'day 9', 'day 10', 'day 11','day 12', 'day 13', 
                    'day 14', 'day 15', 'day 16', 'day 17', 'day 18', 'day 19', 'day 20', 
                    'day 21', 'day 22', 'day 23', 'day 24', 'day 25', 'day 26', 'day 27', 
                    'day 28', 'day 29', 'day 30', 'day 31', 'day 32', 'day 33', 'day 34', 
                    'day 35', 'day 36', 'day 37', 'day 38', 'day 39', 'day 40', 'day 41', 
                    'day 42', 'day 43', 'day 44', 'day 45', 'day 46', 'day 47', 'day 48', 
                    'day 49', 'day 50', 'day 51', 'day 52', 'day 53', 'day 54', 'day 55', 
                    'day 56', 'day 57', 'day 58', 'day 59', 'day 60', 'day 61'
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
                    data: [

                    11967.77333,
                    11424.16,
                    12506.53333,
                    13660.42667,
                    13098.56,
                    13336.41333,
                    12950.57333,
                    12060.65333,
                    13745.17333,
                    11639.90667,
                    15482.49333,
                    12377.25333,
                    10940.45333,
                    10950.97333,
                    11021.32,
                    10713.05333,
                    10874.01333,
                    12049.01333,
                    10911.46667,
                    14850.76,
                    13394.02667,
                    13192.56,
                    14957.72,
                    10064.94667,
                    12978.08,
                    9896.013334,
                    9873.08,
                    11041.89333,
                    10036.46667,
                    12468.69333,
                    10704.18667,
                    9649.44,
                    10097.42667,
                    10159.66667,
                    11108.13333,
                    9725.72,
                    9439.666666,
                    9073.026666,
                    9652.12,
                    12668.28,
                    12927.24,
                    12717.92,
                    9883.133334,
                    11537.98667,
                    13203.16,
                    9448.546666,
                    11145.06667,
                    10233.85333,
                    9525.866668,
                    8800.906666,
                    8704.8,
                    10969.61333,
                    10854.48,
                    8454.626668,
                    8529.826666,
                    8974.466666,
                    11054.4,
                    8906.266666,
                    11910.08,
                    8406.146666,
                    9825.16
                    
                        ]
                    }
                ]
            }            
        }
    }

    static defaultProps = {
        displayTitle : true,
        displayLegend : true,
        legendPos : 'right'
    }

    render() { 
        return ( 
            <div className="Month">
            <h1>Monthly Cost of Electricity</h1>
            <h3>The monthly cost of electricity : ₹{this.state.monthly}</h3>
            <Line
                data={this.state.solarDataMonthly}
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
                data={this.state.loadDataMonthly}
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
                data={this.state.netDataMonthly}
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
            </div>
         );
    }
}
 
export default Month;