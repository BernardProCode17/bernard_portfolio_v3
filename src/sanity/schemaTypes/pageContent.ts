import { defineType, defineField } from "sanity";
import { PageContentType } from "./schemaTypesDefine";
import { BlockContentIcon } from '@sanity/icons'

export const pageContent = defineType({
    name: 'pageContent',
    title: 'Page Content',
    type: 'document',
    icon: BlockContentIcon,
    fields: [
        defineField({
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string'
        }),
        defineField({
            name: 'pageSection',
            title: 'Page Section',
            type: 'array',
            of: [
                { type: 'PageContentType' }
            ]

        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image_url',
                            title: 'Image URL',
                            type: 'image'
                        }),
                        defineField({
                            name: 'alt',
                            title: 'ALT Text',
                            type: 'string'
                        }),
                    ]
                }]
        })
    ]
})