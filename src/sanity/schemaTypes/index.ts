import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {projectsType} from './projectsTypes'
import {ArticleContent, featuretype, skillFilters, PageContentType} from './schemaTypesDefine'
import { skillsType } from './skillsType'
import { pageContent } from './pageContent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, ArticleContent, featuretype, skillFilters, PageContentType, projectsType, skillsType, pageContent],
}
