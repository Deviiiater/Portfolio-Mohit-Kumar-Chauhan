import React from 'react';
import { X } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
    const tabs = [
        { name: 'home.jsx', id: 'home', color: 'text-yellow-400' },
        { name: 'about.ts', id: 'about', color: 'text-blue-400' },
        { name: 'skills.json', id: 'skills', color: 'text-green-400' },
        { name: 'projects.js', id: 'projects', color: 'text-orange-400' },
        { name: 'contact.css', id: 'contact', color: 'text-purple-400' },
    ];

    return (
        <div className="flex bg-editor-sidebar h-9 overflow-x-auto border-b border-editor-inactive scrollbar-hide">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id)}
                    className={`flex items-center px-3 py-2 text-sm min-w-fit border-r border-editor-inactive hover:bg-editor-bg focus:outline-none whitespace-nowrap ${activeSection === tab.id ? 'bg-editor-bg text-white border-t-2 border-t-blue-500' : 'text-gray-500 bg-editor-inactive'
                        }`}
                >
                    <span className={`mr-2 ${tab.color}`}>Wait...</span>
                    {/* Wait... I need to pass the icon or just use the color dot/icon logic again. 
              For now, I'll just use the name. actually let's fix the icon logic. 
              I'll just use a generic file icon or the same color logic.
          */}
                    <span className={`w-2 h-2 rounded-full mr-2 ${tab.color.replace('text-', 'bg-')}`}></span>
                    {tab.name}
                    <span className="ml-2 p-0.5 rounded-md hover:bg-gray-700 opacity-0 group-hover:opacity-100">
                        <X className="w-3 h-3" />
                    </span>
                </button>
            ))}
        </div>
    );
};

export default Navbar;
