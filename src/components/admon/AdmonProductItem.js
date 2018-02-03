import React from 'react';
import {Link} from 'react-router-dom';

//let img;
//const bici = "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/75/4e5c758d7fd17e2fb51a9e17f255788b.jpg";

export const AdmonProductItem = ({id,name,desc,prec,pzas,sale,url}) => {
    return(        
        <aside className="col-xs-6 col-sm-4 col-md-3 AdmonProductoItem">
            <Link to={`/video/${id}`}>
            	<div className='row'>
            		<div className='AdmonItemImagen col-xs-12'>
            			<img alt={name} className='img-responsive' src={url}/>		
            		</div>
            		<div className='AdmonItemTitulo col-xs-12'>
            			{name}
            		</div>
            		<div className='AdmonItemPrecio col-xs-12'>
            			${prec}
            		</div>
            		<div className='AdmonItemDescuento col-xs-6'>
            			-{sale}%
            		</div>
            		<div className='AdmonItemPiezas col-xs-6'>
            			{pzas}<small>pzas.</small>
            		</div>
            		<div className='AdmonItemDescripcion col-xs-12'>
            			{desc}
            		</div>
            	</div>
            </Link>            
        </aside>
    );
};