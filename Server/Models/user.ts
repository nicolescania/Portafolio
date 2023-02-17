import mongoose from "mongoose";
const Schema = mongoose.Schema;

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
    collection: "movies"
});


const Model = mongoose.model("Movies", UserSchema);
export default Model;