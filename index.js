const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const api = axios.create({
  baseURL: 'https://thinkany.ai/api',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent':
      'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    Referer: 'https://thinkany.ai/'
  }
});

async function thinkany(content) {
  const newConversationData = {
    content,
    locale: 'en',
    mode: 'search',
    model: 'claude-3-haiku',
    source: 'all'
  };

  const { data } = await api.post(
    '/new-conversation',
    newConversationData
  );

  const chatData = {
    role: 'user',
    content: data.data.content,
    conv_uuid: data.data.uuid,
    mode: data.data.mode,
    is_new: true,
    model: data.data.llm_model
  };

  const chatResponse = await api.post('/chat', chatData);

  return chatResponse.data;
}

app.get('/ai', async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({
        status: false,
        message: 'Enter query'
      });
    }

    const response = await thinkany(q);

    res.json({
      status: true,
      creator: 'Kawser Mahbub',
      result: response
    });
  } catch (e) {
    res.status(500).json({
      status: false,
      error: e.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
