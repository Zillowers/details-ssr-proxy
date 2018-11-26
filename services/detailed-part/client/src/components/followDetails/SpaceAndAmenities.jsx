import React from 'react';

const SpaceAndAmenities = ({data}) => (
	<div>
		<div className="detail-title">
            spaces and amenities
        </div>
        <div className="body">
            <div className="details module-group">
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="label">Size</div>
                        <div className="body">
                            <span className="detail-module-title">Unit count: </span>
                            {data.size}
                        </div>
                    </div>
                </div>
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="label">Amenities</div>
                        <div className="body">
                            {data.amenities}
                        </div>
                    </div>
                </div>
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="label">Spaces</div>
                        <div className="body">
                            <span className="detail-module-title">Baths: </span>
                            {data.spaces}
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
)

export default SpaceAndAmenities;