// type ArticleProps = {
//     articleContent: {
//         title: string,
//         content: string
//     }
// }
type ArticleProps = {
    title: string,
    content: string
}


export default function ContentArticle({ title, content }: ArticleProps) {
    // const { title, content } = articleContent;
    // console.log(articleContent);

    return (
        <article className="project_content">
            <h3 className="content_title">{title}</h3>
            <p className="content_text">{content}</p>
        </article>
    )
}