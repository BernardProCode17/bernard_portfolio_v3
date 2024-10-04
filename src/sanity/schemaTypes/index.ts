import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {projectsType} from './projectsTypes'
import {ArticleContent, featuretype, skillFilters} from './schemaTypesDefine'
import { skillsType } from './skillsType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, ArticleContent, featuretype, skillFilters, projectsType, skillsType],
}
