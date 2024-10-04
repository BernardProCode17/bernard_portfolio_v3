import { SkillTypes } from "@/types/skillTypes";
import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";

type SkillCardProps = { skill: SkillTypes; };

export default function SkillCard({ skill }: SkillCardProps) {
    const { title, skill_image, ...rest } = skill;
    const imageUrl = skill_image?.image ? urlFor(skill_image.image).url() : '';

    return (
        <div className="skill_card">
            <Image src={imageUrl} alt={skill_image.alt} width={200} height={200} className="project_card_image" />
            <h3>{title}</h3>
        </div>
    )
}