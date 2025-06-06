import { notFound } from "next/navigation"
import ProjectDetailClient from "./project-detail-client"

// Project data with detailed information
const projectsData = {
  "yotor-church-management-system": {
    id: 1,
    slug: "yotor-church-management-system",
    title: "Yotor - Modern Church Management",
    shortDescription:
      "A secure, cloud-based system built to streamline church operations, increase transparency, and strengthen community engagement.",
    image: "/images/projects/yotor.png?height=400&width=600",
    category: "Technology",
    location: "Addis Ababa, Ethiopia",
    duration: "8 months",
    beneficiaries: "2,500 people",
    teamSize: "8 volunteers",
    urgency: "High Priority",
    fundingGoal: 120000,
    fundingRaised: 43000,
    problem: `Many churches across Ethiopia struggle with managing member data, financial records, and event coordination due to reliance on outdated or manual systems.

  The lack of secure digital infrastructure results in data loss, poor communication, and administrative bottlenecks. It also limits outreach effectiveness and accountability in resource use.

  With growing congregations and scattered records, pastors and administrators are overwhelmed and unable to serve their members effectively.`,
    solution: `Yotor is a cloud-based church management system tailored for the unique needs of Ethiopian churches. It enables secure record-keeping, digital giving, event coordination, and member communication all in one place.

  The platform provides dashboards for pastors, finance teams, and ministry leaders to make informed decisions. It supports multiple languages and works well even on low-bandwidth connections.

  Through training and onboarding, churches will transition smoothly from paper systems to digital, leading to long-term operational efficiency and transparency.`,
    impact: [
      "2,500+ church members will benefit from improved communication and access to services",
      "90% reduction in administrative errors through centralized digital records",
      "Increased member engagement through SMS/email alerts and event reminders",
      "Enhanced financial accountability and reporting for leadership",
      "Multiple churches will share and reuse the system across regions",
      "Better pastoral care through access to accurate member data and prayer needs",
    ],
    timeline: [
      {
        phase: "Phase 1: System Design & Requirements",
        duration: "Month 1-2",
        description: "Gather needs, design UI/UX, and plan system architecture",
        status: "completed",
      },
      {
        phase: "Phase 2: Development & Internal Testing",
        duration: "Month 3-5",
        description: "Build core modules (members, finance, events, messaging)",
        status: "in progress",
      },
      {
        phase: "Phase 3: Church Pilot & Training",
        duration: "Month 6-7",
        description:
          "Deploy to 3 partner churches and conduct hands-on training",
        status: "upcoming",
      },
      {
        phase: "Phase 4: Public Launch",
        duration: "Month 8",
        description:
          "Make platform available for churches nationwide with support material",
        status: "upcoming",
      },
    ],
    testimonials: [
      {
        name: "Pastor Daniel Getachew",
        role: "Lead Pastor, Light of Grace Church",
        quote:
          "Yotor has completely transformed how we manage our ministry—it’s like moving from darkness to light.",
      },
      {
        name: "Hanna Mulu",
        role: "Church Secretary",
        quote:
          "We used to lose member data every year. Now, everything is organized, safe, and accessible.",
      },
    ],
    urgencyFactors: [
      "Growing number of churches struggling with member and finance management",
      "Increased data breaches from unprotected manual systems",
      "Demand from over 20 churches awaiting deployment",
      "Need to digitize before the next budget cycle for better planning",
    ],
  },
  "my-fellow": {
    id: 2,
    slug: "my-fellow",
    title: "MY FELLOW",
    shortDescription:
      "A digital platform helping students discover, connect, and grow with Christian fellowships on university campuses across Ethiopia.",
    image: "/images/projects/my-fellow.png?height=400&width=600",
    category: "Education",
    location: "Universities Nationwide, Ethiopia",
    duration: "12 months",
    beneficiaries: "1,500 youth",
    teamSize: "8 volunteers",
    urgency: "Ongoing",
    fundingGoal: 85000,
    fundingRaised: 27000,
    problem: `Every year, thousands of new university students arrive on campus without knowing how to find Christian fellowships.

  Many struggle with loneliness, spiritual confusion, and lack of direction during their most formative years. Traditional fellowship outreach methods are slow, outdated, or hard to access.

  Students from rural areas or different denominations often feel disconnected and miss the opportunity to grow in faith and community.`,
    solution: `MY FELLOW is a student-centered digital platform that maps and connects active Christian fellowships across campuses in Ethiopia.

  Through a clean interface, new students can easily find registered fellowships, meeting times, Bible study groups, and contact leaders. The platform includes chat support, campus ambassador programs, and testimony-sharing features to help build trust.

  The project also includes training for fellowship leaders on digital engagement and tools to manage their group presence on the platform.`,
    impact: [
      "1,500+ students will find a spiritual home within weeks of arriving on campus",
      "100+ fellowships will gain visibility and tools to grow their membership",
      "80% increase in student participation in Bible studies and outreach events",
      "Students will experience reduced isolation and greater spiritual maturity",
      "Campus leaders will be equipped for digital discipleship and mentorship",
    ],
    timeline: [
      {
        phase: "Phase 1: Platform Design & Research",
        duration: "Month 1-3",
        description:
          "Conduct student interviews, define features, and build prototype",
        status: "completed",
      },
      {
        phase: "Phase 2: Development & Fellowship Registration",
        duration: "Month 4-7",
        description:
          "Build core system and onboard fellowships across 20 campuses",
        status: "in progress",
      },
      {
        phase: "Phase 3: Student Launch Campaign",
        duration: "Month 8-10",
        description:
          "Roll out campaign targeting freshmen with digital onboarding tools",
        status: "upcoming",
      },
      {
        phase: "Phase 4: Feedback & Expansion",
        duration: "Month 11-12",
        description:
          "Collect feedback, improve UX, and expand to more institutions",
        status: "upcoming",
      },
    ],
    testimonials: [
      {
        name: "Bethel Samuel",
        role: "Student, Bahir Dar University",
        quote:
          "Before using MY FELLOW, I didn’t know where to start. Now I’m growing spiritually and even leading a Bible group.",
      },
      {
        name: "Bro. Elias Mekonnen",
        role: "IFES Fellowship Leader",
        quote:
          "This platform has revolutionized how we connect with new students. It's a true blessing for campus ministry.",
      },
    ],
    urgencyFactors: [
      "Next academic intake is approaching — thousands of freshmen will arrive soon",
      "Fellowships lack digital presence to connect with tech-native students",
      "Low engagement reported in the past year due to poor visibility",
      "Platform needs final funding for full nationwide onboarding features",
    ],
  },

  "melhk-podcast": {
    id: 3,
    slug: "melhk-poadcast",
    title: "MELHIK - PODCAST",
    shortDescription:
      "Biblically grounded podcast equipping Christian youth for spiritual, emotional, and social maturity in today’s culture.",
    image: "/images/projects/melhk.png?height=400&width=600",
    category: "Podcast",
    location: "Nationwide (Online)",
    duration: "2 years",
    beneficiaries: "5,000 people",
    teamSize: "8 volunteers",
    urgency: "Ongoing",
    fundingGoal: 120000,
    fundingRaised: 41000,
    problem: `Today’s Christian youth face increasing challenges in navigating identity, relationships, purpose, and culture. Social media, peer pressure, and distorted worldviews often shape their thinking more than Scripture.

  Many lack access to relevant, Bible-based teaching that speaks directly to their struggles in a way they understand and relate to. Churches often don’t have the resources or platforms to reach them consistently and holistically.

  The result is confusion, isolation, and shallow spiritual growth among thousands of young believers.`,
    solution: `MELHIK is a youth-focused podcast that speaks life into the hearts of young people through biblical conversations, interviews, and stories.

  The program addresses real issues—like anxiety, relationships, calling, peer pressure, and identity—while rooting every topic in Scripture. Episodes are designed to be authentic, practical, and relatable.

  In addition to the audio series, MELHIK hosts seasonal live sessions, Q&A episodes, and listener challenges to build community and accountability.`,
    impact: [
      "5,000+ youth will regularly engage with biblical content tailored to their context",
      "Listeners will grow in spiritual maturity, emotional intelligence, and purpose",
      "Churches and youth leaders will gain access to a free discipleship tool",
      "Topics like dating, depression, and faith will be addressed with truth and grace",
      "Youth will feel less isolated and more connected to a community of faith",
    ],
    timeline: [
      {
        phase: "Phase 1: Content Planning & Branding",
        duration: "Month 1-2",
        description:
          "Topic research, guest scheduling, and visual/audio branding setup",
        status: "completed",
      },
      {
        phase: "Phase 2: Episode Production & Launch",
        duration: "Month 3-6",
        description: "Produce 20+ episodes, launch on major podcast platforms",
        status: "in progress",
      },
      {
        phase: "Phase 3: Audience Growth & Engagement",
        duration: "Month 7-18",
        description:
          "Marketing, collaborations, listener feedback, and live events",
        status: "ongoing",
      },
      {
        phase: "Phase 4: Expansion & Sustainability",
        duration: "Month 19-24",
        description:
          "Train youth contributors, secure funding, and scale reach",
        status: "upcoming",
      },
    ],
    testimonials: [
      {
        name: "Samrawit G.",
        role: "University Student",
        quote:
          "MELHIK helped me process life through a biblical lens. It's like having a mentor in my ear every week.",
      },
      {
        name: "Pastor Getahun D.",
        role: "Youth Pastor",
        quote:
          "This podcast fills a major gap in youth discipleship. It speaks truth with relevance and love.",
      },
    ],
    urgencyFactors: [
      "Sharp rise in youth mental health struggles and identity confusion",
      "Growing hunger for biblical content in digital format",
      "Need to increase production capacity to meet growing demand",
      "Platform expansion needed for more inclusive topics and languages",
    ],
  },
  gemenaye: {
    id: 4,
    slug: "gemenaye",
    title: "GEMENAYE",
    shortDescription:
      "A heart-centered TV program sharing real stories of pain, healing, and the transforming power of Christ-centered love.",
    image: "/images/projects/gemenaye.png?height=400&width=600",
    category: "TV Program",
    location: "Addis Ababa & surrounding regions",
    duration: "10 months",
    beneficiaries: "800 families",
    teamSize: "6 volunteers",
    urgency: "Critical Need",
    fundingGoal: 180000,
    fundingRaised: 49000,
    problem: `Many individuals and families are suffering silently—dealing with grief, shame, addiction, trauma, and depression—often without anyone to talk to or support them.

  Cultural stigma discourages open conversations about emotional pain. As a result, people isolate themselves and miss out on healing and restoration through community, understanding, and the love of Christ.

  Current media rarely gives space to raw, redemptive stories that bring both truth and hope.`,
    solution: `GEMENAYE is a powerful television program that invites people to share their stories of struggle and healing, highlighting how love, faith, and authentic relationships make a difference.

  Each episode features a real-life testimony, expert commentary, and practical biblical reflections. The program creates a safe space for viewers to see themselves in the stories and find encouragement to open up, seek help, and connect with community support.

  The show will air weekly on major Christian TV channels and be available online with resources for follow-up support.`,
    impact: [
      "800+ families will find hope through shared testimonies of healing and grace",
      "Viewers will be encouraged to seek counseling, mentorship, and prayer",
      "Taboo topics like addiction, abuse, and grief will be addressed with compassion",
      "Churches and Christian counselors will be connected with hurting individuals",
      "A nationwide culture of vulnerability and healing will be fostered",
    ],
    timeline: [
      {
        phase: "Phase 1: Pre-Production & Story Sourcing",
        duration: "Month 1-2",
        description: "Research stories, select participants, and plan episodes",
        status: "in progress",
      },
      {
        phase: "Phase 2: Production & Broadcasting",
        duration: "Month 3-8",
        description: "Film and air 20+ episodes on TV and digital platforms",
        status: "upcoming",
      },
      {
        phase: "Phase 3: Community Follow-up & Support",
        duration: "Month 9-10",
        description:
          "Connect viewers with support groups, counselors, and churches",
        status: "upcoming",
      },
    ],
    testimonials: [
      {
        name: "Hiwot Tadesse",
        role: "TV Viewer",
        quote:
          "For the first time, I felt seen and heard through someone else's story. GEMENAYE gave me courage to open up.",
      },
      {
        name: "Daniel M.",
        role: "Christian Counselor",
        quote:
          "This program is a vital bridge between pain and healing. It’s a ministry of presence through media.",
      },
    ],
    urgencyFactors: [
      "Spike in family breakdowns and mental health struggles post-pandemic",
      "Lack of safe, Christ-centered spaces for emotional healing on media",
      "High demand for content addressing real-life issues with grace and truth",
      "Production team ready, but funding is delaying episode rollout",
    ],
  },
  "habesha-students": {
    id: 5,
    slug: "habesha-students",
    title: "HABESHA STUDENTS",
    shortDescription:
      "An online discipleship platform guiding students toward biblical truth through structured lessons and life-changing questions.",
    image: "/images/projects/habesha-students.png?height=400&width=600",
    category: "Online Platform",
    location: "Nationwide (Ethiopia)",
    duration: "10 months",
    beneficiaries: "1,000 families",
    teamSize: "5 volunteers",
    urgency: "Ongoing",
    fundingGoal: 90000,
    fundingRaised: 34000,
    problem: `Many Ethiopian students are facing spiritual confusion, identity struggles, and moral pressure in a world full of misinformation and distractions.

  Most schools and campuses lack access to sound biblical teachings that address real-life questions, especially in a digital form accessible to students wherever they are.

  There is a need for a clear, engaging platform where youth can explore faith, ask tough questions, and discover God’s truth in a safe and structured way.`,
    solution: `Habesha Students is a dynamic digital discipleship platform offering structured biblical lessons through the addishiwot.net website and mobile app.

  The platform guides students through a progressive learning journey—covering identity, purpose, salvation, and biblical worldview. It uses a conversational tone, visual aids, and interactive questions to deepen understanding.

  Lessons are delivered via email or app notifications for consistent growth. A community feature will allow discussion and mentor responses to student inquiries.`,
    impact: [
      "1,000+ families reached with gospel-centered lessons",
      "Hundreds of students grounded in biblical truth and identity",
      "Increased biblical literacy among high school and university students",
      "Strengthened Christian communities on and off campuses",
      "Scalable platform for future youth discipleship across Africa",
    ],
    timeline: [
      {
        phase: "Phase 1: Curriculum Expansion",
        duration: "Month 1-2",
        description: "Create new lesson modules and improve lesson UX flow",
        status: "in progress",
      },
      {
        phase: "Phase 2: Mobile App Promotion",
        duration: "Month 3-6",
        description:
          "Launch mobile app updates and run a digital awareness campaign",
        status: "upcoming",
      },
      {
        phase: "Phase 3: Mentorship Integration",
        duration: "Month 7-10",
        description:
          "Train online mentors to respond to student questions via the platform",
        status: "upcoming",
      },
    ],
    testimonials: [
      {
        name: "Selam Berhanu",
        role: "University Freshman",
        quote:
          "The lessons helped me understand who I am in Christ. I finally got clarity on things I struggled with for years.",
      },
      {
        name: "Teddy Gebremedhin",
        role: "Campus Ministry Leader",
        quote:
          "Habesha Students is filling a crucial gap in youth discipleship. The structured content is exactly what students need.",
      },
    ],
    urgencyFactors: [
      "Rapid increase in digital misinformation targeting youth",
      "Urgent need for scalable online discipleship solutions",
      "High engagement but limited volunteer mentorship capacity",
      "Potential partnerships waiting on platform stability improvements",
    ],
  },
  hulentenawi: {
    id: 6,
    slug: "hulentenawi",
    title: "HULENTENAWI",
    shortDescription:
      "A mobile platform for self-growth, meaningful dialogue, and biblical wisdom in everyday life.",
    image: "/images/projects/hulentenawi.png?height=400&width=600",
    category: "Online Platform",
    location: "Ethiopia (Urban & Semi-Urban)",
    duration: "10 months",
    beneficiaries: "1,000 families",
    teamSize: "5 volunteers",
    urgency: "Ongoing",
    fundingGoal: 110000,
    fundingRaised: 42000,
    problem: `In a world where personal development is widely pursued, many people—especially youth—struggle to find reliable and biblically grounded guidance.

  Questions about relationships, career, purpose, and spiritual growth often go unanswered due to a lack of accessible, trustworthy mentors or communities. This has led to isolation, confusion, and spiritual drift in many lives.

  Traditional support systems are either overwhelmed or disconnected from the digital reality where people seek help.`,
    solution: `HULENTENAWI is a mobile-first platform that offers curated self-development content through a biblical lens and connects users through safe, moderated chatrooms.

  The app includes discussion topics, real-time chats, guided self-reflection prompts, and mentor insights. Users can engage in weekly themed discussions, share struggles anonymously, and track their personal growth.

  Built to encourage openness and transformation, the platform balances spiritual depth with practical life advice, helping people grow together in community.`,
    impact: [
      "1,000 families engaged in consistent personal and spiritual development",
      "500+ active users weekly discussing life and faith challenges",
      "A safe online space where biblical principles meet real-life issues",
      "Development of 10+ guided growth tracks on key life areas",
      "Ongoing mentorship model that scales with user growth",
    ],
    timeline: [
      {
        phase: "Phase 1: Platform Optimization",
        duration: "Month 1-2",
        description:
          "Improve chat stability, content delivery, and onboarding experience",
        status: "in progress",
      },
      {
        phase: "Phase 2: Growth Tracks Launch",
        duration: "Month 3-6",
        description: "Introduce structured development journeys for users",
        status: "upcoming",
      },
      {
        phase: "Phase 3: Mentor Community Rollout",
        duration: "Month 7-10",
        description: "Onboard mentors to engage with users inside the app",
        status: "upcoming",
      },
    ],
    testimonials: [
      {
        name: "Mekdes Tadesse",
        role: "App User",
        quote:
          "HULENTENAWI helped me deal with personal struggles I never thought I could talk about. The community feels like family.",
      },
      {
        name: "Eyob Lemma",
        role: "Content Contributor",
        quote:
          "It’s rare to find a platform that combines self-improvement with biblical integrity. HULENTENAWI does it beautifully.",
      },
    ],
    urgencyFactors: [
      "Increasing mental health challenges among young adults",
      "Growing hunger for spiritual mentorship in digital spaces",
      "Strong user demand for guided content and deeper community",
      "Opportunity to partner with churches for larger impact",
    ],
  },
  "jesus-film": {
    id: 7,
    slug: "jesus-film",
    title: "JESUS FILM",
    shortDescription:
      "A global film outreach bringing the life of Jesus to hearts through powerful, Christ-centered storytelling.",
    image: "/images/projects/jesus-film.png?height=400&width=600",
    category: "Online Platform",
    location: "Global Reach (Localized Focus in Ethiopia)",
    duration: "10 months",
    beneficiaries: "1,000 families",
    teamSize: "5 volunteers",
    urgency: "Ongoing",
    fundingGoal: 150000,
    fundingRaised: 67000,
    problem: `Billions of people have never heard the story of Jesus in a language or form they understand. Even in connected communities, biblical literacy is declining, and the gospel feels distant or irrelevant to many.

  Traditional outreach methods struggle to break through cultural, linguistic, and generational barriers. In rural or non-literate populations, printed materials alone are not enough.`,
    solution: `The JESUS FILM project leverages the power of visual storytelling to present the gospel in a universally engaging format.

  By using film—dubbed into local languages and shared both online and offline—the message of Jesus becomes relatable and accessible. From house churches to smartphones, the story of Christ reaches people where they are.

  This initiative includes film screening events, mobile app distribution, and digital evangelism through social media, with a strong focus on local follow-up and discipleship.`,
    impact: [
      "Over 490 million people globally reached with the gospel through film",
      "Localized outreach in Ethiopia reaching 1,000+ families in 10 months",
      "Partnerships with local churches for on-the-ground discipleship",
      "Films available in Amharic, Afan Oromo, and 12+ local languages",
      "Interactive follow-up tools integrated with WhatsApp and SMS",
    ],
    timeline: [
      {
        phase: "Phase 1: Localization & Translation",
        duration: "Month 1-3",
        description:
          "Translate and adapt the JESUS Film into more Ethiopian languages",
        status: "complete",
      },
      {
        phase: "Phase 2: Digital Distribution",
        duration: "Month 4-6",
        description: "Promote via YouTube, social platforms, and mobile apps",
        status: "in progress",
      },
      {
        phase: "Phase 3: Community Screenings & Follow-Up",
        duration: "Month 7-10",
        description:
          "Host film events and connect viewers to local discipleship paths",
        status: "upcoming",
      },
    ],
    testimonials: [
      {
        name: "Abel Mebratu",
        role: "Village Pastor",
        quote:
          "The JESUS Film made people cry. They had never seen the gospel so clearly. It changed our whole community.",
      },
      {
        name: "Lemlem Desta",
        role: "Film Watcher",
        quote:
          "I watched it on my phone. It felt like Jesus was talking directly to me. I've never been the same since.",
      },
    ],
    urgencyFactors: [
      "Millions remain unreached in Ethiopia and neighboring regions",
      "Film is a proven method for sharing the gospel with illiterate audiences",
      "Local teams are ready but need resources to scale screenings",
      "Digital viewership is rapidly growing—now is the time to act",
    ],
  },
};

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
