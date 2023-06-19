import { MongoClient} from 'mongodb'
import { type } from 'os'

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

type chemicalDocument = {
  commercialName : string,
  activeSubstance : string,
  crops: Array,
  percentage: number,
  cides: string,
  targets: Array,
  _id: ObjectId

}

export const chemicalDocument