import React, { useState } from 'react'

import { Container, Logo, Nav, Sign, Button, MenuHambuger, SemNome } from './style'

import { ReactComponent as SVGLogo } from '../../assets/img/tetherlogo.svg'
import { ReactComponent as SVGMenuIsClose } from '../../assets/img/menu.svg'
import { ReactComponent as SVGMenuIsOpen } from '../../assets/img/menu-close.svg'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <Container>
            <SemNome>
                <Logo>
                    <SVGLogo />
                    <span>tether</span>
                </Logo>
                <MenuHambuger onClick={toggleMenu}>
                    {isMenuOpen
                        ? <SVGMenuIsOpen />
                        : <SVGMenuIsClose />
                    }
                </MenuHambuger>
            </SemNome>

            <Nav className={isMenuOpen ? '' : 'close'}>
                <ul>
                    <li>Why use tether</li>
                    <li>Resources</li>
                    <li>Tether Gold</li>
                    <li>Support</li>
                </ul>
            </Nav>

            <Sign className={isMenuOpen ? '' : 'close'}>
                <Button primary>Sign in</Button>
                <Button>Sign up</Button>
            </Sign>
        </Container>
    )
}