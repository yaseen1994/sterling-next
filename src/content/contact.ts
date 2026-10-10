export const contactPage = {
  title: "Contact – Sterling & Wilson Data Center",
  description:
    "Have a question or project in mind? Share your query — we’ll get back to you shortly.",
  banner: {
    title: "Contact",
    image: "/assets/images/Contact-Us_V2-D-643fa0.png",
    mobileImage: "/assets/images/Contact-Us_V2-M-7f294f.png",
  },
  headOffice: {
    title: "Head Office",
    addressLabel: "Address",
    address: [
      "Sterling & Wilson Data Center Pvt. Ltd,",
      "9th Floor, Universal Majestic,",
      "P. L. Lokhande Marg, Chembur (West),",
      "Mumbai – 400043, India",
    ],
    phoneLabel: "Phone",
    phone: "+91 22-25485488 / 300",
    phoneHref: "tel:+912225485488",
    channels: [
      {
        label: "More Information",
        address: "datacenters@sterlingwilson.com",
        href: "mailto:datacenters@sterlingwilson.com",
      },
      {
        label: "Media Queries",
        address: "corpcomm@sterlingwilson.com",
        href: "mailto:corpcomm@sterlingwilson.com",
      },
    ],
  },
  form: {
    title: "Connect With Our Experts",
    lead: ["Have a question or project in mind?", "Share your query — we’ll get back to you shortly."],
    servicePlaceholder: "— Choose Service —",
    services: [
      "Design & Build",
      "Modular Construction",
      "Smart Operations",
      "Sustainable Execution",
      "O&M Services",
      "Other - General Inquiry",
    ],
    fields: [
      { id: "contact-name", name: "name", label: "Name", type: "text", autoComplete: "name" },
      { id: "contact-email", name: "email", label: "Email", type: "email", autoComplete: "email" },
      { id: "contact-phone", name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
      {
        id: "contact-company",
        name: "company",
        label: "Company Name",
        type: "text",
        autoComplete: "organization",
      },
      { id: "contact-service", name: "service", label: "Service", type: "select", autoComplete: "off" },
      { id: "contact-location", name: "location", label: "Location", type: "text", autoComplete: "off" },
      { id: "contact-message", name: "message", label: "Message", type: "textarea", autoComplete: "off" },
    ],
    personalConsent: "I agree to provide my personal information",
    privacyLead: "I acknowledge the",
    privacyLink: "privacy policy",
    privacyHref: "/privacy-policy/",
    submit: "Submit request",
    unavailable:
      "Enquiry submission is unavailable in this development preview. This form does not send a message.",
  },
  international: {
    title: "International Offices",
    offices: [
      {
        location: "United Arab Emirates (UAE) - Dubai",
        company: "Sterling and Wilson Data Center Investments FZCO.",
        address: [
          "Office No.419/420, 5W(West) A Wing,",
          "Dubai Airport Authority (DAFZA) – Dubai",
          "P.O.Box: 54811,",
          "Dubai, U.A.E.",
        ],
      },
      {
        location: "United Arab Emirates (UAE) - Abu Dhabi",
        company: "STERLING WILSON DATA CENTRE CONTRACTING - L.L.C - S.P.C,",
        address: [
          "AL YASAT TOWER, Buhouth 'Afra St, AL DANAH, ,10",
          "Abu Dhabi 22220",
          "Abu Dhabi - UAE",
        ],
      },
      {
        location: "Kingdom of Saudi Arabia (KSA)",
        company: "Branch of Sterling & Wilson Data Center Pvt. Ltd",
        address: [
          "Prince Muhammad bin Saad Abdulaziz Road,",
          "Building No. 6731, 2539, Unit No. 3,",
          "First Floor, Al Aqiq District, P.O. Box 13511",
          "Riyadh - KSA",
        ],
      },
      {
        location: "Qatar",
        company: "Sterling and Wilson D C Contracting and Services,",
        address: [
          "Zone 24, Al Muntazah Trading Centre,",
          "Bldg No. 2, Fourth Floor, Office No. 7,",
          "Doha, Qatar",
        ],
      },
      {
        location: "Egypt",
        company: "Branch of Sterling & Wilson Data Center Pvt. Ltd",
        address: ["Office 311A, Linx Business Park,", "Building A, Smart Village,", "Giza, Egypt"],
      },
    ],
  },
} as const;
