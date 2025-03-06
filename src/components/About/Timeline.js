import React from "react";

function Timeline() {
    const timelineData = [
        {
            side: "left",
            date: "Sep 2024 - Present",
            title: "University of South Bohemia",
            subtitle: "Enterprise Informatics",
            description: "Focus on IT strategy, data analytics, marketing & economics, software development.",
        },
        {
            side: "right",
            date: "Dec 2023 - Present",
            title: "Argo22 s.r.o.",
            subtitle: "Web App Developer",
            description: "Full stack: HTML, CSS, JS, Tailwind, React, Vue, Node, PHP, Django. E-commerce.",
        },
        {
            side: "right",
            date: "Nov 2022 - Dec 2023",
            title: "Virtuell s.r.o.",
            subtitle: "Frontend Web Developer",
            description: "End-to-end web app development. HTML5, CSS3, JavaScript. Django backend.",
        },
        {
            side: "right",
            date: "Nov 2022 - Dec 2023",
            title: "Alpod.net",
            subtitle: "Web Developer",
            description: "Responsive sites via WordPress & hand-coded HTML/CSS. Template customization.",
        },
        {
            side: "left",
            date: "Sep 2020 - Jun 2024",
            title: "SOŠE, COP, Hluboká nad Vltavou",
            subtitle: "Information Technology",
            description: "Programming, networking, systems administration & graphic design.",
        },
    ];



    return (
        <div className="timeline-container">
            <div className="timeline-line" />

            {timelineData.map((item, index) => {
                const side = item.side;
                return (
                    <div className={`timeline-item ${side}`} key={index}>
                        <div className="timeline-dot" />

                        <div className="timeline-box">
                            <h3>{item.title}</h3>
                            <h5>{item.subtitle}</h5>
                            <p>{item.description}</p>
                        </div>

                        <div className="timeline-date">{item.date}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Timeline;
