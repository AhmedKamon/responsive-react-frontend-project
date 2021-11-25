import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

function Footer() {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in the future before others </h1>
            </div>
            <div className='gpt3__footer-btn'> 
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3Logo} alt="logo" />
                    <p>Crechterwoork K12 Banarupa, Rangamati || All Rights Reserved </p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Get In Touch</h4>
                    <p>Banarupa, Rangamati</p>
                    <p>01878278574</p>
                    <p>ahmedkamon3@gmail.com</p>
                </div>
            </div>
            <div className='gpt3__footer-copyright'>
                <p>2021 GPT-3, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
