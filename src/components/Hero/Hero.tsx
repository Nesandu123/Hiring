import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-transparent dark:from-slate-900/70 dark:to-transparent transition-colors"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <span className="tag">IT4010 Research Project | SLIIT</span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Smart Job Hiring Platform
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad)" }}
              >
                 
              </span>
            </h1>

            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
              The Software Engineering Hiring Platform is an AI-driven system designed to enhance and automate the recruitment process for software engineering roles. The platform evaluates candidates through coding assessments and intelligent analysis of their technical skills, problem-solving ability, and algorithmic understanding. By reducing manual evaluation effort and improving assessment accuracy, it provides a more efficient, consistent, and objective approach to identifying qualified candidates for software engineering positions.
            </p>

            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>
                  <strong>Intelligent Code Assessment Pipeline</strong> 
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>
                  <strong>Adaptive Question Generation</strong> 
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span>
                  <strong>Code Quality Measuring</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Automated Answer Evaluation Engine</strong> 
                </span>
              </li>
            </ul>

            {/* <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900">
                RAG
              </span>
              <span className="chip bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                pgvector
              </span>
              <span className="chip bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                Sinhala OCR
              </span>
              <span className="chip bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                Tesseract, TrOCR & YOLOv8
              </span>
              <span className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                Explainable AI
              </span>
              <span className="chip bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                Automated Grading
              </span>
              <span className="chip bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                Whisper Fine-tuning
              </span>
              <span className="chip bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Accent Adaptation
              </span>
              <span className="chip bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                Low-Resource AI
              </span>
            </div> */}

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#milestones"
                className="btn btn-primary dark:btn-primary-dark"
              >
                View Milestones
              </a>
              <a href="#domain" className="btn btn-ghost dark:btn-ghost-dark">
                View Domain
              </a>
            </div>
          </div>

          {/* Right Section Container */}
          <div className="relative flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Hiring Platform Dashboard Mockup */}
              <div className="relative mx-auto bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm">Hiring Platform</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 min-h-[500px]">
                  {/* Active Candidates Card */}
                  <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold text-sm">Active Candidates</h4>
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">42</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-slate-700/30 p-2 rounded">
                        <span className="text-slate-300 text-xs">Python Backend Developer</span>
                        <div className="flex gap-1">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">B</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-slate-700/30 p-2 rounded">
                        <span className="text-slate-300 text-xs">React Frontend Engineer</span>
                        <div className="flex gap-1">
                          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Assessment Progress */}
                  <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-slate-700">
                    <h4 className="text-white font-semibold text-sm mb-3">Assessment Progress</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Code Challenges</span>
                          <span>78%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400" style={{width: '78%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Technical Interview</span>
                          <span>45%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur rounded-lg p-3 border border-emerald-500/30 text-center">
                      <p className="text-emerald-400 text-2xl font-bold">12</p>
                      <p className="text-slate-400 text-xs">Qualified</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur rounded-lg p-3 border border-amber-500/30 text-center">
                      <p className="text-amber-400 text-2xl font-bold">28</p>
                      <p className="text-slate-400 text-xs">In Progress</p>
                    </div>
                    <div className="bg-gradient-to-br from-rose-500/20 to-rose-600/20 backdrop-blur rounded-lg p-3 border border-rose-500/30 text-center">
                      <p className="text-rose-400 text-2xl font-bold">2</p>
                      <p className="text-slate-400 text-xs">Rejected</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
