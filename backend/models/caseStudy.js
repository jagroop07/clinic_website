import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
    {
        case_title: String,
        case_coverImage: String,
        case_description: String,
        case_section: [
            {
                section_title: String,
                section_image: String,
                section_description: String,
            }
    ]
    },
    {
        timestamps: true
    }
)

export default mongoose.models.CaseModel || mongoose.model('CaseModel', caseSchema)