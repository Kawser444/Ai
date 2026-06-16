const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/projects', async (req, res) => {
    try {
        const projects = [
            {
                id: 1,
                title: '🧠 Machine Learning',
                description: 'Advanced ML models and algorithms',
                status: 'active'
            },
            {
                id: 2,
                title: '🔮 Deep Learning',
                description: 'Neural networks and AI solutions',
                status: 'active'
            },
            {
                id: 3,
                title: '💡 Innovation',
                description: 'Cutting-edge AI technologies',
                status: 'in-progress'
            }
        ];
        res.json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/api/external-data', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json({ 
            success: true, 
            data: response.data,
            message: 'External data fetched successfully'
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

app.post('/api/submit', (req, res) => {
    try {
        const data = req.body;
        res.json({ 
            success: true, 
            message: 'Data received successfully',
            received: data
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'AI Portfolio Server is running',
        timestamp: new Date().toISOString()
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({ 
        success: false, 
        error: err.message 
    });
});

app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        error: 'Route not found',
        path: req.path
    });
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});

process.on('SIGINT', () => {
    process.exit(0);
});
