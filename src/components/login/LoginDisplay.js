import React from 'react';
import {FormGroup,FormControl,ControlLabel,Checkbox,Button} from 'react-bootstrap';

export const LoginDisplay = ({changeRegistro, mostrar, toggleMostrar, saveInput, onSubmit, error}) => (
		<div className='container LoginPage'>
			<div className="col-sm-8">
			</div>
			<div className="col-sm-4">
				<form onSubmit={onSubmit}>
					<h2>{error}</h2>
					<FormGroup bsSize="large">
						<ControlLabel>Input with success</ControlLabel>
					    <FormControl 
					    	name="email" 
					    	onChange={saveInput} 
					    	type="text" 
					    	placeholder="Correo electronico"
					    />
					</FormGroup>
					<FormGroup bsSize="large">
						<ControlLabel>Input with success</ControlLabel>
					    <FormControl 
					    	name="password"
							onChange={saveInput}
							placeholder="Tu contraseña"
							type={mostrar ? "text" : "password" }
						/>
					</FormGroup>
					<Checkbox 
						onClick={toggleMostrar}
						type="checkbox"
						value="">
						Mostrar contraseña
					</Checkbox>
					<FormGroup>
					    <Button type="submit" bsSize="large">Iniciar Sesión</Button>
					</FormGroup>
					<p>
						¿Aún no tienes cuenta?<br/>
						<ControlLabel 
							onClick={changeRegistro}>
							Registrarme
						</ControlLabel>
					</p>
					<p>
						¿Olvidaste tu contraseña?<br/>
						<a>
							Recuperar
						</a>
					</p>
				</form>
			</div>
		</div>
	);