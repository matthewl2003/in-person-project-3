// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Matthew Liang",        // TODO: Add your name
        title: "Front End Developer",      // TODO: Add your professional title
        email: "ucberkeley@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: "This is an in person assignment for INFO153A" // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Front End Development",   // TODO: Replace with your actual skills
        "General Aviation",  // TODO: Add more skills
        "Cooking",    // TODO: Students should have at least 5 skills
        "Driving",
        "Sleeping"
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Task Manager Creation",
            description: "Design a webpage of a task manager that lists different task categories and allows users to input them",
            technologies: ["HTML", "CSS"], // Array of technologies used
            completionDate: "2026-09-25",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Technical Document Creation", 
            description: "Draft up a technical document and post onto library",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2026-09-01",
            featured: false
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: true,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
console.log("Owner name:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);
