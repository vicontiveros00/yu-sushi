import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                <Nav.Link>Kotisivu</Nav.Link>
                <Nav.Link>Tilaa nyt!</Nav.Link>
                <NavDropdown title="Ruokalista">
                    <NavDropdown.Item>Kaikki</NavDropdown.Item>
                        <NavDropdown.Divider />
                    {categories.map((category: string) => {
                        return (
                            <NavDropdown.Item key={category}>
                                {(category).charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
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