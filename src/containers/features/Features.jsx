import { Feature } from '../../components'
import './features.css'

const featuresData =[
    {
        title:'Improving end distrusts instantly',
        text:'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'
    },
    {
        title:'Become the tender active',
        text:'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'
    },
    {
        title:'Message or an nothing',
        text:'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'
    },
    {
        title:'Really boy law country',
        text:'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'
    },
    {
        title:'Improving end distrusts instantly',
        text:'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'
    },
]

function Features() {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gpt3__features-container'>
                {
                    featuresData.map((item,index) =>(
                       <Feature key={item.title + index} title={item.title} text={item.text}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Features
