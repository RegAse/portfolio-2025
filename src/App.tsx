// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Link } from "react-router-dom";

import * as data from "./data/data.json";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			{/* Photo of me */}
			<div className="profile-section-bg" style={{ backgroundImage: "url(images/music-visualizer-1.jpg)"}}>
				<div className="container">
					<div className="profile-section">
					<div className="row">
						<div className="col-md-2">
							<img className="img-fluid mx-auto" height={150} src="images/me-4.jpg" alt="Failed" />
						</div>
						<div className="col-md-9">
							<h2>Guðmundur Axel Guðrúnarson</h2>
							<p>I work hard and one of my best skills is to always keep learning and adapting to tech and 
								thus I am very comfortable with working on various languages or frameworks. And not only limited 
								to the ones that I am already experienced in such as React, TypeScript, SCSS (CSS), Node.js, Next.js,
									Figma, PostgreSQL, C#, MYSQL, Git, Java, PHP, Laravel, MVC, Python, C++, sk-learn, API.
							</p>
						</div>
					</div>
					</div>
				</div>
			</div>

			<div className="container">
				{/* Tabs: Full-Stack, Front-End, Back-End, Game Dev */}
				<div className="tab-section">
					<div className="row">
						<ul className="tab-links">
							<li className="col-sm-3"><Link to={"stack/full-stack"} className="active">Highlighted</Link></li>
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
					<h6 className="mb-3 mt-3">Highlighted Projects</h6>
					<div className="row gx-3 gy-3">
						{data.projects.map((project) => (
							<div className="col-sm-3">
								<div className="project-card" style={{ backgroundImage: `url(${project.cover})`}}>
									{/* <img className="img-fluid" src={project.cover} alt="Failed loading" /> */}
									<h6>{project.title}</h6>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
