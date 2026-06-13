const {
 GoogleGenerativeAI
}
=
require(
 "@google/generative-ai"
);

const genAI =
new GoogleGenerativeAI(
 process.env.GEMINI_API_KEY
);

exports.triage = async (req, res) => {

    try {

        const { symptoms } = req.body;

        const text = symptoms.toLowerCase();

        let department = "General Practice";
        let priority = "Low";
        let advice = "Book an appointment.";

        if (
            text.includes("chest") ||
            text.includes("heart") ||
            text.includes("breathing")
        ) {
            department = "Cardiology";
            priority = "High";
            advice = "Seek medical attention immediately.";
        }

        else if (
            text.includes("tooth") ||
            text.includes("gum") ||
            text.includes("dental")
        ) {
            department = "Dentistry";
            priority = "Medium";
            advice = "Schedule a dental consultation.";
        }

        else if (
            text.includes("eye") ||
            text.includes("vision")
        ) {
            department = "Ophthalmology";
            priority = "Medium";
            advice = "Book an eye examination.";
        }

        else if (
            text.includes("child") ||
            text.includes("baby")
        ) {
            department = "Pediatrics";
            priority = "Medium";
            advice = "Consult a pediatric specialist.";
        }

        res.json({
            department,
            priority,
            advice
        });

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }
};