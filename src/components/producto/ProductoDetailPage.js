import React, {Component} from 'react';
import {ProductoDetailDisplay} from './ProductoDetailDisplay';

//import {getProductById} from '../../api/google';

class ProductoDetailPage extends Component{
    state={
		producto:{}
	}
	componentWillMount() {
		const id=this.props.match.params.id;
		console.log("Recibido: "+id);
		/*getProductById(id)
			.then(video=>{
				this.setState({video});
			})
			.catch(e=>console.log(e.message));*/
	}
    render(){
    	const {producto} = this.state;
    	console.log(this.state);
        return(
        	<div>
	        	<ProductoDetailDisplay
	            	{...producto}
	            />
            </div>
        );
    }
}
export default ProductoDetailPage;
