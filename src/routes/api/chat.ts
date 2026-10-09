import { createAPIFileRoute } from "@tanstack/react-start/api";

const PROFILE = `You are the friendly portfolio assistant for Chinmayi M. Answer questions about her briefly (2-4 sentences), speaking about Chinmayi in third person. If something isn't covered below, say you don't know and suggest contacting her.

Profile:
- Electronics & Communication Engineering undergraduate at Adichunchanagiri University, Mandya, Karnataka, India.
- Email: chinmayic477@gmail.com | LinkedIn: linkedin.com/in/chinmayi-m-a6908335a | GitHub: github.com/CHINMAYI2005
- Skills: Python (AI/ML, automation), Java basics, C++ basics, HTML, CSS, JavaScript, MongoDB; Digital & Analog Electronics, CMOS & VLSI fundamentals, logic design; 8051, ESP32, Arduino, sensors (DHT11/22, MQ gas, LDR), relays & GSM; TensorFlow and related libraries.
- Projects: Silkworm Farm Automation (IoT + robotic automation), Curd Setting Machine, Sign Language Detection (AI), AI Receptionist.
- Experience: Embedded Systems & IoT Intern at NAIN Incubation Centre, Govt. of Karnataka (Jul–Aug 2026) and other internships.
- Achievements: 1st Prize at SIH (Smart India Hackathon) Internal Hackathon; ₹5 Lakh government funding from NAIN for Silkworm Farm Automation; 2nd Prize PES College inter-college hackathon; 2nd Prize MECHNOVATE project exhibition; 4th place IGNITEX 2025 national hackathon; shortlisted at Startup Sparks (Vivartan Incubation Centre); Student Chair of IEEE Circuits & Systems Society chapter.
- Open to internships and job opportunities.`;

