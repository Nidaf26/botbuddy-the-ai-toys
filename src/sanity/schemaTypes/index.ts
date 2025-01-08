import { type SchemaTypeDefinition } from 'sanity';
import  LittleExplorers from './LittleExplorers';
import  youngInnovaters from "./YoungInnovators"
import TechTrialBlazer from "./Techtrailblazers"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ LittleExplorers, youngInnovaters,TechTrialBlazer],
}
