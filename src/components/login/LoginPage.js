import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';
import {RegistroDisplay} from './RegistroDisplay';
import firebase from '../../api/connection/firebase';

class LoginPage extends Component{

	state = {
		mostrar:false,
		login:{
			email:null,
			password:null
		},
		error:null,
		registro:false,
		nuevoRegistro:{
			email:null,
			password:null,
			password2:null
		}
		
	};

	//ciclos de vida
	/*componentWillMount(){
		const user = localStorage.getItem("user");
		if(user){
			this.props.history.push("/");
		}
	}*/

	toggleMostrar = () => {
		// let mostrar = this.state.mostrar;
		// mostrar = !mostrar;
		// this.setState({mostrar});
		this.setState({mostrar:!this.state.mostrar});
	};

	saveInput = (e) => {
		const input = e.target.name;
		const value = e.target.value;
		const login = this.state.login;
		login[input] = value;
		this.setState({login});
		console.log(login);
	};

	saveRegistro = (e) => {
		const input = e.target.name;
		const value = e.target.value;
		const nuevoRegistro = this.state.nuevoRegistro;
		nuevoRegistro[input] = value;
		this.setState({nuevoRegistro});
		//console.log(login);
		if(nuevoRegistro.password !== nuevoRegistro.password2) 
			this.setState({error:"Tu contraseña no coincide"});
		else 
			this.setState({error:null});
	};

	onSubmit = (e) => {
	 	e.preventDefault();
	 	//let user = checkUser(this.state.login);
	 	let user = this.state.login;
	 	if(user){
	 		user = JSON.stringify(user);
	 		localStorage.setItem("user", user);
	 		this.props.history.push("/perfil")
	 	}else{
	 		this.setState({error:"El usuario no coincide"});
	 	}
		

	 	//if(user){
	 	//	localStorage.setItem("user", user);
	 	//}
	};

	onLogin = (e) => {
		e.preventDefault();
		const {login} = this.state;
		firebase.auth().signInWithEmailAndPassword(login.email, login.password)
			.then(usuario=>{
				let user = JSON.stringify(usuario);
				localStorage.setItem("user", user);
				this.props.history.push("/");
			})
			.catch(e=>console.log(e));
	}

	changeRegistro = () => {
		this.setState({registro:true});
	};

	createUser = (e) => {
		e.preventDefault();
		const {nuevoRegistro} = this.state;
		firebase.auth()
			.createUserWithEmailAndPassword(nuevoRegistro.email, nuevoRegistro.password)
			.then(s=>{
				this.setState({registro:false});
			})
			.catch(e=>console.log(e));
	};

	render(){
		const {registro, nuevoRegistro, error} = this.state;
		return(
				<div>
					{registro ?
						<RegistroDisplay
							onSubmit={this.createUser}
							error={error}
							saveRegistro={this.saveRegistro}
							mostrar={this.state.mostrar}
							toggleMostrar={this.toggleMostrar}
							{...nuevoRegistro}
						/> 
						:
					 	<LoginDisplay
					 		changeRegistro={this.changeRegistro}
							mostrar={this.state.mostrar}
							toggleMostrar={this.toggleMostrar}
							saveInput={this.saveInput}
							onSubmit={this.onLogin}
							error={this.state.error}
						/>
					}
				</div>
			);
	}
}

export default LoginPage;