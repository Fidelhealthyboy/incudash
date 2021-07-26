import {createSelector} from 'reselect';
import { interpolate } from '../utils/reducerUtil';

export const getCurrentInputVoltage = state => state.inputVoltageContext.current;
export const getInputVoltageHistory = state => state.inputVoltageContext.history;

export const getInputVoltagePlotingHistory = createSelector(
    getCurrentInputVoltage,
    current => {
        return {
            animate:true,
            nrOfLevels:15,
            percent:Number(interpolate(0, 300, current.value)),//to be calculated
            needleColor:'#F49D37',
        };
    }
);