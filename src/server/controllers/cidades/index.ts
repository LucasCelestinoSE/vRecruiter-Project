import * as create from "./create"
import * as GetAll from "./GetAll"
import * as GetById from "./GetById"
import * as UpdateById from './UpdateById'
import * as DeleteById from './DeleteById'
export const cidadeController ={
     ...create,
     ...GetAll,
     ...GetById,
     ...UpdateById,
     ...DeleteById
}