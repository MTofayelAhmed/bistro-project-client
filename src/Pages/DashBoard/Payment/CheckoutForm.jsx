import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


const CheckoutForm = ({ price }) => {
  const [cardError, setCardError] = useState('');
  const stripe = useStripe()
  const elements = useElements()
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const{user}= useContext(AuthContext)
  useEffect(() => {
    if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }
}, [])







  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return

    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      setCardError(error.message)
      console.log('error', error)
    }
    else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
             address: {
          line1: '123 Street',
          city: 'City',
          state: 'State',
          postal_code: '12345',
          country: 'US', // Replace with the customer's country code
        },
          },
        },
      },
    );
    
    if (confirmError) {
      console.log(confirmError);
  }
  setProcessing(false)

  console.log('payment intent', paymentIntent)

  if (paymentIntent.status === 'succeeded') {
    setTransactionId(paymentIntent.id);
    // save payment information to the server
   

}


  }
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;