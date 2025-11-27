
import React from 'react';
import { Star, GitBranch, Circle } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            name: 'cardiac-arrest-prediction',
            description: `Predicts sudden cardiac arrest risk using real-time electrolyte data & MIMIC - IV dataset.

    Contribution:
• Cleaned & processed medical dataset
• Performed feature engineering & trend analysis
• Trained ML models for risk prediction
• Built a real - time dashboard for live monitoring

Outcome: Functional prototype for early intervention & health trend visualization.`,
            language: 'Python (Scikit-learn, Streamlit)',
            stars: 12,
            forks: 4,
            color: 'bg-blue-400',
            url: 'https://github.com/deviiiater/cardiac-arrest-prediction'
        },
        {
            name: 'move-on-ev',
            description: `Smart EV Companion App for India. Tackles range anxiety, charging access, and support.

Key Features:
• Smart Route Planner with charging stops
• Charging Station Locator (Real-time)
• AI Vehicle Assistant (Voice diagnosis)
• Service Center Finder & Community Hub
• Savings Dashboard & Rewards Program

Tech Stack: Next.js, TypeScript, Tailwind, Firebase, Google AI`,
            language: 'TypeScript (Next.js, Firebase)',
            stars: 35,
            forks: 10,
            color: 'bg-blue-400',
            url: 'https://github.com/Deviiiater/EVonMap.git'
        },
        {
            name: 'ai-attendance-system',
            description: 'Automated attendance using YOLO and Firebase for face detection.',
            language: 'Python',
            stars: 45,
            forks: 12,
            color: 'bg-blue-400',
            url: 'https://github.com/Deviiiater/Classlens.git'
        },
        {
            name: 'kumbh-sahayak',
            description: `Technology-driven project for crowd management & navigation at Kumbh Mela.

Key Objectives:
• Help visitors navigate routes inside Kumbh Mela
• Reduce confusion with real-time instructions
• Support authorities with crowd management & alerts
• Digital assistant companion for pilgrims`,
            language: 'React / Next.js',
            stars: 20,
            forks: 5,
            color: 'bg-orange-400',
            url: 'https://github.com/Deviiiater/kumbh-sahayak.git'
        }
    ];
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
                <span className="text-editor-blue">git</span> log <span className="text-gray-500">--oneline</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-editor-active p-4 rounded-lg border border-editor-inactive hover:border-editor-blue transition-colors cursor-pointer group block"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-editor-blue font-bold text-lg group-hover:underline">{project.name}</h3>
                            <span className="text-xs text-gray-500 border border-gray-600 rounded-full px-2 py-0.5">Public</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 whitespace-pre-wrap">{project.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center">
                                <span className={`w - 3 h - 3 rounded - full ${project.color} mr - 1`}></span>
                                {project.language}
                            </div>
                            <div className="flex items-center hover:text-gray-300">
                                <Star className="w-4 h-4 mr-1" />
                                {project.stars}
                            </div>
                            <div className="flex items-center hover:text-gray-300">
                                <GitBranch className="w-4 h-4 mr-1" />
                                {project.forks}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
