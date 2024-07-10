# Kairolog: Memory Transformer

Kairolog is an open-source webapp that transforms memories from conversations or audio journals, using the Claude API. Paste transcripts or text and transform them into different styles or formats.

Created by the team at twitter.com/onspacebar

## Features

- Transform text inputs into various styles (e.g., haiku, Twitter threads)
- Simple web interface
- Powered by Claude API
- BYOK (Bring Your Own Key) for flexibility and security

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/dcarmitage/kairolog.git
   cd kairolog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`.

## BYOK (Bring Your Own Key)

Kairolog uses a BYOK model for API access:

1. Sign up for an Anthropic account and obtain an API key from [Anthropic's website](https://www.anthropic.com).
2. In the Kairolog interface, locate the "Anthropic API Settings" section.
3. Enter your API key in the provided field.
4. Click "Save API Key" to store the key in your browser's local storage.

Your API key is stored locally and is never sent to our servers. It's used only to make direct calls to the Anthropic API from your browser.

## Usage

1. Enter your text in the "Input" box.
2. Specify the desired transformation in the "Transform to" field.
3. Select an output format.
4. Click "Transform" to process the input.

## Security Note

Never share your API key or commit it to version control. The key is stored in your browser's local storage and is your responsibility to keep secure.

## License

This project is open-source and available under the MIT License.

## Contributing

Contributions to Kairolog are welcome. Please feel free to submit pull requests or open issues to improve the project.
