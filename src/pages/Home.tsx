import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.scss";
import { Link, useParams } from "react-router-dom";

import * as data from ".././data/data.json";
import { Project } from "../types/Project";
import ViewProject from "../components/ViewProject";

// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
	const [currentViewedProject, setCurrentViewedProject] = useState(0);
    const { stack } = useParams();
    const [projects] = useState<Project[]>(data.projects.filter(x => stack == undefined || x.group == stack));


	function handleClick() {
		// e.stopPropagation();
		setCurrentViewedProject(0)
	}

	return (
		<>
			{/* Photo of me */}
			<div className="profile-section-bg" style={{ backgroundImage: "url(/portfolio-2025/images/music-visualizer-1.jpg)"}}>
				<div className="container">
					<div className="profile-section">
					<div className="row">
						<div className="col-6 col-sm-6 col-md-2"> 
							<img className="img-fluid mx-auto mt-3" height={150} src="/portfolio-2025/images/me-4.jpg" alt="Failed" />
						</div>
						<div className="col-12 col-md-9">
							<ul className="socials-list">
								<li><a href="https://github.com/RegAse"><FaGithub /></a></li>
								<li><a href="https://www.linkedin.com/in/gudmundur-axel-gudrunarson/"><FaLinkedin /></a></li>
							</ul>
							<h2 className="mt-3">Guðmundur Axel Guðrúnarson</h2>
							<h6 className="subtitle">B.Sc. Computer Science, Full-Stack Web Developer, Indie Game Developer</h6>
							<p className="mt-3">
								Hi! <br></br>
								My name is Guðmundur, I am a web and software developer, I have a B.Sc. Degree in Computer Science from Reykjavík University along with that I also attended
								Computer Path at Tækniskólinn where I first learned how to code. <br></br><br></br>

								I am a problem solver at heart, I excell working in teams and also independently. I am proficient in various programming languages and am fast at adapting so if
								there is something I haven't familiaried myself with yet then I can get up to speed fast.
								<br></br>
								<br></br>
								Get in touch with me on LinkedIn or email me if you are interested in having a chat!
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
							<li className="col-6 col-sm-3"><Link to={"/"} className={(stack == "" || stack == undefined ? "active" : "")}>Highlighted</Link></li>
							<li className="col-6 col-sm-3"><Link to={"/stack/front-end"} className={(stack == "front-end" ? "active" : "")}>Front-End</Link></li>
							<li className="col-6 col-sm-3"><Link to={"/stack/back-end"} className={(stack == "back-end" ? "active" : "")}>Back-End</Link></li>
							<li className="col-6 col-sm-3"><Link to={"/stack/game-dev"} className={(stack == "game-dev" ? "active" : "")}>Game Dev</Link></li>
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
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
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

				<div className="skills-section mt-5">
					<h3>Skills</h3>
					<p>Technologies I am familiar with</p>
					<div className="row">
						<h5>Programming Languages</h5>
						<ul className="skills-list">
							{data["progs"].map((lang) => (
								<li>
									<img width={80} height={40} src={lang.icon} alt="Failed" />
									<p className="mt-2">{lang.title}</p>
								</li>
							))}
							{/* <li>TypeScript</li>
							<li>SCSS</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>Node.js</li>
							<li><img height={50} src="/portfolio-2025/svgs/c-sharp.svg" alt="Failed" /></li>
							<li>Java</li>
							<li>PHP</li>
							<li>
								<img height={50} src="/portfolio-2025/svgs/python.svg" alt="Failed" />
								<p className="mt-2">Python</p>
							</li>
							<li>
								<img height={50} src="/portfolio-2025/svgs/c-plusplus.svg" alt="Failed" />
								<p className="mt-2">C++</p>
							</li> */}
						</ul>
					</div>
					<div className="row">
						<h5>Frameworks</h5>
						<ul className="skills-list">
							{data["frameworks"].map((lang) => (
								<li>
									<img width={80} height={40} src={lang.icon} alt="Failed" />
									<p className="mt-2">{lang.title}</p>
								</li>
							))}
							{/* <li><img height={50} src="/portfolio-2025/svgs/react.svg" alt="Failed" /></li>
							<li>Next.js</li>
							<li>Laravel</li> */}
						</ul>
					</div>
					<div className="row">
						<h5>Programs</h5>
						<ul className="skills-list">
							{data["programs"].map((lang) => (
								<li>
									<img width={80} height={40} src={lang.icon} alt="Failed" />
									<p className="mt-2">{lang.title}</p>
								</li>
							))}
							{/* <li><img height={50} src="/portfolio-2025/svgs/react.svg" alt="Failed" /></li>
							<li>TypeScript</li>
							<li>SCSS</li>
							<li>CSS</li>
							<li>Node.js</li>
							<li>Next.js</li>
							<li>Figma</li>
							<li>PostgreSQL</li>
							<li><img height={50} src="/portfolio-2025/svgs/c-sharp.svg" alt="Failed" /></li>
							<li>MYSQL</li>
							<li>Git</li>
							<li>Java</li>
							<li>PHP</li>
							<li>Laravel</li>
							<li>MVC</li>
							<li>Python</li>
							<li>C++</li>
							<li>sk-learn</li>
							<li>API</li> */}
						</ul>
					</div>
				</div>

				{(currentViewedProject != 0) &&
					<>
						<ViewProject project={data.projects[currentViewedProject - 1]} handleClick={handleClick}></ViewProject>
					</>
				}

				<footer className="mt-5">
					
				</footer>
			</div>
		</>
	)
}

export default Home
