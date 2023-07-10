import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoClock from '../../assets/clock.png'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoClock} height={60} alt="" />
      <h1>Your Own Timer</h1>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
