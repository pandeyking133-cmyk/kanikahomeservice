import React from 'react';
import tagsData from '../data/tagsData.json';

const SEOTags = ({ locationKey }) => {
    let tagsToDisplay = [];

    if (locationKey && tagsData[locationKey]) {
        // If a specific location is passed, show only that location's tags
        tagsToDisplay = tagsData[locationKey];
    } else {
        // If no specific location (e.g., Homepage), show ALL tags
        Object.values(tagsData).forEach(tagsArray => {
            tagsToDisplay = [...tagsToDisplay, ...tagsArray];
        });
        // Remove duplicates just in case
        tagsToDisplay = [...new Set(tagsToDisplay)];
    }

    // Shuffle array slightly for dynamic display on homepage
    if (!locationKey) {
        tagsToDisplay.sort(() => Math.random() - 0.5);
    }

    return (
        <section className="py-12 bg-[#050505] border-t border-brand-burgundy/20">
            <div className="container mx-auto px-4 md:px-8">
                <h3 className="text-xl font-serif text-brand-gold mb-6 border-b border-gray-800 pb-2 inline-block">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                    {tagsToDisplay.map((tag, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-brand-black border border-gray-800 rounded-full text-xs text-gray-400 hover:text-white hover:border-brand-burgundy transition-colors duration-300 cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SEOTags;
