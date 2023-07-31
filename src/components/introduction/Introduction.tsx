// @ts-ignore
import avatar from '../../images/avatar.png';

const Introduction = () => {
    return (
        <div className="Hero">
            <div className="HeroHeader">
                <h1>Frontend Developer</h1>
                <p>I design and code beautifully simple things, and I love what I do.</p>
            </div>
            <img src={avatar} alt="my avatar"/>
        </div>
    )
}

export default Introduction;