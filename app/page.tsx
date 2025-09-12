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
      "logo_data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFkmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTA5LTEwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmYxY2YzOTM2LTc4N2UtNDJlNC05ZTc2LWQ2ZDUwOWY3M2Q5ZjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6Q29udGFpbnNBaUdlbmVyYXRlZENvbnRlbnQ9J2h0dHBzOi8vY2FudmEuY29tL2V4cG9ydCc+CiAgPENvbnRhaW5zQWlHZW5lcmF0ZWRDb250ZW50OkNvbnRhaW5zQWlHZW5lcmF0ZWRDb250ZW50PlllczwvQ29udGFpbnNBaUdlbmVyYXRlZENvbnRlbnQ6Q29udGFpbnNBaUdlbmVyYXRlZENvbnRlbnQ+CiA8L3JkZjpEZXNjcmlwdGlvbj4K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",
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