import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
       <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-4">
        <Dashboard />
      </main>
    </div>
    </>
  )
}

export default App
