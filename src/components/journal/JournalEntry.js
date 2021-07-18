import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.pexels.com/photos/327015/pexels-photo-327015.jpeg)'
                }}
            >

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>

                <p className="journal__entry-content">
                Lorem ipsum dolor sit amet, aliquam id aliquet turpis.
                </p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
