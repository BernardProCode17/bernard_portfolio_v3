import { Key } from 'react';
type ArticleProps = { title: string, content: string | string[] }

export default function ContentArticle({ title, content }: ArticleProps) {

    return (
        <article className="project_content">
            <h3 className="content_title">{title}</h3>

            {/* check if content is a string or array */}
            {typeof content === 'string' ? <p className="content_text">{content}</p> :
                <ul className='content_list'>
                    {Array.isArray(content) && content.map((text: string, index: Key) => (
                        <li key={index} className='content_list-item'>{text}</li>
                    ))}
                </ul>
            }
        </article>
    )
}