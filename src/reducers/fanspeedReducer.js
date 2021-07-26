import { FANSPEED_DATA_RECEIVED } from '../actions/dashboardAction'; 
import {  addReceivedData } from '../utils/reducerUtil';

const initialState = {
    current: {
        name: 'Fan Speed',
        value: 0,
        unit: 'm/s'
    },
    history: []
};

export const fanSpeedContext = (state =initialState , action) => {
    const { type, payload} = action; 
    switch (type) {
        case FANSPEED_DATA_RECEIVED: {
            return addReceivedData(state, payload);
        }

        default:
            return state;
    }
};