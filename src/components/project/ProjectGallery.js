import React from 'react'
import Slider from "react-slick";

const ProjectGallery = ({mode, project}) => {
    const infinite = project !== null && project.images.length > 3;
    const settings = {
        dots: false,
        infinite: infinite,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="container">
            {project ? <Slider {...settings}>
                {project.images.map((image) => {
                    return (
                        <div key={image.id} className="gallery__image">
                            <img src={image.path} alt='image' />
                        </div>
                    );
                })}
            </Slider> : ''}
        </div>
    );
}

export default ProjectGallery;