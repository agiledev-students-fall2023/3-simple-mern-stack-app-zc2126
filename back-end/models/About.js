const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
  {
    pic: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
)

// create mongoose Model
const About = mongoose.model('About', aboutSchema)

// export the model so other modules can import it
module.exports = {
  About,
}
