import {defineField, defineType} from "sanity";

const urlValidation = (Rule: any) => Rule.uri({
    scheme: ['http', 'https'],
    allowRelative: false,
    message: 'Please enter a valid URL starting with http or https'
});

export const projectsType = defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
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
            name: 'short_des',
            title: 'Short Description',
            type: 'string',
            description: 'Short description of the project, 100 characters max',
            validation: (Rule: any) => Rule.max(100).warning('Short Description should be less than 100 characters'),
        }),
        defineField({
            name: 'long_des',
            title: 'Long Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'feature',
            title: 'Features',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'challenges_solutions',
            title: 'Challenges and Solutions',
            type: 'blockContent',
        }),
        defineField({
            name: 'reflection',
            title: 'Reflections',
            type: 'blockContent',
        }),
        defineField({
            name: 'project_image',
            title: 'Project Image',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                })
            ]
        }),
        defineField({
            name: 'project_links',
            title: 'Project Links',
            type: 'array',
            of: [{type: 'url', validation: urlValidation}],
        }),
    ]
})