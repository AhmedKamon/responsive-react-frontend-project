import './brand.css'
import {google, slack, atlassianck, dropbox, shopify} from './import'

function Brand() {
    return (
        <div className='gpt3__brand section__padding' >
           <div>
               <img src={google} alt="google" />
           </div>
           <div>
               <img src={slack} alt="slack" />
           </div>
           <div>
               <img src={atlassianck} alt="atlassianck" />
           </div>
           <div>
               <img src={dropbox} alt="dropbox" />
           </div>
           <div>
               <img src={shopify} alt="shopify" />
           </div>
        </div>
    )
}

export default Brand
