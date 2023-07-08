import { prop } from "@typegoose/typegoose";
import { getModelForClass} from "@typegoose/typegoose";


export class User {
  @prop()
  name: string;
  @prop()
  email: string;
  @prop()
  password: string;  
}

let UserModel = global.mongoose.conn?.model("User");
if (!global.mongoose.conn?.model("User")) {
  UserModel = getModelForClass(User)
}

export default UserModel!
