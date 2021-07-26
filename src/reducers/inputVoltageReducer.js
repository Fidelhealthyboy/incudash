import { INPUTVOLTAGE_RECEIVED  } from '../actions/dashboardAction'; 
import {  addReceivedData } from '../utils/reducerUtil';


const initialState = {
    current: {
        name: 'Input Voltage',
        value: 0,
        unit: 'v'
    },
    history: []
};

export const inputVoltageContext = (state =initialState , action) => {
    const { type, payload} = action; 
    switch (type) {
        case INPUTVOLTAGE_RECEIVED: {
            return addReceivedData(state, payload);
        }

        default:
            return state;
    }
};