import React from 'react';
import propTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { Line } from 'react-chartjs-2';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselParamCard = ({histories}) => {
    return (
        <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body pb-0">
                    <Carousel showThumbs={false} showArrows={true} autoPlay={true} interval={5000}>
                        <Line data={histories[0]} options={{
                            legend:{
                                display:true
                            } ,
                            responsive: true,
                            scales:{
                                yAxes:[
                                    {
                                        ticks:{
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true,
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ],
                                xAxes:[
                                    {
                                        ticks:{
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ]
                            }
                        }}/>
                        <Line data={histories[1]} options={{
                            legend:{
                                display:true
                            } ,
                            responsive: true,
                            scales:{
                                yAxes:[
                                    {
                                        ticks:{
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true,
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ],
                                xAxes:[
                                    {
                                        ticks:{
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ]
                            }
                        }}/>
                        <Line data={histories[3]} options={{
                            legend:{
                                display:true
                            } ,
                            responsive: true,
                            scales:{
                                yAxes:[
                                    {
                                        ticks:{
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true,
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ],
                                xAxes:[
                                    {
                                        ticks:{
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ]
                            }
                        }}/>
                        <Line data={histories[2]} options={{
                            legend:{
                                display:true
                            } ,
                            responsive: true,
                            scales:{
                                yAxes:[
                                    {
                                        ticks:{
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true,
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ],
                                xAxes:[
                                    {
                                        ticks:{
                                            display:true
                                        },
                                        gridLines:{
                                            display: true
                                        }
                                    }
                                ]
                            }
                        }}/>
                    </Carousel>   
                </div>
            </div>
        </div>
    );
};

CarouselParamCard.propTypes = {
    histories: propTypes.array.isRequired
};

export default CarouselParamCard;
