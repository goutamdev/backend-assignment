const express = require('express');
const path = require('path');
const app = express();
const messageRoutes = require('./routes/messageRoutes');

app.use(express.json());
app.use('/api', messageRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});