import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-full h-full bg-neutral-900'>
      <div className='w-3/4 h-full mx-auto bg-neutral-50'>
        <App />
      </div>
    </div>
  </StrictMode>
)
