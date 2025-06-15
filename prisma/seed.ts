import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const projects = [
    {
      slug: "yotor-church-management-system",
      title: "Yotor - Modern Church Management",
      description: "A Secure and Reliable Solution to Manage Your Church",
      image: "/images/projects/yotor.png?height=200&width=300",
      category: "Technology",
      duration: "8 months",
      beneficiaries: "2,500 people",
      teamSize: "8 volunteers",
      urgency: "High Priority",
    },
    {
      slug: "my-fellow",
      title: "MY FELLOW",
      description: "An online platform designed to help you connect with Christian fellowship on campus. We understand that being a new student can be overwhelming, especially when it comes to finding a community of believers. That's why we are here to assist you every step of the way.",
      image: "/images/projects/my-fellow.png?height=200&width=300",
      category: "Education",
      duration: "12 months",
      beneficiaries: "1500 youth",
      teamSize: "8 volunteers",
      urgency: "Ongoing",
    },
    {
      slug: "melhk-poadcast",
      title: "MELHIK - PODCAST",
      description: "Melhk Podcast is a program that helps Christian youth grow holistically, spiritually, emotionally, physically, and socially, and helps us have a biblical foundation by addressing pressing issues among young people.",
      image: "/images/projects/melhk.png?height=200&width=300",
      category: "Poadcast",
      duration: "2 years",
      beneficiaries: "5,000 people",
      teamSize: "8 volunteers",
      urgency: "Ongoing",
    },
    {
      slug: "gemenaye",
      title: "GEMENAYE",
      description: "We all have different paths in life, but to a greater or lesser extent, we have all had issues that we have held within ourselves and faced; perhaps we have come out of our situation because we met someone who helped us, listened to us, and gave us true love.",
      image: "/images/projects/gemenaye.png?height=200&width=300",
      category: "Tv-program",
      duration: "10 months",
      beneficiaries: "800 families",
      teamSize: "6 volunteers",
      urgency: "Critical Need",
    },
    {
      slug: "habesha-students",
      title: "HABESHA STUDENTS",
      description: "It is a place where students can find true answers to life's questions and God's truth. It also works with a website called addishiwot.net to send a series of lessons to those who are interested. This website is also available as a mobile application.",
      image: "/images/projects/habesha-students.png?height=200&width=300",
      category: "Online-platform",
      duration: "10 months",
      beneficiaries: "1000 families",
      teamSize: "5 volunteers",
      urgency: "Ongoing",
    },
    {
      slug: "hulentenawi",
      title: "HULENTENAWI",
      description: "Everyone these days is concerned about how they can improve themselves and live with the society they live in, but with all these questions, we are confused about who to ask. But now, a mobile app that allows us to improve ourselves in these and many other ways now allows us to chat with people who are learning along with you.",
      image: "/images/projects/hulentenawi.png?height=200&width=300",
      category: "Online-platform",
      duration: "10 months",
      beneficiaries: "1000 families",
      teamSize: "5 volunteers",
      urgency: "Ongoing",
    },
    {
      slug: "jesus-film",
      title: "JESUS FILM",
      description: "We want everyone, everywhere to encounter Jesus Sharing the Story of Jesus We believe film is the most dynamic way to hear and see the greatest story ever lived — so we are driven to bring Christ-centered video to the ends of the earth. More than 490 million people have come to Jesus after watching these films!",
      image: "/images/projects/jesus-film.png?height=200&width=300",
      category: "Online-platform",
      duration: "10 months",
      beneficiaries: "1000 families",
      teamSize: "5 volunteers",
      urgency: "Ongoing",
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    })
  }

  console.log('Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 