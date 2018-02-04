import React from 'react';
import {Link} from 'react-router-dom';

const defaul = "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/75/4e5c758d7fd17e2fb51a9e17f255788b.jpg";

export const HomeItem = ({id,name,desc,url}) => {
    return(
        <section className='col-xs-6 col-sm-4 HomeItem'>
            <Link to={`/producto/${id}`} >
                <div className="HomeItemDisplay">
                    <div className="imagen">
                        <img alt={name} src={url}/>
                    </div>
                    <div>
                        <span>
                            <h4>{name}</h4>
                            <p>{desc}</p>
                        </span>
                    </div>
                </div>
            </Link>
        </section>
    );
};

/*
    <section className='col-xs-6 col-sm-4 HomeItem'>
            //
                //<aside style={{backgroundImage:`url(${defaul})`}}>
                    <div>
                        <span>
                            <h4>{name}</h4>
                            <p>{desc}</p>
                        </span>
                    </div>
                //</aside>
            //
        </section>
*/