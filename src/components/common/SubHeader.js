import Nav from 'react-bootstrap/Nav';


const SubHeader=()=>{
  return (
    <Nav variant="pills" defaultActiveKey="/home"

    onSelect={(selectedKey) => {
              alert(`selected ${selectedKey}`)
            }
          }>
      <Nav.Item>
        <Nav.Link eventKey="link-0" style={{color:"black"}}>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" style={{color:"black"}}>Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" style={{color:"black"}}>Option 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default SubHeader;