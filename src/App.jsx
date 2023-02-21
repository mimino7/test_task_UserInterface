import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { AppRouter } from './pages';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <div className="content__wrap">
            <AppRouter />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
