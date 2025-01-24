import React from 'react'
import './Gallery.css'
import { Container } from 'react-bootstrap';
import AllImages from "../../assets/Routes/AllImages"
const Gallery = () => {
  return (
    <>
    <div className='heading1' >
      <p className='fs-2 mt-5 mb-5 mx-5 text-center '>"Through the Innocent Eyes: A Gallery of Hope, Empowerment, and a World Free from Child Labour."</p>
    </div>
    <Container fluid className="projects-container">
        <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
          <div className="row custom-margin-bottom">
            {AllImages.map((project) => (
              <div className="col project-col" key={project.id}>
                <div className="project-card">
                  <div className="imgsec">
                    <img src={project.img} alt={project.title} loading="lazy" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      </>
  )
}

export default Gallery


