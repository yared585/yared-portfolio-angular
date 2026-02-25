import { Injectable } from '@angular/core';
import { Skill, Experience, Education, Certification } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getSkills(): Skill[] {
    return [
      { icon: '☕', name: 'Languages',
        tags: ['JavaSE 8','TypeScript','Python','C++','SQL','HTML5','CSS3','R Studio','JSP','JavaScript'] },
      { icon: '⚙️', name: 'Frameworks',
        tags: ['Spring Boot','Spring MVC','Spring Security','Spring AOP','Spring Batch','Spring Data JPA','Hibernate','Angular','React.js','Struts'] },
      { icon: '🔌', name: 'APIs & Services',
        tags: ['RESTful','REST Templates','SOAP','Microservices','SOA','XML Beans','Swagger','Postman','Maven','Ant'] },
      { icon: '🗄️', name: 'Databases',
        tags: ['MySQL','Oracle','MongoDB','SQL Server','PL/SQL','HQL','JDBC','ER Modeling','Stored Procedures','Triggers','Cursors'] },
      { icon: '☁️', name: 'Cloud & DevOps',
        tags: ['AWS EC2','AWS S3','AWS ECS','AWS CodeCommit','Firebase','Docker','Docker Hub','Bitbucket','Git','CI/CD','Tomcat','TeamCity'] },
      { icon: '🔒', name: 'Security & Testing',
        tags: ['Spring Security','JWT','Coverity','Seeker','JUnit','Integration Testing','Unit Testing'] },
      { icon: '🤖', name: 'AI Dev Tools',
        tags: ['Claude AI','Cursor AI','VS Code','Eclipse','NetBeans','Postman','Swagger'] },
      { icon: '📐', name: 'Patterns & SDLC',
        tags: ['MVC','Repository','Singleton','Observer','DAO','DTO','OOP','Multithreading','Agile','Scrum','Waterfall'] }
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        company:  'Laurel Consulting Group (LCG)',
        role:     'Software Engineer / Application Support',
        location: 'Rockville, MD — Federal Agency Client (Grant Solutions)',
        period:   'Nov 2022 – May 2025',
        open:     true,
        bullets: [
          'Supported ARM (Application Review Module) — maintenance, troubleshooting and enhancements for mission-critical federal grant workflows',
          'Led modernization of legacy Struts-based Java application to Spring Framework — improving performance and maintainability',
          'Developed custom Java/Spring Boot microservices integrated with COTS-based federal platforms',
          'Managed full migration of source code from AWS CodeCommit to Bitbucket including complete branch restructuring',
          'Built Java 8+ backend services using layered Controller → Service → Repository architecture',
          'Applied Java collections, streams, and lambdas for data transformation and aggregation',
          'Implemented centralized exception handling with @ControllerAdvice for consistent API error responses',
          'Containerized services with Docker; led EC2 → Amazon ECS transition for scalable cloud workloads',
          'Identified and remediated security vulnerabilities with Coverity; validated runtime issues with Seeker',
          'Converted legacy Struts Action classes to Spring MVC Controllers applying MVC and Repository patterns'
        ],
        tech: ['Java 8','Spring Boot','Spring MVC','Spring Batch','Spring AOP','Hibernate','JPA',
               'Docker','AWS EC2','AWS ECS','Bitbucket','Oracle','Tomcat','Coverity','Seeker','REST API']
      },
      {
        company:  'MasterCard',
        role:     'Software Developer',
        location: "2200 Mastercard Blvd, O'Fallon, MO",
        period:   'Sep 2022 – Dec 2022',
        open:     false,
        bullets: [
          'Developed new features, change requests, and bug fixes for MasterCard financial software',
          'Built and exposed RESTful web services integrating with Java-based runtime engine and account systems',
          'Implemented Spring Security with JWT for authentication and authorization',
          'Developed Controller Classes using Spring MVC, Spring AOP, Spring Boot, and Spring Batch',
          'Ensured comprehensive test coverage with JUnit and integration tests',
          'Followed CI/CD standards with Maven, TeamCity, GIT, Stash, and BitBucket pipelines',
          'Front-end development using HTML, CSS, JSP with JavaScript client-side validations'
        ],
        tech: ['Java','Spring Boot','Spring MVC','Spring Security','JWT','Spring AOP',
               'REST API','JUnit','Maven','TeamCity','BitBucket','HTML','CSS','JSP']
      },
      {
        company:  'MoreWithUs',
        role:     'Full Stack Java Developer',
        location: '2500 N Annie Glidden Rd, DeKalb, IL 60115',
        period:   'Jul 2021 – Jul 2022',
        open:     false,
        bullets: [
          'Built and maintained Spring REST Controllers and Services for request mappings and integrations',
          'Implemented J2EE Design Patterns: Business Delegate, DTO, and DAO',
          'Developed REST APIs for internal expense management exposed to SAP System via Microservices',
          'Used Java 8: Collections, Multi-Threading, Lambda Expressions, Stream API, Exception Handling',
          'Contributed to architectural design, peer code reviews, and detailed design documentation',
          'Improved code quality through best practices; deployed on Apache Tomcat server'
        ],
        tech: ['Java 8','Spring Boot','Spring MVC','Microservices','SAP Integration',
               'Hibernate','DAO','DTO','HTML5','CSS3','JavaScript','Tomcat','Maven','Git']
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        badge: "Bachelor's Degree", degree: 'B.S. in Computer Science',
        school: 'University of Maryland', location: '1000 Hilltop Cir, Baltimore, MD 21250', year: '2021'
      },
      {
        badge: 'Associate Degree', degree: 'A.S. in Engineering',
        school: 'Montgomery College', location: '51 Mannakee St, Rockville, MD 20850', year: '2019'
      }
    ];
  }

  getCertifications(): Certification[] {
    return [
      { icon: '📊', name: 'Data Science Certificate',      issuer: 'Udemy',              year: '2019' },
      { icon: '🏆', name: 'Phi Theta Kappa Honor Society', issuer: 'Core Competencies',  year: '2019' },
      { icon: '💻', name: 'Software Development Club',      issuer: 'Montgomery College', year: '2019' }
    ];
  }
}
