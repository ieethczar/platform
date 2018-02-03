import React, {Component} from 'react';
import {AdmonPageDisplay} from './AdmonPageDisplay';
import firebase from '../../api/connection/firebase';

class AdmonPage extends Component{
	state = {
        file:null,
        progress:0,
        newProduct:{},
        contenidos:[]
    };

    componentWillMount(){
        let contenidos = this.state.contenidos;
        firebase.database().ref("productos")
        	.on("child_added", snap=>{
              	let nino = snap.val();
              	//if(!nino.photos) nino["photos"] = ["link"];
              	nino["id"] = snap.key;
              	contenidos.push(nino);
              	this.setState({contenidos});
        });
    };

    onChangeForm = (e) => {
        let newProduct = this.state.newProduct;
        const field = e.target.name;
        const value = e.target.value;
        newProduct[field] = value;
        this.setState({newProduct});
        console.log(newProduct);
    };
    onChangeFile = (e) => {
        const file = e.target.files[0];
        this.setState({file});
    }

    validateForm = () => {
        let newProduct = this.state.newProduct;
        let errors = this.state.errors;
        let isOk = true;
        if (newProduct.desc.length>500) {
            errors["desc"] = "Solo 500 caracteres";
            isOk = false;
        }
        this.setState({errors});
        return isOk;
    };

	onSave = (e) => {
        e.preventDefault();
        if(this.validateForm()){
            firebase.database().ref("productos")
                .push(this.state.newProduct)
                .then(r=>{
                	console.log("llave", r.key)
                	console.log("if",Boolean(this.state.file))
                    if(this.state.file){
                    	console.log("entre")
                        let updates = {};
                        const task = firebase.storage()
                            .ref(r.key)
                            .child(this.state.file.name)
                            .put(this.state.file);
                            task.on("state_changed", (s)=>{
                            	const progress = Math.round((s.bytesTransferred / s.totalBytes) * 100);
                            	console.log(progress);
                            	this.setState({progress});
                            })
                            task.then(s=>{
                            	console.log("link",s.downloadURL)
                                const link = s.downloadURL;
                                let newProduct = this.state.newProduct;
                                newProduct["url"] = [link];
                                updates[`/productos/${r.key}`] = newProduct;
                                firebase.database().ref().update(updates);
                                alert("producto guardado");
                            })
                            task.catch(e=>console.log(e));    
                    }
                })
                .catch(e=>{
                    console.log("Subida erronea: "+e.message);
                });
        }else{
            alert("hay errores");
        }
    };
    render(){
    	console.log(this.state);
    	const {progress,contenidos} = this.state;
        return(
        	<div>
	        	<AdmonPageDisplay
	            	contenidos={contenidos}
	            	progressUpload={progress}
	            	onChangeFile={this.onChangeFile}
                	onChangeForm={this.onChangeForm}
	            	onSave={this.onSave}
	            />
	        </div>
        );
    }
}
export default AdmonPage;
