import React from 'react';
import propTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const LineParamCard = ({name, value, unit, history }) =>{
    return (
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body pb-0" >
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title mb-0">{name}</h4>
                        <p className="font-weight-semibold mb-0">{unit}</p>
                    </div>
                    <h3 className="font-weight-medium mb-4">{value}</h3>
                </div>
                <Line data={history} options={{
                    legend:{
                        display:false
                    } ,
                    responsive: true,
                    scales:{
                        yAxes:[
                            {
                                ticks:{
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true,
                                    display:false
                                },
                                gridLines:{
                                    display: false
                                }
                            }
                        ],
                        xAxes:[
                            {
                                ticks:{
                                    display:false
                                },
                                gridLines:{
                                    display: false
                                }
                            }
                        ]
                    }
                }}/>
            </div>
        </div>
    );
};

LineParamCard.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.number.isRequired,
    unit: propTypes.string.isRequired,
    history: propTypes.object
};

export default LineParamCard;