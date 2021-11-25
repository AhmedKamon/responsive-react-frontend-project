import './possibility.css'
import possibilityImage from '../../assets/possibility.png'


function Possibility() {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibilityImage" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request early access to get started</h4>
                <h1 className='gradient__text'>The possibilites are beyond your imaginiation</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quas voluptatem possimus et iusto optio?</p>
                <h4>Request early access to get started</h4>
            </div>
        </div>
    )
}

export default Possibility
