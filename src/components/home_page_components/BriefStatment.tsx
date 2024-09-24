import PageSections from "../minor components/PageSections";

export default function BriefStatement() {

    return (
        <PageSections cssClass="brief_statement">
            <h2 className="statement_title">Brief Statement</h2>
            <p className="statment_content">Discovering web development a few years ago, I was interested, so I
                attended <abbr title="British Columbia Institute of Technology">BCIT</abbr> to learn
                programming and graduated with distinction.
            </p>
            <p>Now I&apos;m building web apps and learning new programming tech, expanding my skillset and experience.</p>

        </PageSections>
    )
}