const express = require("express");
const path = require("path");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 3000;

const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const CLIENT_URL = process.env.CLIENT_URL;

app.use(express.json());

// 🔥 Serve React build
app.use(express.static(path.join(__dirname, "../client/dist")));

// 🔥 API ROUTES
app.post("/create-checkout-session", async (req, res) => {
    try {
        const cartItems = req.body;

        if (!Array.isArray(cartItems)) {
            return res.status(400).json({ error: "Invalid cart data" });
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: cartItems.map((item) => ({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.value.name,
                        images: [`${IMG_URL}${item.value.imageId}`],
                    },
                    unit_amount: item.value.price || item.value.defaultPrice,
                },
                quantity: item.quantity,
            })),
            success_url: `${CLIENT_URL}/goodfood/payment-success`,
            cancel_url: `${CLIENT_URL}/goodfood/payment-failed`,
        });

        res.json({ url: session.url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔥 React Router fallback (MUST be last)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
