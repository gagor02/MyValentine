import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './components/UI/BottomNav.jsx';

function App() {

  return (
    <>
   
      <main>
        <Outlet />
      </main>
       <BottomNav />
      
    </>
  )
}

export default App
