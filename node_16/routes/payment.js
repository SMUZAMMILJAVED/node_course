const express = require('express')
const Stripe = require("stripe");
const path = require('path')
const router = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
router.get('/', (req, res) => { 
    res.sendFile(path.join(process.cwd(), 'views', 'form.html')) 
}

)
router.post('/submit', async (req, res) => {
       const { amount } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of the product you want to sell
         price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'My Product'
                    },
                    unit_amount: Number(amount) * 100
                },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:4000/payment/success`,
   cancel_url: 'http://localhost:4000/payment/cancel'
   
  });

  res.redirect(303, session.url);
}

)
router.get('/success', (req, res) => {
    res.send('Payment Successful!');
});

router.get('/cancel', (req, res) => {
    res.send('Payment Cancelled!');
});
module.exports = router