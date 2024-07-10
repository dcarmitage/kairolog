const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
app.use(express.static('public'));
app.use(express.json());

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

app.post('/transform', async (req, res) => {
  try {
    const { textInput, transformPrompt } = req.body;
    const response = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [
          { role: 'user', content: `Transform this text: ${textInput}\n\nAccording to this prompt: ${transformPrompt}` }
        ]
      })
    });

    if (!response.ok) {
      throw new Error('Claude API request failed');
    }

    const data = await response.json();
    res.json({ transformedOutput: data.content[0].text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred during transformation' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});