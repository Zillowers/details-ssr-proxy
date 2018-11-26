import React from 'react';
import moment from 'moment';

const Other = ({data}) => (
	<div>
		<div className="detail-title">
        Other
    </div>
    <div className="body">
        <div className="details module-group">
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="body">
                        <span className="detail-module-title">Last sold: </span>
                        {moment(data.lastSold.soldDate).fromNow()}
                    </div>
                    <div className="body">
                        <span className="detail-module-title">Price/sqft: </span>
                        {data.lastSold.soldPrice.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
)

export default Other;