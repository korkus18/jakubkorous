import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Korous_jakub_CV.pdf";
import pdfEn from "../../Assets/Korous_jakub_CV_en.pdf";
import pdfCs from "../../Assets/Korous_jakub_CV_cs.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [error, setError] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess() {
    setError(null);
  }

  function onDocumentLoadError() {
    setError('Unable to load PDF. Please use the download buttons above.');
  }

  return (
      <div>

        <Container fluid className="resume-section">
          <Particle />
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
                  style={{ maxWidth: "250px", marginTop: "5px"}}
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
                  style={{ maxWidth: "250px", marginTop: "5px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV CS
              </Button>
            </Col>
          </Row>

          <Row className="resume">
            {error ? (
              <div style={{ textAlign: 'center', color: 'white', padding: '40px' }}>
                <p>{error}</p>
              </div>
            ) : (
              <Document 
                file={pdf} 
                className="d-flex justify-content-center"
                loading={
                  <div style={{ textAlign: 'center', color: 'white', padding: '40px' }}>
                    <p>Loading CV...</p>
                  </div>
                }
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
              >
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            )}
          </Row>
        </Container>
      </div>
  );
}

export default ResumeNew;
