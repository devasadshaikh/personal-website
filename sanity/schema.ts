import { type SchemaTypeDefinition } from 'sanity'
import { homeSection } from './homeSection'
import { skillSection } from './skillSection'
import { projectSection } from './projectSection'

export const dynamic = "force-dynamic"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ homeSection , skillSection , projectSection],
}
