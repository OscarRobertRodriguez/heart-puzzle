import React, { Component } from 'react';
import puzzle1 from 'images/Group1.png'; 
import puzzle2 from 'images/Group2.png'; 
import puzzle3 from 'images/Group3.png'; 

const hello = () => {
	return (
	<div className="container">
		<div className="image-wrapper">
			<img src={puzzle1} className="image-wrapper__image"/>
		</div>

		<div className="image-wrapper">
			<img src={puzzle2} className="image-wrapper__image"/>
		</div>

		<div className="image-wrapper">
			<img src={puzzle3} className="image-wrapper__image"/>
		</div>

    </div>
	)
}

export default hello;