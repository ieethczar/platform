import React, {Component} from 'react';
import {HomeDisplay} from './HomeDisplay';
import firebase from '../../api/connection/firebase';

class HomePage extends Component{
	state = {
        productos:[]
    };

    componentWillMount(){
        let contenidos = this.state.productos;
        firebase.database().ref("productos")
            .on("child_added", snap=>{
                let registro = snap.val();
                registro["id"] = snap.key;
                contenidos.push(registro);
                this.setState({productos:contenidos});
        });
    };

	render(){
        console.log(this.state);
        const {productos} = this.state;
		return(
				<div>
					<HomeDisplay 
						productos={productos}
					/>
				</div>	
			);
	}
}

export default HomePage;