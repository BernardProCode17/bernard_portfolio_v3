import { defineType, defineField } from "sanity";

export const ArticleContent = defineType({
    name: 'ArticleContent',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),
    ],
});

export const featuretype = defineType({
    name: 'featuretype',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
});

export const skillFilters = defineType({
    name: 'skillFilters',
    type: 'array',
    of: [{
        type: 'string',
        options: {
            list: [
                { title: 'Developmental', value: 'developmental' },
                { title: 'Design', value: 'design' },
                { title: 'Tools', value: 'tools' },
                { title: 'Communication', value: 'communication' },
                { title: 'Collaboration', value: 'Collaboration' },
            ],
        },
    }],
});