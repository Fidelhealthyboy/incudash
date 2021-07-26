import {createSelector} from 'reselect';

export const getCurrentFanspeed = state => state.fanSpeedContext.current;
export const getfandSpeedHistory = state => state.fanSpeedContext.history;

export const getFanPlotingHistory = createSelector(
    getfandSpeedHistory,
    (history) => {

        return {
            labels: history.map(his=>his.time),
            datasets:[
                {
                    label:'Fan Speed',
                    data: history.map(his=>his.value), //D5A021
                    borderColor:'#6A5D7B',
                    backgroundColor:[
                        '#fff0'
                    ],
                    borderWidth: 4
                }
            ]
        };
    }
);