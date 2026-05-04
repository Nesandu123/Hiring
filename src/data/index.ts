import type {
  TeamMember,
  ProjectComponent,
  Milestone,
  Document,
  Supervisor,
} from "../types";

export const teamMembers: TeamMember[] = [
  {
    name: "Neethila A.L.N.",
    role: "Software Engineers Hiring Platform",
    isLeader: true,
    image: "images/team/my photo.jpg",
    email: "nesandu2002@gmail.com",
    linkedin: "https://www.linkedin.com/in/nesandu-abeysinghe/",
  },
  {
    name: "Kalhan A.H.L.",
    role: "Accountants Hiring Platform",
    image: "images/team/Kalhan A.H.L.jpeg",
    email: "kalhan@gmail.com",
    linkedin: "https://www.linkedin.com/in/hasindu-k/",
  },
   {
    name: "Darren V.C.",
    role: "Project Managers Hiring Platform",
    image: "images/team/Darren V.C.jpeg",
    email: "darren@gmail.com",
    linkedin: "https://www.linkedin.com/in/hasindu-k/",
  },

];

export const supervisors: Supervisor[] = [
  {
    name: "Prof. Samantha Rajapakshe",
    role: "Supervisor",
    image: "images/team/Supervisor Samantha Sir.jpg",
    email: "samantha.r@sliit.lk",
    linkedin: "linkedin.com/in/samantha-rajapaksha-528657b",
  },
  {
    name: "Ms. Osuri Dunuvila",
    role: "Co-Supervisor",
    image: "images/team/osuri dunuvila.jpeg",
    email: "thamali.k@sliit.lk",
    linkedin: "linkedin.com/in/osuri-dunuwila-877843107",
  },
];

export const projectComponents: ProjectComponent[] = [
  {
    title: "Sinhala Document Processing & Embedding",
    description:
      "OCR for printed & handwritten Sinhala, preprocessing, embeddings, offline index.",
    lead: "Ranaweera P.H.K",
  },
  {
    title: "Resource‑Based Q&A (Voice)",
    description:
      "Whisper‑based STT tuned for SL accents; hybrid TTS; citations in voice answers.",
    lead: "Sathsara T.T.D",
  },
  {
    title: "Resource‑Based Q&A (Text)",
    description:
      "Sinhala‑aware RAG with strict source binding and contextual summarization.",
    lead: "Jayananda L.V.O.R",
  },
  {
    title: "Evaluation of Answers",
    description:
      "Semantic grading (XLM‑R), rule‑based concept checks, explainable feedback.",
    lead: "Lokuhewage M.M",
  },
];

export const milestones: Milestone[] = [
  {
    status: "completed",
    title: "Project Proposal",
    description:
      "Initial proposal submitted with project scope, domain focus, and planned methodology.",
    date: "September 11, 2025",
    marks: "Pending",
    weight: 20,
  },
  {
    status: "completed",
    title: "Progress Presentation 1",
    description:
      "First progress review completed with module architecture and early implementation outcomes.",
    date: "January 7, 2026",
    marks: "Pending",
    weight: 20,
  },
  {
    status: "completed",
    title: "Progress Presentation 2",
    description:
      "Second progress review in preparation with integration updates and evaluation metrics.",
    date: "March 11, 2026",
    marks: "Pending",
    weight: 20,
  },
  {
    status: "upcoming",
    title: "Final Assessment & Viva",
    description:
      "Final system demonstration and oral defense including panel Q&A and individual contribution validation.",
    date: "May 6, 2026",
    marks: "Pending",
    weight: 40,
  },
];

export const documents: Document[] = [
  {
    title: "Topic Assessment Form",
    description:
      "Topic assessment form for project evaluation and feedback. Status: Uploaded. Version: 3.0.",
    status: "completed",
    link: "https://drive.google.com/file/d/1zj1C2QCg831R3fmMJscctoLYpVSyrikz/view?usp=sharing",
    fileType: "PDF",
    lastUpdated: new Date("2025-06-23"),
  },

  {
    title: "Individual Project Proposals",
    description:
      "Comprehensive research proposals submitted by each team member covering their respective functional areas.",
    status: "completed",
    fileType: "PDF",
    lastUpdated: new Date("2025-09-19"),
    subDocuments: [
      {
        title: "Proposal: Automated Software Engineers Hiring Platform (Neethila A.L.N.)",
        link: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQBLr3I_yX-GQYiRXGnUQp-TAY54aPBb37qhTrXgGoeZ7H8?e=rb4qI9",
        status: "completed",
      },
      {
        title: "Proposal: Automated Project Managers Hiring Platform (Darren V.C.)",
        link: "https://mysliit.sharepoint.com/:w:/s/CDAPSubmissionCloud/IQAErtOg21l2SJ7FuIfrN8-8AVdktqCpkL9yYqqnnYv7Ptk?e=qZmR5t",
        status: "completed",
      },
      {
        title: "Proposal: Automated Accountans  Hiring Platform (Kalhan A.H.L.)",
        link: "https://drive.google.com/file/d/18cIblzscCTYRWEnpFyFEdo5gzR1WctpA/view?usp=drive_link",
        status: "completed",
      },
      
    ],
  },

  {
    title: "Checklist 1 (25-26J-413)",
    description: "Official project checklist for Phase 1. Status: Uploaded.",
    status: "completed",
    link: "https://mysliit.sharepoint.com/:t:/s/CDAPSubmissionCloud/IQB_C1siWS5tT4U6RaPcSjlmAeP3rlWCa7BFFndHGMkBf0o?e=6IFL3J",
    fileType: "PDF",
    lastUpdated: new Date("2026-01-11"),
  },

  {
    title: "Checklist 2 (25-26J-413)",
    description: "Official project checklist for Phase 1. Status: Uploaded.",
    status: "completed",
    link: "https://mysliit.sharepoint.com/:x:/r/sites/CDAPSubmissionCloud/_layouts/15/Doc.aspx?sourcedoc=%7BC72D8C90-25F4-4DE4-9A3F-B6AC4BD90D83%7D&file=IT22272454%20checklist.xlsx&action=default&mobileredirect=true",
    fileType: "PDF",
    lastUpdated: new Date("2026-01-11"),
  },

  {
    title: " Draft Thesis (25-26J-413)",
    description: "Official project checklist for Phase 1. Status: Uploaded.",
    status: "completed",
    link: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQAGYD3dU0LKTbcauaFaU3jkAWF4qHzT3IsPTJzBiIOwAww?e=iI4tt5",
    fileType: "PDF",
    lastUpdated: new Date("2026-01-11"),
  },

 

  {
    title: "Final Reports",
    description:
      "Comprehensive final documentation including the group report and individual research contributions.",
    status: "in-progress",
    fileType: "Draft",
    lastUpdated: new Date("2026-04-20"),
    subDocuments: [
      {
        title: "Group Final Report",
        link: "#",
        status: "in-progress",
      },
      {
        title: "Individual Report:Automated Software Engineers Hiring Platform (Neethila A.L.N.)",
        link: "#",
        status: "in-progress",
      },
      {
        title:
          "Individual Report:Automated Accountants Hiring Platform (Kalhan A.H.L.)",
        link: "#",
        status: "in-progress",
      },
      
    ],
  },
];
