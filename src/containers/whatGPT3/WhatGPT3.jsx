import { Feature } from '../../components'
import './whatGPT3.css'

function WhatGPT3() {
    return (
        <div className='gpt3__whatgpt3 section__margin ' id='whatgpt3' >
            <div className='gpt3__whatgpt3-feature' >
                <Feature title='What is GPT-3' text='lLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'/>
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
            <Feature title='Chatbot' text='sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown' />

            <Feature title='Knowladgebase' text='sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown' />

            <Feature title='Education' text='sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown' />
            </div>
        </div>
    )
}

export default WhatGPT3
