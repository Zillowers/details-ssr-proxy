import React from 'react';
import { shallow, mount } from 'enzyme';
import Aside from '../src/components/Aside.jsx';
import Modal from '../src/components/Modal.jsx';

describe('<Aside />', () => {

	const state = {
		nameBool: true,
		phoneBool: true,
		mailBool: true,
		name: 'john',
		phone: '5557778888',
		mail: 'john@fakeid.com',
		starpercent: 10,
		starRate: 1,
		sendReqOk: true,
		sendReqOkData: {
			name: 'john',
			phone: '5557778888',
			mail: 'john@fakeid.com',
			timeStamp: 1234
		}
	}

	const mock = {
		data:{
			address: 'house of john'
		}
	}

	it('renders without crashing', () => {
		shallow(<Aside {...mock}/>);
	});

	it('should change the state-name- according to the form submit', () => {
		const onSubmit = jest.fn()
		const wrapper = mount(<Aside {...mock}/>);
		expect(wrapper.state().name).toEqual('');

		let form = wrapper.find('form');
		wrapper.setState(state);
		form.simulate('submit');

		expect(wrapper.state().name).toEqual('john');
	});

	it('should change the state-mail- according to the form submit', () => {
		const onSubmit = jest.fn()
		const wrapper = mount(<Aside {...mock}/>);
		expect(wrapper.state().name).toEqual('');

		let form = wrapper.find('form');
		wrapper.setState(state);
		form.simulate('submit');

		expect(wrapper.state().mail).toEqual('john@fakeid.com');
	});

	it('should render the modal according to the -sendReqOk-state boolean', () => {
		const onSubmit = jest.fn()
		const wrapper = mount(<Aside {...mock}/>);
		let form = wrapper.find('form');

		expect(wrapper.find(Modal)).toHaveLength(0);
		
		wrapper.setState(state);
		form.simulate('submit');

		expect(wrapper.find(Modal)).toHaveLength(1);
	})

})