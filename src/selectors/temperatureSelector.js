/* eslint-disable no-unused-vars */
import {createSelector} from 'reselect';

export const getCurrentTemperature = state => state.temperatureContext.current;
export const getTemperatureHistory = state => state.temperatureContext.history;
export const getRefrenceTemperature = state => state.temperatureContext.reference;

export const getTemperaturePlotingHistory = createSelector(
    getTemperatureHistory,
    getRefrenceTemperature,
    (history, reference) => {

        return {
            labels: history.map(his=>his.time),
            datasets:[
                {
                    label:'Temperature',
                    data: history.map(his=>his.value),
                    borderColor: '#7880B5',
                    backgroundColor:[
                        '#fff0'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'Reference',
                    data: history.map(his=>reference),
                    borderColor: '#D5A021',
                    backgroundColor:[
                        '#fff0'
                    ],
                    borderWidth: 4,
                    pointRadius:0
                }
            ]
        };
    }
);