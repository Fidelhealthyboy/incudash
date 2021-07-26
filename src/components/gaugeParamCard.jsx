import React from 'react';
import propTypes from 'prop-types';
import GuageChart from 'react-gauge-chart';

const GuageParamCard = ({name, value, unit, history }) =>{
    return (
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
                <div className="card-body pb-0">
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title mb-0">{name}</h4>
                        <p className="font-weight-semibold mb-0">{unit}</p>
                    </div>
                    <h3 className="font-weight-medium mb-4">{value}</h3>
                </div>
                <GuageChart className='guage-background' {...history}/>
            </div>
        </div>
    );
};

GuageParamCard.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.number.isRequired,
    unit: propTypes.string.isRequired,
    history: propTypes.object
};

export default GuageParamCard;