export interface Training {
  id: number;
  image: string;
  college: string;
  location: string;
  program: string;
  topics: string[];
  description?: string;
}

export const trainingData: Training[] = [
  {
    id: 1,

    image:
      "/images/training/Pune/Batch1.jpeg",

    college:
      "Symboisis Skills and professional University",

    location:
      "Pune, Maharashtra",

    program:
      "NSDC Skill Training",

    topics: [
      "Python",
      "Machine Learning",
        "C programming",
    ],

    description:
      "Conducted hands-on technical training for students as part of an NSDC skill development program.",
  },

  {
    id: 2,

    image:
      "/images/training/Pune/Batch2.jpeg",

    college:
      "Symboisis Skills and professional University",

    location:
      "Pune, Maharashtra",

    program:
      "NSDC Skill Training",

    topics: [
      "Python",
      "Machine Learning",
        "C programming",
        
    ],

    description:
      "Delivered practical training sessions focused on programming fundamentals and technical skills.",
  },

  {
    id: 3,

    image:
      "/images/training/Nagpur/Batch1.jpeg",

    college:
      "Ramdeobaba University",

    location:
      "Nagpur, Maharashtra",

    program:
      "Skill Training",

    topics: [
      "Python",
      "Data Structure And Algo",
      "Leetcode",
      "Problem Solving"
    ],

    description:
      "Conducted interactive technical sessions and practical exercises for students.",
  },


    {
    id: 4,

    image:
      "/images/training/Bihar/Batch1.jpeg",

    college:
      "CV Raman University",

    location:
      "Patna, Bihar",

    program:
      "NSDC Skill Training",

    topics: [
      "Html",
      "CSS",
      "javaScript",
      "Project Making"
    ],

    description:
      "Conducted interactive technical sessions and practical exercises for students.",
  },

    {
    id: 4,

    image:
      "/images/training/Mangalore/Batch1.jpeg",

    college:
      "Srinivas University",

    location:
      "Mangalore, Karnataka",

    program:
      "Skill Training",

    topics: [
      "Advance C",
      "Data Structure And Algo",
      "Presentation",
      "Project Making"
      
    ],

    description:
      "Conducted interactive technical sessions and practical exercises for students.",
  },


      {
    id: 5,

    image:
      "/images/training/Bhopal/Bhopal_Batch1.jpeg",

    college:
      "Scope Global Skill University",

    location:
      "Bhopal, Madhya Pradesh",

    program:
      "NSDC Skill Training",

    topics: [
      "Html",
      "CSS",
      "JavaScript",
      "Project Making"
      
    ],

    description:
      "Conducted interactive technical sessions and practical exercises for students.",
  }
];