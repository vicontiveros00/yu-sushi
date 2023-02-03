import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import convertCatNameToLegibleString from '../util/convertCatNameToLegibleString';

type NavBarProps = {
    categories: string[]
}

const NavBar = ({ categories }: NavBarProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleNavClick = () => {
        window.innerWidth < 576 && setIsExpanded(isExpanded ? false : true)
    };

    return (
        <Navbar bg="dark" variant='dark' expand="sm" expanded={isExpanded}>
            <Container>
                <Navbar.Brand to='/' as={Link} onClick={() => {
                    setIsExpanded(false);
                }}>Yu Sushi 中国龙</Navbar.Brand>
                <Navbar.Toggle onClick={() => handleNavClick()} aria-controls="navigointi" />
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link to='/' as={Link} onClick={() => handleNavClick()}>Kotisivu</Nav.Link>
                    <NavDropdown title='Tilaa nyt!'>
                        <NavDropdown.Item target="_blank" href='https://www.foodora.fi/en/restaurant/s0qt/yu-sushi' onClick={() => handleNavClick()}>Foodora</NavDropdown.Item>
                        <NavDropdown.Item target="_blank" href='https://wolt.com/en/fin/nokia/restaurant/yu-sushi' onClick={() => handleNavClick()}>Wolt</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Ruokalista'>
                        <NavDropdown.Item to='/ruokalista' as={Link} onClick={() => handleNavClick()}>Kaikki</NavDropdown.Item>
                            <NavDropdown.Divider />
                        {categories.map((category: string) => {
                            return (
                                <NavDropdown.Item to={`/ruokalista/${category}`} as={Link} key={category} onClick={() => handleNavClick()}>
                                    {convertCatNameToLegibleString(category)}
                                </NavDropdown.Item>
                            )
                        })}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;