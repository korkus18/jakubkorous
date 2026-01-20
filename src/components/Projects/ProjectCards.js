import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            {/* Normal project screenshot */}
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />

            {/* Company logo in the top-right corner, for example */}
            <img
                src={props.companyLogo}
                alt="company logo"
                style={{
                    position: "absolute",
                    top: "-15px",
                    right: "-15px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    zIndex: 99,
                }}
            />

            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>


                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;Demo
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
