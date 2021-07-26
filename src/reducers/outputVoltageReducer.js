
import { OUTPUTVOLTAGE_RECEIVED  } from '../actions/dashboardAction'; 
import {  addReceivedData } from '../utils/reducerUtil';


const initialState = {
    current: {
        name: 'Input Voltage',
        value: 0,
        unit: 'v'
    },
    history: []
};

export const outputoltageContext = (state =initialState , action) => {
    const { type, payload} = action; 
    switch (type) {
        case OUTPUTVOLTAGE_RECEIVED: {
            return addReceivedData(state, payload);
        }

        default:
            return state;
    }
};