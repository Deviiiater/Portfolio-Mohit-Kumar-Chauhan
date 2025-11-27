import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { GitBranch, Check, Bell, Files, Settings } from 'lucide-react';

const Layout = ({ children, activeSection, setActiveSection }) => {
    return (
        <div className="flex h-screen bg-editor-bg text-editor-text overflow-hidden font-mono">
            {/* Activity Bar (Leftmost thin strip) */}
            <div className="w-12 bg-editor-sidebar border-r border-editor-inactive flex flex-col items-center py-4 hidden md:flex">
                <div className="mb-4 text-gray-400 hover:text-white cursor-pointer"><Files className="w-6 h-6" /></div>
                <div className="mb-4 text-gray-500 hover:text-white cursor-pointer"><GitBranch className="w-6 h-6" /></div>
                <div className="flex-1"></div>
                <div className="mb-4 text-gray-500 hover:text-white cursor-pointer"><Settings className="w-6 h-6" /></div>
            </div>

            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

            <div className="flex-1 flex flex-col min-w-0">
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

                <main className="flex-1 overflow-y-auto p-0 relative">
                    {/* Line numbers gutter could go here */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-editor-bg border-r border-editor-inactive text-right pr-2 pt-4 text-gray-600 select-none hidden md:block">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div key={i} className="leading-6 text-xs">{i + 1}</div>
                        ))}
                    </div>
                    <div className="md:pl-12 h-full">
                        {children}
                    </div>
                </main>

                {/* Status Bar */}
                <div className="h-6 bg-editor-blue text-white text-xs flex items-center px-4 justify-between select-none">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center"><GitBranch className="w-3 h-3 mr-1" /> main*</div>
                        <div className="flex items-center"><Check className="w-3 h-3 mr-1" /> 0 errors</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div>Ln 12, Col 45</div>
                        <div>UTF-8</div>
                        <div>JavaScript React</div>
                        <Bell className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Layout;
