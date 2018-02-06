import React from 'react';
import {Link} from 'react-router-dom';
import {FormGroup,FormControl,ControlLabel,Checkbox,Button} from 'react-bootstrap';

export const RegistroDisplay = ({mostrar, toggleMostrar, saveRegistro, onSubmit, error, email, password, password2}) => (
		<div className="container RegistroPage">
			<div className="col-sm-8">
			</div>
			<div className="col-sm-4">
				<form onSubmit={onSubmit}>
					<h2>{error}</h2>
					<FormGroup bsSize="large">
						<ControlLabel>Input with success</ControlLabel>
					    <FormControl 
					    	name="email" 
					    	onChange={saveRegistro}
							value={email} 
					    	type="text" 
					    	placeholder="Ingresa tu correo electronico"
					    />
					</FormGroup>
					<FormGroup bsSize="large">
						<ControlLabel>Input with success</ControlLabel>
					    <FormControl 
					    	name="password" 
					    	value={password}
					    	onChange={saveRegistro}
							type={mostrar ? "text" : "password" }
					    	placeholder="Ingresa tu contraseña"
					    />
					</FormGroup>
					<FormGroup bsSize="large">
						<ControlLabel>Input with success</ControlLabel>
					    <FormControl 
					    	name="password2" 
					    	value={password2}
					    	onChange={saveRegistro}
							type={mostrar ? "text" : "password" }
					    	placeholder="Confirmar contraseña"
					    />
					</FormGroup>
					<Checkbox 
						onClick={toggleMostrar}
						type="checkbox"
						value="">
						Mostrar contraseña
					</Checkbox>
					<FormGroup>
					    <Button type="submit" bsSize="large">Registrarse</Button>
					</FormGroup>
					<p>
						Iniciar sesión en mi cuenta<br/>
						<Link to={"/login"}>
						Iniciar sesión
						</Link>
					</p>
				</form>
			</div>
		</div>
	);