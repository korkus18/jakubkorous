import React from "react";

function Timeline() {
    const timelineData = [
        {
            side: "right",
            date: "Jan 2023 - Present",
            title: "Freelance",
            subtitle: "Full-stack Developer",
            description: "Building and maintaining B2B SaaS tools and internal systems. End-to-end product development with Django, Vue.js, PostgreSQL, and Docker. Strong focus on automation, maintainability, and shipping real products.",
        },
        {
            side: "right",
            date: "Apr 2025 - Feb 2026",
            title: "Leadspicker",
            subtitle: "Full-stack Developer / Product Builder",
            description: "Building a B2B SaaS focused on lead generation and marketing automation. End-to-end development with Django, Vue.js, PostgreSQL, and Docker. Focus on automation, scalability, and real business impact.",
        },
        {
            side: "left",
            date: "Sep 2024 - Present",
            title: "University of South Bohemia",
            subtitle: "Enterprise Informatics",
            description: "Focus on data, analytics, systems thinking, and software engineering with business context.",
        },
        {
            side: "right",
            date: "Dec 2023 - Mar 2025",
            title: "Argo22 s.r.o.",
            subtitle: "Web Application Developer",
            description: "Full-stack web application development using HTML, CSS, JavaScript, Vue, and React. Backend work with Django and PHP. E-commerce projects and internal tools with emphasis on maintainability.",
        },
        {
            side: "right",
            date: "Nov 2022 - Dec 2023",
            title: "Virtuell s.r.o.",
            subtitle: "Frontend / Web Developer",
            description: "End-to-end web development using HTML, CSS, and JavaScript. Collaboration on Django-based backends.",
        },
        {
            side: "right",
            date: "Nov 2022 - Dec 2023",
            title: "Alpod.net",
            subtitle: "Web Developer",
            description: "WordPress development, custom templates, responsive websites. Real client delivery, not demo projects.",
        },
        {
            side: "left",
            date: "Sep 2020 - Jun 2024",
            title: "SOŠE COP Hluboká nad Vltavou",
            subtitle: "Information Technology",
            description: "Programming, networking, system administration, and software development fundamentals.",
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
