import React, {Component} from 'react';

class PaymentModalBody extends Component {

  constructor(props) {
    super(props);

    this.visibleStates = {
      contactForm: 'contact-form',
      cardPayment: 'card-payment'
    };

    this.contactForm = this.contactForm.bind(this);
    this.cardPaymentForm = this.cardPaymentForm.bind(this);
  }

  contactForm() {
    return (
      <div id="body-contact-form" className="fadeIn">
      <div className="from-fields">
        <div className="inputWrap">
          <label>Phone</label>
          <input className="input" type="tel" value="9835173042"></input>
        </div>
        <div className="inputWrap">
          <label>Email</label>
          <input className="input" type="email" value="lildicky@razorpay.com"></input>
        </div>
      </div>
      <div id="legend">Select payment method</div>
      <div id="payment-options">
        <div className="payment-option" id="po-card">
          Card
        </div>
        <div className="payment-option" id="po-netbanking">
          Netbanking
        </div>
        <div className="payment-option" id="po-wallet">
          Wallet
        </div>
      </div>
      </div>
    );
  }

  cardPaymentForm() {
    return (
      <div id="body-card-form">
        <div
          style={{animationDuration: '0.3s',
            animationTimingFunction: 'cubic-bezier(.06,.69,.18,1.01)'}}
            className="card-header fadeInDown">
          Card/EMI
        </div>
        <div style={{animationDuration: '1s'}} className="form-fields card-fields fadeIn">
          <div className="row">
            <div className="inputWrap left-input">
              <label>Card Number</label>
              <input className="input" type="tel" value="5222 2473 9201 1244"></input>
            </div>
            <div className="inputWrap right-input">
              <label>Expiry</label>
              <input className="input" type="tel" value="08/23"></input>
            </div>
          </div>
          <div className="row">
            <div className="inputWrap left-input">
              <label>Card Holder's Name</label>
              <input className="input" type="tel" value="Lil Dicky"></input>
            </div>
            <div className="inputWrap right-input">
              <label>CVV</label>
              <input className="input" type="password" value="333"></input>
            </div>
          </div>
        </div>
        <div
          style={{backgroundColor: this.props.color,
            animationDuration: '0.3s',
            animationTimingFunction: 'cubic-bezier(.06,.69,.18,1.01)'}}
            className="payButton fadeInUp">Pay&nbsp;&nbsp;₹{this.props.amount}</div>
      </div>
    );
  }

   render() {
    var body;

    switch(this.props.content) {
      case this.visibleStates.contactForm:
        body = this.contactForm();
      break;
      case this.visibleStates.cardPayment:
        body = this.cardPaymentForm();
      break;
      default:
        this.contactForm();
      break;
    }

    return (
      <div className="paymentModalBody">
        {body}
      </div>
    );
  }
}

export default PaymentModalBody;