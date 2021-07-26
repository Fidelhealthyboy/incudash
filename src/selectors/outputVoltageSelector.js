import {createSelector} from 'reselect';
import { interpolate } from '../utils/reducerUtil';

export const getCurrentOutputVoltage = state => state.outputoltageContext.current;
export const getOutputVoltageHistory = state => state.outputoltageContext.history;

export const getOutputVoltagePlotingHistory = createSelector(
    getCurrentOutputVoltage,
    current => {
        return {
            animate:true,
            nrOfLevels:15,
            percent: Number(interpolate(0, 300, current.value)),//to be calculated
            needleColor:'#E9D2F4',
        };
    }
);