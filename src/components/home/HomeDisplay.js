import React from 'react';
import {HomeItem} from "./HomeItem";

export const HomeDisplay = ({productos}) => (
		<div className="container HomeContainer">
            {productos.map(
            	(p, index)=>
            		<HomeItem 
            			key={index} 
            			{...p}
            		/>
            	)
           	}
        </div>
	);