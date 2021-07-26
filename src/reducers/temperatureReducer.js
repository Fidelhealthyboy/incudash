import { TEMP_DATA_RECEIVED, TEMP_DATA_REFERENCE } from '../actions/dashboardAction';
import { addReceivedData } from '../utils/reducerUtil';


const initialState = {
    reference:37,
    current: {
        name: 'Temperature',
        value: 0,
        unit: '°C'
    },
    history: []
};

export const temperatureContext = (state =initialState , action) => {
    const { type, payload} = action; 
    switch (type) {
        case TEMP_DATA_RECEIVED: {
            return addReceivedData(state, payload);
        }

        case TEMP_DATA_REFERENCE: {
            const { data } = payload;   
            state.reference = data;
            return {
                ...state
            };
        }

        default:
            return state;
    }
};