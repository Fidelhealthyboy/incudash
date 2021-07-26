import React from 'react';
import TrayItem from './TrayItem';
import propTypes from 'prop-types';

const TrayDisplay =  ({ currentTemperature, currentHumidity, currentFanSpeed, currentInputVoltage, currentOutputVoltage }) => {
    return(
        <div className="row">
            <div className="col-md-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <TrayItem data={currentTemperature}/>
                            <TrayItem data={currentHumidity}/>
                            <TrayItem data={currentFanSpeed}/>
                            

                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex">
                                    <div className="wrapper">
                                        <h3 className="mb-0 font-weight-semibold">{currentInputVoltage.value} | {currentOutputVoltage.value}</h3>
                                        <h5 className="mb-0 font-weight-medium text-primary">{currentInputVoltage.unit} | {currentOutputVoltage.unit}</h5>
                                        <p className="mb-0 text-muted">Input/Output Voltage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

TrayDisplay.propTypes = {
    currentHumidity: propTypes.object.isRequired,
    currentTemperature: propTypes.object.isRequired,
    currentFanSpeed: propTypes.object.isRequired,
    currentInputVoltage: propTypes.object.isRequired,
    currentOutputVoltage: propTypes.object.isRequired
};

export default TrayDisplay;