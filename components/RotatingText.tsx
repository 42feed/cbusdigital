"use client";

import { useEffect, useState } from "react";

const words = [
  "Plumbers",
  "HVAC Companies",
  "Landscapers",
  "Cleaners",
  "Roofers",
  "Electricians",
  "Contractors",
  "Painters",
  "Dog Groomers",
  "Personal Trainers",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
      setKey((k) => k + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block gradient-text rotate-word" key={key}>
      {words[index]}
    </span>
  );
}
