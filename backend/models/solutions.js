const mongoose = require('mongoose')

const solutionSchema = new mongoose.Schema({
        solution_title: String,
        solution_description: String,
        button_text: String,
        button_link: String,
        solution_first: {
            solution_title: String,
            solution_image: String,
            solution_points: [String],
            button_text: String,
            button_link: String
        },
        solution_section: [
            {
                section_title: String,
                section_description: String,
            }
    ]
    },
    {
        timestamps: true
    }
)

export default mongoose.models.Solutions || mongoose.model('Solutions', solutionSchema)