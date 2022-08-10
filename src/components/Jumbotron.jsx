import './JumbotronStyles.css'
import banner from '../assets/img/banner1.png'
import React from 'react'

function Jumbotron () {
	return (
		<React.Fragment>
			<div className="jumbotron">
				<h1><span className="tx">start</span> where you are use what you <span className="tx">have</span> do what you <span className="tx">can</span></h1>
				<img src={banner} alt="" onContextMenu="return false;" />
				<div className="title">
					<p>Home</p>
				</div>
				<div className="no">
					<p>01</p>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Jumbotron
