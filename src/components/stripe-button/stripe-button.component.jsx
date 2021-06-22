import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import StripeCheckout from 'react-stripe-checkout'

import { selectEmail } from '../../redux/user/user.selector'

import './stripe-button.styles.scss'

const StripeButton = ({price, email}) => {
    const priceForStripe = price*100
    const publishableKey = 'pk_test_4EXVKH1iaRWyyQS64eJ9IIDY005ySywqax'

    const onToken = (token) => {
        alert('Payment Successfull')
        console.log(token)
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Tropical Clothing Ltd.'
            billingAddress
            email= {email}
            image = 'https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹${price}`}
            amount = {priceForStripe}
            currency = 'INR'
            panelLabel = 'Pay Now'
            token = {onToken} //on payment completion
            stripeKey = {publishableKey}

        />
    )
}

const mapStateToProps = createStructuredSelector({
    email : selectEmail
})


export default connect(mapStateToProps)(StripeButton)