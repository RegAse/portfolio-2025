import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.scss";
import { Link, useParams } from "react-router-dom";

import * as data from ".././data/data.json";
import { Project } from "../types/Project";

function Home() {
	const [currentViewedProject, setCurrentViewedProject] = useState(0);
    const { stack } = useParams();
    const [projects, setProjects] = useState<Project[]>(data.projects.filter(x => stack == undefined || x.group == stack));

	function handleClick(e : React.MouseEvent<HTMLElement>) {
		e.stopPropagation();
		setCurrentViewedProject(0)
	}

	return (
		<>
			{/* Photo of me */}
			<div className="profile-section-bg" style={{ backgroundImage: "url(/images/music-visualizer-1.jpg)"}}>
				<div className="container">
					<div className="profile-section">
					<div className="row">
						<div className="col-md-2">
							<img className="img-fluid mx-auto" height={150} src="/images/me-4.jpg" alt="Failed" />
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
							<li className="col-sm-3"><Link to={"/"} className={(stack == "" || stack == undefined ? "active" : "")}>Highlighted</Link></li>
							<li className="col-sm-3"><Link to={"/stack/front-end"} className={(stack == "front-end" ? "active" : "")}>Front-End</Link></li>
							<li className="col-sm-3"><Link to={"/stack/back-end"} className={(stack == "back-end" ? "active" : "")}>Back-End</Link></li>
							<li className="col-sm-3"><Link to={"/stack/game-dev"} className={(stack == "game-dev" ? "active" : "")}>Game Dev</Link></li>
						</ul>
					</div>
				</div>

				{/* Front-End: TV Show Website,  */}

				{/* Back-End: TV Show Website */}

				{/* Game Dev:  */}


				{/* Tab Content grid of projects possibly gifs when hovered over or just thumbnails and able to enlarge it if clicked....*/}
				<div className="projects-section">
					<h6 className="mb-3 mt-3">Projects</h6>
					<div className="row gx-3 gy-3">
						{projects.map((project) => (
							<div className="col-sm-3">
								<div className="project-card" 
									style={{ 
										backgroundImage: `url(${project.cover})`,
										// scale: (currentViewedProject == project.id ? 2.0 : 1.0),
										// zIndex: (currentViewedProject == project.id ? 2.0 : 1.0),
									}} onClick={() => setCurrentViewedProject(project.id)}>
									{/* <img className="img-fluid" src={project.cover} alt="Failed loading" /> */}
									<div style={{ fontSize: (currentViewedProject == project.id ? "0.5em" : "1em")}}>
										<h6 className={(project["highlight-text"] == true ? "highlight-text" : "")}>{project.title}</h6>
										<div className="project-tags">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <div>{tag}</div>
                                            ))}
                                        </div>
									</div>
									{/* {(project.id == currentViewedProject) &&
										<div className="project-card-info">
											<p>{project.description}</p>
										</div>
									} */}
								</div>
							</div>
						))}
					</div>
				</div>

				{(currentViewedProject != 0) &&
					<>
						<div className="project-modal-overlay" onClick={handleClick}>
							
						</div>
						<div className="project-modal">
							<button className="btn btn-exit" onClick={handleClick}>X</button>
							<div className="project-modal-content">
								<div className="row">
									<div className="col-sm-7">
										{(data.projects[currentViewedProject - 1].video == "") &&
											<img className="img-fluid mx-auto" src={data.projects[currentViewedProject - 1].cover} alt="Failed" />
										}
										
										{(data.projects[currentViewedProject - 1].video !== "") &&
											<video className="img-fluid mx-auto" autoPlay muted loop>
													<source src={data.projects[currentViewedProject - 1].video} type="video/mp4"/>
													Your browser does not support the video tag.
											</video>
										}
									</div>
									<div className="col-sm-5">
										<h3 className="mt-2">{data.projects[currentViewedProject - 1].title}</h3>
										<p>{data.projects[currentViewedProject - 1].description}</p>
										{(data.projects[currentViewedProject - 1]["live-link"] != "") &&
											<a href={data.projects[currentViewedProject - 1]["live-link"]}>Check it out here</a>
										}

										{(data.projects[currentViewedProject - 1]["code-link"] != "") &&
											<a href={data.projects[currentViewedProject - 1]["code-link"]}>View Source Code</a>
										}
									</div>
									{(data.projects[currentViewedProject - 1]["images"].length > 0) &&
										<div className="project-images col-sm-12 mt-5">
											<h5 className="text-center">Project Images</h5>
											<div className="row">
											{data.projects[currentViewedProject - 1]["images"].map((image) => (
												<div className="project-images-item col-sm-6 mt-3">
													<img className="img-fluid mx-auto" src={image} alt="Failed" />
												</div>
											))}
											</div>
										</div>
									}
								</div>
							</div>
						</div>
					</>
				}
				<footer className="mt-5">

				</footer>
			</div>
		</>
	)
}

export default Home
