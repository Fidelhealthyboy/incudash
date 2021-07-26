export  const TEMPERATURE_TOPIC = 'Sonic-Labs-Incubator-Temperature';
export const TEMP_DATA_RECEIVED = 'Temperature received';
export const TemperatureReceived = data =>({
    type: TEMP_DATA_RECEIVED,
    payload: { data }
});

export const TEMP_DATA_REFERENCE = 'Temperature received constant';
export const TemperatureReference = data =>({
    type: TEMP_DATA_REFERENCE,
    payload: { data }
});

export  const HUMIDITY_TOPIC = 'Sonic-Labs-Incubator-Humidity';
export const HUMIDITY_DATA_RECEIVED = 'Humidity received';
export const HumidityReceived = data =>({
    type: HUMIDITY_DATA_RECEIVED,
    payload: { data }
});

export const HUMIDITY_DATA_REFERENCE = 'Humidity received reference';
export const HumidityReference = data =>({
    type: HUMIDITY_DATA_REFERENCE,
    payload: { data }
});

export  const FAN_SPEED_TOPIC = 'Sonic-Labs-Incubator-Fanspeed';
export const FANSPEED_DATA_RECEIVED = 'Fan speed Receive d';
export const FanSpeedReceived = data =>({
    type: FANSPEED_DATA_RECEIVED,
    payload: { data }
});

export const INPUT_VOLTAGE_TOPIC = 'Sonic-Labs-Incubator-InputVoltage';
export const INPUTVOLTAGE_RECEIVED = 'Input voltage received';
export const InputVoltageReceived = data =>({
    type: INPUTVOLTAGE_RECEIVED,
    payload: { data }
});

export const OUTPUT_VOLTAGE_TOPIC = 'Sonic-Labs-Incubator-OutputVoltage';
export const OUTPUTVOLTAGE_RECEIVED = 'Output voltage received';
export const outputVoltageReceived = data =>({
    type: OUTPUTVOLTAGE_RECEIVED,
    payload: { data }
});

export const TEMPERATURE_RECIEVE_TOPIC = 'Sonic-Labs-Incubator-Temperature-Recieve';
export const HUMIDITY_RECIEVE_TOPIC = 'Sonic-Labs-Incubator-Humidity-Recieve';
export const P_RECIEVE_TOPIC = 'Sonic-Labs-Incubator-P-Recieve';
export const I_RECIEVE_TOPIC = 'Sonic-Labs-Incubator-I-Recieve';
export const D_RECIEVE_TOPIC = 'Sonic-Labs-Incubator-D-Recieve';