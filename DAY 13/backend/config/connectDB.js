// import mongoose from 'mongoose'
// import colors from 'colors'
// import app from '../index.js' // Import your Express app (replace 'app' with the actual name of your app file)

// const PORT = process.env.PORT || 3000

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/stdmanagement')
//     console.log(`Connected to MongoDB Database`.bgMagenta.white)

//     app.listen(PORT, () => {
//       console.log(
//         `Server Running on http://127.0.0.1:${PORT} in ${process.env.NODE_ENV} mode`
//           .yellow
//       )
//     })
//   } catch (err) {
//     console.log(`MongoDB Connect Error: ${err}`.bgRed.white)
//   }
// }

// export default connectDB


import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/stdmanagement')
    console.log(`Connected to MongoDB Database`.bgMagenta.white)
  } catch (err) {
    console.log(`MongoDB Connect Error: ${err}`.bgRed.white)
  }
}

export default connectDB
