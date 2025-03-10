import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"],
};

app.use(cors(corsOptions));


app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ reply: "Message is required." });

    // Use Gemini Free Model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Free Model
    const result = await model.generateContent(message);


    console.log("Full API Response:", JSON.stringify(result, null, 2));

    // Extracting text response
    const responseText =
    result?.response?.text?.() || "I couldn't understand that.";
    
    const formattedResponse = responseText
      .replace(/\n+/g, " ") // Remove excessive new lines
      .replace(/\*\*(.*?)\*\*/g, "") // Remove bold formatting
      .replace(/\*(.*?)\*/g, "") // Remove italic formatting
      .trim();

    res.json({ reply: formattedResponse });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ reply: "Sorry, something went wrong." });
  }
});

app.get("/",(res,req)=>{
  res.send('Welcome');
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
