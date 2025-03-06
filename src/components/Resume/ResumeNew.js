import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Korous_Jakub_CV.pdf";
import pdfEn from "../../Assets/Korous_Jakub_CV_en.pdf";
import pdfCs from "../../Assets/Korous_Jakub_CV_cs.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          {/* Řádek s tlačítky */}
          <Row
              style={{
                justifyContent: "center",
                position: "relative",
                marginBottom: "20px",
              }}
          >
            <Col xs="auto">
              <Button
                  variant="primary"
                  href={pdfEn}
                  target="_blank"
                  style={{ maxWidth: "250px", marginRight: "10px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV EN
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                  variant="primary"
                  href={pdfCs}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV CS
              </Button>
            </Col>
          </Row>

          {/* Náhled PDF – zobrazuje se vždy CV EN */}
          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        </Container>
      </div>
  );
}

export default ResumeNew;
