import style from '../assets/css/skill.css';
import meter1 from '../assets/img/meter1.svg';

const Skill = () => {
    return (
        <section className="skill">
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
                </ul>
            </div>
        </section>
    );
}

export default Skill;