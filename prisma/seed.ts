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
        title: "Digital Strategy",
        description:
          "Leveraging the internet and digital technologies to rapidly spread the gospel message and combat negative online influences.",
        fullDescription:
          "In this age of information and technology, we believe that God has given us many opportunities to reach out to the people with the gospel message to all mankind faster than ever before. As the early Christians were able to take the gospel from Jerusalem to Rome and to the nations, using the same methods that the Roman emperors worked for their military and political purposes, all of us are striving to bring the gospel to all people through the Internet and other digital technologies. We have two main reasons for doing so. The first is the principle of missions that go into all the world. Today, 2/3 of the world's population has access to the Internet. Even in developing countries, such as Ethiopia, many are joining this technology at an unprecedented pace. And with information like Google, millions of people every day ask different questions about God, spiritual life, happiness, and love. After all, if the Internet is one of the ways to go all over the world, what else could it be? The second is just as good as the opportunities digital technology has brought to our day, evil is just as easy to spread among humans too. In the midst of this, racism and hate speech are currently testing the nation, and pornography has become a challenge that has disrupted many marriages and families, and this problem has been a challenge for the church. So, what would it be if it is not digital technology, where our battlefield to save a lost generation?",
        slug: "digital-strategy",
        icon: "Users",
        activities: [
          "Global gospel reach through digital platforms",
          "Answering spiritual questions online",
          "Combating online racism, hate speech, and pornography",
          "Utilizing social media, websites, and mobile applications for evangelism",
        ],
        visionText:
          "To use digital technology as a primary means of evangelism, reaching millions with the gospel message annually through social media, websites, and mobile applications.",
        involvedText:
          "As the Great Commission Ministry, we are serving the digital strategy as one of the primary means of evangelism. You can also serve with us by sharing the gospel with your friends using these platforms.",
        impactQuote:
          "If the Internet is one of the ways to go all over the world, what else could it be?",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Student Led Movement",
        description:
          "Empowering students to lead and multiply Christian movements on campus and beyond.",
        fullDescription:
          "The Great Commission Ministry Student-Led Movement (SLM) is a dynamic collaboration of like-hearted students, united by a shared divine vision to spark spiritual transformation. Our core mission is to win souls, nurture spiritual growth, and inspire students to actively participate in fulfilling the Great Commission. This isn't just within Ethiopian educational institutions; our reach extends far beyond, impacting lives across geographical borders. At its heart, SLM serves as a vital conduit for the Great Commission among High School, University, and College students. Through collective efforts and unwavering dedication, we aim to facilitate the spiritual awakening and maturation of Ethiopian students, empowering them to become transformative agents in their communities and the world. As we work towards our vision, we emphasize leadership development, envisioning vibrant movements on every campus. We strive to cultivate visionary leaders who can navigate contemporary culture while remaining steadfast in Christ-centered values. Our intentional mentorship and training initiatives empower these leaders to spearhead transformative initiatives within their spheres of influence, creating a ripple effect of spiritual renewal that transcends boundaries and nations. The Student-Led Movement is more than a strategy; it's a powerful force for spiritual renewal and societal transformation, grounded in Gospel truths and propelled by the Holy Spirit. We champion Christ's cause, advancing His Kingdom in every human endeavor, and invite you to join this transformative journey to make an indelible impact for God's glory and humanity's betterment.",
        slug: "student-led-movement-strategy",
        icon: "Users",
        activities: [
          "Campus outreach programs",
          "Student leadership training",
          "Discipleship and mentorship for youth",
          "Youth-led mission trips",
        ],
        visionText:
          "To facilitate the spiritual awakening and maturation of Ethiopian students, empowering them to become agents of transformative change in their communities and the world at large.",
        involvedText:
          "Join us on this transformative journey as we strive to make an indelible impact for the glory of God and the betterment of humanity.",
        impactQuote:
          "Empowering students to become agents of transformative change.",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Leader Strategy",
        description:
          "Engaging professionals and executives to catalyze spiritual movements in their marketplaces, aligning with the Great Commission.",
        fullDescription:
          "Our Leader Impact movement is a dynamic initiative aimed at engaging professionals and executives within their respective marketplaces, with a profound focus on catalyzing spiritual movements that align with the fulfillment of the Great Commission. Within this initiative, we have identified four major domains, each strategically crafted to address key aspects of leadership development and spiritual growth. Firstly, our emphasis on Leadership Development underscores our commitment to equipping professionals and executives with the essential skills, knowledge, and character traits necessary to lead with integrity and Kingdom-mindedness. Through tailored training programs, mentorship opportunities, and immersive leadership retreats, we empower leaders to navigate the complexities of their roles with wisdom and grace. Furthermore, Spiritual Formation lies at the core of our mission, as we recognize the importance of nurturing the spiritual well-being of leaders. Providing a range of resources such as devotional materials, Bible studies, and prayer groups, we support individuals in deepening their relationship with God and living out their faith authentically in their workplaces. Additionally, our spiritual retreats, conferences, and seminars foster a sense of community and accountability among leaders. In the realm of Marketplace Ministry, we encourage professionals and executives to view their careers as platforms for Kingdom impact. By championing initiatives like workplace chaplaincy programs, ethical business practices seminars, and corporate prayer networks, we mobilize leaders to integrate their faith into their professional lives and become agents of transformation in their workplaces. Beyond their workplaces, our Community Engagement domain empowers professionals and executives to serve and impact their communities positively. Whether through volunteering with local charities, mentoring youth, or participating in community development projects, leaders have the opportunity to demonstrate Christ-like love and compassion, bearing witness to the transformative power of the Gospel in their communities.",
        slug: "leader-strategy",
        icon: "Users",
        activities: [
          "Leadership development programs",
          "Spiritual formation resources",
          "Marketplace ministry initiatives",
          "Community engagement projects",
        ],
        visionText:
          "To see leaders equipped and empowered to advance God's Kingdom and fulfill the Great Commission in their communities and beyond.",
        involvedText:
          "Through these four strategic domains, our Leader Impact movement seeks to mobilize professionals and executives as ambassadors for Christ, empowering them to bring about spiritual renewal and social transformation in their spheres of influence.",
        impactQuote:
          "Mobilizing professionals and executives as ambassadors for Christ.",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Global Church Movement",
        description:
          "Uniting and empowering Ethiopian Christians to multiply vibrant faith communities and fulfill the Great Commission globally.",
        fullDescription:
          "Ethiopia, with a population of nearly 115 million, is home to approximately 25 million individuals who identify with Jesus Christ, leaving roughly 90 million without such affiliation. Our mission is to unite with fellow believers within the body of Christ and empower the faithful among the 25 million Christians to reach out to the rest of the population with the message of Jesus Christ, striving to establish movements for church multiplication (Matthew 28:19-20; Acts 1:8; John 3:16). Aligned with the purpose, mission, and values of Great Commission Ministry Ethiopia, a ministry under Campus Crusade for Christ International, we envision a world where every individual has access to a vibrant church or faith community, regardless of their location. GCM fosters inclusivity by embracing a diverse spectrum of churches and missional communities, each reflecting a variety of expressions, backgrounds, models, sizes, and shapes. Despite this diversity, these entities are united by a shared commitment to several core principles. These include upholding the authority of the Bible and acknowledging the Lordship of Jesus Christ, fulfilling the Great Commission, and spreading the gospel of Jesus through both word and deed. Moreover, they affirm the unity and paramountcy of the kingdom of God, recognizing the One Church as the Bride of Christ. In their endeavors, they prioritize the development and application of contextually relevant models and strategies that remain deeply rooted in the Word of God. We prioritize the establishment of intergenerational coaching relationships, the development of new leaders, the mobilization of financial resources, and the multiplication of churches at the local level. This indicator underscores our commitment to building self-sustaining and resilient communities of faith, capable of perpetuating their mission and ministry over time. In summary, these Key Movement Indicators serve as benchmarks for assessing the progress and impact of our mission efforts. They reflect our overarching vision of fostering vibrant, multiplying, and sustainable Christian communities that actively engage in spreading the gospel and advancing the Kingdom of God.",
        slug: "global-church-movement-strategy",
        icon: "Church",
        activities: [
          "A vital church for every 1,000 people",
          "Engagement in evangelism and church planting in every people and place",
          "Four generations of church multiplication through multiple streams",
          "Leaders raised from the harvest",
          "Local sustainability",
        ],
        visionText:
          "To see every individual have access to a vibrant church or faith community, and to foster multiplying, sustainable Christian communities that actively engage in spreading the gospel.",
        involvedText:
          "Join us in this extraordinary mission by praying fervently, receiving training, engaging in church planting, coaching leaders, investing financially, participating in vision trips, and offering your expertise.",
        impactQuote: `All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations..." (Matthew 28:19-20) "I will build my church, and the gates of Hades will not overcome it." (Matthew 16:18)`,
      },
    }),
    prisma.strategy.create({
      data: {
        title: "National Operations",
        description:
          "Providing strategic leadership to build operational capacity, ensure wise stewardship of resources, and foster movement-building for the national ministry.",
        fullDescription:
          "The National Operations Team Leader is essential for providing strategic leadership to enhance operational capacity and ensure prudent stewardship of both human and material resources. This leadership is crucial in achieving the national ministry's mission and vision, fostering movement-building efforts across the nation. The National Operations Team Leader is tasked with building and leading an operations team, fostering collaboration and synergy among team members to achieve organizational objectives. By providing direction, support, and mentorship, the leader ensures that the team operates cohesively and effectively. One of the primary responsibilities of the National Operations Team Leader is to oversee financial management processes. This includes ensuring transparency, accountability, and adherence to budgetary constraints. By implementing sound financial practices and controls, the leader safeguards the organization's financial integrity and sustainability. The leader is responsible for the strategic utilization and management of technology resources to optimize operational efficiency and effectiveness. This involves identifying and implementing technological solutions that streamline processes, enhance productivity, and support organizational goals. The National Operations Team Leader oversees the maintenance and administration of databases, including streamlining data collection, storage, and retrieval processes to ensure accuracy, accessibility, and security. By effectively managing databases, the leader facilitates informed decision-making and supports data-driven approaches to ministry. Another key responsibility is the compilation and dissemination of ministry reports to stakeholders. These reports provide comprehensive insights into organizational performance and impact, informing decision-making and facilitating accountability. The leader ensures that reports are timely, accurate, and relevant to stakeholders' needs. The National Operations Team Leader provides leadership in information dissemination and management, facilitating informed decision-making across all levels of the organization by ensuring that relevant information is effectively communicated and accessible to key stakeholders. Efficient management of office facilities and resources is essential for creating a conducive work environment for staff members. The leader oversees office management to ensure that facilities are well-maintained, resources are utilized effectively, and staff have the support they need to carry out their duties. The leader is responsible for coordinating and executing event operations. This includes overseeing logistical arrangements, coordinating with vendors and partners, and ensuring that events run smoothly and successfully. The National Operations Team Leader proactively identifies and responds to field needs. By anticipating challenges and implementing solutions, the leader enhances operational effectiveness and service delivery, ensuring that the organization can effectively meet the needs of its stakeholders and beneficiaries.",
        slug: "national-operations-strategy",
        icon: "Users",
        activities: [
          "Strategic leadership for operational capacity",
          "Prudent stewardship of people and resources",
          "Financial management and accountability",
          "Technology and database management",
          "Ministry reporting and information dissemination",
          "Office and event operations",
          "Proactive response to field needs",
        ],
        visionText:
          "To provide leadership in building operational capacity and in wise stewardship of people and resources in order for the national ministry to accomplish its mission and vision and to help build movements everywhere.",
        involvedText:
          "The National Operations Team Leader is tasked with building and leading an operations team, fostering collaboration and synergy among team members to achieve organizational objectives.",
        impactQuote:
          "Providing strategic leadership to enhance operational capacity and ensure prudent stewardship of both human and material resources.",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Prayer Movement",
        description:
          "The essential backbone of all ministry activities and the key to fulfilling the Great Commission through focused prayer and fasting.",
        fullDescription:
          "Prayer is the backbone of all mission activities of the ministry and the key tool to fulfill the Great Commission. It is a special focus of GCME that staffs may give due emphasis for prayer and fasting; and each ministry strategy may have its own prayer-oriented movements. We have a devotion time with the staff weekly, monthly and quarter annually national fasting and prayer programs that every staffs of GCME pray together in their respective places. The focus of our prayer is our nation and the expansion of the Gospel. The prayer movement has ignited and expanded like a wild forest fire throughout Addis Ababa and the regional offices as well. Our prayer network in Addis Ababa continues strongly in Yerer, Jakros, Piassa, Qera and Ferensay Legassion areas. After the Global outreach week in May 2018, the prayer department invited 98 believers from all transient evangelism training coordinating centers and gave them a training on prayer and how to proceed with prayer network in all sub-cities of Addis throughout the year for the expansion of the gospel. Our south-west office provided prayer-based training for 258 believers gathered from 11 denominations from the towns of Mizan and Teppi. Additionally, the prayer training was given to three prayer teams named Hope, Faith, and Love. These teams are mainly praying for the expansion of the gospel in the country.",
        slug: "prayer-movement-strategy",
        icon: "Users",
        activities: [
          "Weekly, monthly, and quarterly national prayer programs",
          "Focus on national transformation and Gospel expansion",
          "Extensive prayer network in Addis Ababa (Yerer, Jakros, Piassa, Qera, Ferensay Legassion)",
          "Training and mobilization of prayer teams across Ethiopia",
          "Strategic prayer for the expansion of the gospel in the country",
        ],
        visionText:
          "To see prayer ignite and expand throughout Ethiopia, fueling the advancement of the Gospel in every region.",
        involvedText:
          "Join staff weekly, monthly, and quarterly for national fasting and prayer, focusing on our nation and the Gospel's expansion.",
        impactQuote:
          "Prayer is the backbone of all mission activities of the ministry and the key tool to fulfill the Great Commission.",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Leadership Development & Human Resources",
        description:
          "Cultivating a skilled, empowered, and supported workforce to drive organizational growth and mission accomplishment.",
        fullDescription:
          "The Leadership Development & Human Resources (LDHR) department serves as a cornerstone of our organization, playing a pivotal role in bolstering its effectiveness and resilience. At the heart of LDHR's mission is the cultivation of a skilled and empowered workforce capable of driving organizational growth and success. Through strategic recruitment, comprehensive training, ongoing development initiatives, and robust retention strategies, LDHR is dedicated to assembling and nurturing a team of individuals who embody our organization's values and vision. By investing in the professional growth and well-being of our staff, LDHR not only strengthens individual capacities but also enhances the collective capabilities of the organization as a whole. A highly skilled and motivated staff team translates to increased organizational capacity, enabling us to tackle challenges, seize opportunities, and achieve our strategic objectives with greater efficiency and effectiveness. Furthermore, LDHR recognizes the importance of fostering a supportive and inclusive work environment that nurtures talent, encourages innovation, and promotes collaboration. By prioritizing employee engagement, job satisfaction, and work-life balance, LDHR contributes to a positive organizational culture that attracts top talent, fosters loyalty, and cultivates a sense of belonging among staff members.",
        slug: "hr-and-leadership-development-strategy",
        icon: "Users",
        activities: [
          "Strategic recruitment and talent acquisition",
          "Comprehensive training and ongoing development",
          "Robust retention strategies",
          "Fostering a supportive and inclusive work environment",
          "Promoting employee engagement and well-being",
        ],
        visionText:
          "To build a highly skilled and motivated staff team that increases organizational capacity, enabling us to tackle challenges, seize opportunities, and achieve our strategic objectives with greater efficiency and effectiveness.",
        involvedText:
          "LDHR serves as a catalyst for organizational growth and success, ensuring that we have the right people in the right roles, equipped with the necessary skills and resources to fulfill our mission and drive lasting impact.",
        impactQuote:
          "Investing in our greatest asset – our people – ensures our ability to overcome challenges, seize opportunities, and achieve our collective goals with excellence.",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Geographic Expansion Strategy",
        description:
          "Expanding GCME's reach and impact by establishing, sustaining, and supporting regional bureaus (local area clusters) across Ethiopia.",
        fullDescription:
          "The Geographic Expansion Strategy is a newly established department within GCME, focusing on regional bureaus within the country. To avoid confusion with the Africa region, these regions are referred to as local area clusters. The department collaborates closely with regional/area cluster leaders to achieve its objectives. It is led by a team of five individuals: Kibru Tadesse (Geographic Expansion Director), Desta Samuel (Leadership Development), Hanna Habtemariam (Geographic Expansion Admin Assistant), Getachew Mohammed (Leadership Member from Area Clusters), and Sebsibe Elias (also a Leadership Member from Area Clusters). The team convened its inaugural meeting from August 22-24 at the Pacific Hotel to discuss and plan their initiatives. In this regard, the team embarked on journeys to Hawassa, Bahirdar, Hosanna, and Arbaminch to engage directly with area cluster leaders and staff members. During these visits, various activities were conducted, including budget transfers among regional offices, staff transfer processes, addressing requests and listening to reports and challenges from the team, fostering fellowship, meeting with area advisory committees and Church fellowships, conducting assessments of the areas, and other related tasks. Furthermore, the team personally traveled to oversee and facilitate the official inauguration of the new offices in Arbaminch and Hosanna. This effort involved mobilizing national leaders such as the national director, student-led strategy team leader, church-led strategy team leader, and two media team members, along with four members of the Geographic Expansion Team leadership. GET organizes monthly online meetings with area cluster leaders to stay updated, address requests, provide guidance, foster fellowship, share experiences, and exchange prayer requests. In addition, GET has been assisting local area cluster offices by sending letters from the national GCME office as required, delivering prayer requests from branch offices to prayer leaders on office fasting and prayer days, and providing support for assignments assigned by the national director. Furthermore, the team has been actively involved in documenting significant events such as the Durame fireseed and the official inauguration of new offices.",
        slug: "geographic-expansion-strategy",
        icon: "Map",
        activities: [
          "Coaching and mentoring regional leaders for healthy ministry growth",
          "Assisting existing offices in achieving self-sustainability and effectiveness",
          "Launching new regional offices in alignment with national strategies",
          "Facilitating day-to-day operational needs for regional offices",
          "Ensuring seamless integration between national and regional strategies",
          "Supporting national project implementation at the regional level",
          "Coordinating adequate staff support with Operations/Fund Capacity",
          "Facilitating planning, reporting, and evaluation processes at the regional level",
        ],
        visionText:
          "To expand GCME's reach and impact by establishing, sustaining, and supporting local area clusters, ensuring seamless integration with national strategies.",
        involvedText:
          "The department provides coaching, assists with sustainability, launches new offices, facilitates operations, and supports national projects at the regional level. The team engages directly with leaders and staff through visits and monthly online meetings.",
        impactQuote:
          "Providing leadership in building operational capacity and in wise stewardship of people and resources in order for the national ministry to accomplish its mission and vision and to help build movements everywhere.",
      },
    }),
    prisma.strategy.create({
      data: {
        title: "Jesus Film Strategy",
        description:
          "Sharing the transformative message of Jesus Christ globally through cinematic storytelling, translated into over 2,000 languages, and leveraging new technologies for wider reach.",
        fullDescription:
          "At Jesus Film Project, we are more than just filmmakers—we are passionate storytellers driven by the desire to share the transformative message of Jesus Christ with the world. Our mission is rooted in the belief that every individual, regardless of language or location, deserves to encounter the life-changing love and forgiveness found in Jesus. With the support of our dedicated partners and by God's grace, our Christian films have been translated into over 2,000 languages, breaking down barriers of language and literacy to ensure accessibility for all. However, our vision extends beyond filmmaking. Guided by faith, we are committed to reaching every corner of the globe, especially those regions with limited access to the gospel. As the world evolves, so do our methods—we innovate, adapt, and harness new technologies to effectively share the timeless story of Jesus Christ with a diverse and ever-changing audience. Film is not just an ancillary element to the mission of the Jesus Film Project®—it's the very essence of our identity. We firmly believe that film possesses a unique potency to communicate the gospel message to individuals across all corners of the globe, regardless of their cultural or linguistic backgrounds. Michael Allen, the Director of Narrative Production for the Jesus Film Project, articulates the profound significance of storytelling in Jesus' ministry: 'Jesus, in his ministry, astoundingly employed storytelling as a primary medium to impart kingdom truths. This choice was not arbitrary; rather, it resonated deeply with the cultural context of the time. In an era where oral tradition was the predominant means of transmitting heritage, Jesus astutely recognized the power of narrative to engage and enlighten his audience. This prompts us to ponder: why film? The answer lies in the cultural ubiquity of film and media as modern-day conduits of ideas. By harnessing these mediums, we can effectively convey the timeless truth of the gospel to contemporary audiences.' Indeed, storytelling holds a universal allure. Whether one resides in the bustling metropolis of Dublin or amidst the serene expanse of the Serengeti, narratives possess an inherent ability to captivate, inspire, and provoke introspection. Moreover, the medium of film, with its amalgamation of visual, thematic, and auditory elements, serves to magnify the impact of these stories, rendering them more immersive and emotionally resonant. The JESUS film stands as a testament to the transformative potential of cinematic storytelling. As the most widely viewed and translated film in history, it has reached billions worldwide, catalyzing over 600 million decisions to embrace the teachings of Jesus—a testament to the efficacy of film as a vehicle for spiritual enlightenment. Since its inception, the Jesus Film Project has been committed to transcending linguistic barriers by facilitating the translation of its films into diverse languages. This endeavor has not only democratized access to the gospel message but has also engendered profound encounters with Jesus among linguistically diverse communities. Across continents and cultures, the impact of film on spiritual awakening is palpable. From the radiant smiles in Burma to the tear-streaked faces in Kenya and Brazil, the universality of human emotion serves as a testament to the transcendent power of cinematic storytelling. The efficacy of film as a communication tool stems from several key factors: 1. Overcoming the limitations of literacy: With a significant portion of the global population lacking literacy skills, film transcends this barrier by offering a visually and audibly accessible medium for conveying complex narratives. 2. Bridging cultural divides: While written texts may be susceptible to misinterpretation across cultural boundaries, the visual and auditory richness of film fosters a deeper understanding and appreciation of diverse cultural contexts. 3. Cultivating empathy and perspective-taking: By immersing viewers in multifaceted narratives, film prompts introspection and challenges entrenched worldviews, fostering empathy and cross-cultural understanding. 4. Facilitating personal transformation: The immersive nature of film fosters emotional resonance, prompting viewers to confront their beliefs and values, ultimately leading to profound spiritual and personal growth. As witnessed on a global scale, film has the power to evoke immediate and enduring responses to the gospel message, making it an indispensable tool for evangelism and spiritual outreach. Looking to the future, the Jesus Film Project remains committed to harnessing the transformative potential of film to share the gospel with audiences worldwide. With ongoing initiatives to develop innovative cinematic experiences and expand access to gospel-centered content through digital platforms, we are poised to continue making an indelible impact on hearts and minds around the world. For those seeking to engage with the gospel message through film, the Jesus Film Project app offers a comprehensive library of feature-length and short films in multiple languages, providing a convenient and accessible resource for spiritual exploration and growth.",
        slug: "jesus-film-strategy",
        icon: "Film",
        activities: [
          "Translation of films into over 2,000 languages",
          "Innovation and adaptation of new technologies for gospel dissemination",
          "Utilizing film's unique potency to communicate cross-culturally",
          "Overcoming literacy barriers through visual and auditory storytelling",
          "Cultivating empathy and facilitating personal transformation through immersive narratives",
          "The Jesus Film app offering a comprehensive library of gospel-centered content",
        ],
        visionText:
          "To reach every corner of the globe with the transformative message of Jesus Christ, especially regions with limited gospel access, by innovating and adapting new technologies to share the timeless story with a diverse and ever-changing audience.",
        involvedText:
          "The Jesus Film Project app offers a comprehensive library of feature-length and short films in multiple languages, providing a convenient and accessible resource for spiritual exploration and growth.",
        impactQuote:
          "The JESUS film, the most widely viewed and translated film in history, has reached billions worldwide, catalyzing over 600 million decisions for Christ.",
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
