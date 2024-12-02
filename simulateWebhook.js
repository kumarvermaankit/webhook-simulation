const axios = require('axios');

const webhookUrl = 'http://localhost:5000/webhooks/webhook-event';
const sampleEvent = {
  eventType: 'Shipping',  // Example event type
  data: {
    orderId: '12345',
    customerName: 'AKV',
    amount: 250.00,
    status: 'Pending',
  },
  source: "https://dummy2.co/webhook"
};

const simulateWebhook = async () => {
  try {
    const response = await axios.post(webhookUrl, sampleEvent);
    console.log('Webhook sent successfully:', response.data);
  } catch (error) {
    console.log(error)
    console.error('Error sending webhook:', error.response ? error.response.data : error.message);
  }
};

simulateWebhook();
