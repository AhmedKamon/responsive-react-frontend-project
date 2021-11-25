import './article.css'

function Article({imagUrl, date, title}) {
    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img src={imagUrl} alt="blog" />
            </div>
            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{date}</p>
<h3>{title
}</h3>
                </div>
            </div>
        </div>
    )
}

export default Article
