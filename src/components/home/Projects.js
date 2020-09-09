import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

const CustomSlide = ({id, description, images, member, skills, timeRange, title, mode}) => {
    return (
        <Link className={"projects-info__item " + (mode === true ? "" : "dark")}>
            <div className="projects-info__image-box">
                <img className="projects-info__image" src={images[0].path} alt="image"/>
            </div>
            <div className="projects-info__content">
                <div className={"projects-info__title " + (mode === true ? "" : "dark")}>
                    <h1>{title}</h1>
                </div>
                <div className="projects-info__detail">
                    <span className={"projects-info__period " + (mode === true ? "" : "dark")}>
                        <i className="fas fa-calendar" />
                        &nbsp;&nbsp;{timeRange.startDate} ~ {timeRange.endDate}
                    </span>
                    <span className={"projects-info__member " + (mode === true ? "" : "dark")}>
                        <i className="fas fa-user-friends" />
                        &nbsp;<span>{member}</span>
                    </span>
                </div>
                <ul className={"projects-info__skills " + (mode === true ? "" : "dark")}>
                    {skills.map(skill => (
                        <li className="projects-info__skill">
                            <div>
                                <img src={skill.path} alt="skill" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}

const SampleNextArrow = ({className, onClick, mode}) => {
    return (
        <div
            className={className + " projects-info__next " + (mode === true ? "" : "dark")}
            onClick={onClick}
        ><i className={"fas fa-angle-right " + (mode === true ? "" : "dark")} /></div>
    );
}

const SamplePrevArrow = ({className, onClick, mode}) => {
    return (
        <div
            className={className + " projects-info__prev " + (mode === true ? "" : "dark")}
            onClick={onClick}
        ><i className={"fas fa-angle-left " + (mode === true ? "" : "dark")} /></div>
    );
}

const Projects = ({mode, projects}) => {

    console.log(projects);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        autoplay: true,
        nextArrow: <SampleNextArrow mode={mode} />,
        prevArrow: <SamplePrevArrow mode={mode} />,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <section className={mode === true ? "projects-info" : "projects-info dark"}>
            <div className="container">
                <h1 className={mode === true ? "projects-info__subject" : "projects-info__subject dark"}>What I Made</h1>
                <Slider {...settings}>
                    {projects.map((project, index) => <CustomSlide {...project} mode={mode} key={index}/>)}
                </Slider>
            </div>
        </section>
    );
};

export default Projects;
