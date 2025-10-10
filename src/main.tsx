import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
/* import { Navbar } from './components/navbar' */



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-full h-full bg-neutral-900'>
      <div className='w-3/4 h-full mx-auto bg-neutral-50'>
        <App />
        {/* <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block">
          <Navbar />
        </div> */}
      </div>
    </div>
  </StrictMode>,
)
