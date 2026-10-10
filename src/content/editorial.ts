import newsItems from "@/content/news-items.json";
import { developmentRobots } from "@/content/corporate";

export { developmentRobots };

export const applyUrl =
  "https://sterlingone.darwinbox.in/ms/candidatev2/a688b512869b6c/careers/home";

export const careersPage = {
  title: "Careers – Sterling & Wilson Data Center",
  description: "Join a team that’s building data centers across the world.",
  banner: {
    title: "Careers",
    image: "/assets/images/Careers-Banner-36060a.jpg",
  },
  heading: "Life at Sterling & Wilson Data Center",
  subheading: "Join a team that’s building data centers across the world.",
  intro:
    "Be a part of a legacy engineering firm with a proven track record and strong leadership. With 15+ specialised functions, we offer diverse roles, defined career paths, and the opportunity to build deep expertise, take ownership, and accelerate your growth.",
  pillars: [
    {
      number: "1",
      title: "Global Presence",
      body: "Collaborate with leading hyperscalers, colocation providers, and experts from around the world. Work with a multicultural team on complex, cutting-edge infrastructure, fueling both personal and professional development.",
    },
    {
      number: "2",
      title: "End-to-End Project Experience",
      body: "From design and engineering to execution and commissioning, gain hands-on experience across the entire project lifecycle. At SWDC, you’ll evolve across functions, roles, and phases of mission-critical infrastructure delivery.",
    },
    {
      number: "3",
      title: "Celebrating Excellence",
      body: "We believe in recognizing those who drive our success. Through initiatives like our Hall of Fame, peer-to-peer appreciation programs, and spot awards, your contributions will always be seen and celebrated.",
    },
    {
      number: "4",
      title: "Culture That Empowers",
      body: "At SWDC, transparency, collaboration, and accountability form the foundation of our work culture. We foster an environment where innovation thrives, ideas are valued, and every team member is encouraged to make an impact.",
    },
  ],
  stats: [
    { value: "65", suffix: "+", label: "design and engineering team" },
    { value: "500", suffix: "+", label: "full-time professionals" },
    { value: "27", suffix: "", label: "data centers delivered" },
    { value: "98", suffix: "+", label: "years of engineering excellence" },
  ],
  opportunities: {
    title: "Current Opportunities",
    body: "Discover opportunities to grow with Sterling & Wilson Data Center. Join us in building the future of digital infrastructure.",
    cta: "Apply Now",
  },
};

type PrivacyBlock =
  | { kind: "paragraphs"; text: readonly string[] }
  | { kind: "list"; intro: string; items: readonly string[] }
  | { kind: "email"; text: string; email: string };

export const privacyPage = {
  title: "Privacy Policy – Sterling & Wilson Data Center",
  description: "Sterling & Wilson Data Center Pvt. Ltd. Privacy Policy",
  banner: {
    title: "Privacy Policy",
    image: "/assets/images/Privacy-Policy_V1-D-c677cf.jpg",
    mobileImage: "/assets/images/Privacy-Policy_V1-M-bfe1f1.jpg",
  },
  heading: "Privacy Policy",
  sections: [
    {
      title: "Sterling & Wilson Data Center Pvt. Ltd. Privacy Policy",
      blocks: [
        {
          kind: "paragraphs",
          text: [
            "This privacy policy (“policy”) will help you understand how Sterling & Wilson Data Center (SWDC) uses and protects the data you provide to us when you visit and use Mobile Application Provider for the purpose of Customer Service Management.",
            "We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.",
          ],
        },
      ],
    },
    {
      title: "What User Data We Collect",
      blocks: [
        {
          kind: "list",
          intro: "When you visit the app, we may collect the following data:",
          items: ["Your IP address", "Your contact information and email address"],
        },
      ],
    },
    {
      title: "Why We Collect Your Data",
      blocks: [
        {
          kind: "list",
          intro: "We are collecting your data for several reasons:",
          items: [
            "Authenticate you as a genuine and authorized user of the app",
            "Track usage of the application for process and feature improvement",
          ],
        },
      ],
    },
    {
      title: "Safeguarding and Securing the Data",
      blocks: [
        {
          kind: "paragraphs",
          text: [
            "SWDC is committed to securing your data and keeping it confidential. It has taken every necessary measure to safeguard against data theft and unauthorized access and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.",
          ],
        },
      ],
    },
    {
      title: "Links to Other Websites",
      blocks: [
        {
          kind: "paragraphs",
          text: ["Our website does not contain links that lead to other websites."],
        },
      ],
    },
    {
      title: "Restricting the Collection of your Personal Data",
      blocks: [
        {
          kind: "paragraphs",
          text: [
            "At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:",
            "When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don’t want to disclose your personal information.",
            "If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.",
            "SWDC will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.",
          ],
        },
      ],
    },
    {
      title: "Acceptance of Privacy Policy",
      blocks: [
        {
          kind: "paragraphs",
          text: [
            "By using our Services, you signify your acceptance of this Privacy Policy and any third-party terms or policies mentioned in this Privacy Policy. Please do not install or use My App if you do not agree to this fact. Your continued use of Services following the posting of changes to this Privacy Policy will signify your acceptance of those changes.",
          ],
        },
      ],
    },
    {
      title: "Third Parties and business partners",
      blocks: [
        {
          kind: "paragraphs",
          text: [
            "Please note that your access to and use of the third-party services may be subject to certain third-party terms and conditions, and we are not liable for any such third parties’ use of your personal data.",
          ],
        },
      ],
    },
    {
      title: "Accountability of data privacy and grievance redressal",
      blocks: [
        {
          kind: "email",
          text: "Sterling & Wilson Data Center has appointed a person to take accountability of data privacy and for grievance redressal for the same. This person can be reached through this e-mail ID",
          email: "hrsupport@sterlingwilson.com",
        },
      ],
    },
  ] satisfies readonly { title: string; blocks: readonly PrivacyBlock[] }[],
};

