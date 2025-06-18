import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data
  await prisma.user.deleteMany();
  await prisma.strategy.deleteMany();
  console.log("🗑️  Cleared existing data");

  // Create strategies first
  const strategies = await Promise.all([
    prisma.strategy.create({
      data: {
        title: "Digital Missions",
        description:
          "Empowering churches and ministries to embrace technology for Gospel advancement",
        fullDescription:
          "Our Digital Missions strategy focuses on equipping churches and ministries with the tools and training needed to effectively reach people in the digital age. We provide comprehensive training in digital evangelism, social media ministry, and online discipleship.",
        slug: "digital-missions",
        icon: "🌐",
        activities: [
          "Digital Evangelism Training",
          "Church Tech Mobilization",
          "Online Discipleship",
          "Social Media Ministry",
        ],
        visionText:
          "To see every church equipped and empowered to reach their community through digital platforms",
        involvedText:
          "Join us in training churches and ministries to embrace digital tools for Kingdom work",
        impactQuote:
          "Over 500 churches trained in digital ministry across Ethiopia",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Digital Evangelism",
        description:
          "Leading digital strategies to raise multiplying missionaries and reach millions with the Gospel",
        fullDescription:
          "Our Digital Evangelism strategy focuses on reaching millions with the Gospel through digital platforms. We train and equip digital missionaries to effectively share Christ online and create multiplying disciples.",
        slug: "digital-evangelism",
        icon: "📱",
        activities: [
          "Online Evangelism",
          "Digital Content Creation",
          "Platform Strategy",
          "Multiplier Training",
        ],
        visionText:
          "To reach millions with the Gospel through digital platforms and raise multiplying missionaries",
        involvedText:
          "Partner with us to reach the digital generation with the Gospel",
        impactQuote:
          "Over 2 million people reached through digital evangelism campaigns",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Digital Mentorship",
        description:
          "Raising digital mentors and sharing Christ with Ethiopia's younger generation online",
        fullDescription:
          "Our Digital Mentorship strategy focuses on raising digital mentors who can disciple and coach online seekers. We create platforms and tools for effective online discipleship and mentorship.",
        slug: "digital-mentorship",
        icon: "👥",
        activities: [
          "Mentor Training",
          "Online Discipleship",
          "Platform Development",
          "Youth Engagement",
        ],
        visionText:
          "To see every young person in Ethiopia have access to digital mentorship and discipleship",
        involvedText: "Help us raise digital mentors for the next generation",
        impactQuote: "Over 1,000 digital mentors trained and active",
      },
    }),
  ]);

  console.log("📋 Created strategies");

  // Create missionaries
  const missionaries = await Promise.all([
    prisma.user.create({
      data: {
        name: "Senay Kumelachew",
        title: "Digital Mission Team Leader",
        email: "senay.kumelachew@greatcommissionethiopia.org",
        phone: "+251 91 876 5432",
        location: "Ethiopia",
        years: "6+ years",
        focus: "Digital Missions & Church Tech Mobilization",
        shortBio:
          "A passionate digital strategist empowering churches and campuses to embrace technology for Gospel advancement.",
        fullBio:
          "Senay Kumelachew is a young, sociable, and technophilic leader who finds joy in reading, walking, and spending time with people. As a committed digital strategist, Senay devotes his life to equipping churches and ministries to embrace technology for Kingdom work. His passion for digital missions began back in high school, fueled by his frustration over the Church's underuse of social media and digital tools. Everything changed when, as a freshman university student, he encountered the digital strategy team at Great Commission Ministry Ethiopia. From that moment, Senay joined as a volunteer mobilizer and online missionary. He pioneered digital strategy initiatives in his campus fellowship and local church, training peers and launching outreach efforts. As an associate staff, he traveled from campus to campus and church to church, equipping others to become digital missionaries. To fully embrace this calling, Senay became a full-time staff member in September 2018. Today, he serves as the Digital Mission Team Leader at GCME's Digital Strategy Office, leading projects that empower the Church to thrive in the digital age.",
        website: "senaymission.org",
        qualification: "Digital Strategy & Ministry Leadership",
        experience: "6+ years",
        mission:
          "Empowering churches and ministries to embrace technology for Gospel advancement and digital missions",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[0].id, // Digital Missions
        prayerRequests: [
          "Open hearts among churches to embrace digital outreach",
          "Wisdom to lead the digital mission team effectively",
          "Strength and renewed passion in training digital missionaries",
          "Provision for wider campus mobilization efforts",
        ],
        recentUpdates: [
          {
            date: "April 2025",
            title: "Campus Mobilization Tour",
            content:
              "Senay visited 7 university campuses this month to train student leaders in digital missions. Over 120 students committed to start online outreach ministries.",
          },
          {
            date: "February 2025",
            title: "Local Church Training Initiative",
            content:
              "Collaborated with 10 local churches to launch customized digital strategy plans. Pastors reported increased engagement and outreach success.",
          },
          {
            date: "December 2024",
            title: "Online Missionaries Summit",
            content:
              "Organized a nationwide virtual summit, training 400+ digital missionaries on evangelism tools and content strategy for 2025.",
          },
        ],
        supportNeeds: [
          {
            item: "Ministry Logistics",
            amount: "$8000",
            description:
              "Travel, training materials, and workshop coordination",
            progress: 65,
            raised: "$5200",
          },
          {
            item: "Laptop Upgrade",
            amount: "$2000",
            description:
              "Essential for training presentations and media creation",
            progress: 90,
            raised: "$1800",
          },
          {
            item: "Monthly Support",
            amount: "$1200",
            description: "Covers personal and ministry expenses",
            progress: 75,
            raised: "$900",
          },
        ],
        // Impact statistics
        livesImpacted: 2500,
        communitiesServed: 15,
        projectsCompleted: 8,
      },
    }),
    prisma.user.create({
      data: {
        name: "Samson Usmael",
        title: "National Director of Digital Strategies",
        email: "samson.usmael@greatcommissionethiopia.org",
        phone: "+251 91 234 5678",
        location: "Ethiopia",
        years: "10+ years",
        focus: "Digital Evangelism & Discipleship",
        shortBio:
          "A former atheist turned digital missionary, Samson leads digital strategies to raise multiplying missionaries through tech.",
        fullBio:
          "Samson Usmael is a family man, a passionate tech enthusiast, and a visionary leader dedicated to advancing the Kingdom of God through digital platforms. He studied Electrical and Computer Engineering, and over the past decade, he has immersed himself in filmmaking, game and software development, and leadership training — all geared toward empowering the younger generation. Once known as 'Sami Ja' — meaning 'Sami is god' — during his atheist days, Samson transformed his identity after encountering Christ. His name evolved to 'Sami Yeja' (meaning 'belongs to God'), symbolizing his spiritual transformation and new mission. From his university years onward, Samson dedicated his life to glorifying God in his generation. He has reached millions with the Gospel through digital platforms and helped raise thousands of multiplying digital missionaries. As the National Director of Digital Strategies at Great Commission Ministry Ethiopia, Samson is equipping a new wave of digital missionaries with practical skills in programming, design, photography, blogging, cinematography, and more to carry the Gospel into the digital age.",
        website: "samiyeja.org",
        qualification: "Electrical and Computer Engineering",
        experience: "10+ years",
        mission:
          "Leading digital strategies to raise multiplying missionaries and reach millions with the Gospel through digital platforms",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[1].id, // Digital Evangelism
        prayerRequests: [
          "Wisdom to lead the digital missions team effectively",
          "Open doors for evangelism in emerging platforms",
          "Strength and protection for his family",
          "More volunteers with digital skills for ministry",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "National Digital Missionaries Summit",
            content:
              "Samson led a nationwide gathering of digital missionaries, equipping over 300 young leaders with tools for online evangelism and discipleship.",
          },
          {
            date: "March 2025",
            title: "Reached 2 Million Views on Evangelism Films",
            content:
              "His digital film outreach crossed two million views, impacting thousands with the message of Christ across Ethiopia and beyond.",
          },
          {
            date: "January 2025",
            title: "Launched New Digital Training Platform",
            content:
              "Samson and his team launched an e-learning platform for training digital missionaries in design, coding, storytelling, and more.",
          },
        ],
        supportNeeds: [
          {
            item: "Digital Campaign Funding",
            amount: "$1000",
            description: "Support for online evangelism and ad campaigns",
            progress: 80,
            raised: "$800",
          },
          {
            item: "Media Equipment",
            amount: "$2800",
            description: "Camera and editing gear for content production",
            progress: 45,
            raised: "$1260",
          },
          {
            item: "Volunteer Training Resources",
            amount: "$1500",
            description:
              "Training materials and logistics for missionary workshops",
            progress: 100,
            raised: "$1500",
          },
        ],
        // Impact statistics
        livesImpacted: 5000,
        communitiesServed: 25,
        projectsCompleted: 12,
      },
    }),
    prisma.user.create({
      data: {
        name: "Cherinet Alemu",
        title: "Digital Strategy Missionary",
        email: "cherinet.alemu@greatcommissionethiopia.org",
        phone: "+251 91 123 4567",
        location: "Ethiopia",
        years: "5+ years",
        focus: "Digital Missions & Mentorship",
        shortBio:
          "A dedicated missionary raising digital mentors and sharing Christ with Ethiopia's younger generation online.",
        fullBio:
          "Cherinet Alemu is a passionate full-time missionary at the Ethiopian Cru office, serving under the Digital Strategy Department. His focus is on the digital battlefield—mentoring, coaching, and helping online seekers find Christ through various tools and platforms. Called to reach Ethiopia's growing teenage and youth population, Cherinet is committed to winning, building, and sending digital disciples. His team connects with thousands through social media tools like Gemenaye.com and short films, while also hosting mentorship, trainings, and group discipleship. As a strategist, Cherinet trains high school, church, and college leaders in digital evangelism, helping them fulfill the Great Commission. He mentors new online missionaries and creates opportunities for them to engage via platforms like Telegram chatbots and TMM. Cherinet believes in deep connections, clear Gospel messages, and building lasting digital communities where lives are transformed by Christ. His ministry is fully funded through the support of generous individuals and churches who share his vision.",
        website: "gemenaye.com",
        qualification: "Digital Ministry & Mentorship",
        experience: "5+ years",
        mission:
          "Raising digital mentors and sharing Christ with Ethiopia's younger generation online through various digital tools and platforms.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[2].id, // Digital Mentorship
        prayerRequests: [
          "More open doors to train digital missionaries in local churches",
          "Sustainable monthly financial partners",
          "Strength and vision to lead mentorship at scale",
          "Continued spiritual awakening among high school and college youth",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Gemenaye Reaches 10,000 Monthly Visitors",
            content:
              "Our evangelistic platform Gemenaye.com saw a major spike in traffic this month, connecting us with thousands of new seekers and initiating over 700 mentorship requests.",
          },
          {
            date: "March 2025",
            title: "Mentor Training Workshop",
            content:
              "Hosted a 3-day training with 40 youth leaders on how to disciple and coach online seekers. Several are now active digital mentors.",
          },
          {
            date: "January 2025",
            title: "Youth Discipleship via Telegram Bot",
            content:
              "Launched a Telegram chatbot to connect youth with Bible content, Gospel answers, and mentor conversations. Over 1,500 engagements logged.",
          },
        ],
        supportNeeds: [
          {
            item: "Monthly Support",
            amount: "$1,000/month",
            description:
              "Covers personal and ministry expenses including travel, tools, and online platforms",
            progress: 85,
            raised: "$850",
          },
          {
            item: "Digital Tools Budget",
            amount: "$2,500/year",
            description:
              "For hosting, chatbot development, and new outreach platforms",
            progress: 60,
            raised: "$1500",
          },
          {
            item: "Mentor Training Resources",
            amount: "$1,000",
            description:
              "Materials and logistics for in-person and virtual mentor training events",
            progress: 100,
            raised: "$1000",
          },
        ],
        // Impact statistics
        livesImpacted: 1800,
        communitiesServed: 8,
        projectsCompleted: 5,
      },
    }),
    prisma.user.create({
      data: {
        name: "Saron Yohannes",
        title: "Product Leadership & Digital Evangelist",
        email: "saron.yohannes@greatcommissionethiopia.org",
        phone: "+251 91 345 6789",
        location: "Durame, Ethiopia",
        years: "5+ years",
        focus: "Product Leadership & Digital Evangelism",
        shortBio:
          "Engineer-turned-digital-missionary leading digital product innovation for the Gospel in Ethiopia.",
        fullBio:
          "Saron Yohannes is an engineer-turned-digital-missionary who leads digital product innovation to expand digital missions and share the love of Christ in Ethiopia. With a background in software engineering and product management, Saron brings a unique perspective to digital ministry, combining technical expertise with evangelistic passion. He leads teams in developing digital tools and platforms that facilitate Gospel sharing and discipleship across Ethiopia.",
        website: "saronmission.org",
        qualification: "Software Engineering & Product Management",
        experience: "5+ years",
        mission:
          "Leading digital product innovation to expand digital missions and share the love of Christ in Ethiopia.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[0].id, // Digital Missions
        prayerRequests: [
          "Wisdom in product development decisions",
          "More engineers to join the digital missions team",
          "Innovation in digital evangelism tools",
          "Partnerships with tech companies",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "New Evangelism App Launch",
            content:
              "Successfully launched a new mobile app for digital evangelism, reaching 5,000 downloads in the first month.",
          },
        ],
        supportNeeds: [
          {
            item: "Development Tools",
            amount: "$3000",
            description: "Software licenses and development equipment",
            progress: 70,
            raised: "$2100",
          },
          {
            item: "Monthly Support",
            amount: "$1500",
            description: "Personal and ministry expenses",
            progress: 90,
            raised: "$1350",
          },
        ],
        // Impact statistics
        livesImpacted: 1200,
        communitiesServed: 6,
        projectsCompleted: 3,
      },
    }),
    prisma.user.create({
      data: {
        name: "Rediet Kefetew",
        title: "Content Creator & Digital Mentor",
        email: "rediet.kefetew@greatcommissionethiopia.org",
        phone: "+251 91 456 7890",
        location: "Hawassa, Ethiopia",
        years: "5+ years",
        focus: "Content Creation & Mentorship",
        shortBio:
          "Former auditor turned full-time digital missionary, creating gospel-centered content and mentoring souls online.",
        fullBio:
          "Rediet Kefetew is a former auditor who left her corporate career to become a full-time digital missionary. She creates gospel-centered content and mentors souls online, using her background in business and finance to connect with professionals and young adults. Rediet's ministry focuses on creating engaging digital content that addresses real-life challenges and points people to Christ.",
        website: "redietministry.org",
        qualification: "Business Administration & Digital Ministry",
        experience: "5+ years",
        mission:
          "Creating gospel-centered content and mentoring souls online to share hope through digital platforms.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[2].id, // Digital Mentorship
        prayerRequests: [
          "Creative inspiration for content creation",
          "More opportunities to mentor young professionals",
          "Financial provision for content production",
          "Impact through social media platforms",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Content Series Reaches 50K Views",
            content:
              "Her 'Faith in the Workplace' content series reached over 50,000 views and generated 200+ mentorship requests.",
          },
        ],
        supportNeeds: [
          {
            item: "Content Creation Equipment",
            amount: "$2500",
            description: "Camera, lighting, and editing software",
            progress: 55,
            raised: "$1375",
          },
          {
            item: "Monthly Support",
            amount: "$1200",
            description: "Personal and ministry expenses",
            progress: 95,
            raised: "$1140",
          },
        ],
        // Impact statistics
        livesImpacted: 800,
        communitiesServed: 4,
        projectsCompleted: 2,
      },
    }),
  ]);

  console.log("👥 Created missionaries");

  // Create additional missionaries to reach 15 total
  const additionalMissionaries = await Promise.all([
    prisma.user.create({
      data: {
        name: "Denamo Markos",
        title: "Software Developer & Digital Evangelist",
        email: "denamo.markos@greatcommissionethiopia.org",
        phone: "+251 91 567 8901",
        location: "Hawassa, Ethiopia",
        years: "3+ years",
        focus: "Software Development & Machine Learning",
        shortBio:
          "Tech-savvy missionary using code and algorithms to advance the gospel in digital spaces.",
        fullBio:
          "Denamo Markos is a software developer and machine learning enthusiast who uses his technical skills to advance the Gospel in digital spaces. He develops tools and applications that facilitate evangelism and discipleship, leveraging artificial intelligence and data analytics to reach people more effectively.",
        website: "denamotech.org",
        qualification: "Computer Science & Machine Learning",
        experience: "3+ years",
        mission:
          "Utilizing software development and machine learning to build scalable tools and innovate digital solutions for gospel engagement.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[1].id, // Digital Evangelism
        prayerRequests: [
          "Technical breakthroughs in AI applications",
          "More developers to join the team",
          "Innovation in digital tools",
          "Partnerships with tech communities",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "AI Chatbot for Evangelism",
            content:
              "Developed an AI-powered chatbot that has engaged with over 10,000 people in Gospel conversations.",
          },
        ],
        supportNeeds: [
          {
            item: "Development Server",
            amount: "$4000",
            description: "High-performance server for AI applications",
          },
          {
            item: "Monthly Support",
            amount: "$1000",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Beka Shiferaw",
        title: "Graphic Designer & Digital Strategist",
        email: "beka.shiferaw@greatcommissionethiopia.org",
        phone: "+251 91 678 9012",
        location: "Bishoftu, Ethiopia",
        years: "3+ years",
        focus: "Graphic Design & Digital Strategy",
        shortBio:
          "Engineer-turned-creative using digital tools and design to advance the gospel.",
        fullBio:
          "Beka Shiferaw is an engineer-turned-creative who uses graphic design and digital tools to communicate the gospel with clarity and visual impact. He creates compelling visual content for online evangelism and church engagement, helping ministries communicate their message effectively in the digital age.",
        website: "bekacreative.org",
        qualification: "Engineering & Graphic Design",
        experience: "3+ years",
        mission:
          "Using graphic design and digital tools to communicate the gospel with clarity and visual impact for online evangelism and church engagement.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[0].id, // Digital Missions
        prayerRequests: [
          "Creative inspiration for design projects",
          "More churches to adopt digital design",
          "Impact through visual storytelling",
          "Partnerships with creative communities",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Design Workshop for Churches",
            content:
              "Conducted a design workshop for 20 churches, teaching them how to create effective digital content.",
          },
        ],
        supportNeeds: [
          {
            item: "Design Software",
            amount: "$1500",
            description: "Adobe Creative Suite and design tools",
          },
          {
            item: "Monthly Support",
            amount: "$1000",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Biniam Kassahun",
        title: "Innovation & Technology Leader",
        email: "biniam.kassahun@greatcommissionethiopia.org",
        phone: "+251 91 789 0123",
        location: "Ethiopia",
        years: "4+ years",
        focus: "Innovation & Technology",
        shortBio:
          "Engineer and innovator passionate about solving social problems through technology and gospel-centered solutions.",
        fullBio:
          "Biniam Kassahun is an engineer and innovator passionate about solving social problems through technology and gospel-centered solutions. He leads innovation and technology initiatives to build digital platforms and strategies that support gospel outreach and discipleship across Ethiopia.",
        website: "biniamtech.org",
        qualification: "Engineering & Innovation Management",
        experience: "4+ years",
        mission:
          "Leading innovation and technology to build digital platforms and strategies that support gospel outreach and discipleship across Ethiopia.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[1].id, // Digital Evangelism
        prayerRequests: [
          "Innovation breakthroughs in technology",
          "More tech entrepreneurs to join ministry",
          "Partnerships with tech companies",
          "Impact through technological solutions",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Tech Innovation Summit",
            content:
              "Organized a tech innovation summit bringing together 100+ tech professionals to explore digital ministry opportunities.",
          },
        ],
        supportNeeds: [
          {
            item: "Innovation Lab",
            amount: "$8000",
            description: "Equipment and space for technology innovation",
          },
          {
            item: "Monthly Support",
            amount: "$1500",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Etsub Yakob",
        title: "Event Manager & Digital Strategist",
        email: "etsub.yakob@greatcommissionethiopia.org",
        phone: "+251 91 890 1234",
        location: "Hawassa, Ethiopia",
        years: "2+ years",
        focus: "Event Management & Digital Strategy",
        shortBio:
          "Project Manager and Event Organizer with a passion for digital evangelism and discipleship.",
        fullBio:
          "Etsub Yakob is a Project Manager and Event Organizer with a passion for digital evangelism and discipleship. He manages digital strategy projects and organizes events to empower campuses and spread digital evangelism and discipleship across Ethiopia.",
        website: "etsubevents.org",
        qualification: "Project Management & Event Planning",
        experience: "2+ years",
        mission:
          "Managing digital strategy projects and organizing events to empower campuses and spread digital evangelism and discipleship.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[0].id, // Digital Missions
        prayerRequests: [
          "Successful event planning and execution",
          "More campuses to engage with digital ministry",
          "Partnerships with event venues",
          "Impact through organized events",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Campus Digital Summit",
            content:
              "Organized a digital summit for 15 university campuses, training 300+ student leaders in digital ministry.",
          },
        ],
        supportNeeds: [
          {
            item: "Event Equipment",
            amount: "$3000",
            description: "Audio-visual equipment for events",
          },
          {
            item: "Monthly Support",
            amount: "$1000",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Muluken Mengistu",
        title: "Software Developer & Security Researcher",
        email: "muluken.mengistu@greatcommissionethiopia.org",
        phone: "+251 91 901 2345",
        location: "Addis Ababa, Ethiopia",
        years: "9+ years",
        focus: "Software Development & Cybersecurity",
        shortBio:
          "Software Developer, Security Researcher, and Digital Evangelist passionate about leveraging technology for God's glory.",
        fullBio:
          "Muluken Mengistu is a Software Developer, Security Researcher, and Digital Evangelist passionate about leveraging technology for God's glory. He develops software and analyzes data to advance the Gospel through digital platforms and strengthen system security for ministry organizations.",
        website: "mulukentech.org",
        qualification: "Computer Science & Cybersecurity",
        experience: "9+ years",
        mission:
          "Developing software and analyzing data to advance the Gospel through digital platforms and strengthen system security.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[1].id, // Digital Evangelism
        prayerRequests: [
          "Security breakthroughs for ministry platforms",
          "More developers to join the security team",
          "Protection of ministry data and systems",
          "Innovation in secure digital tools",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Security Audit for Ministry Platforms",
            content:
              "Completed a comprehensive security audit for all ministry digital platforms, ensuring data protection.",
          },
        ],
        supportNeeds: [
          {
            item: "Security Tools",
            amount: "$5000",
            description: "Cybersecurity tools and software licenses",
          },
          {
            item: "Monthly Support",
            amount: "$1800",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Eyosiyas Ketema",
        title: "UX/UI Designer & Product Designer",
        email: "eyosiyas.ketema@greatcommissionethiopia.org",
        phone: "+251 91 012 3456",
        location: "Addis Ababa, Ethiopia",
        years: "3+ years",
        focus: "UX/UI Design & Product Design",
        shortBio:
          "A UX designer passionate about creating user-centric solutions and contributing to God's kingdom through design.",
        fullBio:
          "Eyosiyas Ketema is a UX designer passionate about creating user-centric design solutions and innovating digital experiences to advance God's kingdom and the Great Commission. He focuses on creating intuitive and engaging digital experiences that help people connect with the Gospel message.",
        website: "eyosiyasdesign.org",
        qualification: "UX/UI Design & Product Design",
        experience: "3+ years",
        mission:
          "Creating user-centric design solutions and innovating digital experiences to advance God's kingdom and the Great Commission.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[0].id, // Digital Missions
        prayerRequests: [
          "Design inspiration for user experiences",
          "More designers to join the ministry team",
          "Impact through user-centered design",
          "Partnerships with design communities",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Redesigned Evangelism App",
            content:
              "Redesigned the main evangelism app, improving user engagement by 40% and conversion rates by 25%.",
          },
        ],
        supportNeeds: [
          {
            item: "Design Tools",
            amount: "$2000",
            description: "UX/UI design software and prototyping tools",
          },
          {
            item: "Monthly Support",
            amount: "$1200",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Nardos Kebede",
        title: "Project Manager & Data Analyst",
        email: "nardos.kebede@greatcommissionethiopia.org",
        phone: "+251 91 123 4567",
        location: "Addis Ababa, Ethiopia",
        years: "3+ years",
        focus: "Project Management & Data Analytics",
        shortBio:
          "Project Manager with a passion for transforming ideas into reality and leveraging data for digital ministry.",
        fullBio:
          "Nardos Kebede is a Project Manager with a passion for transforming ideas into reality and leveraging data analytics for effective digital ministry. She manages complex digital ministry projects and uses data insights to optimize outreach strategies and measure impact.",
        website: "nardosanalytics.org",
        qualification: "Project Management & Data Analytics",
        experience: "3+ years",
        mission:
          "Transforming ideas into reality through project management and leveraging data analytics for effective digital ministry.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[2].id, // Digital Mentorship
        prayerRequests: [
          "Wisdom in project management decisions",
          "More data analysts to join the team",
          "Insights from data analysis",
          "Successful project outcomes",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Data-Driven Ministry Report",
            content:
              "Completed a comprehensive analysis of digital ministry impact, providing insights for strategy optimization.",
          },
        ],
        supportNeeds: [
          {
            item: "Analytics Tools",
            amount: "$3000",
            description: "Data analytics software and tools",
          },
          {
            item: "Monthly Support",
            amount: "$1300",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Loza Teshome",
        title: "Product Manager & Youth Digital Outreach",
        email: "loza.teshome@greatcommissionethiopia.org",
        phone: "+251 91 234 5678",
        location: "Addis Ababa, Ethiopia",
        years: "3+ years",
        focus: "Product Management & Youth Digital Outreach",
        shortBio:
          "Product Manager and Digital Missionary passionate about leveraging technology to impact teenagers for the Gospel.",
        fullBio:
          "Loza Teshome is a Product Manager and Digital Missionary passionate about leveraging technology and product management to create digital outreach initiatives specifically designed to impact teenagers for the Gospel. She focuses on understanding the unique needs of young people and creating digital solutions that resonate with them.",
        website: "lozayouth.org",
        qualification: "Product Management & Youth Ministry",
        experience: "3+ years",
        mission:
          "Leveraging technology and product management to create digital outreach initiatives specifically designed to impact teenagers for the Gospel.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[2].id, // Digital Mentorship
        prayerRequests: [
          "Wisdom in reaching teenagers effectively",
          "More youth-focused digital tools",
          "Partnerships with youth organizations",
          "Impact on teenage lives",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Teen Digital Outreach Campaign",
            content:
              "Launched a targeted digital campaign for teenagers, reaching 15,000+ young people with the Gospel.",
          },
        ],
        supportNeeds: [
          {
            item: "Youth Outreach Tools",
            amount: "$2500",
            description: "Digital tools and platforms for youth engagement",
          },
          {
            item: "Monthly Support",
            amount: "$1100",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Misael Dessalegn",
        title: "Front-End Developer & Digital Strategy Leader",
        email: "misael.dessalegn@greatcommissionethiopia.org",
        phone: "+251 91 345 6789",
        location: "Addis Ababa, Ethiopia",
        years: "3+ years",
        focus: "Front-End Development & Digital Strategy Leadership",
        shortBio:
          "Front-End Developer and former campus Digital Strategy leader passionate about using technology for God's Kingdom.",
        fullBio:
          "Misael Dessalegn is a Front-End Developer and former campus Digital Strategy leader passionate about using technology for God's Kingdom. He develops front-end solutions and leads digital strategy teams to spread God's Kingdom through technology.",
        website: "misaeltech.org",
        qualification: "Front-End Development & Digital Strategy",
        experience: "3+ years",
        mission:
          "Developing front-end solutions and leading digital strategy teams to spread God's Kingdom through technology.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[0].id, // Digital Missions
        prayerRequests: [
          "Technical breakthroughs in front-end development",
          "More developers to join the team",
          "Leadership wisdom in digital strategy",
          "Impact through technology solutions",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "New Ministry Website Launch",
            content:
              "Launched a new responsive website for the ministry, improving user experience and engagement metrics.",
          },
        ],
        supportNeeds: [
          {
            item: "Development Tools",
            amount: "$2000",
            description: "Front-end development tools and software",
          },
          {
            item: "Monthly Support",
            amount: "$1200",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
    prisma.user.create({
      data: {
        name: "Selam Getachew",
        title: "Graphics Designer & Visual Communicator",
        email: "selam.getachew@greatcommissionethiopia.org",
        phone: "+251 91 456 7890",
        location: "Addis Ababa, Ethiopia",
        years: "2+ years",
        focus: "Graphics Design & Visual Communication",
        shortBio:
          "Graphics Designer passionate about using visual art to communicate God's message and inspire others.",
        fullBio:
          "Selam Getachew is a Graphics Designer passionate about using graphic design and visual communication to effectively convey God's message and inspire others in digital ministry. She creates compelling visual content that helps communicate the Gospel message in a clear and engaging way.",
        website: "selamdesign.org",
        qualification: "Graphic Design & Visual Communication",
        experience: "2+ years",
        mission:
          "Using graphic design and visual communication to effectively convey God's message and inspire others in digital ministry.",
        type: "Full-time",
        status: "Active",
        role: "missionary",
        strategyId: strategies[0].id, // Digital Missions
        prayerRequests: [
          "Creative inspiration for visual designs",
          "More churches to adopt visual communication",
          "Impact through visual storytelling",
          "Partnerships with creative communities",
        ],
        recentUpdates: [
          {
            date: "May 2025",
            title: "Visual Design Workshop",
            content:
              "Conducted a visual design workshop for ministry teams, teaching effective visual communication strategies.",
          },
        ],
        supportNeeds: [
          {
            item: "Design Software",
            amount: "$1800",
            description: "Graphic design software and creative tools",
          },
          {
            item: "Monthly Support",
            amount: "$1000",
            description: "Personal and ministry expenses",
          },
        ],
      },
    }),
  ]);

  console.log("👥 Created additional missionaries");

  console.log("✅ Database seeding completed successfully!");
  console.log(`📊 Created ${strategies.length} strategies`);
  console.log(
    `👥 Created ${
      missionaries.length + additionalMissionaries.length
    } missionaries`
  );
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
