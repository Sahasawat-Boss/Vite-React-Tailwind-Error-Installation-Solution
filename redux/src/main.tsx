import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloVite from './components/HelloVite.tsx'
import TWinstruction from './components/TWinstruction.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='bg-gray-900 text-white p-4'>
      <HelloVite />
      <div className='mx-auto px-10'>
        <TWinstruction />

      </div>
    </main>
  </StrictMode>,
)
