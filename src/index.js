import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react"
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from './SupabaseClient'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </SessionContextProvider>
  </React.StrictMode>
);

