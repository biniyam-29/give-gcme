import { notFound } from "next/navigation"
import MissionaryDetail from "./missionary-detail"

// Updated Ethiopian missionaries data - add all missing missionaries
const missionariesData = {
  "almaz-dawit-tadesse": {
    id: 1,
    name: "Almaz & Dawit Tadesse",
    image: "/placeholder.svg?height=400&width=400",
    location: "Addis Ababa, Ethiopia",
    years: "8 years",
    focus: "Church Planting",
    shortBio: "Dedicated to establishing sustainable Christian communities in rural villages around the capital.",
    fullBio: `Almaz and Dawit Tadesse have been serving in rural communities around Addis Ababa for eight transformative years. Their journey began when they felt called to reach the unreached communities in the outskirts of Ethiopia's capital city.

    Their ministry focuses on church planting, community development, and bridging the gap between urban and rural communities. They work closely with local communities, learning their customs and dialects to effectively share the Gospel in culturally relevant ways.

    Dawit, with his background in agriculture, has helped establish sustainable farming cooperatives that have improved food security for entire villages. Almaz, a former teacher, has developed literacy programs in Amharic and local languages that have empowered hundreds of adults to read and write for the first time.

    Together, they have planted twelve churches and trained over 45 local leaders who now shepherd their own communities. Their approach emphasizes indigenous leadership development, ensuring that the churches they plant become self-sustaining and culturally authentic.

    The Tadesses live simply among the people they serve, sharing in their joys and struggles during both harvest seasons and times of drought. They have learned three local dialects and have become beloved members of the communities they serve.

    Recent achievements include the completion of a community center that serves as a hub for education, healthcare, and spiritual growth. They have also launched a microfinance program that has helped over 300 families start small businesses, from coffee farming to traditional crafts.

    Their vision for the next five years includes training a new generation of indigenous missionaries who will carry the Gospel to neighboring regions across Ethiopia.`,
    email: "tadesse.family@greatcommissionethiopia.org",
    phone: "+251 11 123 4567",
    website: "tadesseministries.org",
    prayerRequests: [
      "Wisdom in training new local leaders",
      "Health and safety during rainy season",
      "Breakthrough in reaching remote villages",
      "Provision for new community center construction",
    ],
    recentUpdates: [
      {
        date: "December 2024",
        title: "New Church Plant Celebration",
        content:
          "We celebrated the official launch of our twelfth church plant in the village of Sebeta. Over 200 people attended the dedication ceremony, including local government officials who expressed gratitude for our community development work.",
      },
      {
        date: "November 2024",
        title: "Literacy Program Graduation",
        content:
          "Forty-two adults graduated from our Amharic literacy program this month. Seeing grandmothers reading the Bible for the first time in their native language brought tears to our eyes. The impact on their families has been incredible.",
      },
      {
        date: "October 2024",
        title: "Coffee Harvest Festival Outreach",
        content:
          "During the annual coffee harvest festival, we were invited to share about our faith with over 600 community members. Many expressed interest in learning more about Jesus, and we've started several new Bible study groups.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "ብር 15,000",
        description: "Living expenses and ministry operations",
      },
      {
        item: "Vehicle Maintenance",
        amount: "ብር 4,800",
        description: "Quarterly maintenance for rural travel",
      },
      {
        item: "Community Projects",
        amount: "ብር 7,200",
        description: "Support for local development initiatives",
      },
    ],
  },
  "hanna-bekele": {
    id: 2,
    name: "Dr. Hanna Bekele",
    image: "/placeholder.svg?height=400&width=400",
    location: "Mekelle, Tigray",
    years: "12 years",
    focus: "Medical Missions",
    shortBio: "Providing essential healthcare services and training local medical professionals in northern Ethiopia.",
    fullBio: `Dr. Hanna Bekele has dedicated twelve years of her life to serving the medical needs of underserved communities in Tigray region. As a board-certified family physician, she left a comfortable practice in Addis Ababa to answer God's call to serve the poor in northern Ethiopia.

    Her ministry began during a time of great need when many communities lacked access to basic healthcare. What started as a short-term medical mission became a lifelong calling when she witnessed the desperate need for sustainable medical care in rural Tigray.

    Hanna established the first mobile medical clinic in the region, which now serves over 80 remote villages. Her team of local nurses and community health workers provides preventive care, treats chronic conditions, and responds to medical emergencies in areas where the nearest hospital is days away by foot.

    Beyond direct patient care, Hanna has developed a comprehensive training program for local healthcare workers. She has trained over 150 community health promoters who now serve as the first line of medical care in their villages. Her curriculum includes basic medical skills, health education, and spiritual care.

    Her impact extends beyond physical healing. Hanna integrates faith and medicine, praying with patients and sharing hope in the midst of suffering. Many have come to faith through her compassionate care, and several churches have been planted in communities where her medical team serves.

    Hanna has also established partnerships with medical schools in Addis Ababa, creating opportunities for medical students to serve in Tigray while gaining valuable experience in rural health. This program has brought over 80 medical volunteers to serve alongside her.

    Recent initiatives include a maternal health program that has reduced infant mortality rates by 45% in participating communities, and a tuberculosis treatment program that serves over 200 patients with chronic disease.

    Her vision includes establishing a permanent medical training center in Mekelle that will prepare a new generation of Christian healthcare workers to serve throughout northern Ethiopia.`,
    email: "hanna.bekele@greatcommissionethiopia.org",
    phone: "+251 34 456 7890",
    website: "tigrayhealthmissions.org",
    prayerRequests: [
      "Funding for new medical equipment",
      "Safety during travel to remote areas",
      "Government approval for training center",
      "Healing for patients with chronic illnesses",
    ],
    recentUpdates: [
      {
        date: "December 2024",
        title: "Mobile Clinic Expansion",
        content:
          "We've added a third mobile clinic to our fleet, tripling our capacity to reach remote communities in Tigray. The new clinic is equipped with solar panels and satellite communication for emergency consultations.",
      },
      {
        date: "November 2024",
        title: "Maternal Health Milestone",
        content:
          "Our maternal health program celebrated its 150th safe delivery this year. The combination of prenatal care, skilled birth attendance, and postpartum follow-up has transformed outcomes for mothers and babies in rural Tigray.",
      },
      {
        date: "October 2024",
        title: "Medical Student Mission",
        content:
          "Twenty medical students from Addis Ababa University joined us for a month-long mission. They provided care to over 1,500 patients while learning about rural health and cross-cultural ministry.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "ብር 19,200",
        description: "Personal support and ministry operations",
      },
      {
        item: "Medical Supplies",
        amount: "ብር 9,000",
        description: "Monthly medical supplies and medications",
      },
      {
        item: "Vehicle Fuel",
        amount: "ብር 3,600",
        description: "Fuel for mobile clinic operations",
      },
    ],
  },
  "samuel-ruth-girma": {
    id: 3,
    name: "Samuel & Ruth Girma",
    image: "/placeholder.svg?height=400&width=400",
    location: "Jimma, Oromia",
    years: "6 years",
    focus: "Education & Youth",
    shortBio: "Empowering young people through education and mentorship programs in rural Oromia.",
    fullBio: `Samuel and Ruth Girma have been serving in the Oromia region for six impactful years, focusing on education and youth development in rural communities around Jimma. Their calling began when they witnessed the lack of educational opportunities for young people in remote areas of Ethiopia's largest region.

    Their ministry centers on establishing schools, training teachers, and creating youth programs that combine academic excellence with character development. They work primarily with the Oromo people, respecting their rich cultural heritage while introducing Christian values and modern educational practices.

    Samuel, with his background in education administration, has helped establish five community schools that now serve over 800 children. Ruth, a trained counselor, has developed youth mentorship programs that have guided hundreds of young people through critical life decisions and career planning.

    Together, they have trained over 60 local teachers and established a teacher training center that continues to prepare educators for rural communities. Their approach emphasizes culturally sensitive education that honors Oromo traditions while preparing students for modern opportunities.

    The Girmas have also pioneered a scholarship program that has enabled 45 promising students from rural areas to attend university in Addis Ababa and other major cities. Many of these graduates have returned to serve their home communities as teachers, healthcare workers, and community leaders.

    Recent achievements include the launch of a vocational training center that teaches practical skills like carpentry, tailoring, and computer literacy. They have also established a youth choir that has become renowned throughout the region for preserving traditional Oromo music while incorporating Christian themes.

    Their vision for the next five years includes expanding their teacher training program to reach all districts in the Jimma zone and establishing a Christian university campus that will serve the entire southwestern region of Ethiopia.`,
    email: "girma.family@greatcommissionethiopia.org",
    phone: "+251 47 111 2233",
    website: "oromiaedumissions.org",
    prayerRequests: [
      "Government approval for university campus",
      "Funding for new school buildings",
      "Safety for students traveling long distances",
      "Wisdom in curriculum development",
    ],
    recentUpdates: [
      {
        date: "December 2024",
        title: "Vocational Center Grand Opening",
        content:
          "We celebrated the opening of our new vocational training center with over 300 community members. The center will train 120 young people annually in essential skills for economic development.",
      },
      {
        date: "November 2024",
        title: "Teacher Training Graduation",
        content:
          "Twenty-five new teachers graduated from our training program this month. They will serve in remote schools across the Jimma zone, bringing quality education to previously underserved communities.",
      },
      {
        date: "October 2024",
        title: "University Scholarship Awards",
        content:
          "We awarded scholarships to 12 outstanding students from rural communities. These young leaders will study various fields and return to serve their communities with new skills and knowledge.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "ብር 18,000",
        description: "Living expenses and educational programs",
      },
      {
        item: "School Supplies",
        amount: "ብር 6,000",
        description: "Books, materials, and educational resources",
      },
      {
        item: "Scholarship Fund",
        amount: "ብር 12,000",
        description: "University scholarships for rural students",
      },
    ],
  },
  "tekle-hailu": {
    id: 4,
    name: "Tekle Hailu",
    image: "/placeholder.svg?height=400&width=400",
    location: "Bahir Dar, Amhara",
    years: "15 years",
    focus: "Bible Translation",
    shortBio: "Translating Scripture into local languages and promoting literacy in rural Amhara communities.",
    fullBio: `Tekle Hailu has dedicated fifteen years of his life to the crucial work of Bible translation and literacy promotion in the Amhara region. As a linguist and theologian, he has made Scripture accessible to communities that had never heard God's Word in their heart language.

    His ministry began when he discovered that several minority language groups in the Amhara region had no written form of their language and no access to Scripture. This discovery ignited a passion that has driven his work for over a decade and a half.

    Tekle has completed full Bible translations in three previously unwritten languages and is currently working on translations in two additional dialects. His meticulous work involves not only translation but also developing writing systems, training local translators, and establishing literacy programs.

    Beyond translation work, Tekle has established literacy centers in 25 villages, where adults learn to read and write in both their local language and Amharic. Over 2,000 adults have graduated from these programs, with many going on to become community leaders and teachers.

    His approach is deeply collaborative, working with native speakers to ensure cultural accuracy and theological precision. He has trained 40 local translation assistants who continue the work in their own communities, creating a sustainable model for ongoing translation efforts.

    Tekle has also pioneered the use of audio recordings for non-literate communities, creating Scripture recordings that have reached thousands of people who cannot read. These recordings are distributed through solar-powered audio devices that work in areas without electricity.

    Recent achievements include the completion of the New Testament in the Kemant language and the establishment of a translation training school that prepares workers for Bible translation throughout Ethiopia and neighboring countries.

    His vision includes completing Old Testament translations for all the languages he has worked with and training a new generation of Ethiopian translators who will carry this vital work forward.`,
    email: "tekle.hailu@greatcommissionethiopia.org",
    phone: "+251 58 222 3344",
    website: "amharatranslations.org",
    prayerRequests: [
      "Completion of Old Testament translations",
      "Health and stamina for long translation work",
      "Funding for audio recording equipment",
      "Government support for minority languages",
    ],
    recentUpdates: [
      {
        date: "December 2024",
        title: "Kemant New Testament Dedication",
        content:
          "We celebrated the dedication of the complete New Testament in the Kemant language. Over 500 Kemant speakers attended the ceremony, many hearing Scripture in their heart language for the first time.",
      },
      {
        date: "November 2024",
        title: "Literacy Center Expansion",
        content:
          "We opened three new literacy centers in remote villages, bringing our total to 25 centers. These centers serve as hubs for both education and spiritual growth in their communities.",
      },
      {
        date: "October 2024",
        title: "Translation Training Workshop",
        content:
          "We conducted a month-long workshop training 15 new translation assistants. These dedicated individuals will accelerate translation work in their respective language communities.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "ብር 16,500",
        description: "Living expenses and translation work",
      },
      {
        item: "Translation Equipment",
        amount: "ብር 8,000",
        description: "Computers, software, and recording equipment",
      },
      {
        item: "Literacy Materials",
        amount: "ብር 5,500",
        description: "Books, primers, and teaching materials",
      },
    ],
  },
  "meron-yohannes-desta": {
    id: 5,
    name: "Meron & Yohannes Desta",
    image: "/placeholder.svg?height=400&width=400",
    location: "Hawassa, SNNP",
    years: "4 years",
    focus: "Community Development",
    shortBio: "Supporting displaced families and community development in Southern Nations region.",
    fullBio: `Meron and Yohannes Desta have been serving in the Southern Nations, Nationalities, and Peoples' (SNNP) region for four transformative years, focusing on community development and supporting displaced families in and around Hawassa.

    Their ministry began during a time of significant internal displacement in Ethiopia, when thousands of families were forced to leave their homes due to ethnic conflicts and natural disasters. The Destas felt called to provide both immediate relief and long-term development solutions for these vulnerable communities.

    Meron, with her background in social work, has developed comprehensive support programs for displaced families, including temporary housing assistance, trauma counseling, and integration support. Yohannes, an agricultural engineer, has focused on sustainable livelihood programs that help families rebuild their economic foundation.

    Together, they have established three community centers that serve as hubs for displaced families and local communities. These centers provide emergency assistance, skills training, conflict resolution services, and spiritual support. Over 1,500 families have received direct assistance through their programs.

    The Destas have pioneered an innovative community integration model that brings together displaced families with host communities, fostering understanding and cooperation. This approach has successfully prevented conflicts and created lasting friendships across ethnic lines.

    Their agricultural programs have helped over 400 families establish new farms and gardens, providing both food security and income generation. They have also launched microfinance initiatives that have enabled 200 families to start small businesses in their new communities.

    Recent achievements include the establishment of a peace-building program that trains local leaders in conflict resolution and the launch of a children's program that provides education and psychosocial support for displaced children.

    Their vision for the next five years includes expanding their model to other regions of Ethiopia and training local organizations to replicate their community development approach.`,
    email: "desta.family@greatcommissionethiopia.org",
    phone: "+251 46 333 4455",
    website: "snnpcommunitydevelopment.org",
    prayerRequests: [
      "Peace and stability in the region",
      "Successful integration of displaced families",
      "Funding for new community centers",
      "Wisdom in conflict resolution work",
    ],
    recentUpdates: [
      {
        date: "December 2024",
        title: "Third Community Center Opening",
        content:
          "We opened our third community center in Shashemene, extending our reach to serve displaced families throughout the region. The center will provide services to an estimated 800 additional families.",
      },
      {
        date: "November 2024",
        title: "Peace-building Workshop Success",
        content:
          "Our peace-building workshop brought together 60 community leaders from different ethnic groups. The workshop resulted in three inter-community cooperation agreements and ongoing dialogue initiatives.",
      },
      {
        date: "October 2024",
        title: "Microfinance Program Milestone",
        content:
          "Our microfinance program reached 200 active borrowers this month, with a 98% repayment rate. These small loans have enabled families to start businesses ranging from coffee shops to tailoring services.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "ብር 17,000",
        description: "Living expenses and program operations",
      },
      {
        item: "Emergency Relief Fund",
        amount: "ብር 10,000",
        description: "Immediate assistance for newly displaced families",
      },
      {
        item: "Skills Training Materials",
        amount: "ብር 6,500",
        description: "Equipment and materials for vocational training",
      },
    ],
  },
  "selamawit-wolde": {
    id: 6,
    name: "Selamawit Wolde",
    image: "/placeholder.svg?height=400&width=400",
    location: "Dire Dawa, Ethiopia",
    years: "9 years",
    focus: "Women's Ministry",
    shortBio: "Helping women achieve economic independence through skills training and microfinance programs.",
    fullBio: `Selamawit Wolde has been empowering women in eastern Ethiopia for nine impactful years, focusing on economic independence, skills training, and spiritual development in and around Dire Dawa.

    Her ministry began when she recognized the significant challenges facing women in eastern Ethiopia, including limited access to education, economic opportunities, and decision-making power within their communities. This realization sparked a passion for women's empowerment that has driven her work ever since.

    Selamawit has established five women's centers that serve as hubs for skills training, microfinance services, and spiritual growth. These centers have trained over 1,200 women in various skills including tailoring, food processing, handicrafts, and small business management.

    Her microfinance program has provided small loans to over 800 women, enabling them to start businesses ranging from traditional coffee ceremonies to modern beauty salons. The program maintains an impressive 97% repayment rate and has helped increase household incomes by an average of 150%.

    Beyond economic empowerment, Selamawit has developed literacy programs specifically designed for women, recognizing that many had been denied educational opportunities in their youth. Over 600 women have learned to read and write through these programs, with many going on to help their own children with schoolwork.

    Her approach is holistic, addressing not only economic needs but also spiritual and emotional well-being. She has established support groups for women facing domestic violence, single mothers, and widows, providing both practical assistance and spiritual counseling.

    Selamawit has also pioneered a leadership development program that has trained 150 women to become community leaders, advocates, and mentors for other women. Many of these graduates now lead their own women's groups and have become influential voices in their communities.

    Recent achievements include the launch of a women's cooperative that exports traditional Ethiopian crafts to international markets and the establishment of a childcare center that enables mothers to participate in training programs.

    Her vision includes expanding her model to reach rural areas throughout eastern Ethiopia and establishing a women's leadership institute that will train advocates for women's rights across the Horn of Africa.`,
    email: "selamawit.wolde@greatcommissionethiopia.org",
    phone: "+251 25 444 5566",
    website: "easternethiopiawomen.org",
    prayerRequests: [
      "Breakthrough in reaching rural women",
      "Expansion of microfinance services",
      "Protection for women facing violence",
      "Government support for women's programs",
    ],
    recentUpdates: [
      {
        date: "December 2024",
        title: "International Craft Export Success",
        content:
          "Our women's cooperative successfully exported traditional crafts worth $15,000 to European markets. This achievement has provided significant income for 40 women artisans and opened new opportunities for expansion.",
      },
      {
        date: "November 2024",
        title: "Childcare Center Grand Opening",
        content:
          "We opened our new childcare center, enabling 60 mothers to participate in our training programs while their children receive quality care and early childhood education.",
      },
      {
        date: "October 2024",
        title: "Women's Leadership Graduation",
        content:
          "Twenty-five women graduated from our leadership development program this month. These new leaders will establish women's groups in their own communities, multiplying our impact across the region.",
      },
    ],
    supportNeeds: [
      {
        item: "Monthly Support",
        amount: "ብር 14,500",
        description: "Living expenses and program coordination",
      },
      {
        item: "Microfinance Capital",
        amount: "ብር 20,000",
        description: "Loan capital for women's businesses",
      },
      {
        item: "Training Equipment",
        amount: "ብር 7,500",
        description: "Sewing machines, tools, and materials",
      },
    ],
  },
}

interface MissionaryDetailPageProps {
  params: {
    slug: string
  }
}

export default async function MissionaryDetailPage({ params }: MissionaryDetailPageProps) {
  const missionary = missionariesData[params.slug as keyof typeof missionariesData]

  if (!missionary) {
    notFound()
  }

  return <MissionaryDetail missionary={missionary} />
}
