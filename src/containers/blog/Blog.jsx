import { Article } from '../../components'
import './blog.css'
import {blog01,blog02,blog03,blog04,blog05} from './imports'

function Blog() {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
           <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>A lot is happening, We are blogging about it</h1>
           </div>
           <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imagUrl={blog01} date='sep 26, 2021' title='GPT-3 and Open Ai is the future. Let us explore how it is?' />
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imagUrl={blog02} date='sep 26, 2021' title='GPT-3 and Open Ai is the future. Let us explore how it is?' />
                    <Article imagUrl={blog03} date='sep 26, 2021' title='GPT-3 and Open Ai is the future. Let us explore how it is?' />
                    <Article imagUrl={blog04} date='sep 26, 2021' title='GPT-3 and Open Ai is the future. Let us explore how it is?' />
                    <Article imagUrl={blog05} date='sep 26, 2021' title='GPT-3 and Open Ai is the future. Let us explore how it is?' />
                </div>
           </div>
        </div>
    )
}

export default Blog
