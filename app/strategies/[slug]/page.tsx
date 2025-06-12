"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Users, Globe, Church, BookOpen, Video, Heart, Clipboard, Map, Film, Sparkles, Target, Handshake, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Strategy {
  title: string;
  description: string;
  icon: React.ReactNode;
  keyPoints: string[];
  slug: string;
  fullDescription: string;
  visionText: string;
  involvedText: string;
  impactQuote: string;
}

const strategies: Strategy[] = [
  {
    title: "Student Led Movement",
    description: "Empowering students to lead and multiply Christian movements on campus and beyond.",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Campus outreach programs",
      "Student leadership training",
      "Discipleship and mentorship for youth",
      "Youth-led mission trips"
    ],
    slug: "student-led-movement-strategy",
    fullDescription: "The Great Commission Ministry Student-Led Movement (SLM) is a dynamic collaboration of like-hearted students, united by a shared divine vision to spark spiritual transformation. Our core mission is to win souls, nurture spiritual growth, and inspire students to actively participate in fulfilling the Great Commission. This isn't just within Ethiopian educational institutions; our reach extends far beyond, impacting lives across geographical borders. At its heart, SLM serves as a vital conduit for the Great Commission among High School, University, and College students. Through collective efforts and unwavering dedication, we aim to facilitate the spiritual awakening and maturation of Ethiopian students, empowering them to become transformative agents in their communities and the world. As we work towards our vision, we emphasize leadership development, envisioning vibrant movements on every campus. We strive to cultivate visionary leaders who can navigate contemporary culture while remaining steadfast in Christ-centered values. Our intentional mentorship and training initiatives empower these leaders to spearhead transformative initiatives within their spheres of influence, creating a ripple effect of spiritual renewal that transcends boundaries and nations. The Student-Led Movement is more than a strategy; it's a powerful force for spiritual renewal and societal transformation, grounded in Gospel truths and propelled by the Holy Spirit. We champion Christ's cause, advancing His Kingdom in every human endeavor, and invite you to join this transformative journey to make an indelible impact for God's glory and humanity's betterment.",
    visionText: "To facilitate the spiritual awakening and maturation of Ethiopian students, empowering them to become agents of transformative change in their communities and the world at large.",
    involvedText: "Join us on this transformative journey as we strive to make an indelible impact for the glory of God and the betterment of humanity.",
    impactQuote: "Empowering students to become agents of transformative change."
  },
  {
    title: "Digital Strategy",
    description: "Leveraging the internet and digital technologies to rapidly spread the gospel message and combat negative online influences.",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Global gospel reach through digital platforms",
      "Answering spiritual questions online",
      "Combating online racism, hate speech, and pornography",
      "Utilizing social media, websites, and mobile applications for evangelism"
    ],
    slug: "digital-strategy",
    fullDescription: "In this age of information and technology, we believe that God has given us many opportunities to reach out to the people with the gospel message to all mankind faster than ever before. As the early Christians were able to take the gospel from Jerusalem to Rome and to the nations, using the same methods that the Roman emperors worked for their military and political purposes, all of us are striving to bring the gospel to all people through the Internet and other digital technologies. We have two main reasons for doing so. The first is the principle of missions that go into all the world. Today, 2/3 of the world's population has access to the Internet. Even in developing countries, such as Ethiopia, many are joining this technology at an unprecedented pace. And with information like Google, millions of people every day ask different questions about God, spiritual life, happiness, and love. After all, if the Internet is one of the ways to go all over the world, what else could it be? The second is just as good as the opportunities digital technology has brought to our day, evil is just as easy to spread among humans too. In the midst of this, racism and hate speech are currently testing the nation, and pornography has become a challenge that has disrupted many marriages and families, and this problem has been a challenge for the church. So, what would it be if it is not digital technology, where our battlefield to save a lost generation?",
    visionText: "To use digital technology as a primary means of evangelism, reaching millions with the gospel message annually through social media, websites, and mobile applications.",
    involvedText: "As the Great Commission Ministry, we are serving the digital strategy as one of the primary means of evangelism. You can also serve with us by sharing the gospel with your friends using these platforms.",
    impactQuote: "If the Internet is one of the ways to go all over the world, what else could it be?"
  },
  {
    title: "Leader Strategy",
    description: "Engaging professionals and executives to catalyze spiritual movements in their marketplaces, aligning with the Great Commission.",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Leadership development programs",
      "Spiritual formation resources",
      "Marketplace ministry initiatives",
      "Community engagement projects"
    ],
    slug: "leader-strategy",
    fullDescription: "Our Leader Impact movement is a dynamic initiative aimed at engaging professionals and executives within their respective marketplaces, with a profound focus on catalyzing spiritual movements that align with the fulfillment of the Great Commission. Within this initiative, we have identified four major domains, each strategically crafted to address key aspects of leadership development and spiritual growth. Firstly, our emphasis on Leadership Development underscores our commitment to equipping professionals and executives with the essential skills, knowledge, and character traits necessary to lead with integrity and Kingdom-mindedness. Through tailored training programs, mentorship opportunities, and immersive leadership retreats, we empower leaders to navigate the complexities of their roles with wisdom and grace. Furthermore, Spiritual Formation lies at the core of our mission, as we recognize the importance of nurturing the spiritual well-being of leaders. Providing a range of resources such as devotional materials, Bible studies, and prayer groups, we support individuals in deepening their relationship with God and living out their faith authentically in their workplaces. Additionally, our spiritual retreats, conferences, and seminars foster a sense of community and accountability among leaders. In the realm of Marketplace Ministry, we encourage professionals and executives to view their careers as platforms for Kingdom impact. By championing initiatives like workplace chaplaincy programs, ethical business practices seminars, and corporate prayer networks, we mobilize leaders to integrate their faith into their professional lives and become agents of transformation in their workplaces. Beyond their workplaces, our Community Engagement domain empowers professionals and executives to serve and impact their communities positively. Whether through volunteering with local charities, mentoring youth, or participating in community development projects, leaders have the opportunity to demonstrate Christ-like love and compassion, bearing witness to the transformative power of the Gospel in their communities.",
    visionText: "To see leaders equipped and empowered to advance God's Kingdom and fulfill the Great Commission in their communities and beyond.",
    involvedText: "Through these four strategic domains, our Leader Impact movement seeks to mobilize professionals and executives as ambassadors for Christ, empowering them to bring about spiritual renewal and social transformation in their spheres of influence.",
    impactQuote: "Mobilizing professionals and executives as ambassadors for Christ."
  },
  {
    title: "Global Church Movement",
    description: "Uniting and empowering Ethiopian Christians to multiply vibrant faith communities and fulfill the Great Commission globally.",
    icon: <Church className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "A vital church for every 1,000 people",
      "Engagement in evangelism and church planting in every people and place",
      "Four generations of church multiplication through multiple streams",
      "Leaders raised from the harvest",
      "Local sustainability"
    ],
    slug: "global-church-movement-strategy",
    fullDescription: "Ethiopia, with a population of nearly 115 million, is home to approximately 25 million individuals who identify with Jesus Christ, leaving roughly 90 million without such affiliation. Our mission is to unite with fellow believers within the body of Christ and empower the faithful among the 25 million Christians to reach out to the rest of the population with the message of Jesus Christ, striving to establish movements for church multiplication (Matthew 28:19-20; Acts 1:8; John 3:16). Aligned with the purpose, mission, and values of Great Commission Ministry Ethiopia, a ministry under Campus Crusade for Christ International, we envision a world where every individual has access to a vibrant church or faith community, regardless of their location. GCM fosters inclusivity by embracing a diverse spectrum of churches and missional communities, each reflecting a variety of expressions, backgrounds, models, sizes, and shapes. Despite this diversity, these entities are united by a shared commitment to several core principles. These include upholding the authority of the Bible and acknowledging the Lordship of Jesus Christ, fulfilling the Great Commission, and spreading the gospel of Jesus through both word and deed. Moreover, they affirm the unity and paramountcy of the kingdom of God, recognizing the One Church as the Bride of Christ. In their endeavors, they prioritize the development and application of contextually relevant models and strategies that remain deeply rooted in the Word of God. We prioritize the establishment of intergenerational coaching relationships, the development of new leaders, the mobilization of financial resources, and the multiplication of churches at the local level. This indicator underscores our commitment to building self-sustaining and resilient communities of faith, capable of perpetuating their mission and ministry over time. In summary, these Key Movement Indicators serve as benchmarks for assessing the progress and impact of our mission efforts. They reflect our overarching vision of fostering vibrant, multiplying, and sustainable Christian communities that actively engage in spreading the gospel and advancing the Kingdom of God.",
    visionText: "To see every individual have access to a vibrant church or faith community, and to foster multiplying, sustainable Christian communities that actively engage in spreading the gospel.",
    involvedText: "Join us in this extraordinary mission by praying fervently, receiving training, engaging in church planting, coaching leaders, investing financially, participating in vision trips, and offering your expertise.",
    impactQuote: `All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations..." (Matthew 28:19-20) "I will build my church, and the gates of Hades will not overcome it." (Matthew 16:18)`
  },
  {
    title: "National Operations",
    description: "Providing strategic leadership to build operational capacity, ensure wise stewardship of resources, and foster movement-building for the national ministry.",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Strategic leadership for operational capacity",
      "Prudent stewardship of people and resources",
      "Financial management and accountability",
      "Technology and database management",
      "Ministry reporting and information dissemination",
      "Office and event operations",
      "Proactive response to field needs"
    ],
    slug: "national-operations-strategy",
    fullDescription: "The National Operations Team Leader is essential for providing strategic leadership to enhance operational capacity and ensure prudent stewardship of both human and material resources. This leadership is crucial in achieving the national ministry's mission and vision, fostering movement-building efforts across the nation. The National Operations Team Leader is tasked with building and leading an operations team, fostering collaboration and synergy among team members to achieve organizational objectives. By providing direction, support, and mentorship, the leader ensures that the team operates cohesively and effectively. One of the primary responsibilities of the National Operations Team Leader is to oversee financial management processes. This includes ensuring transparency, accountability, and adherence to budgetary constraints. By implementing sound financial practices and controls, the leader safeguards the organization's financial integrity and sustainability. The leader is responsible for the strategic utilization and management of technology resources to optimize operational efficiency and effectiveness. This involves identifying and implementing technological solutions that streamline processes, enhance productivity, and support organizational goals. The National Operations Team Leader oversees the maintenance and administration of databases, including streamlining data collection, storage, and retrieval processes to ensure accuracy, accessibility, and security. By effectively managing databases, the leader facilitates informed decision-making and supports data-driven approaches to ministry. Another key responsibility is the compilation and dissemination of ministry reports to stakeholders. These reports provide comprehensive insights into organizational performance and impact, informing decision-making and facilitating accountability. The leader ensures that reports are timely, accurate, and relevant to stakeholders' needs. The National Operations Team Leader provides leadership in information dissemination and management, facilitating informed decision-making across all levels of the organization by ensuring that relevant information is effectively communicated and accessible to key stakeholders. Efficient management of office facilities and resources is essential for creating a conducive work environment for staff members. The leader oversees office management to ensure that facilities are well-maintained, resources are utilized effectively, and staff have the support they need to carry out their duties. The leader is responsible for coordinating and executing event operations. This includes overseeing logistical arrangements, coordinating with vendors and partners, and ensuring that events run smoothly and successfully. The National Operations Team Leader proactively identifies and responds to field needs. By anticipating challenges and implementing solutions, the leader enhances operational effectiveness and service delivery, ensuring that the organization can effectively meet the needs of its stakeholders and beneficiaries.",
    visionText: "To provide leadership in building operational capacity and in wise stewardship of people and resources in order for the national ministry to accomplish its mission and vision and to help build movements everywhere.",
    involvedText: "The National Operations Team Leader is tasked with building and leading an operations team, fostering collaboration and synergy among team members to achieve organizational objectives.",
    impactQuote: "Providing strategic leadership to enhance operational capacity and ensure prudent stewardship of both human and material resources."
  },
  {
    title: "Prayer Movement",
    description: "The essential backbone of all ministry activities and the key to fulfilling the Great Commission through focused prayer and fasting.",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Weekly, monthly, and quarterly national prayer programs",
      "Focus on national transformation and Gospel expansion",
      "Extensive prayer network in Addis Ababa (Yerer, Jakros, Piassa, Qera, Ferensay Legassion)",
      "Training and mobilization of prayer teams across Ethiopia",
      "Strategic prayer for the expansion of the gospel in the country"
    ],
    slug: "prayer-movement-strategy",
    fullDescription: "Prayer is the backbone of all mission activities of the ministry and the key tool to fulfill the Great Commission. It is a special focus of GCME that staffs may give due emphasis for prayer and fasting; and each ministry strategy may have its own prayer-oriented movements. We have a devotion time with the staff weekly, monthly and quarter annually national fasting and prayer programs that every staffs of GCME pray together in their respective places. The focus of our prayer is our nation and the expansion of the Gospel. The prayer movement has ignited and expanded like a wild forest fire throughout Addis Ababa and the regional offices as well. Our prayer network in Addis Ababa continues strongly in Yerer, Jakros, Piassa, Qera and Ferensay Legassion areas. After the Global outreach week in May 2018, the prayer department invited 98 believers from all transient evangelism training coordinating centers and gave them a training on prayer and how to proceed with prayer network in all sub-cities of Addis throughout the year for the expansion of the gospel. Our south-west office provided prayer-based training for 258 believers gathered from 11 denominations from the towns of Mizan and Teppi. Additionally, the prayer training was given to three prayer teams named Hope, Faith, and Love. These teams are mainly praying for the expansion of the gospel in the country.",
    visionText: "To see prayer ignite and expand throughout Ethiopia, fueling the advancement of the Gospel in every region.",
    involvedText: "Join staff weekly, monthly, and quarterly for national fasting and prayer, focusing on our nation and the Gospel's expansion.",
    impactQuote: "Prayer is the backbone of all mission activities of the ministry and the key tool to fulfill the Great Commission."
  },
  {
    title: "Leadership Development & Human Resources",
    description: "Cultivating a skilled, empowered, and supported workforce to drive organizational growth and mission accomplishment.",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Strategic recruitment and talent acquisition",
      "Comprehensive training and ongoing development",
      "Robust retention strategies",
      "Fostering a supportive and inclusive work environment",
      "Promoting employee engagement and well-being"
    ],
    slug: "hr-and-leadership-development-strategy",
    fullDescription: "The Leadership Development & Human Resources (LDHR) department serves as a cornerstone of our organization, playing a pivotal role in bolstering its effectiveness and resilience. At the heart of LDHR's mission is the cultivation of a skilled and empowered workforce capable of driving organizational growth and success. Through strategic recruitment, comprehensive training, ongoing development initiatives, and robust retention strategies, LDHR is dedicated to assembling and nurturing a team of individuals who embody our organization's values and vision. By investing in the professional growth and well-being of our staff, LDHR not only strengthens individual capacities but also enhances the collective capabilities of the organization as a whole. A highly skilled and motivated staff team translates to increased organizational capacity, enabling us to tackle challenges, seize opportunities, and achieve our strategic objectives with greater efficiency and effectiveness. Furthermore, LDHR recognizes the importance of fostering a supportive and inclusive work environment that nurtures talent, encourages innovation, and promotes collaboration. By prioritizing employee engagement, job satisfaction, and work-life balance, LDHR contributes to a positive organizational culture that attracts top talent, fosters loyalty, and cultivates a sense of belonging among staff members.",
    visionText: "To build a highly skilled and motivated staff team that increases organizational capacity, enabling us to tackle challenges, seize opportunities, and achieve our strategic objectives with greater efficiency and effectiveness.",
    involvedText: "LDHR serves as a catalyst for organizational growth and success, ensuring that we have the right people in the right roles, equipped with the necessary skills and resources to fulfill our mission and drive lasting impact.",
    impactQuote: "Investing in our greatest asset – our people – ensures our ability to overcome challenges, seize opportunities, and achieve our collective goals with excellence."
  },
  {
    title: "Geographic Expansion Strategy",
    description: "Expanding GCME's reach and impact by establishing, sustaining, and supporting regional bureaus (local area clusters) across Ethiopia.",
    icon: <Map className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Coaching and mentoring regional leaders for healthy ministry growth",
      "Assisting existing offices in achieving self-sustainability and effectiveness",
      "Launching new regional offices in alignment with national strategies",
      "Facilitating day-to-day operational needs for regional offices",
      "Ensuring seamless integration between national and regional strategies",
      "Supporting national project implementation at the regional level",
      "Coordinating adequate staff support with Operations/Fund Capacity",
      "Facilitating planning, reporting, and evaluation processes at the regional level"
    ],
    slug: "geographic-expansion-strategy",
    fullDescription: "The Geographic Expansion Strategy is a newly established department within GCME, focusing on regional bureaus within the country. To avoid confusion with the Africa region, these regions are referred to as local area clusters. The department collaborates closely with regional/area cluster leaders to achieve its objectives. It is led by a team of five individuals: Kibru Tadesse (Geographic Expansion Director), Desta Samuel (Leadership Development), Hanna Habtemariam (Geographic Expansion Admin Assistant), Getachew Mohammed (Leadership Member from Area Clusters), and Sebsibe Elias (also a Leadership Member from Area Clusters). The team convened its inaugural meeting from August 22-24 at the Pacific Hotel to discuss and plan their initiatives. In this regard, the team embarked on journeys to Hawassa, Bahirdar, Hosanna, and Arbaminch to engage directly with area cluster leaders and staff members. During these visits, various activities were conducted, including budget transfers among regional offices, staff transfer processes, addressing requests and listening to reports and challenges from the team, fostering fellowship, meeting with area advisory committees and Church fellowships, conducting assessments of the areas, and other related tasks. Furthermore, the team personally traveled to oversee and facilitate the official inauguration of the new offices in Arbaminch and Hosanna. This effort involved mobilizing national leaders such as the national director, student-led strategy team leader, church-led strategy team leader, and two media team members, along with four members of the Geographic Expansion Team leadership. GET organizes monthly online meetings with area cluster leaders to stay updated, address requests, provide guidance, foster fellowship, share experiences, and exchange prayer requests. In addition, GET has been assisting local area cluster offices by sending letters from the national GCME office as required, delivering prayer requests from branch offices to prayer leaders on office fasting and prayer days, and providing support for assignments assigned by the national director. Furthermore, the team has been actively involved in documenting significant events such as the Durame fireseed and the official inauguration of new offices.",
    visionText: "To expand GCME's reach and impact by establishing, sustaining, and supporting local area clusters, ensuring seamless integration with national strategies.",
    involvedText: "The department provides coaching, assists with sustainability, launches new offices, facilitates operations, and supports national projects at the regional level. The team engages directly with leaders and staff through visits and monthly online meetings.",
    impactQuote: "Providing leadership in building operational capacity and in wise stewardship of people and resources in order for the national ministry to accomplish its mission and vision and to help build movements everywhere."
  },
  {
    title: "Jesus Film Strategy",
    description: "Sharing the transformative message of Jesus Christ globally through cinematic storytelling, translated into over 2,000 languages, and leveraging new technologies for wider reach.",
    icon: <Film className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Translation of films into over 2,000 languages",
      "Innovation and adaptation of new technologies for gospel dissemination",
      "Utilizing film's unique potency to communicate cross-culturally",
      "Overcoming literacy barriers through visual and auditory storytelling",
      "Cultivating empathy and facilitating personal transformation through immersive narratives",
      "The Jesus Film app offering a comprehensive library of gospel-centered content"
    ],
    slug: "jesus-film-strategy",
    fullDescription: "At Jesus Film Project, we are more than just filmmakers—we are passionate storytellers driven by the desire to share the transformative message of Jesus Christ with the world. Our mission is rooted in the belief that every individual, regardless of language or location, deserves to encounter the life-changing love and forgiveness found in Jesus. With the support of our dedicated partners and by God's grace, our Christian films have been translated into over 2,000 languages, breaking down barriers of language and literacy to ensure accessibility for all. However, our vision extends beyond filmmaking. Guided by faith, we are committed to reaching every corner of the globe, especially those regions with limited access to the gospel. As the world evolves, so do our methods—we innovate, adapt, and harness new technologies to effectively share the timeless story of Jesus Christ with a diverse and ever-changing audience. Film is not just an ancillary element to the mission of the Jesus Film Project®—it's the very essence of our identity. We firmly believe that film possesses a unique potency to communicate the gospel message to individuals across all corners of the globe, regardless of their cultural or linguistic backgrounds. Michael Allen, the Director of Narrative Production for the Jesus Film Project, articulates the profound significance of storytelling in Jesus' ministry: 'Jesus, in his ministry, astoundingly employed storytelling as a primary medium to impart kingdom truths. This choice was not arbitrary; rather, it resonated deeply with the cultural context of the time. In an era where oral tradition was the predominant means of transmitting heritage, Jesus astutely recognized the power of narrative to engage and enlighten his audience. This prompts us to ponder: why film? The answer lies in the cultural ubiquity of film and media as modern-day conduits of ideas. By harnessing these mediums, we can effectively convey the timeless truth of the gospel to contemporary audiences.' Indeed, storytelling holds a universal allure. Whether one resides in the bustling metropolis of Dublin or amidst the serene expanse of the Serengeti, narratives possess an inherent ability to captivate, inspire, and provoke introspection. Moreover, the medium of film, with its amalgamation of visual, thematic, and auditory elements, serves to magnify the impact of these stories, rendering them more immersive and emotionally resonant. The JESUS film stands as a testament to the transformative potential of cinematic storytelling. As the most widely viewed and translated film in history, it has reached billions worldwide, catalyzing over 600 million decisions to embrace the teachings of Jesus—a testament to the efficacy of film as a vehicle for spiritual enlightenment. Since its inception, the Jesus Film Project has been committed to transcending linguistic barriers by facilitating the translation of its films into diverse languages. This endeavor has not only democratized access to the gospel message but has also engendered profound encounters with Jesus among linguistically diverse communities. Across continents and cultures, the impact of film on spiritual awakening is palpable. From the radiant smiles in Burma to the tear-streaked faces in Kenya and Brazil, the universality of human emotion serves as a testament to the transcendent power of cinematic storytelling. The efficacy of film as a communication tool stems from several key factors: 1. Overcoming the limitations of literacy: With a significant portion of the global population lacking literacy skills, film transcends this barrier by offering a visually and audibly accessible medium for conveying complex narratives. 2. Bridging cultural divides: While written texts may be susceptible to misinterpretation across cultural boundaries, the visual and auditory richness of film fosters a deeper understanding and appreciation of diverse cultural contexts. 3. Cultivating empathy and perspective-taking: By immersing viewers in multifaceted narratives, film prompts introspection and challenges entrenched worldviews, fostering empathy and cross-cultural understanding. 4. Facilitating personal transformation: The immersive nature of film fosters emotional resonance, prompting viewers to confront their beliefs and values, ultimately leading to profound spiritual and personal growth. As witnessed on a global scale, film has the power to evoke immediate and enduring responses to the gospel message, making it an indispensable tool for evangelism and spiritual outreach. Looking to the future, the Jesus Film Project remains committed to harnessing the transformative potential of film to share the gospel with audiences worldwide. With ongoing initiatives to develop innovative cinematic experiences and expand access to gospel-centered content through digital platforms, we are poised to continue making an indelible impact on hearts and minds around the world. For those seeking to engage with the gospel message through film, the Jesus Film Project app offers a comprehensive library of feature-length and short films in multiple languages, providing a convenient and accessible resource for spiritual exploration and growth.",
    visionText: "To reach every corner of the globe with the transformative message of Jesus Christ, especially regions with limited gospel access, by innovating and adapting new technologies to share the timeless story with a diverse and ever-changing audience.",
    involvedText: "The Jesus Film Project app offers a comprehensive library of feature-length and short films in multiple languages, providing a convenient and accessible resource for spiritual exploration and growth.",
    impactQuote: "The JESUS film, the most widely viewed and translated film in history, has reached billions worldwide, catalyzing over 600 million decisions for Christ."
  }
];

