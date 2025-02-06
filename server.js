const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000', // Frontend URL
        methods: ['GET', 'POST'],
    },
});

const chatBotRoutes = require('./routes/chatbotRoutes')(io);

app.use(cors()); // Add this line to enable CORS
app.use(express.json()); // Parse JSON body
app.use('/api/chat', chatBotRoutes);

const PORT = 5000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));

