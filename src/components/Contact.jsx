import React, { useState } from 'react';

const Contact = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Last login: ' + new Date().toUTCString() + ' on ttys000' },
        { type: 'output', content: 'Type "help" for a list of commands.' },
        { type: 'output', content: <span>Connect: <a href="https://www.linkedin.com/in/mohit-kumar-chauhan-967158111/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a> | <a href="https://github.com/deviiiater" target="_blank" className="text-blue-400 hover:underline">GitHub</a></span> }
    ]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', content: cmd }];

            let response = '';
            switch (cmd) {
                case 'help':
                    response = 'Available commands: email, linkedin, github, clear';
                    break;
                case 'email':
                    response = 'Opening mail client... (mailto:user@example.com)';
                    window.location.href = 'mailto:user@example.com';
                    break;
                case 'linkedin':
                    response = 'Opening LinkedIn...';
                    window.open('https://www.linkedin.com/in/mohit-kumar-chauhan-967158111/', '_blank');
                    break;
                case 'github':
                    response = 'Opening GitHub...';
                    window.open('https://github.com/deviiiater', '_blank');
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                default:
                    response = `command not found: ${cmd}`;
            }

            if (response) {
                newHistory.push({ type: 'output', content: response });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div className="p-4 md:p-8 h-full flex flex-col font-mono text-sm md:text-base">
            <div className="flex-1 overflow-y-auto mb-4">
                {history.map((line, i) => (
                    <div key={i} className="mb-1">
                        {line.type === 'input' ? (
                            <div className="flex">
                                <span className="text-green-400 mr-2">➜</span>
                                <span className="text-blue-400 mr-2">~</span>
                                <span className="text-editor-text">{line.content}</span>
                            </div>
                        ) : (
                            <div className="text-gray-400">{line.content}</div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-editor-text flex-1 focus:ring-0"
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Contact;
