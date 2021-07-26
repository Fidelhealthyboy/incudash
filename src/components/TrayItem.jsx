import React from 'react';
import propTypes from 'prop-types';

const TrayItem = ({data}) => {
    return(
        <div className="col-lg-3 col-md-6">
            <div className="d-flex">
                <div className="wrapper">
                    <h3 className="mb-0 font-weight-semibold">{data.value}</h3>
                    <h5 className="mb-0 font-weight-medium text-primary">{data.unit}</h5>
                    <p className="mb-0 text-muted">{data.name}</p>
                </div>
            </div>
        </div>
    );
};

TrayItem.propTypes = {
    data: propTypes.object
};

export default TrayItem;