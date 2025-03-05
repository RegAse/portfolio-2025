import { useState } from "react";
import { Project } from "../types/Project";

interface ViewProjectProps {
    project: Project,
    handleClick: () => void
}

function ViewProject({project, handleClick} : ViewProjectProps) {
    const [videoLoading, setVideoLoading] = useState(true);

    return (
        <>
            <div className="project-modal-overlay" onClick={handleClick}>

            </div>
            <div className="project-modal">
                <button className="btn btn-exit" onClick={handleClick}>X</button>
                <div className="project-modal-content">
                    <div className="row">
                        <div className="col-sm-7">
                            {(project.video == "") &&
                                <img className="img-fluid mx-auto" src={project.cover} alt="Failed" />
                            }

                            {(project.video !== "") &&
                                <div className="video-container">
                                    <div className="video-poster">
                                        {(videoLoading) &&
                                            <span className="loader"></span>
                                        }
                                    </div>
                                    <video className="video-media img-fluid mx-auto" onLoadedData={() => setVideoLoading(false)} autoPlay muted loop>
                                        <source src={project.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            }
                        </div>
                        <div className="col-sm-5">
                            <h3 className="mt-2">{project.title}</h3>
                            <p>{project.description}</p>
                            {(project["live-link"] != "") &&
                                <a href={project["live-link"]}>Check it out here</a>
                            }

                            {(project["code-link"] != "") &&
                                <a href={project["code-link"]}>View Source Code</a>
                            }
                        </div>
                        {(project["images"].length > 0) &&
                            <div className="project-images col-sm-12 mt-5">
                                <h5 className="text-center">Project Images</h5>
                                <div className="row">
                                    {project["images"].map((image) => (
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
    );
}

export default ViewProject;