export type NewsItem = {
  year: string;
  date: string;
  title: string;
  href: string;
};

const newsRecords = newsItems as NewsItem[];

export const newsPage = {
  title: "News & Press Release – Sterling & Wilson Data Center",
  description: "In the News and Press Release.",
  banner: {
    title: "News & Press Release",
    image: "/assets/images/MediaBanner-69876a.jpg",
  },
  sections: [
    {
      id: "in-the-news",
      title: "In the News",
      items: newsRecords.slice(0, 28),
    },
    {
      id: "press",
      title: "Press Release",
      items: newsRecords.slice(28),
    },
  ],
};

export function yearsFor(items: readonly NewsItem[]) {
  return [...new Set(items.map((item) => item.year))].sort((left, right) => Number(right) - Number(left));
}

const eventPhoto = (name: string) => `/assets/images/events/${name}`;

export const eventsPage = {
  title: "Events – Sterling & Wilson Data Center",
  description: "Events.",
  banner: {
    title: "Events",
    image: "/assets/images/Media-Events_V3-D-f0ec1a.png",
    mobileImage: "/assets/images/Media-Events_V3-M-5d48e7.png",
  },
  items: [
    {
      title: "Prasanna Sarambale spearheads AI and Digital Infrastructure discussion at Singularity Summit 2026",
      date: "April 2026",
      place: "Mumbai, India",
      paragraphs: [
        "Prasanna Sarambale, CEO – Sterling & Wilson Data Center recently participated in the Singularity Summit, engaging with global industry leaders and technology experts on the future of AI-driven infrastructure, digital transformation, and next-generation data centres.",
        "The summit provided valuable insights into emerging trends shaping hyperscale, sustainable, and AI-ready digital infrastructure ecosystems worldwide.",
      ],
      images: [eventPhoto("2.jpg"), eventPhoto("Panel-Discussion-scaled.jpg")],
    },
    {
      title: "Capacity Middle East 2026",
      date: "February 2026",
      place: "Dubai, UAE",
      paragraphs: [
        "Sterling & Wilson Data Center participated in Capacity Middle East 2026, marking three days of industry engagement in Dubai.",
        "The team connected with key stakeholders, explored collaboration opportunities, and exchanged insights on evolving telecom and digital infrastructure trends in the region.",
      ],
      images: [eventPhoto("feb.png")],
    },
    {
      title: "Data Center Nation Riyadh 2026",
      date: "January 2026",
      place: "Riyadh, Saudi Arabia",
      paragraphs: [
        "Sterling & Wilson Data Center participated in a panel discussion on “Future-Proof Delivery: The New Execution Model for High-Speed, High-Quality Data Centre Builds.” and showcased its solutions at the event.",
        "The event continues to be a key meeting point for hyperscalers, investors, and enterprise data centre end-users in Saudi Arabia, enabling meaningful conversations around the future of digital infrastructure.",
      ],
      images: [eventPhoto("jan.png")],
    },
    {
      title: "AfricaCom 2025",
      date: "November 2025",
      place: "Cape Town, South Africa",
      paragraphs: [
        "Sterling & Wilson Data Center participated in AfricaCom 2025 – Africa Tech Festival, held at Cape Town International Convention Centre. The event enabled meaningful engagement with industry leaders driving Africa’s digital transformation.",
        "Discussions focused on turnkey, sustainable, and secure data centre solutions aligned with the continent’s evolving infrastructure needs.",
      ],
      images: [eventPhoto("novem.png")],
    },
    {
      title: "Data Centre World Asia 2025",
      date: "October 2025",
      place: "Marina Bay Sands, Singapore",
      paragraphs: [
        "Sterling & Wilson Data Center exhibited at Data Centre World Asia 2025, held at Marina Bay Sands. As the Media & Speaker Lounge Sponsor, the team supported a space for meaningful engagement with global industry leaders. The event enabled key conversations, knowledge exchange, and showcased our focus on sustainable and scalable data centre solutions for the region.",
      ],
      images: [eventPhoto("oct-1.png")],
    },
    {
      title: "SWDC’s Resurgence Leadership Conclave 2025",
      date: "27 Feb 2025",
      place: "Lotus Ballroom, Jio World Convention Center, Mumbai",
      paragraphs: [
        "SWDC launched the Resurgence Leadership Conclave 2025 – an initiative focused on resilience, innovation, and leadership in the data center industry. The event brought together industry leaders and stakeholders for insightful discussions and strategic collaboration, setting the tone for a transformative future.",
      ],
      images: ["34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44"].map((name) => eventPhoto(`${name}.png`)),
    },
    {
      title: "Capacity Middle East 2025",
      date: "4 to 6 Feb 2025",
      place: "Grand HyattDubai – Conference & Exhibition Center, UAE",
      paragraphs: [
        "Sterling & Wilson Data Center participated in Capacity Middle East 2025 in Dubai, marking three impactful days of industry engagement. The team connected with key stakeholders, explored collaboration opportunities, and discussed emerging telecom and data infrastructure trends.",
      ],
      images: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27"].map((name) => eventPhoto(`${name}.png`)),
    },
    {
      title: "Data Center Nation Riyadh 2025",
      date: "21 Jan 2025",
      place: "Mandarin Oriental Al Faisaliah, Saudi Arabia",
      paragraphs: [
        "SWDC joined as Platinum Sponsor and led a panel on “Bringing Predictability to Data Center Project Development,” focusing on AI, sustainability, and streamlined contracting. We created a positive impact at this event, which is one of the most influential meeting points for hyperscalers, investors and enterprise data center end-users in Saudi Arabia.",
      ],
      images: ["28", "29", "30", "31", "32", "33"].map((name) => eventPhoto(`${name}.png`)),
    },
    {
      title: "AIDC Expo 2024",
      date: "17 to 20 Nov 2024",
      place: "Egypt International Exhibition Center, New Cairo",
      paragraphs: [
        "We participated in the AI, Data Centers and Cloud Conference and Exhibition (AIDC) 2024, a premier event focusing on AI, Data Centers and Cloud. Ranjit Gajare, Head Data Center, International BD & Sales participated in a panel discussion on “The Future of Modern & Mega Data Centres” alongside other leading personalities from the DC industry.",
      ],
      images: ["5", "6", "7", "8", "9", "10", "11"].map((name) => eventPhoto(`${name}.png`)),
    },
    {
      title: "Data Centre World Asia 2024",
      date: "9 to 10 Oct 2024",
      place: "Marina Bay Sands Expo & Convention Centre, Singapore",
      paragraphs: [
        "Sterling & Wilson Data Centeralong with its sister company,Sterling Generators jointly participated as a Gold Sponsorin South East Asia’s largest Data Centre exhibition – Data Centre World Asia. It was agreat opportunity for both the teams to network and meet key clients and partners. Mr. Prasanna Sarambale, CEO, SWDC delivered a keynote presentation at the event and delved upon the important topic of “Deploying Data Centres in Emerging Markets”.",
      ],
      images: ["12", "13", "14", "15", "16", "17"].map((name) => eventPhoto(`${name}.png`)),
    },
    {
      title: "International Telecoms Week (ITW) 2024",
      date: "10 to 12 Sep 2024",
      place: "Radisson Blu Hotel, Nairobi, Kenya",
      paragraphs: [
        "SWDC team engaged with customers and industry leaders at the International Telecoms Week (ITW). The event provided a platform for meaningful connections and insights with the key stakeholders, showcasing the team’s commitment to innovation and excellence in meeting the evolving demands of the data infrastructure industry.",
      ],
      images: ["1", "2", "3", "4"].map((name) => eventPhoto(`${name}.png`)),
    },
  ],
};

