import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ExercisesProvider } from './contexts/exercises_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExercisesProvider>
    <App />
    </ExercisesProvider>
  </React.StrictMode>
);
