const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Simulate an asynchronous operation that might throw an error
      if (Math.random() < 0.5) {
        throw new Error('Something went wrong!');
      }
      res.send('Hello from Express!');
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));