export const articleSlug = "the-ai-infrastructure-race-why-future-data-centres-must-be-ai-ready";

export const articlePage = {
  title: "The AI Infrastructure Race: Why Future Data Centres Must Be AI-Ready – Sterling & Wilson Data Center",
  description:
    "Over the past two years, I have seen the conversation with customers change fundamentally.",
  heading: "The AI Infrastructure Race: Why Future Data Centres Must Be AI-Ready",
  image: {
    src: "/assets/images/PS-blog-1-b88fab.jpg",
    alt: "Prasanna Sarambale, CEO, Sterling & Wilson Data Center, with the article title The AI Infrastructure Race: Why Future Data Centres Must Be AI-Ready",
  },
  paragraphs: [
    "Over the past two years, I have seen the conversation with customers change fundamentally. The question used to be whether AI would become relevant to their operations. That question has been answered. The conversation now is about whether their infrastructure is ready to support it.",
    "But behind every AI application is something less visible and just as important: infrastructure.",
    "That is where data centres come in.",
    "Today, data centres are not just storage and compute facilities. They are becoming the backbone of a much larger digital shift. As AI adoption grows, the expectations from infrastructure are changing with it. We now need facilities that can support higher densities, faster growth, and more demanding workloads without losing reliability or efficiency. BCG’s research on the sector reflects this shift clearly, with generative AI and hyperscale demand emerging as major drivers of growth.",
    "In practical terms, AI-readiness is not one single feature. It is a way of thinking.",
    "It starts with design. It continues through planning, execution, and operations. It means asking the right questions early: how much density will the facility need to support, how will cooling perform at scale, how flexible is the architecture, and how ready is the campus for change over time?",
    "These are not theoretical questions anymore. They are part of the real conversation between customers and infrastructure partners.",
    "AI workloads are also changing the technical requirements of modern data centres. Unlike traditional enterprise applications, AI training and inference environments require significantly higher computing densities powered by advanced GPU clusters.",
    "This increases both power consumption and heat generation, placing greater demands on electrical infrastructure, cooling systems, and overall facility design.",
    "This is not a future problem. We are engineering for it now. High-density rack configurations, liquid cooling systems, and advanced thermal management are no longer niche considerations — they are becoming baseline requirements for any facility that wants to remain relevant. At Sterling and Wilson Data Center, we have been investing in exactly these capabilities, because we believe the window to build the right foundation is now, not after your customers have already outgrown you.",
    "What is also becoming clear is that AI is pushing the industry to think more carefully about efficiency. The more powerful digital workloads become, the more important it is to build responsibly. That means smarter energy use, better cooling strategies, and infrastructure that is designed to perform over the long term. The energy implications of AI and data centre growth are now being discussed at the highest levels across the industry.",
    "For the industry, this is not a concern. It is an opportunity. AI-ready facilities will need to balance performance, scalability, efficiency, and sustainability while remaining flexible enough to support future technological advancements. The companies that solve this challenge effectively will help define the next generation of digital infrastructure.",
    "Every industry transformation creates a new standard. AI is creating that standard for digital infrastructure now. The future data centre will need to be more adaptable, more efficient, and more future-ready than what we have known before.",
    "It will also need to be delivered with confidence. Customers are looking for partners who understand that infrastructure is not just about capacity. It is about readiness, resilience, and the ability to support what comes next.",
    "I have spent considerable time thinking about what this moment means for an infrastructure company like ours. AI is not a passing trend that we accommodate at the edges. It is reshaping the core of what we build and how we build it. The companies that take this seriously early — that redesign their approach rather than retrofit it — will be the ones that earn long-term customer trust.",
    "That is the real race.",
    "By Prasanna Sarambale, CEO, Sterling and Wilson Data Center",
  ],
};

export const blogsPage = {
  title: "Blogs – Sterling & Wilson Data Center",
  description: articlePage.heading,
  banner: {
    title: "Blog",
    image: "/assets/images/Blog-Banner-1-1-65be55.jpg",
    mobileImage: "/assets/images/mobile-blog-banner-b7fb6c.jpg",
  },
  items: [
    {
      title: articlePage.heading,
      href: `/${articleSlug}/`,
      image: articlePage.image,
    },
  ],
};
