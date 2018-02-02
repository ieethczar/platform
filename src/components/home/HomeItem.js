import React from 'react';
import {Link} from 'react-router-dom';

const defaul = "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/75/4e5c758d7fd17e2fb51a9e17f255788b.jpg";

export const HomeItem = ({id, name, desc, link}) => {
    return(
        <section className='col-xs-6 col-sm-4 HomeItem'>
            <div className="HomeItemDisplay">
                <div className="imagen">
                    <img alt={name} src={defaul}/>
                </div>
                <div>
                    <span>
                        <h4>{name}</h4>
                        <p>{desc}</p>
                    </span>
                </div>
            </div>
        </section>
    );
};

/*
    <section className='col-xs-6 col-sm-4 HomeItem'>
            //<Link to={`/video/${id}`} >
                //<aside style={{backgroundImage:`url(${defaul})`}}>
                    <div>
                        <span>
                            <h4>{name}</h4>
                            <p>{desc}</p>
                        </span>
                    </div>
                //</aside>
            //</Link>
        </section>
*/