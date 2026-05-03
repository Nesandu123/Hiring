import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="domain"
      className="py-12 md:py-16 border-t border-slate-200/70 dark:border-slate-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Research Domain
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
       The research domain focuses on AI-driven intelligent recruitment systems for multiple professional sectors, 
       including Software Engineering, Accounting, and Project Management. The study explores automated candidate 
       evaluation using skill-based assessments, machine learning, and data analysis techniques to improve hiring 
       accuracy, reduce recruitment bias, minimize manual effort, and support efficient decision-making in modern 
       talent acquisition processes.
        </p>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              Literature Survey
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Recent research highlights the growing use of Artificial Intelligence in recruitment systems to automate
              candidate screening, skill assessment, and hiring decisions. AI-driven platforms improve recruitment
              efficiency, reduce manual effort, and enhance evaluation accuracy using machine learning and data analytics.
              Most existing studies primarily focus on Software Engineering recruitment, while limited attention is given
              to multi-domain hiring in sectors such as Accounting and Project Management. Researchers also identify challenges 
              including algorithmic bias, transparency, fairness, and the need for more adaptable and intelligent candidate evaluation mechanisms.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Gap
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
             Most existing AI-driven recruitment systems mainly focus on single-domain hiring, particularly
              Software Engineering, with limited support for other professional sectors such as Accounting 
              and Project Management. Additionally, many platforms lack adaptive assessment methods, transparency, 
              and fair evaluation mechanisms. There is a need for a comprehensive multi-domain hiring platform that 
              can intelligently evaluate diverse candidate skills while improving accuracy, reducing bias, and supporting 
              efficient recruitment decision-making.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Problem and Objectives
            </h3>
            <ul className="mt-3 grid sm:grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>
                  <strong>Problem Statement:</strong>Traditional recruitment processes are often time-consuming, 
                   inconsistent, and highly dependent on manual evaluation, which can lead to inefficiencies, delays,
                   and biased hiring decisions. Organizations also face challenges in accurately assessing candidates 
                   across different professional sectors such as Software Engineering, Accounting, and Project Management. 
                   Therefore, there is a need for an intelligent AI-driven hiring platform that can automate candidate evaluation, 
                   improve assessment accuracy, reduce bias, and support efficient
                   recruitment decision-making across multiple industries.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>
                  <strong>Main Objective:</strong> To develop an AI-driven multi-domain hiring 
                  platform that automates candidate assessment and recruitment processes for sectors 
                  such as Software Engineering, Accounting, and Project Management by improving evaluation 
                  accuracy, reducing manual effort, minimizing recruitment bias, and supporting efficient 
                  hiring decision-making.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                {/* <span>
                  <strong>Sub-Objective:</strong> Achieve high-precision
                  recognition for Southern accents and establish a deterministic
                  grading engine for descriptive content.
                </span> */}
              </li>
            </ul>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 shadow-soft border border-slate-200/60 bg-white dark:bg-slate-800 transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Methodology and Technologies
              </h3>

              <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Workflow
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    GitHub Repository Cloning → Python Code Extraction → Algorithm Detection (CodeBERT + Random Forest + Heuristics) → Code Quality Analysis → Adaptive Question Generation → SBERT-Based Answer Evaluation → Final Candidate Scoring
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Tech Stack
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                   CodeBERT, Random Forest, Sentence-BERT (SBERT), Python AST Parsing, FastAPI, GitHub API, Scikit-learn
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Data Sources
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Public GitHub Python repositories, curated algorithm datasets
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Validation
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Accuracy of algorithm detection, semantic similarity (cosine similarity via SBERT), and consistency of scoring against benchmark coding solutions
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                  
                </span>
                <span className="tag bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                  
                </span>
                <span className="tag bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  
                </span>
                <span className="tag bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
