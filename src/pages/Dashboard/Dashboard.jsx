import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import LineParamCard from '../../components/LineParamCard';
import GuageParamCard from '../../components/gaugeParamCard';
import CarouselParamCard from '../../components/CarouselParamCard';
import { connect } from 'react-redux';
import { getCurrentTemperature, getTemperaturePlotingHistory } from '../../selectors/temperatureSelector';
import { getCurrentFanspeed, getFanPlotingHistory } from '../../selectors/fanSpeedSelector';
import { getCurrentHumidity, getHumidityPlotingHistory } from '../../selectors/humiditySelector';
import { getCurrentInputVoltage, getInputVoltagePlotingHistory } from '../../selectors/inputVoltageSelector';
import { getCurrentOutputVoltage, getOutputVoltagePlotingHistory } from '../../selectors/outputVoltageSelector';
import { connectToMachine } from '../../thunks/dashboardThunk';
import './dashboard.css';

const Dashboard = ({
    currentTemperature, historyTemperature, currentHumidity, historyHumidity,
    currentFanSpeed, fanspeedHistory, currentInputVoltage, inputVoltageHistory,
    currentOutputVoltage, outputVoltageHistory, machineConnectivity
}) => {
    useEffect(()=>{
        machineConnectivity();
    },[]);

    const getHistories = ()=>{

        const combined = {
            labels: historyTemperature.labels,
            datasets:[]
        };
        combined.datasets=[historyHumidity.datasets[0], fanspeedHistory.datasets[0], historyTemperature.datasets[0]].map(d=>{
            return {
                ...d,
                borderColor:d.borderColor,
                backgroundColor:['#fff0'],
            };
        });
        return [combined, historyTemperature, fanspeedHistory, historyHumidity];
    };

    return (
        <div className='dash-container'>
            <div className='row'>
                <LineParamCard {...currentTemperature} history={historyTemperature}/>
                <LineParamCard {...currentHumidity} history={historyHumidity}/>
                <LineParamCard {...currentFanSpeed} history={fanspeedHistory}/>
            </div>
            <div className='row'>
                <GuageParamCard {...currentInputVoltage} history={inputVoltageHistory}/>
                <GuageParamCard {...currentOutputVoltage} history={outputVoltageHistory}/>
            </div>
            <div className='row'>
                <CarouselParamCard histories={getHistories()}/>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    currentTemperature: propTypes.object,
    historyTemperature: propTypes.object,
    currentHumidity: propTypes.object,
    historyHumidity: propTypes.object,
    currentFanSpeed: propTypes.object,
    fanspeedHistory: propTypes.object,
    currentInputVoltage: propTypes.object,
    inputVoltageHistory: propTypes.object,
    currentOutputVoltage: propTypes.object,
    outputVoltageHistory: propTypes.object,
    machineConnectivity: propTypes.func
};

const mapStateToProps = state =>({
    currentTemperature: getCurrentTemperature(state),
    historyTemperature: getTemperaturePlotingHistory(state),
    currentHumidity : getCurrentHumidity(state),
    historyHumidity: getHumidityPlotingHistory(state),
    currentFanSpeed: getCurrentFanspeed(state),
    fanspeedHistory: getFanPlotingHistory(state),
    currentInputVoltage: getCurrentInputVoltage(state),
    inputVoltageHistory: getInputVoltagePlotingHistory(state),
    currentOutputVoltage: getCurrentOutputVoltage(state),
    outputVoltageHistory: getOutputVoltagePlotingHistory(state)
});

const mapDispatchToProps = dispatch =>({
    machineConnectivity: ()=> dispatch(connectToMachine())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);