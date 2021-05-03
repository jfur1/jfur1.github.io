import Fade from 'react-reveal/Fade';
import CuLogo from '../img/cu-boulder-logo.png';
import { ReactComponent as GoogleSvg } from '../img/google-icon.svg';
import { ReactComponent as StanfordSvg } from '../img/stanford.svg';
import EducationPng from '../img/education.png';

export function Education(props) {

    return (
        <div className="main">
            <Fade bottom duration={1600}>
                <div className="tab-main mb-5">
                    <div className="skills-img">
                        <img src={EducationPng} alt="education" height="500px" width="100%"/>
                    </div>
                    <div className="tab-text ml-2">
                        <h1 style={{textAlign: "center"}}>Education</h1>
                        <h4 style={{textAlign: "center"}}>                             
                            Basic Qualifications and Certifications
                        </h4>
                    </div>
                </div>
            </Fade>
            <Fade bottom duration={1800} delay={300}>
                <h2 style={{textAlign: "center", marginTop:"60px"}}>Completed Degree</h2>
            </Fade>
            <Fade bottom duration={1600}>
                <div className="edu-container">
                    <div className="tab-img" style={{textAlign: "center"}}>
                        <img src={CuLogo} alt="CU Boulder" width="100%"></img>
                    </div>
                    <div className="edu-card">
                        <div className="edu-card-header">
                            <div className="edu-card-title">
                                <h3 className="pt-2 px-2" style={{fontSize: "min(2.5vw, 155px);"}}>University of Colorado Boulder</h3>
                                <h4 className="px-3">B.A. Computer Science</h4>
                            </div>
                            <div className="edu-card-date pl-4" style={{alignSelf: "center"}}>
                                <h6>2016-2020</h6>
                            </div>
                        </div>
                        <div className="edu-card-body">
                            <p className="mb-4">🔸 &nbsp;&nbsp;2020 Computer Science graduate seeking full time work in a related field</p>
                            <p className="mb-4">🔸 &nbsp;&nbsp;Studied fundamentals such as data structures, algorithms, computer architecture, and operating systems</p>
                            <p className="mb-4">🔸 &nbsp;&nbsp;Related interests in topics like machine learning, artificial intelligence, database design, and full stack development</p>
                        </div>
                    </div>
                </div>
                <Fade bottom duration={1800} delay={300}>
                <h2 className="mt-5 mb-1 pt-5" style={{textAlign: "center"}}>Certifications</h2>
                </Fade>
                <div className="projects">
                    <div className="certification-card">
                        <a href="https://www.coursera.org/account/accomplishments/verify/K68FHP5DWLLE" target="_blank" rel="noreferrer">
                            <div className="certification-img" style={{backgroundColor: "darkseagreen"}}>
                                <GoogleSvg height="6rem" width="6rem"/>
                            </div>
                        </a>
                        <div className="certification-title">
                            <h5>Google IT Support</h5>
                            <p>Google</p>
                        </div>
                    </div>
                    <div className="certification-card">
                        <a href="https://www.coursera.org/learn/machine-learning/home/welcome" target="_blank" rel="noreferrer">
                            <div className="certification-img" style={{backgroundColor: "rgb(199, 91, 91)"}}>
                                <StanfordSvg height="6rem" width="6rem"/>
                            </div>
                        </a>
                        <div className="certification-title">
                            <h5>Machine Learning (In Progress)</h5>
                            <p>Andrew Ng</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}