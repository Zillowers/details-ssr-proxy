import React from 'react';

const InteriorFeatures = ({data}) => (
	<div>
		<div className="detail-title">
        interior features
    </div>
    <div className="body">
        <div className="details module-group">
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Bedsrooms</div>
                    <div className="body">
                        <span className="detail-module-title">Beds: </span>
                        {data.bedRoom}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Flooring</div>
                    <div className="body">
                        <span className="detail-module-title">Floor size: </span>
                        {data.flooring}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Bathrooms</div>
                    <div className="body">
                        <span className="detail-module-title">Baths: </span>
                        {data.bathRoom}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Other Interior Features</div>
                    <div className="body">
                        <span className="detail-module-title">Addition size: </span>
                        {data.other}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Heating and Cooling</div>
                    <div className="body">
                        <span className="detail-module-title">Heating: </span>
                        {data.heatingAndCooling}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Basement</div>
                    <div className="body">
                        {data.basement}
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
)

export default InteriorFeatures;