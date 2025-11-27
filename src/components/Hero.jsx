import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
    const [text, setText] = useState('');
    const fullText = "const developer = {\n  name: 'Mohit Kumar Chauhan',\n  role: 'Full-Stack Developer',\n  passion: 'Building intelligent digital products',\n  status: 'CTO @ Indikraft'\n};";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-8 h-full flex flex-col justify-center">
            <div className="max-w-3xl w-full">
                <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-white">
                    <span className="text-editor-blue">Hello</span>, World!
                </h1>

                <div className="bg-editor-active p-4 md:p-6 rounded-lg shadow-xl border border-editor-inactive font-mono text-xs md:text-base overflow-x-auto">
                    <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <pre className="text-editor-text whitespace-pre-wrap">
                        <code dangerouslySetInnerHTML={{
                            __html: text.replace(/const|let|var/g, '<span class="text-editor-blue">$&</span>')
                                .replace(/'[^']*'/g, '<span class="text-editor-orange">$&</span>')
                                .replace(/:/g, '<span class="text-editor-text">$&</span>')
                                .replace(/{|}/g, '<span class="text-editor-yellow">$&</span>')
                        }} />
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-5 bg-editor-blue ml-1 align-middle"
                        />
                    </pre>
                </div>

                <div className="mt-8">
                    <button
                        onClick={() => setActiveSection('projects')}
                        className="bg-editor-blue text-white px-4 md:px-6 py-2 md:py-3 rounded hover:bg-blue-600 transition-colors font-bold text-sm md:text-base"
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => setActiveSection('contact')}
                        className="ml-4 border border-editor-blue text-editor-blue px-4 md:px-6 py-2 md:py-3 rounded hover:bg-editor-blue hover:text-white transition-colors font-bold text-sm md:text-base"
                    >
                        Contact Me
                    </button>
                </div>

                <div className="mt-8 flex space-x-6">
                    <a href="https://github.com/deviiiater" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohit-kumar-chauhan-967158111/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
