import React, { PureComponent } from 'react'
import TopBarWrapper from './components/TopBarWrapper'
import Logo from './components/Logo'
import HeaderLink from './components/HeaderLink'
import Navigation from './components/Navigation'

class TopBar extends PureComponent {
  render() {
    return (
      <TopBarWrapper>
        <Logo />
        <Navigation>
          <HeaderLink to='/'>Home</HeaderLink>
          <HeaderLink to='/info'>Info</HeaderLink>
        </Navigation>
      </TopBarWrapper>
    )
  }
}

export default TopBar
