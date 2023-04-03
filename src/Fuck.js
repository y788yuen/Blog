import Nav from 'react-bootstrap/Nav';
import icon from './icon.jpg';
function Fuck() {
    return (
      <Nav fill variant="tabs" defaultActiveKey="/home">
        
        <Nav.Item>
          <Nav.Link href="/home"><img src= {icon} width={100}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Catalog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Cart
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Fuck;