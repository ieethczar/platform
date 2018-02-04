import React from 'react';

export const ProductoDetailDisplay = ({name,desc,url,prec}) => (
		<div className='container ProductoDetail'>
			<div className="row">
				<div className="col-sm-6">
					<div className="row">
						<div className="col-sm-8">
							<h2>{name}</h2>
						</div>
						<div className="col-sm-4">
							<h2>{prec}</h2>
						</div>
						<div className="col-sm-12">
							<p>{desc}</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<img alt="{name}" src={url}/>
				</div>
			</div>
		</div>
	);