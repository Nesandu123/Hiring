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
       This research is situated in the domain of Artificial Intelligence in Software Engineering (AI4SE),
        focusing on the application of machine learning and natural language processing techniques to automate 
        and enhance software engineering recruitment. The proposed system analyzes candidates’ GitHub repositories by
         extracting Python source code and identifying algorithmic patterns using models such as CodeBERT, along with 
         Random Forest classification and keyword-based heuristics. It further evaluates code quality using software engineering metrics
          including cyclomatic complexity, maintainability, and structural organization of functions and classes. Additionally, the system employs Sentence-BERT (SBERT) to assess the semantic quality of candidate responses to dynamically generated interview questions. Overall, the system integrates intelligent code analysis and automated assessment 
       methods to provide an objective, scalable, and data-driven approach to software engineer hiring.
        </p>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              Literature Survey
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Existing research in automated software engineering assessment has primarily 
              focused on code analysis, skill evaluation, and intelligent recruitment systems. 
              Tools such as CodeBERT and similar transformer-based models have shown strong performance
               in understanding source code semantics and classifying programming patterns. Studies in machine 
               learning-based hiring systems highlight the use of repository mining and code quality metrics to evaluate developer
              capability. However, most existing approaches are limited to either static code analysis or textual assessment of resumes, lacking a combined evaluation of code structure and semantic understanding. Furthermore, few systems integrate dynamic question generation based on repository content, creating a research gap that 
              this study addresses through an AI-driven automated hiring framework.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Gap
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
             Existing automated hiring systems mainly focus on isolated aspects such 
             as code quality analysis or candidate evaluation, with limited integration
              of both. Most approaches rely on static assessment methods and do not deeply
               analyze real GitHub repositories for algorithm detection and adaptive questioning. Furthermore, current solutions are typically restricted to Python only, with limited support 
             for multiple programming languages and semantic evaluation of responses.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Problem and Objectives
            </h3>
            <ul className="mt-3 grid sm:grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>
                  <strong>Problem Statement:</strong>Current software engineer recruitment methods are mostly manual and subjective, making them time-consuming and inconsistent. Existing automated systems do not effectively analyze real GitHub repositories for algorithm detection and code quality evaluation, and most are limited to Python only. They also lack proper semantic evaluation of candidate answers..
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>
                  <strong>Main Objective:</strong> To develop an AI-based system that automatically evaluates software engineering candidates by analyzing GitHub repositories, detecting algorithms using CodeBERT and machine learning, assessing code quality using software metrics, generating adaptive coding questions, and evaluating answers using SBERT, with future support for multiple programming languages.
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
