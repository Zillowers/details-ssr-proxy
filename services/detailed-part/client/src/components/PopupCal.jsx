import React from 'react';

class PopupCal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			initPrice: this.props.price,
			interestRate: 4.619,
			loanTerm: 30,
			loanTermWord: 'Fixed30Year',
			downPaymentPercent: 10,
			downPayment: '',
			resultPrice: '',
		}

		this.onChangeRouter = this.onChangeRouter.bind(this);
	}

	componentDidMount(){
		this.setState(
			{downPayment: this.state.initPrice * 0.01 * this.state.downPaymentPercent},
			() => this.paymentCalculator()
		)
	}

	changeDownpaymentPercent(amount){
		this.setState(
			{downPaymentPercent: (amount / this.state.initPrice ) * 100 },
			() => this.paymentCalculator()
		);
	}

	changeDownpayment(percent){
		this.setState(
			{downPayment: this.state.initPrice * (percent / 100)}, 
			() => this.paymentCalculator()
		)
	}

	changeLoanTerm(){
		if(this.state.loanTermWord === 'Fixed30Year') this.setState({loanTerm: 30}, () => this.paymentCalculator());
		else if(this.state.loanTermWord === 'Fixed15Year') this.setState({loanTerm: 15}, () => this.paymentCalculator());
		else if(this.state.loanTermWord === 'ARM5') this.setState({loanTerm: 27}, () => this.paymentCalculator());
	}

	onChangeRouter(e){
		let value = e.target.value;
		let name = e.target.name;
		let toNum = Number(value.replace(/,/g, ''));

		if(name === 'homePrice') this.setState({ initPrice: toNum }, () => this.paymentCalculator());
		if(name === 'rate') this.setState({ interestRate: value }, () => this.paymentCalculator());
		if(name === 'downPayment') this.setState({ downPayment: toNum }, () => this.changeDownpaymentPercent(toNum));	
		if(name === 'downPaymentPercent') this.setState({ downPaymentPercent: value }, () => this.changeDownpayment(value));
		if(name === 'loanTerm') this.setState({ loanTermWord: value }, () => this.changeLoanTerm());
		
	}

	paymentCalculator(){
		let price = this.state.initPrice;
		let rate = this.state.interestRate;
		let years = this.state.loanTerm;
		let downPayment = this.state.downPayment;

		let result = (price - downPayment) * (1 + (0.01 * rate * years));

		this.setState({
			resultPrice: result
		})
	}

	render(){
		return (
			<div>
		    <div className="estimate">${Math.floor((this.state.resultPrice / (12 * this.state.loanTerm))).toLocaleString()}/mo</div>
		    <div className="launch">
		        <span className="launch-btn" onClick={this.props.handleClick}></span>
		        <i className="fas fa-calculator"></i>
		        <span className="arrow"></span>
		        {
		        	this.props.isCal ? 
			        <div id="popupCal" className="popup-cal">
			            <div className="cal-title">
			                Estimated Monthly Payment
			            </div>
			            <div className="cal-body">
			                <div className="banner">
			                    <div className="banner-text">
			                        Your payment:
			                        <b>
						                	<span className="cal-payment"> ${Math.floor((this.state.resultPrice / (12 * this.state.loanTerm))).toLocaleString()}</span>/mo
						                </b>
			                    </div>
			                    <div className="cal-btn">
			                        <a href="#">Get pre-qualified</a>
			                    </div>
			                </div>
			                <div className="sub-text">
			                    Estimated taxes & insurance of ${Math.floor(this.state.initPrice * 0.0034).toLocaleString()} are not included.
			                </div>
			            </div>
			            <div className="cal-form">
			                <div className="inner-cal-form">
			                    <div className="acol">
			                        <div className="form-field">
			                            <label forhtml="homePrice">Home Price</label>
			                            <div className="cal-each-input">
			                                <div className="text-left">$ </div>
			                                <input className="left-type" type="text" name="homePrice" value={this.state.initPrice.toLocaleString()} onChange={this.onChangeRouter} />
			                            </div>
			                        </div>
			                    </div>
			                    <div className="bcol">
			                        <div className="form-field split">
			                            <label forhtml="homePrice">Down payment</label>
			                            <div className="cal-each-input">
			                                <div className="text-left">$</div>
			                                <input className="left-type" type="text" name="downPayment" value={this.state.downPayment.toLocaleString()} onChange={this.onChangeRouter} />
			                            </div>
			                            <div className="cal-each-input">
			                                <div className="text-right">%</div>
			                                <input className="right-type" type="text" name="downPaymentPercent" value={this.state.downPaymentPercent} onChange={this.onChangeRouter} />
			                            </div>
			                        </div>
			                    </div>
			                    <div className="acol">
			                        <div className="form-field">
			                            <label forhtml="homePrice">Loan term</label>
			                            <div className="cal-each-input">
			                                <div className="text-right triangle"></div>
			                                <select className="right-type" name="loanTerm" value={this.state.loanTermWord} onChange={this.onChangeRouter}>
			                                    <option value="Fixed30Year">30-year fixed</option>
			                                    <option value="Fixed15Year">15-year fixed</option>
			                                    <option value="ARM5">5/1 ARM</option>
			                                </select>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="bcol">
			                        <div className="form-field">
			                            <label forhtml="homePrice">Interest rate</label>
			                            <div className="cal-each-input">
			                                <div className="text-right">%</div>
			                                <input className="right-type" type="text" name="rate" value={this.state.interestRate} onChange={this.onChangeRouter} />
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="advanced">Advanced</div>
			            </div>
			        </div> : ''
		        }
		    </div>
		</div>
		)
	}
}

export default PopupCal;
module.exports =  PopupCal;