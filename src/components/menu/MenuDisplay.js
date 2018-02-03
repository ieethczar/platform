import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown,FormGroup,FormControl,Button} from 'react-bootstrap';

export const MenuDisplay = () => (
		/*<nav className='menuNav'>
			<Link to={`/`} ><aside className='sumix-2 sumix'>clip<span>VIEW</span></aside></Link>
			<div>Contenidos</div>
			<Link to={`/profile`} ><div>Perfil</div></Link>
			<div>Cerrar Sesión</div>
		</nav>*/
		<Navbar fixedTop collapseOnSelect>
		  	<Navbar.Header>
		    	<Navbar.Brand>
		      		<Link to={"/"}>Platform</Link>
		    	</Navbar.Brand>
		    	<Navbar.Toggle />
		  	</Navbar.Header>
	  		<Navbar.Collapse>
	  			<Navbar.Form pullLeft>
			      	<FormGroup>
			        	<FormControl type="text" placeholder="Search" />
			      	</FormGroup>{' '}
			      	<Button type="submit">Submit</Button>
			    </Navbar.Form>
	    		<Nav>
	      			<NavItem eventKey={1} href="#">Link</NavItem>
	      			<NavItem eventKey={2} href="#">Link</NavItem>
	    		</Nav>
	    		<Nav pullRight>
			      	<NavItem eventKey={2} href="#">
			        	Login
			      	</NavItem>
			      	<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}>
				        	<Link to={"/perfil"}>
				        		Perfil
				      		</Link>
				      	</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.2}>
				        	<Link to={"/admon"}>
				        		Administrar productos
				      		</Link>
				      	</MenuItem>
				      	<MenuItem eventKey={3.2}>
				        	<Link to={"/admon"}>
				        		Administrar ordenes
				      		</Link>
				      	</MenuItem>
				      	<MenuItem eventKey={3.2}>
				        	<Link to={"/admon"}>
				        		Clientes Registrados
				      		</Link>
				      	</MenuItem>
				        <MenuItem eventKey={3.2}>
				        	<Link to={"/admon"}>
				        		Administradores
				      		</Link>
				      	</MenuItem>
				        <MenuItem eventKey={3.2}>
				        	<Link to={"/admon"}>
				        		Reportes
				      		</Link>
				      	</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>
				        	<Link to={"/admon"}>
				        		Cerrar Sesión
				      		</Link>
				      	</MenuItem>
			      	</NavDropdown>
	    		</Nav>
	  		</Navbar.Collapse>
		</Navbar>
	);