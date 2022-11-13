import Stripe from 'stripe';

export const stripe = new Stripe(String(process.env.STRYPE_SECRET_KEY), {
    apiVersion: '2022-08-01',
    appInfo: {
        name: 'Ignite Shop',
    }
});