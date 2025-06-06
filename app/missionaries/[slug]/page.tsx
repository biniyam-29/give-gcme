import { notFound } from "next/navigation";
import MissionaryDetail from "./missionary-detail";

// Updated Ethiopian missionaries data - add all missing missionaries
const missionariesData = {
  "senay-kumelachew": {
    id: 1,
    name: "Senay Kumelachew",
    image: "/images/missionaries/senay.png?height=400&width=400",
    location: "Ethiopia",
    years: "6+ years",
    focus: "Digital Missions & Church Tech Mobilization",
    shortBio:
      "A passionate digital strategist empowering churches and campuses to embrace technology for Gospel advancement.",
    fullBio: `Senay Kumelachew is a young, sociable, and technophilic leader who finds joy in reading, walking, and spending time with people. As a committed digital strategist, Senay devotes his life to equipping churches and ministries to embrace technology for Kingdom work.

        His passion for digital missions began back in high school, fueled by his frustration over the Church's underuse of social media and digital tools. Everything changed when, as a freshman university student, he encountered the digital strategy team at Great Commission Ministry Ethiopia. From that moment, Senay joined as a volunteer mobilizer and online missionary.

        He pioneered digital strategy initiatives in his campus fellowship and local church, training peers and launching outreach efforts. As an associate staff, he traveled from campus to campus and church to church, equipping others to become digital missionaries.

        To fully embrace this calling, Senay became a full-time staff member in September 2018. Today, he serves as the Digital Mission Team Leader at GCME's Digital Strategy Office, leading projects that empower the Church to thrive in the digital age.`,
    email: "senay.kumelachew@greatcommissionethiopia.org",
    phone: "+251 91 876 5432",
    website: "senaymission.org",
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
        description: "Travel, training materials, and workshop coordination",
      },
      {
        item: "Laptop Upgrade",
        amount: "$2000",
        description: "Essential for training presentations and media creation",
      },
      {
        item: "Monthly Support",
        amount: "$1200",
        description: "Covers personal and ministry expenses",
      },
    ],
  },

  "samson-usmael": {
    id: 2,
    name: "Samson Usmael",
    image: "/images/missionaries/samson.png?height=400&width=400",
    location: "Ethiopia",
    years: "10+ years",
    focus: "Digital Evangelism & Discipleship",
    shortBio:
      "A former atheist turned digital missionary, Samson leads digital strategies to raise multiplying missionaries through tech.",
    fullBio: `Samson Usmael is a family man, a passionate tech enthusiast, and a visionary leader dedicated to advancing the Kingdom of God through digital platforms.

            He studied Electrical and Computer Engineering, and over the past decade, he has immersed himself in filmmaking, game and software development, and leadership training — all geared toward empowering the younger generation.

            Once known as "Sami Ja" — meaning "Sami is god" — during his atheist days, Samson transformed his identity after encountering Christ. His name evolved to "Sami Yeja" (meaning "belongs to God"), symbolizing his spiritual transformation and new mission.

            From his university years onward, Samson dedicated his life to glorifying God in his generation. He has reached millions with the Gospel through digital platforms and helped raise thousands of multiplying digital missionaries.

            As the National Director of Digital Strategies at Great Commission Ministry Ethiopia, Samson is equipping a new wave of digital missionaries with practical skills in programming, design, photography, blogging, cinematography, and more to carry the Gospel into the digital age.`,
    email: "samson.usmael@greatcommissionethiopia.org",
    phone: "+251 91 234 5678",
    website: "samiyeja.org",
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
      },
      {
        item: "Media Equipment",
        amount: "$2800",
        description: "Camera and editing gear for content production",
      },
      {
        item: "Volunteer Training Resources",
        amount: "$1500",
        description:
          "Training materials and logistics for missionary workshops",
      },
    ],
  },

  "cherinet-alemu": {
    id: 3,
    name: "Cherinet Alemu",
    image: "/images/missionaries/cherinet.png?height=400&width=400",
    location: "Ethiopia",
    years: "5+ years",
    focus: "Digital Missions & Mentorship",
    shortBio:
      "A dedicated missionary raising digital mentors and sharing Christ with Ethiopia's younger generation online.",
    fullBio: `Cherinet Alemu is a passionate full-time missionary at the Ethiopian Cru office, serving under the Digital Strategy Department. His focus is on the digital battlefield—mentoring, coaching, and helping online seekers find Christ through various tools and platforms.

        Called to reach Ethiopia's growing teenage and youth population, Cherinet is committed to winning, building, and sending digital disciples. His team connects with thousands through social media tools like Gemenaye.com and short films, while also hosting mentorship, trainings, and group discipleship.

        As a strategist, Cherinet trains high school, church, and college leaders in digital evangelism, helping them fulfill the Great Commission. He mentors new online missionaries and creates opportunities for them to engage via platforms like Telegram chatbots and TMM.

        Cherinet believes in deep connections, clear Gospel messages, and building lasting digital communities where lives are transformed by Christ. His ministry is fully funded through the support of generous individuals and churches who share his vision.`,
    email: "cherinet.alemu@greatcommissionethiopia.org",
    phone: "+251 91 123 4567",
    website: "gemenaye.com",
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
      },
      {
        item: "Digital Tools Budget",
        amount: "$2,500/year",
        description:
          "For hosting, chatbot development, and new outreach platforms",
      },
      {
        item: "Mentor Training Resources",
        amount: "$1,000",
        description:
          "Materials and logistics for in-person and virtual mentor training events",
      },
    ],
  },

  "saron-yohannes": {
    id: 4,
    name: "Saron Yohannes",
    image: "/images/missionaries/saron.png?height=400&width=400",
    location: "Durame, Ethiopia",
    years: "5+ years",
    focus: "Product Leadership & Digital Evangelism",
    shortBio:
      "Engineer-turned-digital-missionary leading digital product innovation for the Gospel in Ethiopia.",
    fullBio: `Saron Yohannes, the youngest in a family of nine, was born in Durame, Ethiopia, and raised in a Christ-centered home. Her deep admiration for her parents' faith led her to know Jesus personally from a young age. She earned a BSc in Electrical and Computer Engineering from Wachemo University in 2019.

              During her university internship, Saron prayed for direction and was led to Great Commission Ministry Ethiopia. There, she found the opportunity to combine her love for God and her technical skills to serve in Digital Strategies. From intern to team leader, Saron has held various roles and now leads the Products Team, building platforms and tools that expand digital missions in Ethiopia.

              Guided by Philippians 1:21, she is passionate about sharing the love of Christ both online and offline. She believes every line of code and every product she leads should bring glory to God and reach more people with the Gospel. Her background includes short courses in mentoring, graphic design, and leadership, which enrich her work and ministry.`,
    email: "saron.yohannes@greatcommissionethiopia.org",
    phone: "+251 91 234 5678",
    website: "https://www.gcmethiopia.org/en/ministries/digital-ministry",
    prayerRequests: [
      "Continued wisdom in leading the Products Team",
      "Greater reach and impact through digital tools",
      "Spiritual strength to remain Christ-centered in every project",
      "Monthly financial partners for ministry sustainability",
    ],
    recentUpdates: [
      {
        date: "June 2025",
        title: "Launching New Mentorship Platform",
        content:
          "Led the launch of a digital mentorship platform to better connect seekers with trained mentors online. Early results are promising, with over 500 conversations started.",
      },
      {
        date: "April 2025",
        title: "Women in Tech & Ministry Seminar",
        content:
          "Spoke at a virtual seminar encouraging young women to engage in technology for kingdom impact. Over 200 participants joined nationwide.",
      },
      {
        date: "February 2025",
        title: "Upgraded Discipleship Tools Released",
        content:
          "Oversaw the design and deployment of updated discipleship tools, now more accessible and mobile-friendly for broader engagement.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$800/month",
        description:
          "To sustain her full-time ministry and product development responsibilities",
      },
      {
        item: "Equipment Upgrade",
        amount: "$1,500",
        description:
          "For a new laptop and accessories to support design and product leadership work",
      },
      {
        item: "Leadership Training",
        amount: "$500",
        description:
          "To enroll in a product leadership and discipleship course for gospel-centered innovation",
      },
    ],
  },
  "rediet-kefetew": {
    id: 5,
    name: "Rediet Kefetew",
    image: "/images/missionaries/rediet.png?height=400&width=400",
    location: "Hawassa, Ethiopia",
    years: "5+ years",
    focus: "Content Creation & Mentorship",
    shortBio:
      "Former auditor turned full-time digital missionary, creating gospel-centered content and mentoring souls online.",
    fullBio: `Born in Agaro and raised in Hawassa, Rediet Kefetew discovered her passion for literature, conversation, and serving others at an early age. After completing her BA in Accounting and an MSc in Business Administration, she briefly worked as a government auditor in Addis Ababa. But the role didn't align with her purpose. Leaving her job in faith, she stepped into full-time ministry after reconnecting with Sami, the current Digital Strategy Director.

      Rediet had first encountered Great Commission Ministry Ethiopia back in high school, receiving mentorship and training through its digital ministry. Since joining the team full-time five years ago, she has grown into a vital content creator and online mentor—crafting impactful resources for digital evangelism and walking with those seeking hope through online platforms.

      In addition to her academic background, Rediet is currently studying Biblical Counseling to deepen her ability to care for and disciple others spiritually. She remains driven by a call to serve with purpose and truth.`,
    email: "rediet.kefetew@greatcommissionethiopia.org",
    phone: "+251 91 234 5678",
    website: "https://www.gcmethiopia.org/en/ministries/digital-ministry",
    prayerRequests: [
      "Growth in Biblical Counseling to support mentees better",
      "Creativity and clarity in gospel content creation",
      "Deepening personal intimacy with God",
      "Ongoing financial support for long-term ministry work",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "New Devotional Series Launched",
        content:
          "Released a new series of short written devotionals designed for young believers, now shared weekly across multiple platforms.",
      },
      {
        date: "March 2025",
        title: "Digital Mentorship Milestone",
        content:
          "Mentored over 50 individuals in one-on-one sessions over the past year through digital platforms, focusing on identity, faith, and healing.",
      },
      {
        date: "January 2025",
        title: "Training Workshop Lead",
        content:
          "Led a writing and content strategy training for high school digital missionaries in Hawassa to empower them in local evangelism.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$700/month",
        description:
          "To sustain her full-time ministry and content creation work",
      },
      {
        item: "Counseling Certification",
        amount: "$600",
        description:
          "To complete her Biblical Counseling program and better serve mentees",
      },
      {
        item: "Laptop & Audio Tools",
        amount: "$1,200",
        description:
          "To improve content production and manage digital mentorship sessions effectively",
      },
    ],
  },
  "denamo-markos": {
    id: 6,
    name: "Denamo Markos",
    image: "/images/missionaries/denamo.png?height=400&width=400",
    location: "Hawassa, Ethiopia",
    years: "3+ years",
    focus: "Software Development & Machine Learning",
    shortBio:
      "Tech-savvy missionary using code and algorithms to advance the gospel in digital spaces.",
    fullBio: `Denamo Markos grew up in Hawassa, where a love for computers and games sparked his lifelong passion for technology. He graduated with Great Distinction in Software Engineering from Addis Ababa University, and further sharpened his skills in Data Science and Machine Learning through 10 Academy. 

      While in high school, Denamo encountered the world of digital strategies and its role in ministry. This encounter—along with his participation in an Indigitous Hack event—ignited a passion to integrate faith with technology. During his university years, he interned with the Digital Strategies (DS) team, contributing to projects, hackathons, and innovation-focused missions. After graduation, he officially joined DS as a developer.

      Today, Denamo contributes to the Great Commission by building scalable software, experimenting with AI, and innovating new digital tools for gospel engagement. In his spare time, he enjoys football and gaming. His mission: to code for Christ and craft digital tools that make a spiritual impact.`,
    email: "denamo.markos@greatcommissionethiopia.org",
    phone: "+251 91 234 5678",
    website: "https://www.gcmethiopia.org/en/ministries/digital-ministry",
    prayerRequests: [
      "Wisdom and creativity for future projects",
      "Balance between technical growth and spiritual depth",
      "God's guidance in exploring new AI-based gospel tools",
      "Provision for personal and ministry tech resources",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "AI-Driven Tool for Discipleship",
        content:
          "Completed prototype of a natural language processing tool to assist in automated discipleship responses across our platforms.",
      },
      {
        date: "March 2025",
        title: "MentorBot Upgrade",
        content:
          "Rolled out a new version of the DS chatbot with faster reply time and improved matching of mentees to mentors using ML algorithms.",
      },
      {
        date: "January 2025",
        title: "Hackathon Contribution",
        content:
          "Served as lead developer and mentor during the national #hack4missions event focused on gospel tech solutions for high schools.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$800/month",
        description:
          "To continue serving full-time as a developer in the digital ministry",
      },
      {
        item: "New Development Laptop",
        amount: "$1,500",
        description:
          "To support machine learning and software build tasks efficiently",
      },
      {
        item: "Online AI Tools Subscription",
        amount: "$400/year",
        description:
          "To access key tools used in machine learning and NLP development",
      },
    ],
  },
  "beka-shiferaw": {
    id: 7,
    name: "Beka Shiferaw",
    image: "/images/missionaries/beka.png?height=400&width=400",
    location: "Bishoftu, Ethiopia",
    years: "3+ years",
    focus: "Graphic Design & Digital Strategy",
    shortBio:
      "Engineer-turned-creative using digital tools and design to advance the gospel.",
    fullBio: `Born in Bishoftu, Beka Shiferaw discovered the power of digital platforms as a freshman at the University of Gondar. While studying Mechanical Engineering, he joined his campus fellowship's digital team, where he found a passion for using creative tools to serve God.

        During his university years, Beka connected with the Great Commission Ministry Ethiopia (GCME) digital team and served as a volunteer. After graduating, he answered God's call and joined GCME as a full-time digital strategist in January 2021.

        Beka currently focuses on graphics and design for online evangelism, supporting both digital tools and church engagement strategies. His mission is to use creativity to communicate the gospel with clarity and visual impact.`,
    email: "beka.shiferaw@greatcommissionethiopia.org",
    phone: "+251 91 234 5678",
    website: "https://www.gcmethiopia.org/en/ministries/digital-ministry",
    prayerRequests: [
      "Creative inspiration to design with purpose",
      "Continued growth in graphic and visual communication skills",
      "Provision for design tools and resources",
      "Opportunities to reach more youth through visual storytelling",
    ],
    recentUpdates: [
      {
        date: "April 2025",
        title: "Evangelism Design Campaign",
        content:
          "Designed visuals for a social media series that reached over 200K youth online with gospel-centered messaging.",
      },
      {
        date: "February 2025",
        title: "Training Local Designers",
        content:
          "Facilitated a workshop for local church creatives on using design for ministry impact.",
      },
      {
        date: "December 2024",
        title: "New Branding for Mentorship Tools",
        content:
          "Led the branding and UI design for GCME's updated mentorship platforms.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$600/month",
        description:
          "To serve full-time as a graphics and visual strategy lead",
      },
      {
        item: "Design Software Licenses",
        amount: "$300/year",
        description:
          "Adobe and other pro tools for high-quality creative output",
      },
      {
        item: "Graphics Tablet",
        amount: "$200",
        description: "For improved digital drawing and design workflow",
      },
    ],
  },
  "biniam-kassahun": {
    id: 8,
    name: "Biniam Kassahun",
    image: "/images/missionaries/biniam.png?height=400&width=400",
    location: "Ethiopia",
    years: "4+ years",
    focus: "Innovation & Technology",
    shortBio:
      "Engineer and innovator passionate about solving social problems through technology and gospel-centered solutions.",
    fullBio: `Biniam Kassahun is an enthusiastic Electrical and Computer Engineer with an entrepreneurial spirit and a deep passion for systems development. Since childhood, he has dreamed of solving real social problems using technology.

            Now serving as the Innovation and Tech Team Leader at Great Commission Ministry Ethiopia and Agelgel Technologies, Biniam works with a team of like-minded staff to build digital platforms and strategies that support gospel outreach and discipleship across Ethiopia. His focus includes engineering systems that respond to spiritual needs while addressing broader social issues through scalable, innovative tech.`,
    email: "biniam.kassahun@greatcommissionethiopia.org",
    phone: "+251 91 234 5678",
    website: "https://www.gcmethiopia.org/en/ministries/digital-ministry",
    prayerRequests: [
      "Wisdom and clarity for leading the innovation team",
      "Creative solutions that serve both gospel impact and social needs",
      "Provision for technical resources and infrastructure",
      "Strength to balance ministry, development, and mentoring",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "Agelgel Mentorship System Launched",
        content:
          "Led the development of an integrated platform to match mentees with digital mentors, improving response time and tracking.",
      },
      {
        date: "March 2025",
        title: "Innovation Workshop with University Students",
        content:
          "Facilitated a two-day hands-on lab guiding students in designing solutions for digital evangelism.",
      },
      {
        date: "January 2025",
        title: "Infrastructure Upgrade Completed",
        content:
          "Oversaw backend improvements to support scaling of our chatbot and digital outreach tools.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$900/month",
        description:
          "To continue full-time work leading digital innovation for gospel-centered tech",
      },
      {
        item: "Cloud Infrastructure & Hosting",
        amount: "$1,200/year",
        description:
          "For stable and scalable deployment of digital ministry tools",
      },
      {
        item: "Conference Travel Fund",
        amount: "$500",
        description:
          "To participate in regional tech-for-missions events and collaborations",
      },
    ],
  },

  "etsub-yakob": {
    id: 9,
    name: "Etsub Yakob",
    image: "/images/missionaries/etsub.png?height=400&width=400",
    location: "Hawassa, Ethiopia",
    years: "2+ years",
    focus: "Event Management & Digital Strategy",
    shortBio:
      "Project Manager and Event Organizer with a passion for digital evangelism and discipleship.",
    fullBio:
      "Etsub Yakob's journey began in Arbaminch, moving to Hawassa at age seven, where she completed her university studies. With a love for arts, crafts, and hands-on activities, she's always eager to learn and push her boundaries. Etsub first encountered Great Commission Ministry Ethiopia as a university intern in the Digital Strategies office. This experience profoundly impacted her, revealing how God utilizes the digital age to reach the lost and disciple believers. After graduating, she felt a clear call to serve in this ministry, believing it's where God wants her to be. Currently, Etsub serves as a **Project Manager and Event Planner**, and she actively supports campuses in establishing their own digital strategy teams.\n\n**Educational Background:**\n- BSc in Electrical and Computer Engineering",
    email: "etsub.yakob@greatcommissionethiopia.org",
    phone: "+251 92 345 6789",
    website: "https://www.gcmethiopia.org",
    prayerRequests: [
      "Wisdom in managing projects and organizing impactful events",
      "Guidance in empowering campus digital strategy teams",
      "Creativity in developing new approaches for digital ministry",
      "Strength and focus in balancing multiple responsibilities",
    ],
    recentUpdates: [
      {
        date: "April 2025",
        title: "National Digital Strategy Conference",
        content:
          "Successfully organized and executed a national conference bringing together digital ministry leaders from across Ethiopia.",
      },
      {
        date: "February 2025",
        title: "Campus Digital Team Launch - Hawassa University",
        content:
          "Facilitated the launch of a new digital strategy team at Hawassa University, providing training and initial support.",
      },
      {
        date: "December 2024",
        title: "Product Management Workshop",
        content:
          "Completed an intensive workshop on product management principles, enhancing skills for digital tool development.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$850/month",
        description:
          "To continue full-time involvement in digital strategy and event coordination",
      },
      {
        item: "Training & Development Fund",
        amount: "$700",
        description:
          "For advanced courses in event management and digital product development",
      },
      {
        item: "Campus Outreach Travel",
        amount: "$300/quarter",
        description:
          "To facilitate visits and support for campus digital strategy teams outside Addis Ababa",
      },
    ],
  },

  "muluken-mengistu": {
    id: 10,
    name: "Muluken Mengistu",
    image: "/images/missionaries/muluken.png?height=400&width=400",
    location: "Addis Ababa, Ethiopia",
    years: "9+ years",
    focus: "Software Development & Cybersecurity",
    shortBio:
      "Software Developer, Security Researcher, and Digital Evangelist passionate about leveraging technology for God's glory.",
    fullBio:
      "Born in Hagereselam, Ethiopia, in 1992, Muluken Mengistu moved to Yirgalem, a peaceful town where he spent his formative years. He attended Yirgalem Mekane Yesus Elementary and High School, gaining foundational knowledge and spiritual values. He completed his preparatory class at Yirgalem High School, excelling academically.\n\nDriven by a passion for technology, Muluken enrolled in Hawassa University in 2011, pursuing Electrical and Computer Engineering. He gained a strong understanding of mathematics, physics, electronics, and programming, specializing in computer engineering. He graduated in 2016 with a Bachelor's degree.\n\nHis journey into digital evangelism began during his university days when he interned at Great Commission Ministry of Ethiopia (GCME), also known as Campus Crusade for Christ (CRU). As an application developer, he contributed to various mobile and web applications for ministry projects, deeply internalizing GCME's vision to fulfill the Great Commission through spiritual movements.\n\nSince joining GCME as staff in 2016, Muluken has taken on diverse roles including **Application Developer, Social Media Manager, Intern Coach, and Website Developer.** He now leads the **Products Team**, focusing on developing and maintaining digital platforms that spread the gospel and disciple people online. He thrives on creative, impactful projects that reach millions with messages of hope. He also collaborates with other developers and evangelists, continuously learning and refining his skills. Additionally, he works as a **Security Analyst**, enhancing the security of GCME's systems.\n\nMuluken is an active member of Mekane Yesus Church Addis Ababa Bole Congregation, serving in music, youth, choir, and worship ministries.\n\nHis ultimate goal is to become a successful software developer, security analyst, and digital evangelist, creating and securing innovative solutions for God's kingdom.\n\n**Skills and Educational Background:**\n- **Languages & Frameworks:** Java, Swift, HTML, CSS, JavaScript, PHP, WordPress, Laravel, Angular, Flutter\n- **Databases:** MySQL, Firebase\n- **Tools & Platforms:** GitHub, Google Analytics, Google Adwords, Facebook Ads Manager, Mailchimp, Canva, OWASP, Burpsuite\n- **Education:** BSc in Electrical and Computer Engineering, Hawassa University",
    email: "muluken.mengistu@greatcommissionethiopia.org",
    phone: "+251 93 456 7890",
    website: "https://www.gcmethiopia.org",
    prayerRequests: [
      "Wisdom and creativity in developing innovative digital products",
      "Discernment in strengthening system security against cyber threats",
      "Guidance in leading and mentoring the Products Team effectively",
      "Spiritual growth and effectiveness in digital evangelism",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "Launched New Digital Discipleship Platform",
        content:
          "Led the development and successful launch of a new interactive platform designed for online discipleship courses.",
      },
      {
        date: "March 2025",
        title: "Enhanced System Security Protocols",
        content:
          "Implemented new security measures and conducted comprehensive audits to protect ministry data and user privacy.",
      },
      {
        date: "January 2025",
        title: "Mentorship Program for Junior Developers",
        content:
          "Initiated and led a mentorship program for new developers joining the Digital Strategies team, focusing on best practices and spiritual integration.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$950/month",
        description:
          "To continue full-time dedication to leading digital product development and cybersecurity efforts",
      },
      {
        item: "Professional Development & Certifications",
        amount: "$1,500/year",
        description:
          "For advanced training in cybersecurity and emerging software development technologies",
      },
      {
        item: "Hardware & Software Upgrades",
        amount: "$800",
        description:
          "To acquire necessary tools and licenses for optimizing development and security analysis",
      },
    ],
  },
  "eyosiyas-ketema": {
    id: 11,
    name: "Eyosiyas Ketema",
    image: "/images/missionaries/eyosiyas.png?height=400&width=400",
    location: "Addis Ababa, Ethiopia",
    years: "3+ years",
    focus: "UX/UI Design & Product Design",
    shortBio:
      "A UX designer passionate about creating user-centric solutions and contributing to God's kingdom through design.",
    fullBio:
      "Eyosiyas Ketema hails from Bale Agarfa College in southeastern Ethiopia, later attending high school in Adama. He pursued Software Engineering at Bahirdar University, where he first encountered Digital Strategy, actively serving on his campus's digital strategy team.\n\nAfter graduating in 2021, Eyosiyas participated in a hackathon hosted by Great Commission Ministry's digital strategy team, an experience that led him to dedicate his design skills to God's work with this team. He holds a keen interest in the design industry, particularly in **Product Design, User Experience (UX) Design, Design Thinking, and Solution Making**. His ambition is to make a significant impact through innovative solutions that benefit people globally, all while committing his knowledge and skills to advance God's kingdom and the Great Commission.\n\n**Skills and Academic Background:**\nEyosiyas holds an academic background in Software Engineering. Complementing his degree, he has earned certifications in **Design Thinking, User Interface (UI) Design, and Design System**. Beyond his technical expertise, he possesses strong **graphic design skills**, enabling him to create visually appealing and engaging designs across various mediums. His combined academic foundation and practical skills fuel his passion for crafting user-centric and aesthetically pleasing experiences in both product development and graphic design.",
    email: "eyosiyas.ketema@greatcommissionethiopia.org",
    phone: "+251 94 567 8901",
    website: "https://www.gcmethiopia.org",
    prayerRequests: [
      "Wisdom and creativity in designing impactful digital experiences",
      "Discernment in applying design thinking to ministry challenges",
      "Opportunity to learn and grow in advanced UX/UI methodologies",
      "God's guidance in using his skills for Kingdom purposes",
    ],
    recentUpdates: [
      {
        date: "April 2025",
        title: "Completed UI/UX Redesign for Ministry App",
        content:
          "Led the complete user interface and user experience redesign for a core ministry application, improving user engagement.",
      },
      {
        date: "February 2025",
        title: "Facilitated Design Thinking Workshop",
        content:
          "Conducted a workshop for ministry staff on design thinking principles to foster innovation in digital outreach.",
      },
      {
        date: "December 2024",
        title: "Certified in Design System Implementation",
        content:
          "Achieved a new certification in Design System implementation, enhancing consistency and efficiency in design processes.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$800/month",
        description:
          "To continue full-time work as a UX Designer, creating impactful digital solutions for the ministry.",
      },
      {
        item: "Design Software & Tools Subscription",
        amount: "$400/year",
        description:
          "For access to industry-standard design software and collaborative platforms.",
      },
      {
        item: "Conference & Workshop Attendance",
        amount: "$600",
        description:
          "To attend specialized UX/UI design conferences and workshops for continuous learning and networking.",
      },
    ],
  },
  "nardos-kebede": {
    id: 12,
    name: "Nardos Kebede",
    image: "/images/missionaries/nardos.png?height=400&width=400",
    location: "Addis Ababa, Ethiopia",
    years: "3+ years",
    focus: "Project Management & Data Analytics",
    shortBio:
      "Project Manager with a passion for transforming ideas into reality and leveraging data for digital ministry.",
    fullBio:
      "Nardos Kebede was born in Dilla, southern Ethiopia. Her introduction to Great Commission Ministry Ethiopia (GCME) came during her university studies in Computer Engineering. An internship at GCME's Digital Strategies department provided an 'amazing experience,' revealing to her how God is using the digital era to spread the Gospel. Currently, Nardos serves as a **Project Manager** within the Digital Strategies department. She is deeply passionate about transforming ideas into reality, meticulously planning, and visualizing the bigger picture. She is particularly enthusiastic about using her skills and passion to serve the Kingdom of God. In addition, Nardos is an integral part of the **analytics team**, where she collects and analyzes data to generate insightful reports. This role significantly enhances her ability to extract valuable insights from various observations, experiences that have collectively laid a strong foundation for her as an effective project manager.\n\n**Education Background:**\n- BSc in Electrical and Computer Engineering\n- Currently pursuing MSc in Organizational Leadership at International Leadership University",
    email: "nardos.kebede@greatcommissionethiopia.org",
    phone: "+251 95 678 9012",
    website: "https://www.gcmethiopia.org",
    prayerRequests: [
      "Wisdom in managing complex digital projects and teams",
      "Clarity and insight in analyzing data for strategic decisions",
      "Strength and focus while balancing work and master's studies",
      "God's guidance in translating ministry visions into tangible outcomes",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "Successfully Managed Digital Campaign Launch",
        content:
          "Oversaw the end-to-end launch of a major digital evangelism campaign, ensuring timely delivery and effective coordination.",
      },
      {
        date: "March 2025",
        title: "Developed Enhanced Project Tracking System",
        content:
          "Implemented a new project management system to improve transparency and efficiency across digital initiatives.",
      },
      {
        date: "January 2025",
        title: "Presented Quarterly Analytics Report",
        content:
          "Delivered a comprehensive report on digital ministry performance, providing key insights for future strategies.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$880/month",
        description:
          "To continue full-time service in digital project management and analytics for the ministry.",
      },
      {
        item: "Tuition for Master's Program",
        amount: "$1,000/year",
        description:
          "Support for her ongoing Master of Science degree in Organizational Leadership.",
      },
      {
        item: "Project Management Software & Resources",
        amount: "$350",
        description:
          "For access to advanced project management tools and professional development resources.",
      },
    ],
  },

  "loza-teshome": {
    id: 13,
    name: "Loza Teshome",
    image: "/images/missionaries/loza.png?height=400&width=400",
    location: "Addis Ababa, Ethiopia",
    years: "3+ years",
    focus: "Product Management & Youth Digital Outreach",
    shortBio:
      "Product Manager and Digital Missionary passionate about leveraging technology to impact teenagers for the Gospel.",
    fullBio:
      "Loza Teshome was born and raised in Negele Arsi, growing up in a loving family and coming to faith in Christ during her childhood. Her passion for gospel music fostered a hobby of listening to gospel songs. After completing her secondary education, she decided to pursue a career in software engineering, inspired by her brother, who was serving in the Digital Strategy department at Great Commission Ministry Ethiopia (GCME). Her brother's recommendation led her to join GCME as a **Digital Missionary**.\n\nLoza is thrilled to be pursuing her dream of helping people through technology, with a particular interest in assisting teenagers. She finds her current position incredibly beneficial in achieving this goal and feels grateful for the opportunity to make a positive impact on the lives of younger generations.\n\n**Educational Background:**\n- Graduated from Debre Berhan University in 2021 with a degree in Software Engineering.",
    email: "loza.teshome@greatcommissionethiopia.org",
    phone: "+251 96 789 0123",
    website: "https://www.gcmethiopia.org",
    prayerRequests: [
      "Wisdom and creativity in developing digital products for teenagers",
      "Effectiveness in reaching and discipling younger generations through technology",
      "Guidance in strategic planning for youth-focused digital initiatives",
      "Continued passion for gospel music and its role in her ministry.",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "Launched Teen Discipleship App Pilot",
        content:
          "Led the pilot release of a new mobile application specifically designed for discipleship among teenagers, receiving positive initial feedback.",
      },
      {
        date: "March 2025",
        title: "Conducted Youth Digital Engagement Workshop",
        content:
          "Facilitated a workshop with youth leaders to gather insights and refine strategies for effective digital outreach to high school students.",
      },
      {
        date: "January 2025",
        title: "Completed Product Management Certification",
        content:
          "Obtained a certification in advanced product management, enhancing her skills in defining and launching digital products.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$870/month",
        description:
          "To continue serving full-time as a Product Manager focused on digital ministry for youth.",
      },
      {
        item: "Youth Ministry Resource Fund",
        amount: "$600/year",
        description:
          "For development and acquisition of specific digital resources and content tailored for teenagers.",
      },
      {
        item: "Professional Development in Youth Psychology",
        amount: "$400",
        description:
          "To attend courses or workshops focused on adolescent development and engagement strategies.",
      },
    ],
  },
  "misael-dessalegn": {
    id: 14,
    name: "Misael Dessalegn",
    image: "/images/missionaries/misael.png?height=400&width=400",
    location: "Addis Ababa, Ethiopia",
    years: "3+ years",
    focus: "Front-End Development & Digital Strategy Leadership",
    shortBio:
      "Front-End Developer and former campus Digital Strategy leader passionate about using technology for God's Kingdom.",
    fullBio:
      "Misael Dessalegn was born in Hosana, a town renowned for its natural beauty and close-knit community. From a young age, he developed a profound interest in technology and its transformative potential. While studying at Arba Minch University, Misael discovered his passion for software development within the context of God's Kingdom.\n\nHis journey into digital ministry began during his second year at university when fellowship leaders invited him to a Digital Strategy (DS) retreat in Debre Zeyit City. The presentations and discussions at this retreat profoundly transformed his perspective on life and ministry, igniting a fervent desire to leverage technology for advancing God's Kingdom. Inspired, he returned to campus determined to establish and lead a digital strategy team.\n\nFor two years, Misael dedicated himself to leading the campus DS team, collaborating with like-minded individuals to utilize digital platforms for spreading God's love and connecting with people. After graduating from Arba Minch University, he transitioned to the national digital strategy team in Addis Ababa, expanding his skills and contributing to digital initiatives on a broader scale. Currently, he is actively involved in designing and implementing digital strategies that support the mission of expanding God's Kingdom through technology.\n\n**Skills and Expertise:**\n- **Languages & Frameworks:** JavaScript, Node.js, Java, HTML5, CSS, React Native/React.js\n- **Libraries & Tools:** Bootstrap, Tailwind CSS, Ant Design\n- **Certifications:** React.js - Meta, Programming with JavaScript - Meta, AR/VR Africa Hackathon 2022 - Guzo Technologies, Certificate of Volunteer Services in Digital Strategy Team Leadership - Great Commission of Ethiopia, Virtual Experience Program - Cisco.",
    email: "misael.dessalegn@greatcommissionethiopia.org",
    phone: "+251 97 890 1234",
    website: "https://www.gcmethiopia.org",
    prayerRequests: [
      "Wisdom and creativity in front-end development for ministry platforms",
      "Discernment in designing user-friendly and impactful digital tools",
      "Continued growth in technical skills and leadership abilities",
      "God's anointing on all digital initiatives to reach more people.",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "Launched New User Interface for Discipleship Platform",
        content:
          "Successfully developed and deployed an intuitive and responsive new front-end for a key online discipleship platform.",
      },
      {
        date: "March 2025",
        title: "Implemented Modern Front-End Framework",
        content:
          "Migrated legacy front-end code to a modern React.js framework, significantly improving performance and maintainability.",
      },
      {
        date: "January 2025",
        title: "Conducted Internal React.js Training",
        content:
          "Led a training session for junior developers on best practices in React.js, fostering team skill development.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$900/month",
        description:
          "To continue full-time work as a Front-End Developer, building essential digital tools for ministry.",
      },
      {
        item: "Advanced Front-End Development Courses",
        amount: "$700/year",
        description:
          "For specialized online courses and certifications in advanced front-end technologies and UX development.",
      },
      {
        item: "Development Hardware Upgrade",
        amount: "$500",
        description:
          "To acquire updated hardware for more efficient development and testing of complex applications.",
      },
    ],
  },
  "selam-getachew": {
    id: 15,
    name: "Selam Getachew",
    image: "/images/missionaries/selam.png?height=400&width=400",
    location: "Addis Ababa, Ethiopia",
    years: "2+ years",
    focus: "Graphics Design & Visual Communication",
    shortBio:
      "Graphics Designer passionate about using visual art to communicate God's message and inspire others.",
    fullBio:
      "Selam Getachew, a skilled graphics designer, spent her formative years in Harar, Ethiopia, where she completed her elementary, primary, and secondary education. In her free time, she indulged in games, sketching, and digital drawing, alongside a love for reading and writing stories and poems. She pursued higher education in Architecture and Urban Planning at Arba Minch Institute of Technology. During college, Selam was actively involved in the campus's education team, focusing on bible study, discipleship, and preparing teaching materials for Christian students.\n\nAfter graduating, she worked for several organizations before joining GCME's Digital Strategy Department as a **Graphics Designer**. Selam's deeper commitment to serving God was profoundly impacted by the passing of a close friend. His unwavering confidence in facing death, rooted in a life lived according to God's will, resonated deeply with her. At his funeral, another colleague reiterated similar sentiments, prompting Selam to reflect on her own readiness. This introspection led her to a decisive moment: she chose to use her design skills to serve God with confidence and courage. Today, Selam is grateful to be serving God through her work at GCME, leveraging her artistic talents for divine purposes.",
    email: "selam.getachew@greatcommissionethiopia.org",
    phone: "+251 98 901 2345",
    website: "https://www.gcmethiopia.org",
    prayerRequests: [
      "Wisdom and creativity in designing impactful visuals for the Gospel",
      "Discernment in translating complex messages into clear graphics",
      "Inspiration to create innovative visual content for digital ministry",
      "Courage to share her testimony through her work.",
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "Designed Visuals for New Online Campaign",
        content:
          "Created compelling graphic assets for a recent large-scale digital evangelism campaign, leading to increased engagement.",
      },
      {
        date: "March 2025",
        title: "Developed Ministry Brand Guidelines",
        content:
          "Led the creation of comprehensive brand guidelines for various ministry initiatives, ensuring visual consistency across platforms.",
      },
      {
        date: "January 2025",
        title: "Illustrated Digital Discipleship Series",
        content:
          "Produced a series of custom illustrations for a new digital discipleship curriculum, enhancing its visual appeal and understanding.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "$850/month",
        description:
          "To continue full-time work as a Graphics Designer, crafting visual content for gospel outreach.",
      },
      {
        item: "Professional Design Software & Resources",
        amount: "$500/year",
        description:
          "For subscriptions to industry-standard design software, stock images, and graphic assets.",
      },
      {
        item: "Advanced Graphics Design Training",
        amount: "$700",
        description:
          "To attend specialized workshops or online courses in motion graphics, 3D design, or advanced illustration techniques.",
      },
    ],
  },
};

interface PageProps {
  params?: Promise<{ slug: string }>
  searchParams?: Promise<any>
}

export default async function MissionaryDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  if (!resolvedParams) {
    notFound()
  }
  const slug = resolvedParams.slug
  const missionary = missionariesData[slug as keyof typeof missionariesData]

  if (!missionary) {
    notFound()
  }

  return <MissionaryDetail missionary={missionary} />
}
