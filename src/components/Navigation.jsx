import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
            <NavLink to='/' > Task Manager</NavLink>
        </li>
        <li>
            <NavLink to='/contacts'> Contacts </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navigation
