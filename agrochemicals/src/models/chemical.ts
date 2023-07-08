import { Severity, modelOptions, prop } from "@typegoose/typegoose";
import { getModelForClass} from "@typegoose/typegoose";


@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Chemical {
  @prop()
  activeSubstance: string;
  @prop()
  crops: string[];
  @prop()
  cides: string;
  @prop({ type: () => Array })
  targets: string[];
  @prop()
  percentage: number
}

let ChemicalModel = global.mongoose.conn?.model("Chemical");
if (!global.mongoose.conn?.model("Chemical")) {
  ChemicalModel = getModelForClass(Chemical)
}

export default ChemicalModel!