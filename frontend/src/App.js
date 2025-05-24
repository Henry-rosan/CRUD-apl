import './App.css';
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [page, setPage] = useState('login');
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="container">
      <h1>CRUD</h1>
      {!isLoggedIn ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button onClick={() => setPage('login')}>Login</button>
            <button onClick={() => setPage('register')}>Register</button>
          </div>
          {page === 'login' ? (
            <LoginPage onLogin={() => setPage('dashboard')} />
          ) : (
            <RegisterPage />
          )}
        </>
      ) : (
        <>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}
          >
            Logout
          </button>
          <DashboardPage />
        </>
      )}
    </div>
  );
}

export default App;
