import { defineField, defineType } from "sanity";
import { featuretype, skillFilters } from "./schemaTypesDefine";
import { inlineSvg } from "./schemaTypesDefine/inlineSVG";
import {SparklesIcon} from '@sanity/icons'

export const skillsType = defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    icon: SparklesIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Skill Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'skill_filters',
            title: 'Skill Filters',
            type: 'skillFilters',
        }),
        defineField({
            name: 'skill_description',
            title: 'Skill Description',
            type: 'string',
            description: 'Description of the skill, 100 characters max',
            validation: (Rule: any) => Rule.max(100).warning('Skill Description should be less than 100 characters'),
        }),
        defineField({
            name: 'feature',
            title: 'Features',
            type: 'featuretype',
        }),
        defineField({
            name: 'skill_image',
            title: 'Skill Image',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                }),
            ]
        }),
    ]
});