export const APIRoute = createAPIFileRoute("/api/chat")({
  POST: async ({ request }) => {
    const body = (await request.json()) as { messages?: { role: string; content: string }[] };
        const messages = body.messages ?? [];
        const lastUserMsg = messages.filter(m => m.role === "user").pop()?.content.toLowerCase() || "";

        let responseText = "Hi! I'm Chinmayi's AI assistant. Ask me about her skills, projects, achievements, or contact info!";
        
        if (lastUserMsg) {
          if (lastUserMsg.includes("linkedin") || lastUserMsg.includes("linked in") || lastUserMsg.includes("profile")) {
            responseText = "Here is Chinmayi's LinkedIn profile: https://www.linkedin.com/in/chinmayi-m-a6908335a/";
          } else if (lastUserMsg.includes("github") || lastUserMsg.includes("git") || lastUserMsg.includes("code") || lastUserMsg.includes("repo")) {
            responseText = "You can check out her code and projects on GitHub: https://github.com/CHINMAYI2005";
          } else if (lastUserMsg.includes("location") || lastUserMsg.includes("where") || lastUserMsg.includes("city") || lastUserMsg.includes("address") || lastUserMsg.includes("state")) {
            responseText = "Chinmayi is based in Mandya, Karnataka, India (specifically Bellur Cross).";
          } else if (lastUserMsg.includes("about") || lastUserMsg.includes("who is") || lastUserMsg.includes("bio") || lastUserMsg.includes("background")) {
            responseText = "Chinmayi M is an Electronics & Communication Engineering undergraduate (2023–2027) at Adichunchanagiri University. She is passionate about VLSI, embedded systems, IoT, and software development, blurring the lines between hardware and code!";
          } else if (lastUserMsg.includes("resume") || lastUserMsg.includes("cv") || lastUserMsg.includes("hire") || lastUserMsg.includes("job") || lastUserMsg.includes("opportunity")) {
            responseText = "Chinmayi is actively looking for internships and opportunities in VLSI, embedded systems, and software. Please contact her at chinmayic477@gmail.com for her complete resume!";
          } else if (lastUserMsg.includes("milk") || lastUserMsg.includes("chilling") || lastUserMsg.includes("can")) {
            responseText = "Here is more about the Milk Chilling Can project:\n\n• It's a portable milk chilling system using PCM and smart temperature monitoring.\n• Maintains milk at 4–8°C for 6–12 hours with solar-assisted operation and a mobile app.\n• Won 1st place in the SIH internal hackathon!";
          } else if (lastUserMsg.includes("silkworm")) {
            responseText = "Here is more about the Silkworm Farm Automation project:\n\n• It involves IoT and robotic automation.\n• It received a ₹5 Lakh government funding grant from the NAIN Incubation Centre.\n• It focuses on sensor-driven automation for rearing silkworms.";
          } else if (lastUserMsg.includes("curd")) {
            responseText = "Here is more about the Curd Setting Machine project:\n\n• It's an industrial-level dairy processing machine.\n• Built to automate and optimize the curd setting process.";
          } else if (lastUserMsg.includes("sign language") || lastUserMsg.includes("sign")) {
            responseText = "Here is more about the Sign Language Detection project:\n\n• It is an AI-based project.\n• Designed to interpret and translate sign language gestures into text/speech.";
          } else if (lastUserMsg.includes("receptionist") || lastUserMsg.includes("assistant")) {
            responseText = "Here is more about the Smart AI Receptionist:\n\n• It is a voice-based virtual assistant.\n• Automates visitor interaction using Python and speech recognition.";
          } else if (lastUserMsg.includes("project") || lastUserMsg.includes("build") || lastUserMsg.includes("made") || lastUserMsg.includes("portfolio")) {
            responseText = "Chinmayi's notable projects include:\n\n• Milk Chilling Can, SIH (IoT, Solar, Mobile App)\n• Silkworm Farm Automation (IoT & robotics)\n• Industrial Curd Setting Machine\n• Sign Language Detection (AI)\n• Smart AI Receptionist\n\nAsk me to 'explain milk project' or 'explain silkworm' for more details!";
          } else if (lastUserMsg.includes("skill") || lastUserMsg.includes("tech") || lastUserMsg.includes("stack") || lastUserMsg.includes("language") || lastUserMsg.includes("tool")) {
            responseText = "Chinmayi's core skills are:\n\n• Programming: Python, Java (basics), C++ (basics), JavaScript, HTML, CSS\n• Hardware/IoT: Embedded C, ESP32, Arduino, Sensors (DHT11/22, MQ gas)\n• Core ECE: Digital/Analog Electronics, CMOS & VLSI fundamentals\n• Databases/AI: MongoDB, TensorFlow, OpenCV";
          } else if (lastUserMsg.includes("nain") || lastUserMsg.includes("incubation")) {
            responseText = "Chinmayi worked as an Embedded Systems & IoT Intern at the NAIN Incubation Centre (Govt. of Karnataka) in Jul-Aug 2026. She also secured a ₹5 Lakh government grant from them for her Silkworm Farm Automation project!";
          } else if (lastUserMsg.includes("amtariksha") || lastUserMsg.includes("dairy")) {
            responseText = "During her internship at Amtariksha Tech Pvt. Ltd. (Jan-Feb 2026), she contributed to the development of a production-grade Industrial Curd Setting Machine, handling system integration and testing.";
          } else if (lastUserMsg.includes("codealpha") || lastUserMsg.includes("virtual intern")) {
            responseText = "Chinmayi completed a virtual Artificial Intelligence Internship at CodeAlpha, where she received a Letter of Recommendation for her strong analytical and collaboration skills.";
          } else if (lastUserMsg.includes("ieee") || lastUserMsg.includes("society") || lastUserMsg.includes("chair")) {
            responseText = "Chinmayi is proud to be the Student Chair of the IEEE Circuits & Systems Society chapter at her university!";
          } else if (lastUserMsg.includes("vivartan") || lastUserMsg.includes("startup sparks")) {
            responseText = "Chinmayi was shortlisted for Startup Sparks at the Vivartan Incubation Centre in Mysuru!";
          } else if (lastUserMsg.includes("experience") || lastUserMsg.includes("intern") || lastUserMsg.includes("work")) {
            responseText = "Chinmayi's experience includes:\n\n• Embedded Systems & IoT Intern at NAIN Incubation Centre\n• Embedded System Intern at Amtariksha Tech Pvt. Ltd.\n• Artificial Intelligence Intern at CodeAlpha\n\nAsk me about 'NAIN', 'Amtariksha', or 'CodeAlpha' for specifics.";
          } else if (lastUserMsg.includes("achieve") || lastUserMsg.includes("award") || lastUserMsg.includes("hackathon") || lastUserMsg.includes("prize") || lastUserMsg.includes("competition") || lastUserMsg.includes("won")) {
            responseText = "Her top achievements are:\n\n• 1st Prize at 36-hours Krishimanthana Hackathon (Me-Rise Foundation)\n• 1st Prize at SIH Inter College Hackathon (BGSIT)\n• ₹5 Lakh Govt. funding from NAIN for her Silkworm project\n• 2nd Prize at PES College & MECHNOVATE\n• 4th Place at JVTM Adichunchanagiri\n• Shortlisted for Startup Sparks (Vivartan Incubation Centre)\n• Student Chair of the IEEE Circuits & Systems Society chapter";
          } else if (lastUserMsg.includes("contact") || lastUserMsg.includes("email") || lastUserMsg.includes("reach") || lastUserMsg.includes("phone") || lastUserMsg.includes("connect")) {
            responseText = "You can contact Chinmayi through:\n\n• Email: chinmayic477@gmail.com\n• LinkedIn: linkedin.com/in/chinmayi-m-a6908335a\n• GitHub: github.com/CHINMAYI2005";
          } else if (lastUserMsg.includes("education") || lastUserMsg.includes("college") || lastUserMsg.includes("university") || lastUserMsg.includes("study") || lastUserMsg.includes("degree") || lastUserMsg.includes("school")) {
            responseText = "Chinmayi's Education:\n\n• B.Tech in Electronics & Communication Engineering (2023–2027)\n• Studying at Adichunchanagiri University, Mandya, Karnataka.";
          } else if (lastUserMsg.includes("hi") || lastUserMsg.includes("hello") || lastUserMsg.includes("hey") || lastUserMsg.includes("greetings")) {
             responseText = "Hello! I am Chinmayi's portfolio assistant. What would you like to know about her? I can tell you about her projects, skills, experience, achievements, or provide her LinkedIn/GitHub!";
          } else {
            responseText = "For more information, please contact my email: chinmayic477@gmail.com";
          }
        }

        return new Response(responseText, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  },
});
