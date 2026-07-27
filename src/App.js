import { BrowserRouter as Router } from "react-router-dom"
import { useEffect } from 'react';
import Routing from './routes';
import './assets/css/style.css';
import './assets/css/responsive.css'
import { initEmailJS } from './services/emailService';

export default function App() {
  useEffect(() => {
    console.log('🚀 App component mounted');
    try {
      initEmailJS();
      console.log('✅ EmailJS initialized');
    } catch (error) {
      console.error('❌ Failed to initialize EmailJS:', error);
    }
  }, []);

  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
}
