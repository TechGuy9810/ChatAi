// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;