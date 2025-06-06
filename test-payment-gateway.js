const fetch = require("node-fetch");

const PAYMENT_GATEWAY_URL =
  "https://api.payment-gateway.abbirr.com/api/v1/telebirr/createorder";
const PAYMENT_GATEWAY_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInByb2plY3RJZCI6MTIsImlhdCI6MTc0OTAzODM5NH0.Iu3D6RMYtDxGffociUeDSFfqASi2YoYKp8v29YC8Ckw";

async function testPaymentGateway() {
  try {
    console.log("Testing payment gateway connection...");

    const requestBody = {
      title: "Test Payment",
      amount: "100.00",
      callback_info: "telebirr",
      redirect_url: "http://localhost:8080/thank-you",
      notify_url: "http://localhost:8080/api/payment-notify",
    };

    console.log("Request body:", JSON.stringify(requestBody, null, 2));

    const response = await fetch(PAYMENT_GATEWAY_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYMENT_GATEWAY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);

    const text = await response.text();
    console.log("Response body:", text);
  } catch (error) {
    console.error("Error:", error);
  }
}

testPaymentGateway();
