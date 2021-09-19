import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";



function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";

  const [hackerrank, upadteHackerank] = useState(0);
 


  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {

        upadteHackerank(res.data.message[1].hackerrank);
     
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
         
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
           
            
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Machine Learning & AI[LPU,Phagwara] "
              date="2020 - Present"
              content={[`CGPA: 8.7 (Till 2th Sem)`]}
            />

            

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
               
                `Current rank in HackerRank  ${hackerrank}`,
                
              
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
