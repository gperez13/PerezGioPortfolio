import React, { Component } from 'react'
import './Projects.css';



class Projects extends Component{

	render(){



		return(
			
			<div>
				<div id="projects">



					<h2 class="header">Work</h2>
					<hr/><br/><br/><br/>


					<div class="container">




					<div class="row">

						<div class="col-md-7">
							<a href="https://rate-your-chicago-aldermen.herokuapp.com/" rel="noopener noreferrer" target="_blank"><img class="work" src="images/RateMyChicago.png"/></a>
							
						</div>
							<div class="col-md-5">
							
							<h4 class="header">Rate My Chicago Alderman</h4>
							<br/>

								<p class="content">Rate My Chicago Alderman is a politician rating project aimed at engaging Chicago citizens in 
								local politics. It has been deployed with Heroku, but I am thinking about redeploying it on a 
								larger server in case it picks up traffic. Prior to redeployment, we will fix some routing issues 
								that render the wards incorrectly and work with the Sessions so that users can only alter records they create. 

								<br/><br/>
								Built Using: Javascript. D3.js. HTML5. CSS3. JSON. MongoDB. mLabm. Sessions. Express.
								</p>


							<a href="https://github.com/gperez13/my-CRUD-politician" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="images/GitHubKitty.png" /></a>
							</div>
							
					

						<br/><br/><br/><hr/><br/><br/><br/>



						<div class="row">

							<div class="col-md-5">
									<h4 class="header">BulbasaurGuac</h4>
									<br/>

									<p class="content">This is a video game resembling one of many space shooter games from the 80's.  
									Using Phaser libraries, I was able to add a physics element to manipulate objects in a canvas. 
									The project allowed me to familiarize myself with Tiled,  jQuery, and DOM manipulation. In the 
									future I would like to clean up the code thoroughly  as well as add animation onto the sprites. 
									A bug also occurs when winning and losing simultaneously. The game can also benefit from additional 
									features such as power ups or making enemies less predictable.


									<br/><br/>
									Built Using: Phaser. jQuery. HTML5. Tiled.
									</p>
									<a href="https://github.com/gperez13/BulbasaurGuac" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="images/GitHubKitty.png"/></a>
							</div>

								<div class="col-md-2" style={{"float": "right"}}></div>

								<div class="col-md-5" style={{"float": "right"}}>
									<a  href="https://bulbasaurguacshooter.herokuapp.com/" rel="noopener noreferrer" target="_blank"><img class="work" src="images/BulbasaurGuac.png"/></a>
								</div>

						</div>



	
								<br/><br/><br/><hr/><br/><br/><br/>


						<div class="row">

							<div class="col-md-7">
			
								<a rel="noopener noreferrer" target="_blank"><img class="work" src="images/pier.png"/></a>
			
							</div>



							<div class="col-md-5">

								<h4 class="header">LASA</h4>
								<br/>
									<p class="content">I am working on a project that crowd sources personal healthcare practices to support mental health. The project will include a RESTful structure and a database that receives crowd sourced information. Research has been conducted with mental health professionals and lawyers to ensure the best outcome for users. We expect a launch by January 2018.

									<br/><br/>
									Built Using: React. Ruby. Sinatra. SQL.

									</p>

								<a href="https://github.com/gperez13" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="images/GitHubKitty.png"/></a>
							</div>

						</div>				



				</div>
			</div> 
		</div>
		</div>

		)


			
	}
}







export default Projects;