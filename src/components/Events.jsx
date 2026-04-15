import React from "react";
import SectionTitle from "./SectionTitle";
import { FaTrophy, FaUsers, FaCalendarCheck } from "react-icons/fa";

const events = [
  {
    name: "GuideWire college HACKATHON 2026 (IN PROCESS)",
    type: "hackathon",
  },
  {
    name: "She Innovates 2026 – WINNER",
    type: "hackathon",
  },
  {
    name: "Smart India Hackathon 2024 – Internal Winner",
    type: "hackathon",
  },
  {
    name: "Smart India Hackathon 2025 – Finalist",
    type: "hackathon",
  },
  {
    name: "Build With Delhi Hackathon",
    type: "hackathon",
  },
  {
    name: "3-Days Artificial Intelligence Workshop",
    type: "participation",
  },
  {
    name: "Cybersecurity Workshop Participation",
    type: "participation",
  },
  {
    name: "DRR's Official Visit",
    type: "organized",
  },
  {
    name: "Chai Pe Charcha(Podcast)",
    type: "organized",
  },
  {
    name: "Tresure Hunt",
    type: "organized",
  },
  {
    name: "Reverse Pitch",
    type: "organized",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "hackathon":
      return <FaTrophy size={34} />;
    case "organized":
      return <FaUsers size={34} />;
    case "participation":
      return <FaCalendarCheck size={34} />;
    default:
      return <FaTrophy size={34} />;
  }
};

const Events = () => {
  return (
    <section id="events" className="py-32 bg-primary-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle>Events & Hackathons</SectionTitle>

        <div className="mt-20 overflow-hidden">
          <div className="flex gap-10 animate-events-scroll w-max">
            {[...events, ...events].map((event, index) => (
                      
              <div
                key={index}
                className="min-w-[260px] bg-secondary-bg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-accent-1 mb-4">
                  {getIcon(event.type)}
                </div>

                <p className="text-text-primary text-sm font-medium">
                  {event.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;