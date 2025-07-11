import Stripe from 'stripe';

if (!process.env.SECRET_KEY) {
    throw new Error('SECRET_KEY environment variable is not defined');
}

export const stripe = new Stripe(process.env.SECRET_KEY, {
    apiVersion:'2025-06-30.basil',
    appInfo:{
        name: 'Ignite Shop'
    }
})