// src/data.js
export const portfolioData = {
  common: {
    name: "Lam The Vinh",
    email: "lamthevinh71vt@gmail.com",
    github: "https://github.com/VinhLam",
    education: "Can Tho University - GPA: 3.74/4",
    avatar: "/images/me.jpg", 
  },
  ai: {
    role: "AI Researcher & Data Scientist",
    objective: "Motivated AI enthusiast seeking AI Talents training. Strong foundation in Deep Learning, NLP, and Computer Vision.",
    skills: [
      "Python", "PyTorch", "OpenCV", "Scikit-learn", 
      "Deep Learning", "Pandas", "NumPy"
    ],
    projects: [
      {
        name: "Text Sentiment Analysis",
        tech: "Python, PyTorch, Transformers, Flask",
        desc: "Real-time emotion detection (Joy, Sadness, Anger...) using a fine-tuned DistilBERT model. Achieved 93.88% accuracy and 0.94 F1-score.",
        link: "https://github.com/VinhLam2606/Al-Text-Sentiment-Analysis.git"
      },
      {
        name: "Deepfake Detection System",
        tech: "Python, ResNeXt50, LSTM, Django",
        desc: "Web application for detecting fake videos. Utilizes a hybrid ResNeXt50 (CNN) and LSTM (RNN) architecture for spatial-temporal analysis.",
        link: "https://github.com/VinhLam2606/Fundamental-Topic.git"
      },
      {
        name: "Spam & Phishing Detector",
        tech: "Python, Scikit-learn, TF-IDF, SVM",
        desc: "Automated email filtering system classifying threats using Linear SVM and Logistic Regression, optimized via GridSearchCV.",
        link: "https://github.com/VinhLam2606/Al-powered-detector-for-spam-and-phishing-emails.git"
      },
      {
        name: "AI Website Vulnerability Scanner",
        tech: "Python, Random Forest, Pandas",
        desc: "Security assessment tool identifying SQL Injection, XSS, and CSRF vulnerabilities using a Multi-Output Random Forest Classifier.",
        link: "https://github.com/VinhLam2606/Al-Website-Vulnerability-Scanner.git"
      }
    ]
  },
  dotnet: {
    role: "C# .NET Developer",
    objective: "Seeking a C#.NET Developer Internship to apply academic knowledge to real-world projects. Aspiring to become a full-time .NET Developer.",
    skills: [
      "C#", "ASP.NET Core", "SQL Server", 
      "Windows Forms", "Entity Framework", "Git/GitHub"
    ],
    projects: [
      {
        name: "Gym Management System",
        tech: "C#, Windows Forms, SQL Server",
        desc: "Comprehensive gym management software handling members, packages, branches, and generating monthly revenue reports.",
        link: "https://github.com/gnout1912/GZONE"
      },
      {
        name: "Inventory Management System",
        tech: "C#, Windows Forms, SQL Server",
        desc: "Warehouse inventory tool allowing product addition, ID-based search, viewing lists, and secure data storage.",
        link: "https://github.com/VinhLam2606/Inventory-Management"
      },
      {
        name: "Register Form (ASP.NET)",
        tech: "C#, ASP.NET, JavaScript, SQL Server",
        desc: "Secure web registration form built on ASP.NET, featuring login verification and robust input validation.",
        link: "https://github.com/gnout1912/GZONE"
      }
    ]
  },
  fullstack: {
    role: "Fullstack Web Developer",
    objective: "Versatile Web Developer bridging the gap between traditional PHP systems and modern JS frameworks. Experienced in building scalable e-commerce solutions using Vue.js, Node.js, and SQL databases.",
    skills: [
      "Vue.js", "Node.js", "PHP", 
      "PostgreSQL", "MySQL", "TanStack Query", "REST API"
    ],
    projects: [
      {
        name: "VTJersey Store",
        tech: "Vue.js, Node.js, PostgreSQL, TanStack Query",
        desc: "Modern e-commerce platform for sportswear featuring a high-performance frontend, server-side REST APIs, and robust state management.",
        link: "https://github.com/VinhLam2606/VT_Jersey.git"
      },
      {
        name: "VuongTinhSneaker",
        tech: "PHP, MySQL, Bootstrap, HTML/CSS",
        desc: "Classic sneaker e-commerce website built with native PHP. Features include user authentication, product management, and order processing.",
        link: "https://github.com/VinhLam2606/VuongTinhSneaker.git"
      }
    ]
  }
};