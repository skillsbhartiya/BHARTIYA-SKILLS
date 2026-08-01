import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // Initialize Gemini client safely
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for the AI Lab Proposal and BOQ Generator
  app.post("/api/lab-proposal", async (req, res) => {
    try {
      const { labType, budget, state, orgType, description } = req.body;
      if (!labType) {
        return res.status(400).json({ error: "labType is required" });
      }

      const prompt = `You are an expert technical laboratory and vocational training infrastructure consultant for Bhartiya Skills LLP, India.
Your task is to generate a comprehensive, highly professional laboratory setup proposal and a preliminary Bill of Quantities (BOQ) with estimated tools, machinery, and training rigs based on the following inputs:
- Laboratory Category: ${labType}
- Target State/UT in India: ${state || "Pan-India"}
- Approximate Budget Segment: ${budget || "Standard Institutional Pricing"}
- Organization Type: ${orgType || "Educational Institution / Government department"}
- Specific Custom Requirements / Description: ${description || "General standard vocational lab setup."}

Provide a comprehensive technical proposal formatted in beautiful Markdown with the following structured sections:
1. EXECUTIVE SUMMARY (highlighting compliance with modern Indian standards and alignment with the budget segment)
2. TECHNICAL SITE SPECIFICATIONS (recommended physical area, electric power load, backup UPS requirement, ventilation, water supply, or specialized flooring)
3. PROPOSED BILL OF QUANTITIES (BOQ) - Render a clean Markdown table of essential laboratory equipment, machinery, trainers, models, and furniture. Do not include specific monetary prices; instead, include columns for:
   - S.No.
   - Item Name & Technical Specs
   - Recommended Quantity
   - Primary Training Purpose
4. INSTALLATION & TECHNICAL COMMISSIONING ROADMAP (phases of setup, testing, and safety approval)
5. ADVANCED FACULTY HANDOVER AND OPERATOR TRAINING TIMELINE

Make the tone extremely formal, technically precise, and highly reassuring for government departments, ITIs, and colleges. Keep it professional and complete.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to generate AI proposal. Please ensure your GEMINI_API_KEY is configured in Secrets." });
    }
  });

  // API Route for submitting project requirement enquiries (leads)
  app.post("/api/enquiry", (req, res) => {
    const submission = req.body;
    console.log("New turnkey lead submitted:", submission);
    
    // Generate a unique reference number
    const refNum = "BSLLP-" + Math.floor(100000 + Math.random() * 900000);
    
    res.json({
      success: true,
      referenceNumber: refNum,
      message: "Your laboratory requirement has been successfully registered. Our technical estimation and solutions team will contact you within 24 hours with a comprehensive BOQ, custom layouts, and quotation."
    });
  });

  // Vite development middleware vs production static server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
