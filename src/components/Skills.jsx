import React from 'react';

const Skills = () => {
    const skills = {
        "frontend": ["Next.js", "React", "Tailwind CSS", "UI/UX Logic"],
        "backend": ["Node.js", "Supabase", "Firebase", "Cloud Functions"],
        "ai_ml": ["YOLO", "ML Models", "Streamlit", "Python"],
        "tools": ["Google Cloud", "Git", "GitHub", "CI/CD"]
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
                <span className="text-editor-purple">package</span>.<span className="text-editor-blue">json</span>
            </h2>

            <div className="bg-editor-active p-6 rounded-lg border border-editor-inactive font-mono">
                <span className="text-editor-text">{'{'}</span>
                <div className="pl-4">
                    <span className="text-editor-green">"dependencies"</span>: <span className="text-editor-text">{'{'}</span>

                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="pl-4 mb-2">
                            <span className="text-editor-blue">"// {category}"</span>: <span className="text-editor-text">"",</span>
                            {items.map((item, index) => (
                                <div key={item} className="pl-0">
                                    <span className="text-editor-green">"{item.toLowerCase().replace(' ', '-')}"</span>: <span className="text-editor-orange">"^{Math.floor(Math.random() * 10)}.0.0"</span>{index < items.length - 1 || category !== 'tools' ? ',' : ''}
                                </div>
                            ))}
                        </div>
                    ))}

                    <span className="text-editor-text">{'}'}</span>
                </div>
                <span className="text-editor-text">{'}'}</span>
            </div>
        </div>
    );
};

export default Skills;
