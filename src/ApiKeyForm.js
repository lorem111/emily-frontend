import React, { useState } from 'react';
import './ApiKeyForm.css';

function ApiKeyForm() {
    const [openAIKey, setOpenAIKey] = useState('');
    const [elevenLabsKey, setElevenLabsKey] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Do something with the keys...
    };

    return (
        <form onSubmit={handleSubmit} className="api-key-form">
            <div className="form-group">
                <label>OpenAI API Key:</label>
                <input
                    type="password"
                    value={openAIKey}
                    onChange={event => setOpenAIKey(event.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label>Elevenlabs API Key:</label>
                <input
                    type="password"
                    value={elevenLabsKey}
                    onChange={event => setElevenLabsKey(event.target.value)}
                    className="form-input"
                />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default ApiKeyForm;
