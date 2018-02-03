import React from 'react';

export const ProductoDetailDisplay = ({name,desc,url}) => (
		<div className='ProductoDetail'>
			<h2>{name}</h2>
			<p>{desc}</p>
			<p>{url}</p>
			<video width="100%" controls>
			  	<source src={url} type="video/mp4" />
			</video>
			<br/><br/><br/><br/><br/><br/>
			shdfhsdkfhsdkjfhksjhfj
		</div>
	);