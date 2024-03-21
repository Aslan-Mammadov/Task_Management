import {Routes, Route} from 'react-router-dom'
import TaskManager from './components/TaskManager'
import Contacts from './components/Contacts'

const Container = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TaskManager/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default Container
