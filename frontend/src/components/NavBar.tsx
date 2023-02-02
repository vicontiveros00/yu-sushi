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
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
            <Navbar.Brand>Yu Sushi 中国龙</Navbar.Brand>
            <Navbar.Toggle aria-controls="navigointi" />
            <Navbar.Collapse>
            <Nav>
                <Nav.Link to='/' as={Link}>Kotisivu</Nav.Link>
                <NavDropdown title='Tilaa nyt!'>
                    <NavDropdown.Item target="_blank" href='https://www.foodora.fi/en/restaurant/s0qt/yu-sushi'>Foodora</NavDropdown.Item>
                    <NavDropdown.Item target="_blank" href='https://wolt.com/en/fin/nokia/restaurant/yu-sushi'>Wolt</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Ruokalista'>
                    <NavDropdown.Item to='/ruokalista' as={Link}>Kaikki</NavDropdown.Item>
                        <NavDropdown.Divider />
                    {categories.map((category: string) => {
                        return (
                            <NavDropdown.Item to={`/ruokalista/${category}`} as={Link} key={category}>
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