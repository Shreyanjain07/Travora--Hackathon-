import React from "react";

const features = [
  {
    title: "🔐 Digital ID",
    desc: "Blockchain-based secure IDs with trip details and emergency contacts.",
  },
  {
    title: "📍 Geo-fencing Alerts",
    desc: "Real-time alerts when tourists enter unsafe or restricted zones.",
  },
  {
    title: "🤖 AI Monitoring",
    desc: "Detects unusual behavior, inactivity, or distress signals instantly.",
  },
];

function Features() {
  return (
    <section id="features" className="container mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold text-center mb-12">
        Why Choose Travora?
      </h3>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
