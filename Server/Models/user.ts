import mongoose, {PassportLocalSchema} from "mongoose";
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({

DisplayName: String,
username: String,
EmailAddress: String,

Created:
{
    type: Date,
    default: Date.now()
},
Updated:
{
    type: Date,
    default: Date.now()
}
},
{
    collection: "user"
});

declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
}

// Plugin the passport local mongoose module
UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", UserSchema  as PassportLocalSchema);
export default Model;