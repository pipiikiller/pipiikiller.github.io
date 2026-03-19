import { BrowserRouter as Router } from "react-router-dom"
import { useEffect } from 'react';
import Routing from './routes';
import './assets/css/style.css';
import './assets/css/responsive.css'
import { initEmailJS } from './services/emailService';

export default function App() {
  useEffect(() => {
    // Initialize EmailJS when app loads
    initEmailJS();
  }, []);

  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
}
