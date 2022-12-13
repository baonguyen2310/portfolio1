import style from '../assets/css/banner.css';
import arrowIcon2 from '../assets/img/arrow2.svg';
import headerImg from '../assets/img/header-img.svg';
import { useState, useEffect } from 'react';


const Banner = () => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            document.querySelector(".banner-btn").classList.add("banner-btn-clicked");
        } else {
            document.querySelector(".banner-btn").classList.remove("banner-btn-clicked");
        }
    }, [clicked]);

    const bannerButtonClick = (e) => {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    return (
        <section className="banner" id="home">
            <div className="container1">
                <div className="row1">
                    <div className="col1">
                        <div className="animate1">
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>
                                Hi, I'm Bao 
                                <span> Web Developer</span>
                            </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="banner-btn" onClick={(e) => bannerButtonClick(e)}>
                                Let's Connect
                                <img src={arrowIcon2} alt="arrow icon 2"></img>
                            </button>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="animate1">
                            <img src={headerImg} alt="header img" className="header-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;