import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiHtml5,
    SiCss3,
    SiPhp,
    SiMysql,
    SiTailwindcss,
    SiWordpress,

    SiJson,
    SiRedis,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";

function Techstack() {
    const techSkills = [
        { icon: <SiHtml5 />, label: "HTML5" },
        { icon: <SiCss3 />, label: "CSS3" },
        { icon: <DiJavascript1 />, label: "JavaScript" },
        { icon: <DiReact />, label: "React.js" },
        { icon: <DiNodejs />, label: "Node.js" },
        { icon: <SiPhp />, label: "PHP" },
        { icon: <SiMysql />, label: "MySQL" },
        { icon: <DiPython />, label: "Python" },
        { icon: <DiGit />, label: "Git" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
        { icon: <SiWordpress />, label: "WordPress" },
        { icon: <FaVuejs />, label: "Vue.js" },
        { icon: <SiNuxtdotjs />, label: "Nuxt.js" },
        { icon: <SiJson />, label: "JSON" },
        { icon: <SiRedis />, label: "Redis" },
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techSkills.map((tech, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-${index}`}>{tech.label}</Tooltip>}
                    >
                        <div>{tech.icon}</div>
                    </OverlayTrigger>
                </Col>
            ))}
        </Row>
    );
}

export default Techstack;
