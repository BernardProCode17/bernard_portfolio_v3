import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {projectsType} from './projectsTypes'
import {ArticleContent, featuretype} from './ArticleContent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, ArticleContent, featuretype, projectsType],
}
