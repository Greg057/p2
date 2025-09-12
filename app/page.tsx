'use client';

// 🎯 PORTFOLIO PAGE USING ACTUAL PORTFOLIOLAYOUT SYSTEM
// This ensures 100% visual parity with the SaaS version
import PortfolioLayout from '@/components/PortfolioLayout'

// User data embedded at build time (no server-side dependencies)
// NOTE: File URLs include GitHub Pages basePath (e.g., /repo-name/user-files/...)
const userData = {
  "userInfo": {
    "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
    "full_name": "Jane Doe",
    "title": "Software Engineer",
    "email": "jane.doe@email.com",
    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, and cloud DevOps tools.",
    "location": "San Francisco, CA",
    "avatarUrl": "/p2/user-files/119f96db-5d51-4c0a-8643-d6426f30790d/avatar.png",
    "cvUrl": "/p2/user-files/119f96db-5d51-4c0a-8643-d6426f30790d/cv.pdf",
    "custom_links": [
      {
        "id": "linkedin",
        "url": "https://linkedin.com/in/janedoe",
        "icon": "linkedin",
        "title": "LinkedIn"
      },
      {
        "id": "github",
        "url": "https://github.com/janedoe",
        "icon": "github",
        "title": "GitHub"
      }
    ]
  },
  "educations": [
    {
      "id": "7999432b-18ee-4244-a22d-2bc9313784c3",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "degree": "Bachelor of Computer Science",
      "university": "University of California, Berkeley",
      "start_year": "2015",
      "end_year": "2019",
      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
      "logoUrl": "/p2/user-files/119f96db-5d51-4c0a-8643-d6426f30790d/education/7999432b-18ee-4244-a22d-2bc9313784c3-logo-1757661212480.png",
      "order_index": 0,
      "custom_links": [],
      "location": "Berkeley, CA"
    }
  ],
  "experiences": [
    {
      "id": "9457a811-d708-4858-a7e4-a635626ee66e",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "company": "TechWave Solutions",
      "position": "Software Engineer",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
      "logoUrl": "/p2/user-files/119f96db-5d51-4c0a-8643-d6426f30790d/work-experience/9457a811-d708-4858-a7e4-a635626ee66e-logo-1757661188629.jpeg",
      "order_index": 0,
      "custom_links": [],
      "location": "San Francisco, CA"
    },
    {
      "id": "f5ee4235-e452-4de9-bade-902b1d693787",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "company": "BrightApps Inc.",
      "position": "Junior Software Engineer",
      "start_date": "Jun 2019",
      "end_date": "Dec 2020",
      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
      "logoUrl": null,
      "order_index": 1,
      "custom_links": [],
      "location": "San Jose, CA"
    }
  ],
  "projects": [
    {
      "id": "a3476d39-1605-4fda-b635-9db7b29a3545",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "name": "Portfolio Builder Web App",
      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
      "picUrl": "/p2/user-files/119f96db-5d51-4c0a-8643-d6426f30790d/projects/project-a3476d39-1605-4fda-b635-9db7b29a3545-1757661223176.png",
      "order_index": 0,
      "technology_names": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technology_details": [
        {
          "id": "93708f4b-5870-47e3-af3d-cb27e2bc1748",
          "name": "Next.js",
          "logoData": "/icons/nextjs/nextjs-original.svg",
          "logoType": "svg_version",
          "displayName": "Next.js",
          "order_index": 0,
          "technologyName": "nextjs"
        },
        {
          "id": "25654e4c-f542-4705-856c-9e6efbaf5462",
          "name": "Supabase",
          "logoData": "/icons/supabase/supabase-original.svg",
          "logoType": "svg_version",
          "displayName": "Supabase",
          "order_index": 0,
          "technologyName": "supabase"
        },
        {
          "id": "7aab9683-168d-47e6-b059-5f99a1ddae99",
          "name": "Vercel",
          "logoData": "/icons/vercel/vercel-original.svg",
          "logoType": "svg_version",
          "displayName": "Vercel",
          "order_index": 0,
          "technologyName": "vercel"
        }
      ],
      "custom_links": [],
      "technologyNames": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technologyDetails": [
        {
          "id": "93708f4b-5870-47e3-af3d-cb27e2bc1748",
          "name": "Next.js",
          "logoData": "/icons/nextjs/nextjs-original.svg",
          "logoType": "svg_version",
          "displayName": "Next.js",
          "order_index": 0,
          "technologyName": "nextjs"
        },
        {
          "id": "25654e4c-f542-4705-856c-9e6efbaf5462",
          "name": "Supabase",
          "logoData": "/icons/supabase/supabase-original.svg",
          "logoType": "svg_version",
          "displayName": "Supabase",
          "order_index": 0,
          "technologyName": "supabase"
        },
        {
          "id": "7aab9683-168d-47e6-b059-5f99a1ddae99",
          "name": "Vercel",
          "logoData": "/icons/vercel/vercel-original.svg",
          "logoType": "svg_version",
          "displayName": "Vercel",
          "order_index": 0,
          "technologyName": "vercel"
        }
      ]
    },
    {
      "id": "092a8455-3712-4d5b-b9e2-bff3cdf7ffac",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "name": "Movie Recommendation System",
      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
      "picUrl": null,
      "order_index": 1,
      "technology_names": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technology_details": [
        {
          "id": "4b6eb53d-f9ff-49fb-a022-45383d758643",
          "name": "Python",
          "logoData": "/icons/python/python-original.svg",
          "logoType": "svg_version",
          "displayName": "Python",
          "order_index": 0,
          "technologyName": "python"
        },
        {
          "id": "f746aa33-f3fc-4047-b010-c588139ef32d",
          "name": "scikit-learn",
          "logoData": "/icons/scikitlearn/scikitlearn-original.svg",
          "logoType": "svg_version",
          "displayName": "scikit-learn",
          "order_index": 0,
          "technologyName": "scikitlearn"
        },
        {
          "id": "d60dcff9-8b92-4e53-92e8-7343235a2bf1",
          "name": "Flask",
          "logoData": "/icons/flask/flask-original.svg",
          "logoType": "svg_version",
          "displayName": "Flask",
          "order_index": 0,
          "technologyName": "flask"
        },
        {
          "id": "12ac1f0b-07db-458f-ab42-db0bcb4df02a",
          "name": "React",
          "logoData": "/icons/react/react-original.svg",
          "logoType": "svg_version",
          "displayName": "React",
          "order_index": 0,
          "technologyName": "react"
        }
      ],
      "custom_links": [],
      "technologyNames": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technologyDetails": [
        {
          "id": "4b6eb53d-f9ff-49fb-a022-45383d758643",
          "name": "Python",
          "logoData": "/icons/python/python-original.svg",
          "logoType": "svg_version",
          "displayName": "Python",
          "order_index": 0,
          "technologyName": "python"
        },
        {
          "id": "f746aa33-f3fc-4047-b010-c588139ef32d",
          "name": "scikit-learn",
          "logoData": "/icons/scikitlearn/scikitlearn-original.svg",
          "logoType": "svg_version",
          "displayName": "scikit-learn",
          "order_index": 0,
          "technologyName": "scikitlearn"
        },
        {
          "id": "d60dcff9-8b92-4e53-92e8-7343235a2bf1",
          "name": "Flask",
          "logoData": "/icons/flask/flask-original.svg",
          "logoType": "svg_version",
          "displayName": "Flask",
          "order_index": 0,
          "technologyName": "flask"
        },
        {
          "id": "12ac1f0b-07db-458f-ab42-db0bcb4df02a",
          "name": "React",
          "logoData": "/icons/react/react-original.svg",
          "logoType": "svg_version",
          "displayName": "React",
          "order_index": 0,
          "technologyName": "react"
        }
      ]
    },
    {
      "id": "29d1432a-34ae-4062-b8d5-d5d070dcf30c",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "name": "Task Manager Mobile App",
      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
      "picUrl": null,
      "order_index": 2,
      "technology_names": [
        "React Native",
        "SQLite"
      ],
      "technology_details": [
        {
          "id": "3dc7af5e-d532-4e6b-9f63-f0e42d7aaf3e",
          "name": "React Native",
          "logoData": "/icons/reactnative/reactnative-original.svg",
          "logoType": "svg_version",
          "displayName": "React Native",
          "order_index": 0,
          "technologyName": "reactnative"
        },
        {
          "id": "808f0539-7e92-4f5e-8084-d2b7d3f642a8",
          "name": "SQLite",
          "logoData": "/icons/sqlite/sqlite-original.svg",
          "logoType": "svg_version",
          "displayName": "SQLite",
          "order_index": 0,
          "technologyName": "sqlite"
        }
      ],
      "custom_links": [],
      "technologyNames": [
        "React Native",
        "SQLite"
      ],
      "technologyDetails": [
        {
          "id": "3dc7af5e-d532-4e6b-9f63-f0e42d7aaf3e",
          "name": "React Native",
          "logoData": "/icons/reactnative/reactnative-original.svg",
          "logoType": "svg_version",
          "displayName": "React Native",
          "order_index": 0,
          "technologyName": "reactnative"
        },
        {
          "id": "808f0539-7e92-4f5e-8084-d2b7d3f642a8",
          "name": "SQLite",
          "logoData": "/icons/sqlite/sqlite-original.svg",
          "logoType": "svg_version",
          "displayName": "SQLite",
          "order_index": 0,
          "technologyName": "sqlite"
        }
      ]
    }
  ],
  "userTechnologies": [
    {
      "id": "f05a5491-0f14-4199-806c-94352d1fc7a2",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Java",
      "technology_name": "Java",
      "logo_type": "custom_upload",
      "logo_data": "/p2/user-files/119f96db-5d51-4c0a-8643-d6426f30790d/technology-logos/tech-f05a5491-0f14-4199-806c-94352d1fc7a2-1757663739225.png",
      "order_index": 0,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "506c2fdb-e3d9-488a-b017-43096e44748c",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Python",
      "technology_name": "Python",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 1,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "17d934bd-a266-443b-a154-3afa8c687488",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "JavaScript",
      "technology_name": "JavaScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 2,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "75d8ac58-9892-4fde-8d0e-a075659f9ca6",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "React",
      "technology_name": "React",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 3,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "9edd2c0c-4d4c-4a73-9820-7ead52f523ea",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Node.js",
      "technology_name": "Node.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 4,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "ae7b0e1f-6c3f-4b3e-940c-9fa11fe50a89",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "TypeScript",
      "technology_name": "TypeScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 5,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "647e96d4-4591-4cd2-b4f7-07a5353bd59e",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "C++",
      "technology_name": "C++",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 6,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "3bbc02f0-407c-48b6-8927-b1c3fd50d4ae",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Next.js",
      "technology_name": "Next.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 7,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "6129ad9d-e1f8-49b0-b62b-dca7d0c91668",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Spring Boot",
      "technology_name": "Spring Boot",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 8,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "c75e5efa-c06a-43f2-9091-9fc5bf6925e9",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Express.js",
      "technology_name": "Express.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 9,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "c9d5b9bf-6709-4d5d-a9b0-86225a3fc85d",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Django",
      "technology_name": "Django",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 10,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "68daf04b-98cc-465c-9332-0594e2b3c2c2",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "PostgreSQL",
      "technology_name": "PostgreSQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 11,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "bafb0a34-4c42-475f-8393-e6eb87287977",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "MongoDB",
      "technology_name": "MongoDB",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 12,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "8c6e4296-25d0-4456-9b24-8a4f7828f3c7",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "MySQL",
      "technology_name": "MySQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 13,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "375e0ddf-8e49-4bff-9bac-15b6e83ddb41",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Redis",
      "technology_name": "Redis",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 14,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "1d1ed24e-8ded-4e83-8bff-092848374846",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "AWS",
      "technology_name": "AWS",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 15,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "81fdad00-650c-4477-8550-0b4140cc8c8f",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Docker",
      "technology_name": "Docker",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 16,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "2c5c9d3d-7fb0-4820-b58c-c8e2a0642cf6",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Kubernetes",
      "technology_name": "Kubernetes",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 17,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "56aeb711-1fb8-4727-a947-63b9916cc7db",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Git",
      "technology_name": "Git",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 18,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "23a958a2-0c5e-4b4f-b80f-69617eb78e7c",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Jenkins",
      "technology_name": "Jenkins",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 19,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "f715b9ea-dc81-495d-93e5-ce0f430ff5be",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "CI/CD pipelines",
      "technology_name": "CI/CD pipelines",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 20,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "41f0a102-5600-48ff-89cf-5a124aeb4c60",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "REST APIs",
      "technology_name": "REST APIs",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 21,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "4abf5629-22e4-460b-b8aa-7f2b7c046d0d",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "GraphQL",
      "technology_name": "GraphQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 22,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "98a1456b-d390-499d-a76e-09bc9338940c",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Unit Testing",
      "technology_name": "Unit Testing",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 23,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "8318e897-dd63-42ad-a69e-3d77852fe3b6",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Agile/Scrum",
      "technology_name": "Agile/Scrum",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 24,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "7c5bc804-d10d-427c-a845-354fbea72f03",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Test-Driven Development (TDD)",
      "technology_name": "Test-Driven Development (TDD)",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 25,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "dabf3915-3978-419b-9154-d5ca07cfdbe0",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "GitHub Actions",
      "technology_name": "GitHub Actions",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 26,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "a8612f2e-5d73-487f-8048-549aa6b8a005",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Supabase",
      "technology_name": "Supabase",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 27,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "8fcfdb4b-8a9b-45da-886c-2980a0e6844b",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Vercel",
      "technology_name": "Vercel",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 28,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "326b5193-3dd0-4788-88ea-6e0997c60e29",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "scikit-learn",
      "technology_name": "scikit-learn",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 29,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "6c055f29-fb82-4918-8338-e60973b10d7e",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "Flask",
      "technology_name": "Flask",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 30,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "9b461849-ddc1-43c6-b843-035bddf4712c",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "React Native",
      "technology_name": "React Native",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 31,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    },
    {
      "id": "9cc2c0a3-ef74-4da2-8d9e-781fb03a0575",
      "user_id": "119f96db-5d51-4c0a-8643-d6426f30790d",
      "display_name": "SQLite",
      "technology_name": "SQLite",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 32,
      "created_at": "2025-09-12T07:11:31.904+00:00",
      "updated_at": "2025-09-12T07:11:31.904+00:00"
    }
  ],
  "customSections": [],
  "sectionOrder": [
    "personal",
    "experience",
    "education",
    "projects",
    "skills"
  ]
}

// Component layout preferences
const portfolioConfig = {
  "user_info_layout_type": "userInfo1",
  "projects_layout_type": "projects1",
  "skills_layout_type": "skills1",
  "education_layout_type": "card",
  "work_layout_type": "card",
  "github_repo_name": "p2",
  "github_username": "Greg057",
  "github_repo_url": "https://github.com/Greg057/p2"
}

export default function Portfolio() {
  return (
    <PortfolioLayout
      personalInfo={userData.userInfo}
      educations={userData.educations || []}
      experiences={userData.experiences || []}
      projects={userData.projects || []}
      userTechnologies={userData.userTechnologies || []}
      customSections={userData.customSections || []}
      userInfoLayoutType={portfolioConfig?.user_info_layout_type || 'userInfo1'}
      projectsLayoutType={portfolioConfig?.projects_layout_type || 'projects1'}
      skillsLayoutType={portfolioConfig?.skills_layout_type || 'skills1'}
      educationLayoutType={portfolioConfig?.education_layout_type || 'card'}
      workLayoutType={portfolioConfig?.work_layout_type || 'card'}
      sectionOrder={userData.sectionOrder || undefined}
    />
  )
}