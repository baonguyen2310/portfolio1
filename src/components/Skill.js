import style from '../assets/css/skill.css';
import meter1 from '../assets/img/meter1.svg';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';

import { useState, useEffect } from 'react';

const Skill = () => {
    const [skillListX, setSkillListX] = useState(0);

    const skillSliderList = document.querySelector(".skill-slider-list");
    const handleArrowLeft = () => {
        setSkillListX(prev => prev + 223);
        skillSliderList.style.transform = `translateX(${skillListX}px)`;
    }

    const handleArrowRight = () => {
        setSkillListX(prev => prev - 223);
        skillSliderList.style.transform = `translateX(${skillListX}px)`;
    }

    return (
        <section className="skill container1">
            <h2>Skills</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br />
                Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div className="skill-slider">
                <ul className="skill-slider-list">
                    <li className="skill-slider-item">
                        <img src={meter1} alt="" />
                        <h5>Web Development</h5>
                    </li>
                    <li className="skill-slider-item">
                        <img src={meter1} alt="" />
                        <h5>Web Development</h5>
                    </li>
                    <li className="skill-slider-item">
                        <img src={meter1} alt="" />
                        <h5>Web Development</h5>
                    </li>
                    <li className="skill-slider-item">
                        <img src={meter1} alt="" />
                        <h5>Web Development</h5>
                    </li>
                    <li className="skill-slider-item">
                        <img src={meter1} alt="" />
                        <h5>Web Development</h5>
                    </li>
                    <li className="skill-slider-item">
                        <img src={meter1} alt="" />
                        <h5>Web Development</h5>
                    </li>
                </ul>
                <button className="arrow-left-btn" onClick={handleArrowLeft}>
                    <img src={arrow1} alt="arrow left" />
                </button>
                <button className="arrow-right-btn" onClick={handleArrowRight}>
                    <img src={arrow2} alt="arrow right" />
                </button>
            </div>
        </section>
    );
}

export default Skill;