// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Link } from "react-router-dom";

import * as data from "./data/data.json";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<div className="container">
				{/* Photo of me */}
				<div className="profile-section">
					<div className="row">
						<div className="col-md-2">
							<img className="img-fluid mx-auto" height={150} src="images/me-4.jpg" alt="Failed" />
						</div>
						<div className="col-md-9">
							<h1>Guðmundur Axel Guðrúnarson</h1>
							<p>I work hard and one of my best skills is to always keep learning and adapting to tech and 
								thus I am very comfortable with working on various languages or frameworks. And not only limited 
								to the ones that I am already experienced in such as React, TypeScript, SCSS (CSS), Node.js, Next.js,
								 Figma, PostgreSQL, C#, MYSQL, Git, Java, PHP, Laravel, MVC, Python, C++, sk-learn, API.
							</p>
						</div>
					</div>
				</div>

				{/* Tabs: Full-Stack, Front-End, Back-End, Game Dev */}
				<div className="tab-section">
					<div className="row">
						<ul className="tab-links">
							<li className="col-sm-3"><Link to={"stack/full-stack"} className="active">Full Stack</Link></li>
							<li className="col-sm-3"><Link to={"stack/front-end"}>Front-End</Link></li>
							<li className="col-sm-3"><Link to={"stack/back-end"}>Back-End</Link></li>
							<li className="col-sm-3"><Link to={"stack/game-dev"}>Game Dev</Link></li>
						</ul>
					</div>
				</div>

				{/* Front-End: TV Show Website,  */}

				{/* Back-End: TV Show Website */}

				{/* Game Dev:  */}


				{/* Tab Content grid of projects possibly gifs when hovered over or just thumbnails and able to enlarge it if clicked....*/}
				<div className="projects-section">
					<h3 className="text-center mb-3">Projects</h3>
					<div className="row gx-3 gy-3">
						{data.projects.map((project) => (
							<div>{project.id} {project.title}</div>
						))}
						<div className="col-sm-3">
							<div className="project-card">
								<h4>Music Visualizer</h4>
								<img className="img-fluid" src={"images/music-visualizer-1.jpg"} alt="Failed loading" />
							</div>
						</div>
						<div className="col-sm-3">
							<div className="project-card">
								<h4>Music Visualizer</h4>
								<img className="img-fluid" src={"images/music-visualizer-1.jpg"} alt="Failed loading" />
							</div>
						</div>
						<div className="col-sm-3">
							<div className="project-card">
								<h4>Music Visualizer</h4>
								<img className="img-fluid" src={"images/music-visualizer-1.jpg"} alt="Failed loading" />
							</div>
						</div>
						<div className="col-sm-3">
							<div className="project-card">
								<h4>Music Visualizer</h4>
								<img className="img-fluid" src={"images/music-visualizer-1.jpg"} alt="Failed loading" />
							</div>
						</div>
						<div className="col-sm-3">
							<div className="project-card">
								<h4>Music Visualizer</h4>
								<img className="img-fluid" src={"images/music-visualizer-1.jpg"} alt="Failed loading" />
							</div>
						</div>
						<div className="col-sm-3">
							<div className="project-card">
								<h4>Music Visualizer</h4>
								<img className="img-fluid" src={"images/music-visualizer-1.jpg"} alt="Failed loading" />
							</div>
						</div>
						<div className="col-sm-3">
							<div className="project-card">
								<h4>Music Visualizer</h4>
								<img className="img-fluid" src={"images/music-visualizer-1.jpg"} alt="Failed loading" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
