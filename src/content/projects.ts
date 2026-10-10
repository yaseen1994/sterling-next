export type ProjectSection = {
  heading: string;
  items: readonly string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectRecord = {
  slug: string;
  title: string;
  place: string;
  cardImage: string;
  gallery: readonly ProjectImage[];
  sections: readonly ProjectSection[];
};

export const projectsListing = {
  title: "Projects – Sterling & Wilson Data Center",
  description: "Projects from Sterling & Wilson Data Center.",
  heading: "Projects",
  video: "/assets/images/DC-3star-3091f9.mp4",
  moreLabel: "Know more »",
} as const;

export const projectEnquiry = {
  id: "project-enquiry-title",
  title: "Have a Project in Mind?",
  subtitle: "Connect with Our Experts Today.",
  label: "Enquire Now",
  href: "/contact/",
} as const;

export const projectStamp = "/assets/images/Projects-Page-Stamp-in-empty-space-97dd40.png";
export const projectBullet = "/assets/images/Bullet-Points-749373.jpg";

export function projectHref(slug: string) {
  return `/portfolios/${slug}/`;
}

export const projects: readonly ProjectRecord[] = [
  {
    "slug": "global-colocation-data-center-pune-india-2021",
    "title": "Global Colocation Data Center",
    "place": "Pune, India, 2021",
    "cardImage": "/assets/images/1-2-8119d7.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-7c76ee.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Design and Build",
          "Civil Interiors, Electrical, HVAC, IBMS and Fire Suppression"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Civil & MEP fit-outs in G + 4 building",
          "Designed for 1000+ racks",
          "IT Load: 11.5 MW"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "bhamashah-state-data-center-jaipur-india",
    "title": "Bhamashah State Data Center",
    "place": "Jaipur, India, 2019",
    "cardImage": "/assets/images/2-1-effd7f.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image_1-5a6ff9.png",
        "alt": "1-Main Image_1"
      },
      {
        "src": "/assets/images/1-Main-Image_2-1172f0.png",
        "alt": "1-Main Image_2"
      },
      {
        "src": "/assets/images/3-d16af3.png",
        "alt": "3"
      },
      {
        "src": "/assets/images/5-e4203b.png",
        "alt": "5"
      },
      {
        "src": "/assets/images/6-de40e4.png",
        "alt": "6"
      },
      {
        "src": "/assets/images/7-984d7e.png",
        "alt": "7"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project – Design, Build and O&M",
          "CSA, Electrical, HVAC, IBMS, Fire Suppression, Plumbing and Network Cabling"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Data Center building of 2B + G + 6 floors",
          "Technical hub building of G + 8 floors",
          "Designed for 600 racks",
          "IT Load: 4 MW",
          "Total built up area ~ 3,64,000 sq ft"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Uptime Tier IV TCDD & TCCF certified",
          "Four Star GRIHA Certified (Green Rating for Integrated Habitat Assessment)"
        ]
      },
      {
        "heading": "Other Information",
        "items": [
          "Received Data Center Dynamics APAC 2019 Award"
        ]
      }
    ]
  },
  {
    "slug": "raxio-dr-congo",
    "title": "Raxio Data Center",
    "place": "Kinshasa, DR Congo, 2024",
    "cardImage": "/assets/images/3-d8b132.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-869c45.png",
        "alt": "1-Main Image"
      },
      {
        "src": "/assets/images/10-da7c50.png",
        "alt": "10"
      },
      {
        "src": "/assets/images/12-90a248.png",
        "alt": "12"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project – Design and Build",
          "Civil Structural and Architectual and MEPF Works"
        ]
      },
      {
        "heading": "Key Highlights:",
        "items": [
          "Building of G + 1 floor",
          "IT Load: 1.5 MW"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Uptime Tier III TCDD & TCCF certified"
        ]
      }
    ]
  },
  {
    "slug": "hyperscaler-data-center-hyderabad-india",
    "title": "Hyperscaler Data Center",
    "place": "Hyderabad, India",
    "cardImage": "/assets/images/4-67ded6.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-1-46b560.png",
        "alt": "1-Main Image (1)"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Design and Build",
          "Civil Interiors & MEP Services"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Ground + 4 Floors",
          "IT Load: 48 MW",
          "10 MW commissioned"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "edgnex-data-center-dammam-ksa-2021",
    "title": "Edgnex Data Center",
    "place": "Dammam, KSA, 2021",
    "cardImage": "/assets/images/5-71a264.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-207ae6.png",
        "alt": "1-Main Image"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project – Design and Build",
          "Civil Structural and Architectual and MEPF Works"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Building G + 3 floors",
          "IT load: 5 MW"
        ]
      }
    ]
  },
  {
    "slug": "telecom-egypt-cloud-hub-dc-cairo-egypt",
    "title": "Telecom Egypt Cloud Hub DC",
    "place": "Cairo, Egypt, 2021",
    "cardImage": "/assets/images/6-a10e30.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-0a6843.png",
        "alt": "1-Main Image"
      },
      {
        "src": "/assets/images/2-2a1063.png",
        "alt": "2"
      },
      {
        "src": "/assets/images/3-bd15d6.png",
        "alt": "3"
      },
      {
        "src": "/assets/images/4-7bcef7.png",
        "alt": "4"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project – Design, Build & O&M",
          "Civil Interiors and MEPF Works"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "2 Basement + G + 2 floors",
          "Designed for 500 racks",
          "IT load: 2.5 MW",
          "Total built up area ~ 7500 sqm"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Uptime Tier III TCDD & TCCF certified"
        ]
      }
    ]
  },
  {
    "slug": "vodafone-india-limited-chennai-india",
    "title": "Vodafone India Limited",
    "place": "Chennai, India, 2016",
    "cardImage": "/assets/images/7-a2f489.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-1-954547.png",
        "alt": "1-Main Image"
      },
      {
        "src": "/assets/images/15-2d76ee.png",
        "alt": "15"
      },
      {
        "src": "/assets/images/16-c1d1d3.png",
        "alt": "16"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project – Design and Build",
          "Civil Structural and Architectural, Electrical, HVAC, IBMS, Fire Suppression and Plumbing"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Building of G + 1 floor (expandable to G + 4 ) with 15,000 sq ft floor plate area",
          "Designed for 700 racks; Phase 1 – 250 racks",
          "Energy efficiency measured as PUE category 2 of 1.6",
          "Peer design review by Royal Haskonings"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      },
      {
        "heading": "Other Information",
        "items": [
          "Featured in “India’s Best Jobs” by Discovery Channel\nWatch the video here: https://bit.ly/Discovery-Channel-Indias-Best-Jobs"
        ]
      }
    ]
  },
  {
    "slug": "hyperscaler-data-center-mumbai-india-2021",
    "title": "Hyperscaler Data Center",
    "place": "Mumbai, India, 2021",
    "cardImage": "/assets/images/8-cd7d96.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-1-46b560.png",
        "alt": "1-Main Image (1)"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Design and Build",
          "Civil Interiors, Electrical, HVAC, IBMS and Fire Suppression"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Civil & MEP fit-out for G + 3 building",
          "Design expandable upto 2400 racks",
          "IT Load: 3 MW (Phase 1)"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "global-colocation-data-center-chennai-india",
    "title": "Global Colocation Data Center",
    "place": "Chennai, India, 2021",
    "cardImage": "/assets/images/9-91d2d9.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-7c76ee.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Design and Build",
          "Interiors, Electrical, HVAC, IBMS and Fire Suppression"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Building of G + 3 floors",
          "Designed for 2000 racks",
          "IT load: 7.5 MW"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "global-colocation-data-center-navi-mumbai-india",
    "title": "Global Colocation Data Center",
    "place": "Navi Mumbai, India, 2023",
    "cardImage": "/assets/images/10-0194be.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-7c76ee.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project – Design and Build",
          "Civil Structural and Architectual and MEPF Works"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "2 buildings of G + 3 for Data Center, Office building and DG building",
          "Prefab structural steel buildings",
          "Designed for 500 racks per POD",
          "IT Load: 3 MW per floor"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "mainone-dc-accra-ghana",
    "title": "MainOne DC",
    "place": "Accra, Ghana, 2021",
    "cardImage": "/assets/images/11-036ef8.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-2-09d8d1.png",
        "alt": "1-Main Image"
      },
      {
        "src": "/assets/images/DC-Website-Projects-Page-Images-936ad0.png",
        "alt": "DC Website - Projects Page Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project – Design and Build",
          "Prefab Modular Containarised Solution"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "4 prefab modules to house 52 racks; expandable upto 208 racks",
          "Modules pre-fitted and pre-tested with all required equipments at in-house factory",
          "IP 56 & fire protection upto 120 mins"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Uptime Tier-III design certified"
        ]
      }
    ]
  },
  {
    "slug": "national-securities-depository-ltd-nsdl-bangalore-india",
    "title": "National Securities & Depository Ltd. (NSDL)",
    "place": "Bengaluru, India, 2018",
    "cardImage": "/assets/images/12-982028.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-3-f69e3a.png",
        "alt": "1-Main Image"
      },
      {
        "src": "/assets/images/19-849f5d.png",
        "alt": "19"
      },
      {
        "src": "/assets/images/20-57d367.png",
        "alt": "20"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project",
          "Civil Structural and Architectual and MEPF Works"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "IT Load: 1 MW",
          "Building of G + 7 floors",
          "Designed for 380 racks"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level IV compliant",
          "LEED Platinum certified"
        ]
      }
    ]
  },
  {
    "slug": "national-stock-exchange-chennai-india",
    "title": "National Stock Exchange",
    "place": "Chennai, India, 2017",
    "cardImage": "/assets/images/National-Stock-Exchange-Thumbnail-d81263.png",
    "gallery": [
      {
        "src": "/assets/images/National-Stock-Exchange-Banner-a748b8.png",
        "alt": "National Stock Exchange [Banner]"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Green Field Project",
          "Civil Structural and Architectual and MEPF Works"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Building of basement + ground + 3 floors",
          "Designed for 150 racks",
          "1 MVA Power"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level IV compliant",
          "LEED Platinum certified"
        ]
      }
    ]
  },
  {
    "slug": "telecom-egypt-nn1-cairo-egypt",
    "title": "Telecom Egypt NN1",
    "place": "Cairo, Egypt, 2021",
    "cardImage": "/assets/images/15-c1cf5f.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-3-69d29c.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Design and Build Lumpsum Contract",
          "Civil Interiors, Electrical, HVAC, IBMS, Fire Suppression"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Designed for 103 racks"
        ]
      }
    ]
  },
  {
    "slug": "national-information-center-nic-hyderabad-india",
    "title": "National Information Center (NIC)",
    "place": "Hyderabad, India, 2021",
    "cardImage": "/assets/images/16-0301e5.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-4-b6a91c.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Civil Interiors, Electrical, HVAC, IBMS, Fire Suppression, Racks and Network Cabling",
          "Operations & Maintainance"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Expansion project working along with live data center",
          "Designed for 100 racks"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "vodafone-vois-cairo-egypt",
    "title": "Vodafone VOIS",
    "place": "Cairo, Egypt, 2023",
    "cardImage": "/assets/images/17-ff10e0.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-5-146215.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Design and Build",
          "Civil Interiors, Electrical, HVAC, IBMS, Fire Suppression and Security"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Designed for 10 racks"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "colocation-data-center-navi-mumbai-india-2025",
    "title": "Colocation Data Center",
    "place": "Navi Mumbai, India, 2025",
    "cardImage": "/assets/images/18-41d9cc.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-1-46b560.png",
        "alt": "1-Main Image (1)"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Design and Build",
          "Civil Interiors & MEP"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Developed first phase with back end infrastucture",
          "IT Load: 6 MW"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "faisal-islamic-bank-cairo-egypt",
    "title": "Faisal Islamic Bank",
    "place": "Cairo, Egypt, 2020",
    "cardImage": "/assets/images/19-376d0a.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-6-df15fb.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Modular Prefab Room-in-Room Solution with Civil Interiors, Electrical, HVAC, IBMS, Fire Suppression and Plumbing"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Designed for 20 racks",
          "Modular deployment for IT & Power Room",
          "Highly secured – fire, explosion and EMI / EMC proof"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "etisalat-db-telecom-mumbai-jaipur-ahmedabad-lucknow-ambala-india",
    "title": "Etisalat DB Telecom",
    "place": "Mumbai, Jaipur, Ahmedabad, Lucknow & Ambala, India, 2009",
    "cardImage": "/assets/images/20-46984f.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Images-7-afbf94.png",
        "alt": "1-Main Images"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Civil Interiors and MEP works"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": []
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  },
  {
    "slug": "software-technology-parks-of-india-stpi",
    "title": "Software Technology Parks of India (STPI)",
    "place": "Bhubaneshwar, India, 2022",
    "cardImage": "/assets/images/21-b52694.jpg",
    "gallery": [
      {
        "src": "/assets/images/1-Main-Image-4-5e6284.png",
        "alt": "1-Main Image"
      },
      {
        "src": "/assets/images/27-16a91b.png",
        "alt": "27"
      },
      {
        "src": "/assets/images/28-941851.png",
        "alt": "28"
      },
      {
        "src": "/assets/images/29-d93c6c.png",
        "alt": "29"
      },
      {
        "src": "/assets/images/30-68d751.png",
        "alt": "30"
      }
    ],
    "sections": [
      {
        "heading": "Scope of Work",
        "items": [
          "Civil Interiors, Electrical, HVAC, IBMS, Fire Suppression, Plumbing and Network Cabling including IT",
          "Operations & Maintainance"
        ]
      },
      {
        "heading": "Key Highlights",
        "items": [
          "Designed for 100 racks; Phase 1 – 39 racks"
        ]
      },
      {
        "heading": "Certification",
        "items": [
          "Level III compliant"
        ]
      }
    ]
  }
];

export function getProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return {
    project: projects[index],
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
