import PageSections from "../minor components/PageSections";

type pageDataBrief = {
    Title: string,
    Content: string
}
export default function BriefStatement({pageData}: { pageData: pageDataBrief }) {
    const {Title, Content} = pageData;

console.log(pageData)

    return (
        <PageSections cssClass="brief_statement">
            <h2 className="statement_title">{Title}</h2>
            <p className="statement_content">{Content}</p>
        </PageSections>
    )
}