export const projectGroups = [
  {
    id: "react",
    title: "My React.js Projects",
    subtitle: "Component-driven interfaces, responsive layouts, and modern web experiences.",
    number: "01",
    projects: [
      { name: "NETLINKS Afghanistan", description: "Business website built with React.", url: "https://yalda-habibi-netlinks-website.vercel.app/", type: "React.js" },
      { name: "Website Three", description: "Responsive React website.", url: "https://website-three-lemon-24.vercel.app/", type: "React.js" },
      { name: "Trip Website", description: "Travel-inspired website experience built with React.js.", url: "https://habibi-six.vercel.app/", type: "React.js" },
      { name: "VitalFlow Website", description: "A modern website built with React.js, focused on a clean interface and responsive experience.", url: "https://habibi-website-n4zy.vercel.app/", type: "React.js" },
      { name: "CurrencyWave | Smart Currency Dashboard", description: "A smart currency dashboard built with React.js for exploring currency information in a clear, dashboard-style interface.", url: "https://yalda-habibi-dashboard.vercel.app/", type: "React.js · Dashboard" },
      { name: "Kabul International University", description: "University website interface.", url: "https://kabul-international-university.vercel.app/", type: "React.js" },
      { name: "Upskill Blog", description: "Blog interface styled with Tailwind CSS.", url: "https://upskill-blog-tailwind.vercel.app", type: "React + Tailwind" }
    ]
  },
  {
    id: "bootcamps",
    title: "My Bootcamp Projects",
    subtitle: "Projects built during practical bootcamp learning.",
    number: "02",
    projects: [
      { name: "Third Bootcamp", description: "Built with HTML, CSS, and JavaScript.", url: "https://habibi3rdbootcamp.vercel.app/", type: "HTML · CSS · JavaScript" },
      { name: "Second Bootcamp", description: "Built with HTML and CSS.", url: "https://bootcame2.vercel.app/", type: "HTML · CSS" },
      { name: "First Bootcamp", description: "Foundational front-end practice.", url: "https://yhp-bootcamp1.vercel.app/", type: "HTML · CSS" }
    ]
  },
  {
    id: "figma",
    title: "My Figma Design",
    subtitle: "A design concept for the NETLINKS website.",
    number: "03",
    projects: [
      { name: "NETLINKS Website Design", description: "Open the original Figma design file.", url: "https://www.figma.com/design/ay7EZberOJUQnwjOiQjWia/Untitled?node-id=0-1&t=rg8noN0LW1CgKm8U-1", type: "Figma UI Design" }
    ]
  },
  {
    id: "html-css-work",
    title: "My HTML & CSS Work",
    subtitle: "Responsive layouts and carefully styled components.",
    number: "04",
    projects: [
      { name: "Responsive Card", description: "Responsive card layout practice.", url: "https://responsive-card-vert.vercel.app", type: "HTML · CSS" }
    ]
  },
  {
    id: "html",
    title: "My HTML Projects",
    subtitle: "The building blocks of my front-end development journey.",
    number: "05",
    projects: Array.from({ length: 10 }, (_, i) => ({
      name: `HTML Assignment ${i + 1}`,
      description: `HTML practice project number ${i + 1}.`,
      url: `https://html-${i + 1}assignment.vercel.app/`,
      type: "HTML"
    }))
  },
  {
    id: "css",
    title: "My CSS Projects",
    subtitle: "Styling, layout, and visual design exercises.",
    number: "06",
    projects: [
      { name: "CSS Assignment 1", description: "CSS styling practice.", url: "https://css-1assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 2", description: "CSS styling practice.", url: "https://css-2assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 3", description: "CSS styling practice.", url: "https://css-3assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 4", description: "CSS layout practice.", url: "https://css-4assignment-1.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 5", description: "CSS styling practice.", url: "https://css-5assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 6", description: "CSS styling practice.", url: "https://css-6assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 7", description: "CSS styling practice.", url: "https://css-7assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 8", description: "CSS styling practice.", url: "https://css-8assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 9", description: "CSS styling practice.", url: "https://css-9-assignment.vercel.app/", type: "CSS" },
      { name: "CSS Assignment 10", description: "CSS styling practice.", url: "https://css-10assignment.vercel.app/", type: "CSS" }
    ]
  }
];

export const categoryImages = {
  react: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85",
  bootcamps: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
  figma: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85",
  "html-css-work": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=85",
  html: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=85",
  css: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
};


// Curated visual previews for individual projects. Images are hosted on Unsplash.
const projectPreviewImages = {
  react: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
  ],
  bootcamps: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85"
  ],
  figma: ["https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85"],
  "html-css-work": ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85"],
  html: [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
  ],
  css: [
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85"
  ]
};

projectGroups.forEach(group => {
  group.projects = group.projects.map((project, index) => ({
    ...project,
    image: projectPreviewImages[group.id]?.[index % projectPreviewImages[group.id].length] || categoryImages[group.id]
  }));
});
