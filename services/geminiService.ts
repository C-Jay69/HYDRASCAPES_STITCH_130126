
import { GoogleGenAI, Type } from "@google/genai";
import { TravelPackage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getTravelRecommendations(userVibe: string[], budget: string, context: TravelPackage[]): Promise<string> {
  const prompt = `
    You are a luxury travel consultant for HYDRASCAPES.
    Based on the following user preferences:
    - Vibes: ${userVibe.join(', ')}
    - Budget Preference: ${budget}
    
    Recommend the best fit from our current inventory:
    ${context.map(p => `- ${p.name}: ${p.description} ($${p.price})`).join('\n')}
    
    Provide a personalized 2-sentence pitch for the best match.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "We found some amazing matches for you! Check them out below.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Based on your vibes, we've curated a list of exclusive escapes that match your style perfectly.";
  }
}
