import React, { Component } from 'react'
import './State.css';
import Contact from '../Contact/Contact.js';




class State extends Component{

	render(){



		return(
			<div>
				<div id="state">
						  <h3 class="header">State of the Gio: Thoughts on the Current Technology Space</h3>
	

						  <br/><br/>

						  <p class="content">
							Here lie some thoughts I will put out. My Gits are not showing 
					 		</p>

					 		<h3 class="header">Blockchain</h3>
					 		<h3 class="header">Data</h3>
							<h3 class="header">Healthcare</h3>
	

						
					
				</div>

				<Contact/>
			</div>

			)
	}
}







export default State;