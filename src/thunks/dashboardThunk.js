/* eslint-disable no-undef */
/* eslint-disable no-console */

import{ 
    TEMPERATURE_TOPIC, TemperatureReceived,
    HUMIDITY_TOPIC, HumidityReceived,
    FAN_SPEED_TOPIC, FanSpeedReceived,
    INPUT_VOLTAGE_TOPIC, InputVoltageReceived,
    OUTPUT_VOLTAGE_TOPIC, outputVoltageReceived,
    TEMPERATURE_RECIEVE_TOPIC, TemperatureReference,
    HUMIDITY_RECIEVE_TOPIC, HumidityReference,
    P_RECIEVE_TOPIC, I_RECIEVE_TOPIC, D_RECIEVE_TOPIC
} from '../actions/dashboardAction';
import { store } from 'react-notifications-component';
let client = null;
export const connectToMachine = () => async dispatch => {
    try {
        connectToMqttBroker(dispatch);
    } catch (err) {
        console.log(err);
    }
};

export const applyChanges = (temp, hum, p, i, d) => dispatch => {
    try {
        const message = new Paho.MQTT.Message(`${temp}`);
        message.destinationName = TEMPERATURE_RECIEVE_TOPIC;
        client.send(message);

        const message2 = new Paho.MQTT.Message(`${hum}`);
        message2.destinationName = HUMIDITY_RECIEVE_TOPIC;
        client.send(message2);

        const message3 = new Paho.MQTT.Message(`${p}`);
        message3.destinationName = P_RECIEVE_TOPIC;
        client.send(message3);

        const message4 = new Paho.MQTT.Message(`${i}`);
        message4.destinationName = I_RECIEVE_TOPIC;
        client.send(message4);

        const message5 = new Paho.MQTT.Message(`${d}`);
        message5.destinationName = D_RECIEVE_TOPIC;
        client.send(message5);

        dispatch(TemperatureReference(temp));
        dispatch(HumidityReference(hum));
    } catch (error) {
        console.log(error);
    }
};

// connection helper
const connectToMqttBroker = dispatch => {
    try {
        client = new Paho.MQTT.Client('broker.mqttdashboard.com', Number(8000), '/mqtt','wss//' ,'');

        client.onConnectionLost =  responseObject => {
            console.log('Connection Lost: ' + responseObject.errorMessage);
            store.addNotification({
                title: '',
                message: 'Connection Lost',
                type: 'danger',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 3000,
                    onScreen: true,
                },
            });
            setTimeout(() => {
                console.log('reconnecting...');
                store.addNotification({
                    title: '',
                    message: 'Reconnecting...',
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],
                    dismiss: {
                        duration: 3000,
                        onScreen: true,
                    },
                });
                connectToMqttBroker(dispatch);
            }, 5000);
        };

        client.onMessageArrived =  message => {
            const data = JSON.parse(message.payloadString);
            switch (message.destinationName) {
                case TEMPERATURE_TOPIC:
                    return dispatch(TemperatureReceived(data));
                case HUMIDITY_TOPIC:
                    return dispatch(HumidityReceived(data));
                case FAN_SPEED_TOPIC:
                    return dispatch(FanSpeedReceived(data));
                case INPUT_VOLTAGE_TOPIC:
                    return dispatch(InputVoltageReceived(data));
                case OUTPUT_VOLTAGE_TOPIC:
                    return dispatch(outputVoltageReceived(data));
                default:
                    break;
            }
        };

        client.connect({
            onSuccess: onConnect
        });

    } catch (error) {
        store.addNotification({
            title: '',
            message: 'Unable to connect. Please refresh',
            type: 'danger',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
                duration: 3000,
                onScreen: true,
            },
        });
    }

    function onConnect(){
        console.log('connected!!!');
        client.subscribe(TEMPERATURE_TOPIC);
        client.subscribe(HUMIDITY_TOPIC);
        client.subscribe(FAN_SPEED_TOPIC);
        client.subscribe(INPUT_VOLTAGE_TOPIC);
        client.subscribe(OUTPUT_VOLTAGE_TOPIC);

        try {
            store.addNotification({
                title: '',
                message: 'Connected to server successfully',
                type: 'success',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 3000,
                    onScreen: true,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
};