import { Schema, model } from "mongoose";

const advanceSchema = new Schema({
    advance_id:{
        type: String,
        required: true
    },
    project_id: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
    advance_date: {
        type: Date,
        required: true
    },
    advance_description: [
        {
          type: String,
          required: true
        },
    ],
    leader_observations: [
        {
          type: String,
          required: true
        },
    ]
});

export default model("Advance", advanceSchema)