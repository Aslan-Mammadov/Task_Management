import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/' > Task Manager</NavLink>
        </li>
        <li>
            <NavLink to='/contacts'> Contacts </NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default Navigation
