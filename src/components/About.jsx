import React from 'react';

const About = () => {
    return (
        <div className="p-4 md:p-8 text-editor-text flex flex-col md:flex-row gap-8 items-start overflow-y-auto h-full">
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 text-white">
                    <span className="text-editor-blue">class</span> <span className="text-editor-yellow">FullStackDeveloper</span> <span className="text-editor-text">{'{'}</span>
                </h2>

                <div className="pl-4 md:pl-8 space-y-4 font-mono text-sm md:text-base">
                    <div>
                        <span className="text-editor-blue">constructor</span>() {'{'}
                        <div className="pl-8">
                            <span className="text-editor-blue">this</span>.<span className="text-editor-text">name</span> = <span className="text-editor-orange">'Mohit Kumar Chauhan'</span>;
                            <br />
                            <span className="text-editor-blue">this</span>.<span className="text-editor-text">education</span> = <span className="text-editor-orange">'B.Tech IT @ REC Banda'</span>;
                            <br />
                            <span className="text-editor-blue">this</span>.<span className="text-editor-text">linkedin</span> = <span className="text-editor-orange">'<a href="https://www.linkedin.com/in/mohit-kumar-chauhan-967158111/" target="_blank" className="underline hover:text-editor-blue">/mohit-kumar-chauhan</a>'</span>;
                            <br />
                            <span className="text-editor-blue">this</span>.<span className="text-editor-text">github</span> = <span className="text-editor-orange">'<a href="https://github.com/deviiiater" target="_blank" className="underline hover:text-editor-blue">/deviiiater</a>'</span>;
                        </div>
                        {'}'}
                    </div>

                    <div>
                        <span className="text-editor-yellow">professionalSummary</span>() {'{'}
                        <div className="pl-8 text-editor-orange">
                            <span className="text-editor-blue">return</span> `
                            <br />
                            Over the years, I have developed strong expertise in full-stack web development.
                            <br />
                            My focus is on creating secure, scalable, and user-friendly applications using
                            <br />
                            modern technologies like Supabase, Firebase, React, Next.js, and Tailwind CSS.
                            <br />
                            I specialize in problem-solving, transforming ideas into real products, and
                            <br />
                            maintaining clean architecture with optimized, high-performance code.
                            <br />
                            `;
                        </div>
                        {'}'}
                    </div>

                    <div>
                        <span className="text-editor-yellow">workExperience</span>() {'{'}
                        <div className="pl-8">
                            <span className="text-editor-blue">return</span> [
                            <div className="pl-8">
                                {'{'} <span className="text-editor-text">"Current"</span>: <span className="text-editor-orange">"CTO at Indikraft"</span> {'}'},
                                <br />
                                {'{'} <span className="text-editor-text">"Freelance"</span>: [
                                <span className="text-editor-orange">"happyheartss.com"</span>, <span className="text-editor-orange">"hericult.com"</span>,
                                <br />
                                <span className="text-editor-orange">"indikraft.in"</span>, <span className="text-editor-orange">"bhubhraman.in"</span>
                                ] {'}'},
                                <br />
                                {'{'} <span className="text-editor-text">"Club"</span>: <span className="text-editor-orange">"Lead at Web Development Club"</span> {'}'}
                            </div>
                            ];
                        </div>
                        {'}'}
                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-6 text-editor-text">{'}'}</h2>
            </div>

            <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-editor-blue shadow-xl">
                    <img
                        src={`${import.meta.env.BASE_URL}profile.jpg`}
                        alt="Mohit Kumar Chauhan"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
