import React from "react";

function Project() {
  return (
    // components/Projects.tsx
    <section className="bg-black text-white px-10 py-20">
      <h2 className="text-2xl font-bold mb-8">Projects That Mark’s</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Repeat per project */}
        <div className="bg-[#1e1e1e] p-4 rounded-lg">
          <h3 className="text-lg text-primary mb-1">AI Evaluation System</h3>
          <p className="text-sm text-gray-400">
            Automated evaluation using LLMs & PDF pipelines.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
