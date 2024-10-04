type skillprops = {
    skill: {
        name: string,
        logo: string
    }
}
export default function SkillCard({ skill }) {
    return (
        <div className="skill_card">
            <Image src={skill.logo} alt='placeholder' width={100} height={100} />
            <h3>{skill.name}</h3>
        </div>
    )
}