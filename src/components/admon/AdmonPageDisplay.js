import React from 'react';
import {PageHeader,FormControl,ProgressBar} from 'react-bootstrap';
import {AdmonProductItem} from "./AdmonProductItem";

export const AdmonPageDisplay = ({contenidos,progressUpload,onChangeFile,onSave,onChangeForm}) => (
		<div className='AdmonPage container-fluid'>
			<PageHeader><small>Administrador de contenido</small></PageHeader>
			<div className='row'>
                <div className='col-sm-3'>
                    <h4>Agregar contenido</h4>
                    <hr/>
                    <form onSubmit={onSave} action="">
                        <FormControl
                            onChange={onChangeForm}
                            required
                            name="name"
                            placeholder="Nombre del producto"
                        />
                        <FormControl
                            componentClass="textarea"
                            onChange={onChangeForm}
                            required
                            name="desc"
                            placeholder="Descripción del producto"
                        />
                        <FormControl
                            onChange={onChangeForm}
                            required
                            name="prec"
                            placeholder="Precio del producto"
                        />
                        <FormControl
                            onChange={onChangeForm}
                            required
                            name="sale"
                            placeholder="Descuento"
                        />
                        <FormControl
                            onChange={onChangeForm}
                            required
                            name="pzas"
                            placeholder="Cantidad disponibles"
                        />
                        <FormControl
                            type='file'
                            accept='imagen/*'
                            onChange={onChangeFile}
                            name="imagen"
                            placeholder="Imagen"
                        />
                        <input type="submit"/>
                    </form>
            
                </div>
                <div className='col-sm-9'>
                    <ProgressBar active now={progressUpload}  label={`${progressUpload}%`}/>
                    <h4>Todo mi contenido</h4>
                    <div className='row'>
                        {contenidos.map((p, index)=><AdmonProductItem key={index} {...p}/>)}
                    </div>
                </div>
            </div>
		</div>
	);
