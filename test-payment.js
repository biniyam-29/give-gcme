const https = require('https');

const PAYMENT_GATEWAY_URL = "https://api.payment-gateway.abbirr.com/api/v1/telebirr/createorder";
const PAYMENT_GATEWAY_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInByb2plY3RJZCI6NiwiaWF0IjoxNzQ4NTE1NTM5fQ.XcDSSd_wokYe_ouTPfIM_8sRV-QEvUpQpcFINYlfcuY";

const requestBody = {
    "title": "Test Payment",
    "amount": "16",
    "callback_info": "telebirr",
    "redirect_url": "http://localhost:3002/notify",
    "notify_url": "http://localhost:3002/notify"
};

console.log('Making request to:', PAYMENT_GATEWAY_URL);
console.log('Request body:', JSON.stringify(requestBody, null, 2));

const options = {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${PAYMENT_GATEWAY_TOKEN}`,
        'Content-Type': 'application/json'
    }
};

const req = https.request(PAYMENT_GATEWAY_URL, options, (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers);

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Response:', data);
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

req.write(JSON.stringify(requestBody));
req.end(); 