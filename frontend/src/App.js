import React from 'react'
import './styles/App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    </div>
  );
}

export default App;
