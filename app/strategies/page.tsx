"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, Users, Globe, Church, BookOpen, Video, Heart, Clipboard, Map, Film } from "lucide-react";
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

export const strategies: Strategy[] = [
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
    fullDescription: `The Student Led Movement strategy focuses on empowering young leaders within educational institutions to spread the Gospel and build vibrant Christian communities. This involves identifying potential student leaders, providing them with comprehensive theological and practical training, and equipping them to initiate and sustain ministry efforts among their peers. We believe that by nurturing leadership from within, we can create a sustainable and multiplying impact that extends far beyond the campus walls. Our programs emphasize spiritual formation, leadership skills, and practical ministry tools, ensuring that students are well-prepared to face the unique challenges and opportunities of campus ministry.`,
    visionText: `Our vision is to see every campus transformed by the power of Christ through the bold and passionate leadership of students. We aim to cultivate a generation of young believers who are not only deeply rooted in their faith but are also equipped to share it authentically and effectively, sparking revival and discipleship movements across the globe.`,
    involvedText: `You can get involved by mentoring a student leader, supporting student outreach events, or contributing to our training programs. Your involvement helps us provide the resources and guidance necessary for these vital movements to flourish.`,    impactQuote: "'The youth are not just the future of the church, but the church of today.'"
  },
  {
    title: "Digital Strategy",
    description: "Utilizing digital platforms and innovative technologies to expand the reach of the Gospel globally.",
    icon: <Globe className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Online evangelism campaigns",
      "Digital content creation and distribution",
      "Social media engagement",
      "Virtual discipleship communities"
    ],
    slug: "digital-strategy",
    fullDescription: `The Digital Strategy aims to leverage the vast potential of online platforms to reach individuals who may not be accessible through traditional means. This involves developing compelling digital content, launching targeted online evangelism campaigns, and fostering virtual communities for discipleship and fellowship. We utilize cutting-edge technology and data analytics to optimize our reach and engagement, ensuring that the message of Christ resonates with diverse online audiences. Our efforts include creating interactive websites, mobile applications, and engaging multimedia resources that facilitate spiritual growth and connection.`,    visionText: `We envision a world where geographical barriers no longer hinder the spread of the Gospel. Through our digital initiatives, we strive to make the transformative message of Christ accessible to every corner of the earth, creating a global network of believers united by faith and technology.`,    involvedText: `Join our team of digital missionaries, help fund our online campaigns, or share our digital content to amplify our reach. Your support in the digital realm can open new doors for evangelism and discipleship.`,    impactQuote: "'Spreading the Gospel at the speed of light.'"
  },
  {
    title: "Leader Strategy",
    description: "Identifying, developing, and deploying visionary leaders to multiply ministries and movements.",
    icon: <BookOpen className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Leadership identification and recruitment",
      "Mentorship and coaching programs",
      "Advanced leadership training",
      "Succession planning and deployment"
    ],
    slug: "leader-strategy",
    fullDescription: `The Leader Strategy is foundational to all our mission efforts, focusing on the systematic identification, development, and deployment of visionary leaders. We invest heavily in mentorship and coaching programs, providing personalized guidance and support to emerging and existing leaders. Our advanced training modules cover areas such as strategic planning, team management, conflict resolution, and spiritual leadership, ensuring that our leaders are well-equipped to guide ministries and movements effectively. We also emphasize succession planning to ensure long-term sustainability and growth.`,    visionText: `Our vision is to raise up a generation of servant leaders who are deeply committed to Christ and strategically positioned to catalyze spiritual transformation in their communities and beyond. We believe that strong leadership is key to multiplying disciples and movements.`,    involvedText: `Contribute to our leadership development funds, become a mentor, or participate in our training programs. Your investment in leaders directly impacts the growth and effectiveness of our entire mission.`,    impactQuote: "'Invest in a leader, impact a generation.'"
  },
  {
    title: "GLOBAL CHURCH MOVEMENT",
    description: "Fostering partnerships with local churches to equip and mobilize believers for global mission.",
    icon: <Church className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Church planting initiatives",
      "Partnerships with local congregations",
      "Mobilizing church members for missions",
      "Resource sharing and support"
    ],
    slug: "global-church-movement-strategy",
    fullDescription: `The Global Church Movement strategy is dedicated to strengthening and expanding the impact of local churches worldwide. We work in partnership with congregations to equip their members for active participation in global mission, fostering a sense of shared responsibility for the Great Commission. This involves providing training on evangelism and discipleship, facilitating cross-cultural exchanges, and supporting church planting initiatives in unreached areas. We believe that the local church is God's primary vehicle for global transformation, and we strive to empower it to fulfill its divine mandate.`,    visionText: `We envision a vibrant global church, actively engaged in fulfilling the Great Commission, where every local congregation is a hub for mission and discipleship, radiating Christ's love and truth to their communities and beyond.`,    involvedText: `Partner with a local church, support our church planting initiatives, or participate in mission mobilization efforts. Your support helps us empower local churches to reach their full missionary potential.`,    impactQuote: "'Together, the global church can reach the unreached.'"
  },
  {
    title: "NATIONAL OPERATIONS",
    description: "Ensuring efficient and effective operational support for all mission activities and personnel.",
    icon: <Clipboard className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Financial management and accountability",
      "Logistics and resource allocation",
      "Administrative support",
      "Legal and compliance adherence"
    ],
    slug: "national-operations-strategy",
    fullDescription: `The Operations strategy underpins all our mission activities by ensuring efficient and effective administrative, financial, and logistical support. This involves meticulous financial management and accountability to our donors, strategic resource allocation, and robust administrative support for all our personnel. We adhere strictly to legal and compliance requirements, ensuring transparency and integrity in all our operations. Our goal is to provide a seamless and secure framework that enables our missionaries and project teams to focus fully on their core ministry without operational burdens.`,    visionText: `Our vision is to provide a robust and transparent operational backbone that maximizes the impact of every resource, enabling our mission to flourish with integrity and efficiency, ultimately advancing the Kingdom of God.`,    involvedText: `Support our operational needs, volunteer your administrative skills, or contribute to our infrastructure development. Efficient operations mean more resources directly impacting lives.`,    impactQuote: "'Behind every successful mission is a strong operational foundation.'"
  },
  {
    title: "PRAYER MOVEMENT",
    description: "Cultivating a vibrant culture of prayer and intercession as the foundation for all mission endeavors.",
    icon: <Heart className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Organizing prayer gatherings and vigils",
      "Developing prayer resources and guides",
      "Training intercessors",
      "Promoting consistent personal prayer lives"
    ],
    slug: "prayer-movement-strategy",
    fullDescription: `The Prayer Movement strategy emphasizes that prayer and intercession are not merely supportive activities but the very foundation of all successful mission endeavors. We actively cultivate a vibrant culture of prayer, organizing regular prayer gatherings, vigils, and prayer walks. We develop comprehensive prayer resources and guides to equip individuals and groups for effective intercession. Training intercessors is a key component, building a network of dedicated prayer warriors who undergird every aspect of our work. We also encourage and promote consistent personal prayer lives among all our staff and partners.`,    visionText: `We envision a global prayer movement that unleashes God's power, breaks spiritual strongholds, and paves the way for unprecedented spiritual awakening and revival across nations, fueling every aspect of our mission.`,    involvedText: `Join our prayer networks, commit to praying for specific strategies, or participate in our organized prayer events. Your prayers are a powerful force for transformation.`,    impactQuote: "'Prayer is the fuel for every mission.'"
  },
  {
    title: "HR AND LEADERSHIP DEVELOPMENT",
    description: "Investing in the holistic development of staff and leaders, fostering a thriving and sustainable ministry.",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Talent acquisition and retention",
      "Professional development programs",
      "Performance management and feedback",
      "Well-being and pastoral care"
    ],
    slug: "hr-and-leadership-development-strategy",
    fullDescription: `The HR and Leadership Development strategy is focused on nurturing our most valuable asset: our people. We are committed to investing in the holistic development of our staff and leaders, recognizing that their well-being and growth are crucial for a thriving and sustainable ministry. This includes robust talent acquisition and retention programs, comprehensive professional development opportunities, and regular performance management and feedback processes. We also prioritize well-being and pastoral care, ensuring that our team members are supported spiritually, emotionally, and physically.`,    visionText: `Our vision is to cultivate a resilient and highly effective team of passionate individuals, equipped with the skills and spiritual fortitude to lead and serve with excellence, ensuring the long-term impact of our mission.`,    involvedText: `Support our HR and leadership development programs, volunteer your expertise in training, or contribute to the well-being initiatives for our staff. Investing in our people means investing in the future of our mission.`,    impactQuote: "'Great missions are built on great teams.'"
  },
  {
    title: "Geographic Expansion",
    description: "Strategically extending the reach of the Gospel to new regions and unreached people groups.",
    icon: <Map className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Market research and demographic analysis",
      "Pioneer ministry initiatives",
      "Cross-cultural training",
      "Establishing new mission bases"
    ],
    slug: "geographic-expansion-strategy",
    fullDescription: `The Geographic Expansion strategy is about strategically extending the reach of the Gospel to new regions and unreached people groups. This involves meticulous market research and demographic analysis to identify areas of greatest spiritual need. We launch pioneer ministry initiatives, sending dedicated teams to establish new mission bases and build relationships within these communities. Cross-cultural training is a critical component, preparing our missionaries to effectively communicate the Gospel in diverse linguistic and cultural contexts. Our ultimate goal is to ensure that the message of Christ is heard and embraced in every corner of the world.`,    visionText: `We envision a world where every nation, tribe, and tongue has access to the transformative power of the Gospel. Our relentless pursuit of geographic expansion is driven by the desire to see Christ's light penetrate the darkest corners of the earth.`,    involvedText: `Contribute to our pioneer ministry funds, join a cross-cultural training program, or support the establishment of new mission bases. Your support helps us break new ground for the Gospel.`,    impactQuote: "'No corner of the earth untouched by the Gospel.'"
  },
  {
    title: "Jesus Film",
    description: "Sharing the story of Jesus through film, making the Gospel accessible to diverse audiences worldwide.",
    icon: <Film className="w-8 h-8 text-primary-600" />,
    keyPoints: [
      "Film screenings and outreach events",
      "Translation and dubbing into local languages",
      "Distribution through various platforms",
      "Follow-up and discipleship programs"
    ],
    slug: "jesus-film-strategy",
    fullDescription: `The Jesus Film strategy focuses on making the story of Jesus accessible to diverse audiences worldwide through the power of cinematic storytelling. We organize film screenings in communities, churches, and online platforms, often coupled with outreach events that allow for personal engagement and follow-up. A crucial aspect is the translation and dubbing of the Jesus Film into local languages, ensuring that the message resonates deeply with cultural nuances. We utilize various distribution platforms, including physical media, digital streaming, and mobile apps, to maximize reach. Post-screening, we implement comprehensive follow-up and discipleship programs to nurture new believers.`,    visionText: `Our vision is to see millions encounter Jesus and experience His transformative power through the engaging and accessible medium of film. We believe that the visual storytelling of the Jesus Film can transcend barriers and ignite faith across cultures.`,    involvedText: `Support the translation and distribution of the Jesus Film, sponsor a film screening event, or join a follow-up team. Your contribution helps us share the greatest story ever told with those who need it most.`,    impactQuote: "'Sharing Jesus, one film at a time.'"
  }
];

export default function StrategiesPage() {
  return (
    <>
      <Header currentPage="strategies" />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-end justify-center pb-20 overflow-hidden">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/strategies/hero.png"
            alt="Mission strategies"
            fill
            className="object-cover"
            priority
          />
          {/* Animated Background Elements - Keep them here and ensure they are z-0 */}
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
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Mission Strategies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-200 mb-8"
          >
            Discover how we're reaching communities and transforming lives through innovative mission approaches
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#strategies"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
            >
              Explore Strategies
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section id="strategies" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={`/strategies/${strategy.slug}`} className="block p-6">
                <div className="mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{strategy.title}</h3>
                <p className="text-neutral-600 mb-4">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.keyPoints.map((point) => (
                    <li key={point} className="flex items-center text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Your contribution makes a significant impact on this vital mission strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              Support Our Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 