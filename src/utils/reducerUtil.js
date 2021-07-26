export const addReceivedData = (state, payload) =>{
    const { data } = payload;           
    const count = state.history.push({time: millisToMinutesAndSeconds(data.time), value: data.value});
    if(count >=50 )
        state.history = state.history.filter((x,i) => i !== 0);
    return {
        ...state,
        current: data,
        history: [
            ...state.history
        ]
    };
};

export const interpolate = (min, max, mid) => {
    return (1 - ((max-mid)/(max-min))).toFixed(2);
};

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000).toFixed(1);
    const hours = (minutes / 60).toFixed(1);
    const days = (hours / 24).toFixed(1);

    return days > 0 ? `${days}d`: `${hours}hrs` ;
};
   