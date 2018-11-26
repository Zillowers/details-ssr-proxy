import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FollowingContents from '../src/components/FollowingContents';
import FollowFact from '../src/components/FollowFact';

describe('<FollowingContents />', () => {
	const mock = {
		data:{
			details:{
				factsAndFeatures: 1
			}
		}
	}

  it('renders without crashing', () => {
    shallow(<FollowingContents {...mock}/>)
  });

  it('should render <FollowFact />', () => {
  	const wrapper = shallow(<FollowingContents {...mock}/>);
    expect(wrapper.find(FollowFact)).to.have.lengthOf(1);
  });

  it('should render two divs', () => {
  	const wrapper = shallow(<FollowingContents {...mock}/>);
    expect(wrapper.find('div')).to.have.lengthOf(2);
  });
});