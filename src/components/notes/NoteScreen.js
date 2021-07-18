import React from 'react';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://s1.best-wallpaper.net/wallpaper/m/1509/Japan-mount-Fuji-autumn-red-leaves_m.jpg"
                        alt="imagen"
                    />
                </div>

            </div>

        </div>
    )
}
