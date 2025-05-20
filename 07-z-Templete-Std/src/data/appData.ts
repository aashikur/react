export interface AppReview {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AppItem {
  id: string;
  name: string;
  developer: string;
  thumbnail: string;
  banner: string;
  downloads: number;
  category: string;
  rating: number;
  description: string;
  features: string[];
  reviews: AppReview[];
}

export interface AppCategory {
  id: string;
  name: string;
  icon: string;
}

const appData: AppItem[] = [
  {
    id: "app001",
    name: "Programming Hero",
    developer: "Programming Hero Ltd.",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 3500000,
    category: "Education",
    rating: 4.8,
    description: "Interactive coding lessons for beginners and pros alike. Learn web development, mobile development, and more through hands-on projects and gamified lessons.",
    features: ["Gamified learning", "Real-world projects", "Coding challenges", "Community support", "Job placement assistance"],
    reviews: []
  },
  {
    id: "app002",
    name: "Notion",
    developer: "Notion Labs Inc.",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 5200000,
    category: "Productivity",
    rating: 4.7,
    description: "All-in-one workspace for notes, tasks, wikis, and databases. Customize your workspace to fit your needs and collaborate with your team in real-time.",
    features: ["Rich text editing", "Database views", "Task management", "Team collaboration", "API integration"],
    reviews: []
  },
  {
    id: "app003",
    name: "Minecraft",
    developer: "Mojang Studios",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 10000000,
    category: "Gaming",
    rating: 4.9,
    description: "Build anything you can imagine in this sandbox game that lets you explore, craft, and build in a blocky, procedurally-generated 3D world.",
    features: ["Infinite worlds", "Multiplayer mode", "Creative mode", "Survival mode", "Cross-platform play"],
    reviews: []
  },
  {
    id: "app004",
    name: "Duolingo",
    developer: "Duolingo Inc.",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 8700000,
    category: "Education",
    rating: 4.6,
    description: "Learn languages through fun, bite-sized lessons. Practice speaking, reading, listening, and writing to build your vocabulary and grammar skills.",
    features: ["35+ languages", "Daily challenges", "Progress tracking", "Leaderboards", "Offline learning"],
    reviews: []
  },
  {
    id: "app005",
    name: "Trello",
    developer: "Atlassian",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 4200000,
    category: "Productivity",
    rating: 4.5,
    description: "Flexible project management with visual boards, lists, and cards. Organize projects, track progress, and collaborate with your team.",
    features: ["Kanban boards", "Task assignments", "Due dates", "File attachments", "Power-Ups integration"],
    reviews: []
  },
  {
    id: "app006",
    name: "Among Us",
    developer: "InnerSloth LLC",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 9300000,
    category: "Gaming",
    rating: 4.4,
    description: "A multiplayer party game where players work together on a spaceship while trying to identify impostors among the crew.",
    features: ["4-15 players", "Cross-platform play", "Various maps", "Voice chat support", "Custom game settings"],
    reviews: []
  },
  {
    id: "app007",
    name: "Khan Academy",
    developer: "Khan Academy",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 6100000,
    category: "Education",
    rating: 4.7,
    description: "Free, world-class education for anyone, anywhere. Learn math, science, computer programming, history, art, economics, and more.",
    features: ["Video lessons", "Interactive exercises", "Progress tracking", "Personalized learning", "Offline access"],
    reviews: []
  },
  {
    id: "app008",
    name: "Slack",
    developer: "Slack Technologies",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 7200000,
    category: "Productivity",
    rating: 4.6,
    description: "Business communication platform that brings together all your communications and tools in one place.",
    features: ["Channel-based messaging", "File sharing", "Video calls", "App integrations", "Search functionality"],
    reviews: []
  },
  {
    id: "app009",
    name: "Genshin Impact",
    developer: "miHoYo",
    thumbnail: "https://i.ibb.co.com/wr7yw01y/Bid3-min.png",
    banner: "https://i.ibb.co.com/nNC17Syw/Bid2-min.png",
    downloads: 8500000,
    category: "Gaming",
    rating: 4.5,
    description: "Open-world action RPG with anime-style characters and beautiful environments. Explore Teyvat, a vast world full of secrets.",
    features: ["Open world exploration", "Elemental combat", "Gacha system", "Co-op mode", "Frequent updates"],
    reviews: []
  }
];

export const categories: AppCategory[] = [
  {
    id: "cat001",
    name: "Education",
    icon: "GraduationCap"
  },
  {
    id: "cat002",
    name: "Productivity",
    icon: "Briefcase"
  },
  {
    id: "cat003",
    name: "Gaming",
    icon: "Gamepad2"
  }
];

export default appData;