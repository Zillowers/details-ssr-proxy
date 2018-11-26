import React from 'react';
import { shallow } from 'enzyme';
import PopupCal from '../src/components/PopupCal.jsx';

describe('<PopupCal />', () => {
	const mock = {
		price: 10000,
		handleClick: (a) => {console.log(a)},
		isCal: true
	};
	const state = {
		initPrice: 1000,
		interestRate: 10,
		loanTerm: 30,
		loanTermWord: 'Fixed30Year',
		downPaymentPercent: 10,
		downPayment: '',
		resultPrice: '',
	};

	it('renders without crashing', () => {
		<PopupCal {...mock}/>
	});

  it('The calculator should calculate according to the set state', () => {
  	const wrapper = shallow(<PopupCal {...mock}/>);
  	wrapper.setState(state);
    wrapper.instance().componentDidMount();

    expect(wrapper.state('resultPrice')).toEqual(3600);
  });

});