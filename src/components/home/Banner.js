import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import bannerDark from '../../img/banner_dark.png';
import bannerWhite from '../../img/banner_white.png';
import TextLoop from "react-text-loop";

const Banner = ({mode}) => {
    const [ontions, setOptions] = useState([
        '웹 개발자 💻 입니다.',
        '클린 코드를 📝 만듭니다.',
        '풀스택 개발자를 🌟 꿈꿉니다.',
        '신뢰와 협동을 👪 중요시합니다.'
    ]);

    return (
        <section className={mode === true ? "banner" : "banner dark"}>
            <div className="container">
                <div className="banner__intro">
                    <div className={mode === true ? "banner__subject" : "banner__subject dark"}>
                        <span><h1 className="banner__title">안녕하세요.</h1>
                            &nbsp;&nbsp;
                            <TextLoop mask={true} children={ontions} />
                        </span>
                        <p>마이크로서비스와 DevOps에 관심이 많습니다.</p>
                        <p>임베디드 > 응용프로그램 > 웹개발을 합니다.</p>
                        <p>항상 많이 배우겠습니다.</p>
                        <div className="banner__buttons">
                            <Link className={mode === true ? "btn" : "btn dark"} to="/skills">GO SKILLS</Link>
                            <Link className={mode === true ? "btn" : "btn dark"} to="/projects">VIEW PROJECTS</Link>
                        </div>
                    </div>
                </div>
                <div className="banner__gallery">
                    <img src={mode === true ? bannerWhite : bannerDark} alt="banner image" className="banner__image"/>
                </div>
            </div>
        </section>
    );
};

export default Banner;
