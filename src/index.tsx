import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './theme'; // MUI Theme
import { Container} from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      {/* THEME PROVIDER WRAPS APP */}
      <ThemeProvider theme={customTheme}>
        {/* 1. Outer Container for Responsiveness */}
      {/* The Container component centers the content horizontally and sets max-width based on screen size (default MUI behavior). 
         We set the background color here to the main page background color. */}
      <Container
        maxWidth="xl" // Use the full width for the outer container on large screens
        sx={{
          bgcolor: '#F7F7F7', // Use the dark background color
          minHeight: '100vh', // Ensures the background covers the whole viewport
          minWidth: '100vw',
          // No top/bottom padding is applied to this outer Container by default, 
          // allowing the inner Box to control the layout.
        }}
      >
        <App />
      </Container>
      </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