export default function StrategyDetailPage() {
  const params = useParams();
  const { slug } = params;

  const strategy = strategies.find((s) => s.slug === slug);

  if (!strategy) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center pt-24 pb-16">
          <div className="text-center text-neutral-700">
            <h1 className="text-4xl font-bold mb-4">Strategy Not Found</h1>
            <p className="text-lg">The strategy you are looking for does not exist.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-neutral-50 to-white">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-end justify-center pb-20 overflow-hidden">
          {/* Background Image and Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src={`/images/strategies/${strategy.slug}.png`}
              alt={strategy.title}
              fill
              className="object-cover"
              priority
            />
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            {/* Bottom-up gradient overlay for the text area */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />
          </div>

          {/* Content container */}
          <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto w-[90%]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {strategy.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-200 mb-8"
            >
              {strategy.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-lg"
              >
                Support This Strategy
                <Sparkles className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Overview & Key Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6 text-primary-700">
              <Target className="w-10 h-10 mr-4" />
              <h2 className="text-3xl font-bold">Strategy Overview</h2>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-6">
              {strategy.fullDescription}
            </p>
            
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Key Activities:</h3>
            <ul className="space-y-3">
              {strategy.keyPoints.map((point) => (
                <li key={point} className="flex items-start text-neutral-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sidebar - Vision & Get Involved */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6 text-accent-700">
                <Lightbulb className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-neutral-900">Our Vision for this Strategy</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {strategy.visionText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6 text-secondary-700">
                <Handshake className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-neutral-900">How You Can Get Involved</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                {strategy.involvedText}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
              >
                Contact Us to Learn More
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Join Us in This Mission
                </h2>
                <p className="text-lg md:text-xl text-primary-100 mb-12">
                  {strategy.involvedText}
                </p>
                <div className="bg-primary-500/20 rounded-2xl p-8 mb-12">
                  <blockquote className="text-xl md:text-2xl font-medium text-white italic">
                    "{strategy.impactQuote}"
                  </blockquote>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200 shadow-lg"
                  >
                    Support This Strategy
                    <Sparkles className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 