import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
    SiJetbrains,
    SiNotion,
    SiAtlassian,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <OverlayTrigger placement="top" overlay={<Tooltip>macOS</Tooltip>}>
                    <div>
                        <SiMacos />
                    </div>
                </OverlayTrigger>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <OverlayTrigger placement="top" overlay={<Tooltip>JetBrains</Tooltip>}>
                    <div>
                        <SiJetbrains />
                    </div>
                </OverlayTrigger>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <OverlayTrigger placement="top" overlay={<Tooltip>Notion</Tooltip>}>
                    <div>
                        <SiNotion />
                    </div>
                </OverlayTrigger>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <OverlayTrigger placement="top" overlay={<Tooltip>Atlassian</Tooltip>}>
                    <div>
                        <SiAtlassian />
                    </div>
                </OverlayTrigger>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <OverlayTrigger placement="top" overlay={<Tooltip>Slack</Tooltip>}>
                    <div>
                        <SiSlack />
                    </div>
                </OverlayTrigger>
            </Col>
        </Row>
    );
}

export default Toolstack;
