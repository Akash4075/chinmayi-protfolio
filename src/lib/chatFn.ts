export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function chatWithBotFn({ data }: { data: { messages?: { role: string; content: string }[] } }): Promise<string> {
  // Simulate natural typing delay for realistic interaction
  await new Promise((resolve) => setTimeout(resolve, 350));

  const messages = data.messages ?? [];
  const lastUserMsg = messages.filter((m) => m.role === "user").pop()?.content.toLowerCase().trim() || "";

  if (!lastUserMsg) {
    return "Hi! I'm Chinmayi's AI assistant. Ask me anything about her projects, skills, education, experience, achievements, or contact details!";
  }

  // Greetings
  if (/^(hi|hello|hey|hola|namaste|greetings|hlo|heyy)/i.test(lastUserMsg)) {
    return "Hello! 👋 I'm Chinmayi's AI assistant. What would you like to know about her? I can tell you about her projects, skills, internships, hackathon wins, or how to get in touch!";
  }

  // Social Links & Contact
  if (lastUserMsg.includes("linkedin") || lastUserMsg.includes("linked in")) {
    return "Here is Chinmayi's LinkedIn profile:\n🔗 https://linkedin.com/in/chinmayi-m-a6908335a";
  }

  if (lastUserMsg.includes("github") || lastUserMsg.includes("git") || lastUserMsg.includes("repo") || lastUserMsg.includes("code")) {
    return "You can check out her code repositories and projects on GitHub:\n💻 https://github.com/CHINMAYI2005";
  }

  if (lastUserMsg.includes("email") || lastUserMsg.includes("mail") || lastUserMsg.includes("contact") || lastUserMsg.includes("reach") || lastUserMsg.includes("message")) {
    return "You can reach Chinmayi via:\n📧 Email: chinmayic477@gmail.com\n💼 LinkedIn: linkedin.com/in/chinmayi-m-a6908335a\n📍 Location: Bellur Cross, Mandya, Karnataka, India";
  }

  if (lastUserMsg.includes("location") || lastUserMsg.includes("where") || lastUserMsg.includes("city") || lastUserMsg.includes("address") || lastUserMsg.includes("live") || lastUserMsg.includes("from")) {
    return "Chinmayi is based in Mandya, Karnataka, India (specifically Bellur Cross, near Adichunchanagiri University).";
  }

  // Resume / Job / Opportunity
  if (lastUserMsg.includes("resume") || lastUserMsg.includes("cv") || lastUserMsg.includes("hire") || lastUserMsg.includes("job") || lastUserMsg.includes("opportunity") || lastUserMsg.includes("internship")) {
    return "Chinmayi is actively available for opportunities and internships in VLSI, Embedded Systems, IoT, and Software Engineering!\n\nPlease email her directly at chinmayic477@gmail.com to receive her complete resume.";
  }

  // Projects
  if (lastUserMsg.includes("silkworm") || lastUserMsg.includes("sericulture") || lastUserMsg.includes("5 lakh") || lastUserMsg.includes("funding") || lastUserMsg.includes("grant")) {
    return "🏆 Silkworm Farm Automation & Environmental Monitoring:\n\n• Sensor-driven automation and environmental control system for sericulture using ESP32 & IoT.\n• Reduces manual intervention and optimizes temperature/humidity for silkworms.\n• Received ₹5 Lakh government funding grant from the NAIN Incubation Centre, Govt. of Karnataka!";
  }

  if (lastUserMsg.includes("milk") || lastUserMsg.includes("chilling") || lastUserMsg.includes("sih") || lastUserMsg.includes("can")) {
    return "🥛 Milk Chilling Can (SIH Inter-College Hackathon Winner - 1st Prize):\n\n• Portable milk chilling system using PCM, thermal insulation, and smart IoT sensors.\n• Keeps milk fresh at 4–8°C for 6–12 hours.\n• Features solar-assisted operation and mobile app monitoring integration.";
  }

  if (lastUserMsg.includes("curd") || lastUserMsg.includes("amtariksha") || lastUserMsg.includes("dairy")) {
    return "🏭 Industrial Curd Setting Machine:\n\n• Production-grade automated dairy processing machine.\n• Developed during her internship at Amtariksha Tech Pvt. Ltd., Bangalore.\n• Handled embedded system integration, component selection, and automated timing/temperature testing.";
  }

  if (lastUserMsg.includes("sign language") || lastUserMsg.includes("gesture") || lastUserMsg.includes("hand")) {
    return "🖐️ Sign Language Detection System:\n\n• Real-time hand gesture recognition system converting sign language to readable text.\n• Built using Python, TensorFlow, MediaPipe, and OpenCV.";
  }

  if (lastUserMsg.includes("receptionist") || lastUserMsg.includes("voice") || lastUserMsg.includes("speech")) {
    return "🤖 Smart AI Receptionist:\n\n• Voice-activated virtual assistant that automates visitor interactions and responses.\n• Built with Python speech recognition and NLP automation.";
  }

  if (lastUserMsg.includes("project") || lastUserMsg.includes("built") || lastUserMsg.includes("work") || lastUserMsg.includes("portfolio")) {
    return "Chinmayi has built several impactful hardware & software projects:\n\n1. Silkworm Farm Automation (₹5 Lakh Govt. Funded)\n2. Milk Chilling Can (1st Prize, SIH Hackathon)\n3. Industrial Curd Setting Machine (Amtariksha Tech)\n4. Sign Language Detection (TensorFlow, MediaPipe)\n5. Smart AI Receptionist (Python Voice AI)\n\nAsk me about any specific project for details!";
  }

  // Skills
  if (lastUserMsg.includes("skill") || lastUserMsg.includes("stack") || lastUserMsg.includes("tech") || lastUserMsg.includes("language") || lastUserMsg.includes("programming") || lastUserMsg.includes("java") || lastUserMsg.includes("python") || lastUserMsg.includes("c++")) {
    return "Chinmayi's core technical stack:\n\n💻 Software: Python, Java (basics), C++ (basics), HTML, CSS, JavaScript\n⚡ Hardware & IoT: ESP32, Arduino, 8051 Microcontroller, Embedded C, Sensors (DHT11/22, MQ Gas, LDR)\n🔬 Electronics & VLSI: Digital/Analog Electronics, CMOS Fundamentals, VLSI Fundamentals, K-Maps, Logic Design\n🧠 AI & Tools: TensorFlow, OpenCV, MediaPipe, MongoDB, GitHub, Multisim, Arduino IDE";
  }

  // Education
  if (lastUserMsg.includes("education") || lastUserMsg.includes("college") || lastUserMsg.includes("degree") || lastUserMsg.includes("university") || lastUserMsg.includes("bgsit") || lastUserMsg.includes("sgpa") || lastUserMsg.includes("study") || lastUserMsg.includes("ece")) {
    return "🎓 Education:\n\n• B.E. in Electronics & Communication Engineering (2023–2027)\n• Adichunchanagiri University (BGS Institute of Technology), Karnataka\n• Consistent academic performance across semesters (Sem 4: 8.48, Sem 5: 8.6, Sem 6: 8.62 SGPA).";
  }

  // Experience / Internships
  if (lastUserMsg.includes("experience") || lastUserMsg.includes("intern") || lastUserMsg.includes("nain") || lastUserMsg.includes("codealpha")) {
    return "💼 Professional Experience:\n\n1. Embedded Systems & IoT Intern at NAIN Incubation Centre, Govt. of Karnataka (Silkworm Automation & sensors)\n2. Embedded Systems Intern at Amtariksha Tech Pvt. Ltd., Bangalore (Industrial Curd Setting Machine)\n3. Artificial Intelligence Intern at CodeAlpha (Virtual, received Letter of Recommendation)";
  }

  // Achievements & Hackathons
  if (lastUserMsg.includes("achievement") || lastUserMsg.includes("award") || lastUserMsg.includes("hackathon") || lastUserMsg.includes("prize") || lastUserMsg.includes("win")) {
    return "🏆 Top Achievements:\n\n• ₹5 Lakh Govt. Grant from NAIN Incubation Centre\n• 1st Prize — Krishimanthana 36-hr Hackathon (Me-Rise Foundation)\n• 1st Prize — SIH Inter-College Hackathon (BGSIT)\n• 2nd Prize — PES College Inter Hackathon\n• 2nd Prize — MECHNOVATE Inter-College Project Exhibition\n• Student Chair of IEEE Circuits & Systems Society chapter";
  }

  // Leadership & IEEE
  if (lastUserMsg.includes("ieee") || lastUserMsg.includes("leadership") || lastUserMsg.includes("chair")) {
    return "🌟 Leadership:\n\n• Student Chair of the IEEE Circuits & Systems Society chapter at her university.\n• Organized CodeWarzz (a 6-hour hackathon for students) and Project Exhibitions.";
  }

  // Fallback
  return "Chinmayi M is an Electronics & Software Engineer working across VLSI, IoT, embedded systems, and software development.\n\nYou can ask about her projects, skills, education, internships, or reach her at chinmayic477@gmail.com!";
}
