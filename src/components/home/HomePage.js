import React, {Component} from 'react';
import {HomeDisplay} from './HomeDisplay';

class HomePage extends Component{
	state = {
        productos:[
            {
                id:0,
                name:"Como entrenar a tu dragon",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:1,
                name:"Como entrenar a tu dragon 2",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:2,
                name:"Como entrenar a tu dragon 3",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:3,
                name:"Como entrenar a tu dragon 3",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:4,
                name:"Como entrenar a tu dragon 3",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:5,
                name:"Como entrenar a tu dragon 3",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:6,
                name:"Como entrenar a tu dragon 3",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:7,
                name:"Como entrenar a tu dragon 3",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
            {
                id:8,
                name:"Como entrenar a tu dragon 3",
                desc:"Pelicula basada en entrenar un dragon.",
                link:"Aun no me lo se",
            },
        ]
    };
	render(){
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