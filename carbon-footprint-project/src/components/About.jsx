import React from "react";
import './About.css';

function About() {
    return (
        <> 
            {/* About Content */}
            <div className="about-container">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>About the Environment</h1>
                    <p>
                        The environment is the foundation of all life on Earth. It provides the air we breathe, the water we drink, and the soil that sustains our food. A balanced and healthy environment ensures the survival of all living organisms, including humans. However, our planet faces unprecedented challenges due to human activities, requiring immediate action to preserve its delicate balance.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="content-section">
                    {/* Climate Change Section */}
                    <div className="section climate-change">
                        <div className="image">
                            <img 
                                src="/images/climate-change.jpg" 
                                alt="Melting Ice" 
                                className="responsive-image" 
                            />
                        </div>
                        <div className="text">
                            <h2>Understanding Climate Change</h2>
                            <p>
                                Climate change refers to significant changes in global temperatures and weather patterns over time. While some changes are natural, human activities like burning fossil fuels, deforestation, and industrial processes have accelerated this process. The increase in global temperatures leads to melting polar ice, rising sea levels, and extreme weather events such as hurricanes, droughts, and heatwaves.
                            </p>
                            <p>
                                Addressing climate change requires global collaboration and local action. By reducing greenhouse gas emissions, transitioning to renewable energy, and protecting ecosystems, we can mitigate its effects and build a sustainable future.
                            </p>
                        </div>
                    </div>

                    {/* Greenhouse Gases Section */}
                    <div className="section greenhouse-gases">
                        <div className="image">
                            <img 
                                src="/images/greenhouse-effect.png" 
                                alt="Greenhouse Effect" 
                                className="responsive-image" 
                            />
                        </div>
                        <div className="text">
                            <h2>What Are Greenhouse Gases?</h2>
                            <p>
                                Greenhouse gases, such as carbon dioxide (CO<sub>2</sub>), methane (CH<sub>4</sub>), and nitrous oxide (N<sub>2</sub>O), are naturally present in the Earth's atmosphere. These gases trap heat and keep our planet warm enough to sustain life. However, human activities have drastically increased their concentration, causing global temperatures to rise at an alarming rate.
                            </p>
                            <p>
                                Reducing the emission of greenhouse gases is crucial for combating climate change. This includes using cleaner energy sources, adopting sustainable agriculture, and promoting energy-efficient technologies.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action Section */}
                    <div className="section call-to-action">
                        <div className="call-to-action-text">
                            <h2>What Can You Do to Help?</h2>
                            <p>
                                Every individual can make a difference in protecting the environment. Here are some actions you can take:
                            </p>
                            <ul>
                                <li>Conserve energy by turning off lights and appliances when not in use.</li>
                                <li>Reduce, reuse, and recycle to minimize waste.</li>
                                <li>Choose sustainable transportation options like walking, cycling, or public transit.</li>
                                <li>Support renewable energy initiatives and eco-friendly policies.</li>
                                <li>Plant trees and protect natural habitats to promote biodiversity.</li>
                            </ul>
                            <p>
                                Together, we can create a healthier and more sustainable planet for future generations.
                            </p>
                        </div>
                        <div className="cta-image">
                            <img 
                                src="/images/planting-trees.jpg" 
                                alt="Planting Trees" 
                                className="responsive-image rounded-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
