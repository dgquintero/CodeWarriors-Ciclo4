import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  project_id : {
      type: String,
      required: true
  },
  project_name : {
      type: String,
      required: true
  },
  general_objectives : {
      type: String,
      required: true
  },
  specific_objectives : {
      type: String,
      required: true
  },
  budget : {
      type: String,
      required: true
  },
  start_date : {
      type: String,
      required: true
  },
  end_date : {
      type: String,
      required: true
  },
  leader_name : {
      type: String,
      required: true
  },
  leader_cc : {
      type: String,
      required: true
  },
  project_status : {
      type: String,
      required: true
  },
  project_stage : {
      type: String,
      required: true
  }

});

export default model("Prject", projectSchema)
