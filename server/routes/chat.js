const express = require("express");
const router = express.Router();

const personaResponses = [
  {
    keywords: ["yourself", "you"],
    reply:
      "I’m Sakshi Vishwakarma, a Computer Science student passionate about web development and building interactive applications. I enjoy learning new technologies and applying them to real-world projects.",
  },
  {
    keywords: ["projects", "work"],
    reply:
      "I’ve worked on projects like an interactive portfolio with frontend, backend, and AI features, and a full-stack event management website handling events and registrations.",
  },
  {
    keywords: ["skills", "technologies"],
    reply:
      "My skills include HTML, CSS, JavaScript, React, Node.js, Express, REST APIs, Git, and integrating AI-powered features into web applications.",
  },
  {
    keywords: ["intern", "hire"],
    reply:
      "I’m eager to learn from experienced developers, contribute to real projects, and grow as a software developer. I bring consistency, curiosity, and a strong learning mindset.",
  },
];

router.post("/", (req, res) => {
  const { message } = req.body;
  const lowerMsg = message.toLowerCase();

  const matched = personaResponses.find((item) =>
    item.keywords.some((word) => lowerMsg.includes(word))
  );

  res.json({
    reply:
      matched?.reply ||
      "I’d be happy to talk about my skills, projects, or learning journey. Feel free to ask!",
  });
});

module.exports = router;
