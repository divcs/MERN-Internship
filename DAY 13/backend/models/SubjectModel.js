import mongoose from 'mongoose';
 const SubjectSchema =  new mongoose.Schema({
    courseName:{
        type: String,
        required:[true, "courseName is required"]
    },
    subjectName:{
        type: String,
        required:[true, "subjectName is required"]
    },
    sem:{
        type: Number,
        required:[true, "sem is required"]
    },
    subjectType:{
        type: String,
        required:[true, "subjectType is required"]
    },
    subjectMaxMarks:{
        type: Number,
        required:[true, "subjectMaxMarks is required"]
    },
 },{timestamps:true})

 const SubjectModel = mongoose.model('subject', SubjectSchema);

 export default SubjectModel;