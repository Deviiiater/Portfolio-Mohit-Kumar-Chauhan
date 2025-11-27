import React from 'react';
import { Files, Github, Mail, User, Code, Settings, ChevronRight, ChevronDown } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = React.useState(true);

    const files = [
        { name: 'home.jsx', icon: <Code className="w-4 h-4 text-yellow-400" />, id: 'home' },
        { name: 'about.ts', icon: <User className="w-4 h-4 text-blue-400" />, id: 'about' },
        { name: 'skills.json', icon: <Settings className="w-4 h-4 text-green-400" />, id: 'skills' },
        { name: 'projects.js', icon: <Github className="w-4 h-4 text-orange-400" />, id: 'projects' },
        { name: 'contact.css', icon: <Mail className="w-4 h-4 text-purple-400" />, id: 'contact' },
    ];

    return (
        <div className="w-64 bg-editor-sidebar border-r border-editor-inactive flex flex-col h-full hidden md:flex">
            <div className="p-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Explorer</div>
            <div className="flex-1 overflow-y-auto">
                <div className="mb-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center w-full px-2 py-1 text-gray-300 hover:bg-editor-inactive focus:outline-none"
                    >
                        {isOpen ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
                        <span className="text-xs font-bold">PORTFOLIO</span>
                    </button>

                    {isOpen && (
                        <div className="mt-1">
                            {files.map((file) => (
                                <button
                                    key={file.id}
                                    onClick={() => setActiveSection(file.id)}
                                    className={`flex items-center w-full px-4 py-1 text-sm hover:bg-editor-inactive focus:outline-none ${activeSection === file.id ? 'bg-editor-inactive text-white' : 'text-gray-400'
                                        }`}
                                >
                                    <span className="mr-2">{file.icon}</span>
                                    {file.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
