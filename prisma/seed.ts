import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

// Ensure normalizeMissionary is defined before usage
function normalizeMissionary(m: any) {
  return {
    name: m.name,
    title: m.title || "Missionary",
    image: m.image,
    email: m.email,
    phone: m.phone || "",
    location: m.location || "Ethiopia",
    years: m.years || "1+ years",
    focus: m.focus || "",
    shortBio: m.shortBio || "",
    fullBio: m.fullBio || "",
    website: m.website || "",
    qualification: m.qualification || "",
    experience: m.experience || "",
    mission: m.mission || "",
    type: m.type || "Full-time",
    status: m.status || "Active",
    role: m.role || "missionary",
    strategySlug: m.strategySlug,
    prayerRequests: m.prayerRequests || [],
    recentUpdates: m.recentUpdates || [],
    supportNeeds: m.supportNeeds || [],
  };
}

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data
  await prisma.user.deleteMany();
  await prisma.strategy.deleteMany();
  await prisma.projects.deleteMany();
  console.log("🗑️  Cleared existing data");

  // Create strategies first
  const strategies = await Promise.all([
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

  // --- NEW MISSIONARY SEEDING WITH IMAGES AS BLOB ---
  const missionarySeedData = [
    {
      name: "Senay Kumelachew",
      image: "/images/missionaries/senay.png",
      location: "Ethiopia",
      years: "6+ years",
      focus: "Digital Missions & Church Tech Mobilization",
      shortBio:
        "A passionate digital strategist empowering churches and campuses to embrace technology for Gospel advancement.",
      fullBio: `Senay Kumelachew is a young, sociable, and technophilic leader who finds joy in reading, walking, and spending time with people. As a committed digital strategist, Senay devotes his life to equipping churches and ministries to embrace technology for Kingdom work.

          His passion for digital missions began back in high school, fueled by his frustration over the Church's underuse of social media and digital tools. Everything changed when, as a freshman university student, he encountered the digital strategy team at Great Commission Ministry Ethiopia. From that moment, Senay joined as a volunteer mobilizer and online missionary.

          He pioneered digital strategy initiatives in his campus fellowship and local church, training peers and launching outreach efforts. As an associate staff, he traveled from campus to campus and church to church, equipping others to become digital missionaries.

          To fully embrace this calling, Senay became a full-time staff member in September 2018. Today, he serves as the Digital Mission Team Leader at GCME's Digital Strategy Office, leading projects that empower the Church to thrive in the digital age.`,
      mission:
        "Empowering churches and ministries to embrace technology for Gospel advancement.",
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
          amount: 8000,
          progress: 25,
          description: "Travel, training materials, and workshop coordination",
        },
        {
          item: "Laptop Upgrade",
          amount: 2000,
          progress: 54,
          description:
            "Essential for training presentations and media creation",
        },
        {
          item: "Monthly Support",
          amount: 1200,
          progress: 23,
          description: "Covers personal and ministry expenses",
        },
      ],
      strategySlug: "digital-strategy",
    },
    {
      name: "Samson Usmael",
      image: "/images/missionaries/samson.png",
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
      mission: "Advancing the Kingdom of God through digital platforms.",
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
          amount: 1000,
          progress: 0,
          description: "Support for online evangelism and ad campaigns",
        },
        {
          item: "Media Equipment",
          amount: 2800,
          progress: 0,
          description: "Camera and editing gear for content production",
        },
        {
          item: "Volunteer Training Resources",
          amount: 1500,
          progress: 0,
          description:
            "Training materials and logistics for missionary workshops",
        },
      ],
      strategySlug: "digital-strategy",
    },
    {
      name: "Cherinet Alemu",
      image: "/images/missionaries/cherinet.png",
      location: "Ethiopia",
      years: "5+ years",
      focus: "Digital Missions & Mentorship",
      shortBio:
        "A dedicated missionary raising digital mentors and sharing Christ with Ethiopia's younger generation online.",
      fullBio: `Cherinet Alemu is a passionate full-time missionary at the Ethiopian Cru office, serving under the Digital Strategy Department. His focus is on the digital battlefield—mentoring, coaching, and helping online seekers find Christ through various tools and platforms.

        Called to reach Ethiopia's growing teenage and youth population, Cherinet is committed to winning, building, and sending digital disciples. His team connects with thousands through social media tools like Gemenaye.com and short films, while also hosting mentorship, trainings, and group discipleship.

        As a strategist, Cherinet trains high school, church, and college leaders in digital evangelism, helping them fulfill the Great Commission. He mentors new online missionaries and creates opportunities for them to engage via platforms like Telegram chatbots and TMM.

        Cherinet believes in deep connections, clear Gospel messages, and building lasting digital communities where lives are transformed by Christ. His ministry is fully funded through the support of generous individuals and churches who share his vision.`,
      mission: "Sharing Christ with Ethiopia's younger generation online.",
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
          amount: 1000,
          progress: 0,
          description:
            "Covers personal and ministry expenses including travel, tools, and online platforms",
        },
        {
          item: "Digital Tools Budget",
          amount: 2500,
          progress: 0,
          description:
            "For hosting, chatbot development, and new outreach platforms",
        },
        {
          item: "Mentor Training Resources",
          amount: 1000,
          progress: 0,
          description:
            "Materials and logistics for in-person and virtual mentor training events",
        },
      ],
      strategySlug: "digital-strategy",
    },
    {
      name: "Saron Yohannes",
      image: "/images/missionaries/saron.png",
      location: "Durame, Ethiopia",
      years: "5+ years",
      focus: "Product Leadership & Digital Evangelism",
      shortBio:
        "Engineer-turned-digital-missionary leading digital product innovation for the Gospel in Ethiopia.",
      fullBio: `Saron Yohannes, the youngest in a family of nine, was born in Durame, Ethiopia, and raised in a Christ-centered home. Her deep admiration for her parents' faith led her to know Jesus personally from a young age. She earned a BSc in Electrical and Computer Engineering from Wachemo University in 2019.

        During her university internship, Saron prayed for direction and was led to Great Commission Ministry Ethiopia. There, she found the opportunity to combine her love for God and her technical skills to serve in Digital Strategies. From intern to team leader, Saron has held various roles and now leads the Products Team, building platforms and tools that expand digital missions in Ethiopia.

        Guided by Philippians 1:21, she is passionate about sharing the love of Christ both online and offline. She believes every line of code and every product she leads should bring glory to God and reach more people with the Gospel. Her background includes short courses in mentoring, graphic design, and leadership, which enrich her work and ministry.`,
      mission:
        "Serving in Digital Strategies to advance the Gospel in Ethiopia.",
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
          amount: 800,
          progress: 0,
          description:
            "To sustain her full-time ministry and product development responsibilities",
        },
        {
          item: "Equipment Upgrade",
          amount: 1500,
          progress: 0,
          description:
            "For a new laptop and accessories to support design and product leadership work",
        },
        {
          item: "Leadership Training",
          amount: 500,
          progress: 0,
          description:
            "To enroll in a product leadership and discipleship course for gospel-centered innovation",
        },
      ],
      strategySlug: "digital-strategy",
    },
    {
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
          progress: 25,
          description:
            "To continue full-time work as a Graphics Designer, crafting visual content for gospel outreach.",
        },
        {
          item: "Professional Design Software & Resources",
          amount: "$500/year",
          progress: 25,
          description:
            "For subscriptions to industry-standard design software, stock images, and graphic assets.",
        },
        {
          item: "Advanced Graphics Design Training",
          amount: "$700",
          progress: 25,
          description:
            "To attend specialized workshops or online courses in motion graphics, 3D design, or advanced illustration techniques.",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To sustain her full-time ministry and content creation work",
        },
        {
          item: "Counseling Certification",
          amount: "$600",
          progress: 25,
          description:
            "To complete her Biblical Counseling program and better serve mentees",
        },
        {
          item: "Laptop & Audio Tools",
          amount: "$1,200",
          progress: 25,
          description:
            "To improve content production and manage digital mentorship sessions effectively",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To serve full-time as a graphics and visual strategy lead",
        },
        {
          item: "Design Software Licenses",
          amount: "$300/year",
          progress: 25,
          description:
            "Adobe and other pro tools for high-quality creative output",
        },
        {
          item: "Graphics Tablet",
          amount: "$200",
          progress: 25,
          description: "For improved digital drawing and design workflow",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To continue full-time work leading digital innovation for gospel-centered tech",
        },
        {
          item: "Cloud Infrastructure & Hosting",
          amount: "$1,200/year",
          progress: 25,
          description:
            "For stable and scalable deployment of digital ministry tools",
        },
        {
          item: "Conference Travel Fund",
          amount: "$500",
          progress: 25,
          description:
            "To participate in regional tech-for-missions events and collaborations",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To continue full-time involvement in digital strategy and event coordination",
        },
        {
          item: "Training & Development Fund",
          amount: "$700",
          progress: 25,
          description:
            "For advanced courses in event management and digital product development",
        },
        {
          item: "Campus Outreach Travel",
          amount: "$300/quarter",
          progress: 25,
          description:
            "To facilitate visits and support for campus digital strategy teams outside Addis Ababa",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To continue full-time dedication to leading digital product development and cybersecurity efforts",
        },
        {
          item: "Professional Development & Certifications",
          amount: "$1,500/year",
          progress: 25,
          description:
            "For advanced training in cybersecurity and emerging software development technologies",
        },
        {
          item: "Hardware & Software Upgrades",
          amount: "$800",
          progress: 25,
          description:
            "To acquire necessary tools and licenses for optimizing development and security analysis",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To continue full-time work as a UX Designer, creating impactful digital solutions for the ministry.",
        },
        {
          item: "Design Software & Tools Subscription",
          amount: "$400/year",
          progress: 25,
          description:
            "For access to industry-standard design software and collaborative platforms.",
        },
        {
          item: "Conference & Workshop Attendance",
          amount: "$600",
          progress: 25,
          description:
            "To attend specialized UX/UI design conferences and workshops for continuous learning and networking.",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To continue full-time service in digital project management and analytics for the ministry.",
        },
        {
          item: "Tuition for Master's Program",
          amount: "$1,000/year",
          progress: 25,
          description:
            "Support for her ongoing Master of Science degree in Organizational Leadership.",
        },
        {
          item: "Project Management Software & Resources",
          amount: "$350",
          progress: 25,
          description:
            "For access to advanced project management tools and professional development resources.",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To continue serving full-time as a Product Manager focused on digital ministry for youth.",
        },
        {
          item: "Youth Ministry Resource Fund",
          amount: "$600/year",
          progress: 25,
          description:
            "For development and acquisition of specific digital resources and content tailored for teenagers.",
        },
        {
          item: "Professional Development in Youth Psychology",
          amount: "$400",
          progress: 25,
          description:
            "To attend courses or workshops focused on adolescent development and engagement strategies.",
        },
      ],
    },
    {
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
          progress: 25,
          description:
            "To continue full-time work as a Front-End Developer, building essential digital tools for ministry.",
        },
        {
          item: "Advanced Front-End Development Courses",
          amount: "$700/year",
          progress: 25,
          description:
            "For specialized online courses and certifications in advanced front-end technologies and UX development.",
        },
        {
          item: "Development Hardware Upgrade",
          amount: "$500",
          progress: 25,
          description:
            "To acquire updated hardware for more efficient development and testing of complex applications.",
        },
      ],
    },
    {
      name: "Denamo Markos",
      title: "Software Developer & Digital Evangelist",
      image: "/images/missionaries/denamo.png",
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
      strategySlug: "digital-strategy",
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
          amount: 4000,
          progress: 0,
          description: "High-performance server for AI applications",
        },
        {
          item: "Monthly Support",
          amount: 1000,
          progress: 0,
          description: "Personal and ministry expenses",
        },
      ],
    },
  ];

  // Remove existing missionaries with the same emails to avoid duplicates
  for (const m of missionarySeedData) {
    await prisma.user.deleteMany({ where: { email: m.email } });
  }

  // Helper to get strategyId by slug
  const getStrategyId = async (slug: string) => {
    const strat = await prisma.strategy.findFirst({ where: { slug } });
    return strat?.id;
  };

  // Seed missionaries with images as BLOB (normalized, error-handled, and mission defaulted)
  for (const m of missionarySeedData) {
    const missionary = normalizeMissionary(m);
    if (!missionary.mission) missionary.mission = "";
    await prisma.user.deleteMany({ where: { email: missionary.email } });
    let imageBuffer: Buffer | null = null;
    if (missionary.image) {
      const imagePath = missionary.image.split("?")[0];
      const absPath = path.join(process.cwd(), "public", imagePath);
      try {
        imageBuffer = fs.readFileSync(absPath);
      } catch (e) {
        console.warn(
          `Image not found for missionary ${missionary.name}: ${absPath}`
        );
        imageBuffer = null;
      }
    }
    const strategyId = await getStrategyId(missionary.strategySlug);
    if (!strategyId) {
      console.error(
        `Strategy not found for missionary ${missionary.name}: ${missionary.strategySlug}`
      );
      continue;
    }
    const { strategySlug, ...missionaryData } = missionary;
    try {
      await prisma.user.create({
        data: {
          ...missionaryData,
          image: imageBuffer,
          strategyId,
        },
      });
    } catch (err) {
      console.error(`Failed to create missionary ${missionary.name}:`, err);
    }
  }

  console.log("👥 Created additional missionaries");

  // --- PROJECTS DATA SEEDING ---
  const projectsData = [
    {
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
      fundingGoal: "120000",
      fundingRaised: "43000",
      problem: `Many churches across Ethiopia struggle with managing member data, financial records, and event coordination due to reliance on outdated or manual systems.\n\nThe lack of secure digital infrastructure results in data loss, poor communication, and administrative bottlenecks. It also limits outreach effectiveness and accountability in resource use.\n\nWith growing congregations and scattered records, pastors and administrators are overwhelmed and unable to serve their members effectively.`,
      solution: `Yotor is a cloud-based church management system tailored for the unique needs of Ethiopian churches. It enables secure record-keeping, digital giving, event coordination, and member communication all in one place.\n\nThe platform provides dashboards for pastors, finance teams, and ministry leaders to make informed decisions. It supports multiple languages and works well even on low-bandwidth connections.\n\nThrough training and onboarding, churches will transition smoothly from paper systems to digital, leading to long-term operational efficiency and transparency.`,
      impact: [
        "2,500+ church members will benefit from improved communication and access to services",
        "90% reduction in administrative errors through centralized digital records",
        "Increased member engagement through SMS/email alerts and event reminders",
        "Enhanced financial accountability and reporting for leadership",
        "Multiple churches will share and reuse the system across regions",
        "Better pastoral care through access to accurate member data and prayer needs",
      ],
      timeLine: [
        {
          phase: "Phase 1: System Design & Requirements",
          duration: "Month 1-2",
          description:
            "Gather needs, design UI/UX, and plan system architecture",
          status: "completed",
        },
        {
          phase: "Phase 2: Development & Internal Testing",
          duration: "Month 3-5",
          description:
            "Build core modules (members, finance, events, messaging)",
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
            "Yotor has completely transformed how we manage our ministry—it's like moving from darkness to light.",
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
    {
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
            "Before using MY FELLOW, I didn't know where to start. Now I'm growing spiritually and even leading a Bible group.",
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

    {
      id: 3,
      slug: "melhk-poadcast",
      title: "MELHIK - PODCAST",
      shortDescription:
        "Biblically grounded podcast equipping Christian youth for spiritual, emotional, and social maturity in today's culture.",
      image: "/images/projects/melhk.png?height=400&width=600",
      category: "Podcast",
      location: "Nationwide (Online)",
      duration: "2 years",
      beneficiaries: "5,000 people",
      teamSize: "8 volunteers",
      urgency: "Ongoing",
      fundingGoal: 120000,
      fundingRaised: 41000,
      problem: `Today's Christian youth face increasing challenges in navigating identity, relationships, purpose, and culture. Social media, peer pressure, and distorted worldviews often shape their thinking more than Scripture.

  Many lack access to relevant, Bible-based teaching that speaks directly to their struggles in a way they understand and relate to. Churches often don't have the resources or platforms to reach them consistently and holistically.

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
          description:
            "Produce 20+ episodes, launch on major podcast platforms",
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
    {
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
          description:
            "Research stories, select participants, and plan episodes",
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
            "This program is a vital bridge between pain and healing. It's a ministry of presence through media.",
        },
      ],
      urgencyFactors: [
        "Spike in family breakdowns and mental health struggles post-pandemic",
        "Lack of safe, Christ-centered spaces for emotional healing on media",
        "High demand for content addressing real-life issues with grace and truth",
        "Production team ready, but funding is delaying episode rollout",
      ],
    },
    {
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

  There is a need for a clear, engaging platform where youth can explore faith, ask tough questions, and discover God's truth in a safe and structured way.`,
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
    {
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
            "It's rare to find a platform that combines self-improvement with biblical integrity. HULENTENAWI does it beautifully.",
        },
      ],
      urgencyFactors: [
        "Increasing mental health challenges among young adults",
        "Growing hunger for spiritual mentorship in digital spaces",
        "Strong user demand for guided content and deeper community",
        "Opportunity to partner with churches for larger impact",
      ],
    },
    {
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
  ];

  // Fix project data fields to match schema
  const fixedProjectsData = projectsData.map((project) => ({
    ...project,
    timeLine: project.timeline || project.timeLine || [],
    fundingGoal: project.fundingGoal ? String(project.fundingGoal) : undefined,
    fundingRaised: project.fundingRaised
      ? String(project.fundingRaised)
      : undefined,
  }));

  await prisma.projects.deleteMany();
  for (const project of fixedProjectsData) {
    // Extract the filename from the image path (strip query string)
    let imageBuffer: Buffer | null = null;
    if (project.image) {
      const imagePath = project.image.split("?")[0];
      const absPath = path.join(process.cwd(), "public", imagePath);
      try {
        imageBuffer = fs.readFileSync(absPath);
      } catch (e) {
        console.warn(`Image not found for project ${project.slug}: ${absPath}`);
        imageBuffer = null;
      }
    }
    await prisma.projects.create({
      data: {
        slug: project.slug,
        title: project.title,
        shortDescription: project.shortDescription,
        image: imageBuffer,
        category: project.category,
        location: project.location,
        duration: project.duration,
        teamSize: project.teamSize,
        fundingGoal: project.fundingGoal,
        fundingRaised: project.fundingRaised,
        beneficiaries: project.beneficiaries,
        problem: project.problem,
        solution: project.solution,
        urgency: project.urgency,
        urgencyFactors: project.urgencyFactors,
        impact: project.impact,
        timeLine: project.timeLine,
        testimonials: project.testimonials,
      },
    });
  }

  console.log("✅ Database seeding completed successfully!");
  console.log(`📊 Created ${strategies.length} strategies`);
  const missionaryCount = await prisma.user.count();
  console.log(`👥 Created ${missionaryCount} missionaries`);

  // --- SEED DONATIONS AND TRANSACTIONS ---

  const [project1, project2] = await prisma.projects.findMany({ take: 2 });
  const [missionary1, missionary2] = await prisma.user.findMany({ take: 2 });
  const [strategy1, strategy2] = await prisma.strategy.findMany({ take: 2 });

  const donation1 = await prisma.donation.create({
    data: {
      amount: 1000,
      donorName: "John Doe",
      donorEmail: "john@example.com",
      projectId: project1?.id,
      status: "completed",
      paymentMethod: "credit_card",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    },
  });
  await prisma.transaction.create({
    data: {
      donationId: donation1.id,
      amount: donation1.amount,
      status: "completed",
      paymentMethod: "credit_card",
      reference: "TXN1001",
      createdAt: donation1.createdAt,
    },
  });

  const donation2 = await prisma.donation.create({
    data: {
      amount: 500,
      donorName: "Jane Smith",
      donorEmail: "jane@example.com",
      missionaryId: missionary1?.id,
      status: "completed",
      paymentMethod: "paypal",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1),
    },
  });
  await prisma.transaction.create({
    data: {
      donationId: donation2.id,
      amount: donation2.amount,
      status: "completed",
      paymentMethod: "paypal",
      reference: "TXN1002",
      createdAt: donation2.createdAt,
    },
  });

  const donation3 = await prisma.donation.create({
    data: {
      amount: 750,
      donorName: "Alice Johnson",
      donorEmail: "alice@example.com",
      strategyId: strategy1?.id,
      status: "pending",
      paymentMethod: "bank_transfer",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
    },
  });
  await prisma.transaction.create({
    data: {
      donationId: donation3.id,
      amount: donation3.amount,
      status: "pending",
      paymentMethod: "bank_transfer",
      reference: "TXN1003",
      createdAt: donation3.createdAt,
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
