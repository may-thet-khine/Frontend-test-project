import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaStar,FaAlignJustify } from 'react-icons/lib/fa';

const element = (

<div className="leftmenu">
  <Nav.Item>
    <Nav.Link className="mt-1"  href="/"><FaAlignJustify /></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/detail"><FaStar /></Nav.Link>
  </Nav.Item>
</div>

);

export default class Leftmenu extends React.Component {
  render() {return (element);}
}