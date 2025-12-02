export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `<h1>Software Development Proposal</h1>
<p><strong>Prepared for:</strong> [Client Name]</p>
<p><strong>Prepared by:</strong> [Your Company Name]</p>
<p><strong>Date:</strong> [Date]</p>
<br/>
<h2>Executive Summary</h2>
<p>This proposal outlines the software development project scope, timeline, and costs for [Project Name]. Our team is committed to delivering a high-quality solution that meets your business objectives.</p>
<br/>
<h2>Project Overview</h2>
<p>[Describe the project background and objectives]</p>
<br/>
<h2>Scope of Work</h2>
<ul>
  <li>Requirements gathering and analysis</li>
  <li>System design and architecture</li>
  <li>Development and implementation</li>
  <li>Testing and quality assurance</li>
  <li>Deployment and training</li>
</ul>
<br/>
<h2>Timeline</h2>
<p><strong>Phase 1:</strong> Requirements Analysis - [Duration]</p>
<p><strong>Phase 2:</strong> Design - [Duration]</p>
<p><strong>Phase 3:</strong> Development - [Duration]</p>
<p><strong>Phase 4:</strong> Testing - [Duration]</p>
<p><strong>Phase 5:</strong> Deployment - [Duration]</p>
<br/>
<h2>Investment</h2>
<p><strong>Total Project Cost:</strong> $[Amount]</p>
<p><strong>Payment Terms:</strong> [Payment schedule]</p>
<br/>
<h2>Next Steps</h2>
<p>We look forward to partnering with you on this project. Please review this proposal and contact us with any questions.</p>`,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `<h1>Project Proposal</h1>
<p><strong>Project Title:</strong> [Project Name]</p>
<p><strong>Submitted by:</strong> [Your Name]</p>
<p><strong>Date:</strong> [Date]</p>
<br/>
<h2>Introduction</h2>
<p>This proposal presents a comprehensive plan for [project objective]. The project aims to [brief description of goals].</p>
<br/>
<h2>Problem Statement</h2>
<p>[Describe the problem or need this project addresses]</p>
<br/>
<h2>Objectives</h2>
<ul>
  <li>[Objective 1]</li>
  <li>[Objective 2]</li>
  <li>[Objective 3]</li>
</ul>
<br/>
<h2>Methodology</h2>
<p>[Describe the approach and methods to be used]</p>
<br/>
<h2>Timeline and Deliverables</h2>
<p><strong>Milestone 1:</strong> [Description] - [Date]</p>
<p><strong>Milestone 2:</strong> [Description] - [Date]</p>
<p><strong>Milestone 3:</strong> [Description] - [Date]</p>
<br/>
<h2>Budget</h2>
<p><strong>Total Budget:</strong> $[Amount]</p>
<p>[Breakdown of major budget items]</p>
<br/>
<h2>Conclusion</h2>
<p>This project will deliver significant value by [expected outcomes]. We are prepared to begin immediately upon approval.</p>`,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `<p>[Your Name]<br/>
[Your Address]<br/>
[City, State ZIP Code]<br/>
[Email Address]<br/>
[Phone Number]</p>
<br/>
<p>[Date]</p>
<br/>
<p>[Recipient Name]<br/>
[Recipient Title]<br/>
[Company Name]<br/>
[Address]<br/>
[City, State ZIP Code]</p>
<br/>
<p>Dear [Recipient Name],</p>
<br/>
<p>[Opening paragraph - state the purpose of the letter]</p>
<br/>
<p>[Body paragraph - provide details, context, or supporting information]</p>
<br/>
<p>[Closing paragraph - summarize key points and indicate next steps or call to action]</p>
<br/>
<p>Sincerely,</p>
<br/>
<p>[Your Name]<br/>
[Your Title]</p>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `<h1>[Your Full Name]</h1>
<p>[Your Address] | [Phone Number] | [Email Address] | [LinkedIn Profile]</p>
<br/>
<h2>Professional Summary</h2>
<p>[A brief 2-3 sentence overview of your professional background, key skills, and career objectives]</p>
<br/>
<h2>Experience</h2>
<p><strong>[Job Title]</strong> - [Company Name] | [City, State] | [Start Date] - [End Date]</p>
<ul>
  <li>[Achievement or responsibility]</li>
  <li>[Achievement or responsibility]</li>
  <li>[Achievement or responsibility]</li>
</ul>
<br/>
<p><strong>[Job Title]</strong> - [Company Name] | [City, State] | [Start Date] - [End Date]</p>
<ul>
  <li>[Achievement or responsibility]</li>
  <li>[Achievement or responsibility]</li>
  <li>[Achievement or responsibility]</li>
</ul>
<br/>
<h2>Education</h2>
<p><strong>[Degree]</strong> in [Field of Study]<br/>
[University Name] | [City, State] | [Graduation Date]</p>
<br/>
<h2>Skills</h2>
<ul>
  <li>[Skill 1]</li>
  <li>[Skill 2]</li>
  <li>[Skill 3]</li>
  <li>[Skill 4]</li>
</ul>
<br/>
<h2>Certifications</h2>
<ul>
  <li>[Certification Name] - [Issuing Organization] | [Date]</li>
</ul>`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `<p>[Your Name]<br/>
[Your Address]<br/>
[City, State ZIP Code]<br/>
[Email Address]<br/>
[Phone Number]</p>
<br/>
<p>[Date]</p>
<br/>
<p>[Hiring Manager Name]<br/>
[Company Name]<br/>
[Company Address]<br/>
[City, State ZIP Code]</p>
<br/>
<p>Dear [Hiring Manager Name],</p>
<br/>
<p>I am writing to express my strong interest in the [Position Title] position at [Company Name]. With my background in [relevant field/experience], I am confident that I would be a valuable addition to your team.</p>
<br/>
<p>In my current role as [Current Position] at [Current Company], I have [describe relevant achievements and responsibilities]. My experience with [specific skills or technologies] has prepared me to contribute effectively to [specific aspects of the job you're applying for].</p>
<br/>
<p>I am particularly drawn to [Company Name] because of [specific reasons related to the company's mission, culture, or projects]. I am excited about the opportunity to [what you hope to accomplish in this role].</p>
<br/>
<p>I would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for considering my application. I look forward to speaking with you soon.</p>
<br/>
<p>Sincerely,</p>
<br/>
<p>[Your Name]</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<p>[Your Name]<br/>
[Your Address]<br/>
[City, State ZIP Code]</p>
<br/>
<p>[Date]</p>
<br/>
<p>Dear [Recipient Name],</p>
<br/>
<p>[Opening paragraph - introduce yourself and state the purpose of your letter]</p>
<br/>
<p>[Body paragraphs - provide details, share information, or express your thoughts]</p>
<br/>
<p>[Closing paragraph - summarize your main points and express any final thoughts or wishes]</p>
<br/>
<p>Best regards,</p>
<br/>
<p>[Your Name]</p>`,
  },
];
