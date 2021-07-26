import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { temperatureContext } from './reducers/temperatureReducer';
import { fanSpeedContext } from './reducers/fanspeedReducer';
import { humidityContext } from './reducers/humidityReducer';
import { inputVoltageContext } from './reducers/inputVoltageReducer';
import { outputoltageContext } from './reducers/outputVoltageReducer';

const reducers = {
    temperatureContext,
    fanSpeedContext,
    humidityContext,
    inputVoltageContext, 
    outputoltageContext
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);