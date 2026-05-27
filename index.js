const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello from StackPilot Test App!',
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
app.get('/ci-cd', (req, res)=>{
  res.json({message: "After fixing container information from jenkins again with proper build checking if mongo is getting existed or not and also pulled changes with gokul webhook"});
})
app.get('/gokul', (req, res)=>{
  res.json({message: "success"});
});
app.listen(PORT, () => {
  console.log(`Test app listening on port ${PORT}`);
});
