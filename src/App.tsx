import './App.css'

/* importation sections */
import { Header } from './sections/header'
import { Education } from './sections/education'
import { Work } from './sections/work'
import { SoftSkills } from './sections/soft-skills'
import { Skills } from './sections/skills'
import { Projects } from './sections/projects'
import { Contact } from './sections/contact'

function App() {
  return (
    <>
      <Header />
      <div className='px-20 lg:px-10 md:px-5 sm:px-2 py-10 flex flex-col gap-y-10'>
        <Work />
        <Education />
        <SoftSkills />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
