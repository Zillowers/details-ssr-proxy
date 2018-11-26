import React from 'react';
import InteriorFeatures from './followDetails/InteriorFeatures.jsx';
import SpaceAndAmenities from './followDetails/SpaceAndAmenities.jsx';
import Construction from './followDetails/Construction.jsx';
import ExteriorFeatures from './followDetails/ExteriorFeatures.jsx';
import Parking from './followDetails/Parking.jsx';
import Other from './followDetails/Other.jsx';
import ActivityOnZillow from './followDetails/ActivityOnZillow.jsx';


const FollowDetails = ({details}) => (
		<div>
			<div className="follow-details">
	        <div className="details">
	        	<InteriorFeatures data = {details.interiorFeatures}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<SpaceAndAmenities data = {details.spacesAndMenities}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Construction data = {details.construction}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<ExteriorFeatures data = {details.exteriorFeatures}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Parking data = {details.parking}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Other data = {details.other}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<ActivityOnZillow data = {details.activityOnZillow}/>
	        </div>
	    </div>
    </div>
  )
export default FollowDetails;