import React from 'react';
import ReactDOM from 'react-dom/client';
import {JokeProvider} from "./context/joke-context";
import {AppRouter} from "./app-router";

import "./assets/styles/_globals.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <JokeProvider>
        <AppRouter />
    </JokeProvider>
);


