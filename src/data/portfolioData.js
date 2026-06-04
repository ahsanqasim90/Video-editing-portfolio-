import {
  BadgeCheck,
  Bot,
  Braces,
  Camera,
  Captions,
  Car,
  CirclePlay,
  Clapperboard,
  Clock,
  Construction,
  Film,
  Flame,
  Gamepad2,
  Headphones,
  ImagePlus,
  Megaphone,
  Mic2,
  Music2,
  Pizza,
  RefreshCw,
  ScanFace,
  Scissors,
  Sparkles,
  Stars,
  Wand2,
  Zap,
} from "lucide-react";

export const serviceCategories = [
  { title: "AI Product Ads", icon: Bot, sample: "Skincare launch concept", description: "AI-assisted product spots with premium pacing, reveals, and conversion-focused scenes." },
  { title: "AI UGC Ads", icon: ScanFace, sample: "Founder-style testimonial", description: "Natural UGC-style ad edits shaped for hooks, social proof, and fast scroll appeal." },
  { title: "AI Video Generation", icon: Sparkles, sample: "Lifestyle product world", description: "Generated visuals, motion concepts, and scene builds for modern ad campaigns." },
  { title: "AI Ad Campaigns", icon: Megaphone, sample: "3-variant Meta ad pack", description: "Creative batches with alternate hooks, captions, lengths, and platform-ready structure." },
  { title: "Product Video Editing", icon: Camera, sample: "Amazon product demo", description: "Clean product edits with zooms, callouts, benefits, and polished branded delivery." },
  { title: "Fast-Paced Video Editing", icon: Zap, sample: "15-sec promo reel", description: "High-retention cuts with punchy rhythm, SFX, kinetic text, and beat-matched movement." },
  { title: "Slow-Paced Cinematic Editing", icon: Film, sample: "Luxury service teaser", description: "Elegant cinematic edits with controlled pacing, mood, transitions, and color direction." },
  { title: "UGC & Product Videos", icon: CirclePlay, sample: "TikTok ad creative", description: "Creator-led product edits that combine authenticity with a strong performance structure." },
  { title: "Podcast Trimming", icon: Mic2, sample: "Founder podcast clip", description: "Tight trims that remove dead space and shape long conversations into crisp moments." },
  { title: "Timestamp-Based Podcast Editing", icon: Clock, sample: "Interview highlight batch", description: "Precise edits from timestamps with strong intros, clean cuts, and export-ready clips." },
  { title: "Transcript-Based Captions", icon: Braces, sample: "Educational reels", description: "Captioned edits from transcript references with readable timing and emphasis." },
  { title: "Video Reframing", icon: RefreshCw, sample: "YouTube to Reels", description: "Vertical, square, and platform-specific reframes that keep subjects and products centered." },
  { title: "Stylish Caption Generation", icon: Captions, sample: "Bold caption package", description: "Readable, modern captions with highlights, motion, hierarchy, and brand-aware styling." },
  { title: "Auto Detailing Videos", icon: Car, sample: "Ceramic coating reel", description: "Satisfying automotive edits with before-after pacing, gloss details, and premium reveal shots." },
  { title: "Music DJ Edits", icon: Music2, sample: "Club night recap", description: "Beat-driven edits with energetic transitions, atmosphere, crowd moments, and sound sync." },
  { title: "Restaurant & Food Edits", icon: Pizza, sample: "Menu launch reel", description: "Appetizing food content with close-ups, motion, pacing, and offer-focused storytelling." },
  { title: "Talking Head Video Editing", icon: Headphones, sample: "Coach reel series", description: "Clean talking head edits with jump cuts, captions, b-roll, sound polish, and hooks." },
  { title: "Construction Edits Using Images", icon: Construction, sample: "Project progress story", description: "Static assets turned into moving construction stories with captions, motion, and reveals." },
  { title: "Raw Blocks Videos", icon: Clapperboard, sample: "Raw footage assembly", description: "Unstructured clips transformed into organized, client-ready short-form video assets." },
  { title: "Gaming Videos", icon: Gamepad2, sample: "Gameplay highlight", description: "Engaging gaming shorts with pacing, reactions, captions, SFX, and highlight structure." },
  { title: "Automobile Ads Videos", icon: Flame, sample: "Dealership promo", description: "Vehicle ads with cinematic detail shots, feature callouts, and persuasive offer framing." },
  { title: "Long-Form to Short-Form Videos", icon: Scissors, sample: "Webinar clip pack", description: "Long videos distilled into short clips with strong hooks, captions, and platform exports." },
  { title: "Image to Avatar Videos", icon: ImagePlus, sample: "AI spokesperson sample", description: "Avatar-led videos using image references, voiceover direction, captions, and branded edits." },
];

export const filters = ["All", "AI Ads", "UGC", "Product Ads", "Podcasts", "Auto Detailing", "Food", "Talking Head", "Gaming", "Music", "Construction", "Automobile", "Long to Short"];

export const portfolioItems = [
  { title: "Cash Next Product Videos", category: "Product Ads", niche: "Product Video Ads", description: "Product-led TikTok, Reels, and UGC-style ads with captions, motion callouts, and clean pacing.", tools: ["CapCut", "Premiere Pro"], result: "Built to explain the product quickly and increase buyer interest.", thumbnailUrl: "/portfolio/cash-next-thumbnail.jpg", videoUrl: "#" },
  { title: "About Video Editing Promo", category: "Talking Head", niche: "Short-Form Promo", description: "Professional edit for TikTok, Shorts, and YouTube with clear structure, captions, and scroll-friendly cuts.", tools: ["CapCut", "Caption Tools"], result: "Turns a simple message into a polished creator-style promo.", thumbnailUrl: "/portfolio/about-editing-thumbnail.jpg", videoUrl: "#" },
  { title: "UGC Video Creation Ad", category: "UGC", niche: "UGC Ads", description: "High-converting UGC video for TikTok, Instagram Reels, and AI-driven ad campaigns.", tools: ["ChatGPT", "CapCut", "AI Tools"], result: "Designed for quick hooks, social proof, and direct response testing.", thumbnailUrl: "/portfolio/ugc-video-thumbnail.jpg", videoUrl: "#" },
  { title: "AI Influencer Video", category: "AI Ads", niche: "AI Creator Content", description: "AI-assisted influencer-style video with voice, captions, avatar direction, and ad-focused editing.", tools: ["ChatGPT", "AI Video", "CapCut"], result: "Creates a modern AI creative that feels native to short-form platforms." },
  { title: "Ceramic Coating Reel", category: "Auto Detailing", niche: "Auto Detailing Studio", description: "Satisfying before-after edit with close details, glossy reveals, and premium pacing.", tools: ["CapCut", "SFX"], result: "Showcases quality and drives booking interest." },
  { title: "Social Media Video Creator", category: "Long to Short", niche: "Agency Content", description: "Long footage turned into short social clips with hooks, reframing, subtitles, and platform-ready exports.", tools: ["Premiere Pro", "Transcript Captions"], result: "Creates multiple short-form assets from raw client footage." },
  { title: "Instagram Reels Edit Pack", category: "Talking Head", niche: "Reels & TikTok", description: "Fast-paced talking-head reels with jump cuts, bold captions, SFX, and strong retention flow.", tools: ["CapCut", "Premiere Pro"], result: "Makes educational and promotional content easier to watch." },
  { title: "Automobile Promo Video", category: "Automobile", niche: "Vehicle Ads", description: "Vehicle ad with cinematic detail shots, feature labels, offer CTA, and premium reveal pacing.", tools: ["Premiere Pro", "CapCut"], result: "Created for social ad promotion and dealership-style campaigns." },
  { title: "Restaurant Menu Promo", category: "Food", niche: "Food Reels", description: "Fast-moving food reel with close-ups, offer text, transitions, and warm color direction.", tools: ["CapCut", "Caption Tools"], result: "Highlights menu items for social promotion." },
  { title: "Gaming Highlight Short", category: "Gaming", niche: "Gaming Creator", description: "Gameplay moment edited with reactions, zooms, subtitles, impact SFX, and energetic rhythm.", tools: ["CapCut", "SFX"], result: "Optimized for Shorts and Reels discovery." },
  { title: "DJ Event Recap", category: "Music", niche: "Music DJ", description: "Beat-synced event edit with crowd energy, flashes, transitions, and brand title cards.", tools: ["Premiere Pro", "Audio Tools"], result: "Creates a high-energy booking reel." },
  { title: "Construction Progress Edit", category: "Construction", niche: "Contractor", description: "Image-based progress video with animated frames, captions, map-style flow, and final reveal.", tools: ["CapCut", "AI Image"], result: "Turns still images into a story-driven reel." },
];

export const testimonials = [
  { client: "Maya R.", platform: "Upwork", rating: 5, project: "AI Product Ad", text: "Great work, fast delivery, and very creative editing. The final video looked professional and engaging." },
  { client: "Daniel K.", platform: "Upwork", rating: 5, project: "Podcast Shorts", text: "Strong communication and clean edits. The captions, pacing, and final exports were exactly what we needed." },
  { client: "Alicia M.", platform: "Upwork", rating: 5, project: "UGC Ad Creative", text: "The ad felt modern and polished. Hooks, cuts, captions, and music were all handled with great attention." },
  { client: "Jordan S.", platform: "Upwork", rating: 5, project: "Auto Detailing Reel", text: "Turned simple raw footage into a premium-looking reel. Very reliable and easy to work with." },
];

export const tools = ["CapCut", "Premiere Pro", "ChatGPT", "AI video generation tools", "AI image generation tools", "Caption tools", "Audio and voiceover tools"];

export const profile = {
  name: "Sana Q.",
  email: "sanqasim205@gmail.com",
  phone: "+92 3094186795",
  upworkUrl: "https://www.upwork.com/freelancers/~01f965e1c51614e56f?viewMode=1",
  title: "Viral Short-Form Video Editor | Instagram Reels & TikTok",
  location: "Pakistan",
  rate: "$12.00/hr",
  success: "82%",
  jobs: "19",
  hours: "190",
  overview:
    "I help brands, creators, and agencies turn raw footage, products, scripts, and ideas into high-retention TikTok, Instagram Reels, YouTube Shorts, UGC ads, AI creatives, and product videos.",
};

export const processSteps = [
  "Client Brief",
  "Script / Idea Understanding",
  "AI Visuals or Footage Selection",
  "Video Editing",
  "Captions, SFX, Music & Motion",
  "Final Delivery",
];

export const sellingPoints = [
  "Experience with multiple niches",
  "AI ads + editing combined",
  "Fast turnaround",
  "Short-form content understanding",
  "Clean captions and pacing",
  "Product-focused storytelling",
  "Flexible editing style",
  "Client-focused delivery",
];

export const stats = [
  { value: "82%", label: "Upwork success" },
  { value: "19", label: "Completed jobs" },
  { value: "190", label: "Upwork hours" },
  { value: "$12/hr", label: "Profile rate" },
];

export const skills = [
  "Video Editing",
  "TikTok Video",
  "YouTube Shorts",
  "Instagram Reels",
  "CapCut",
  "Adobe Premiere Pro",
  "UGC",
  "Video Advertising",
  "AI Video",
  "Social Media Video",
  "Short-Form Video",
  "Podcast Editing",
  "Subtitles",
  "Motion Graphics",
];

export const certifications = [
  "Copywriting Course: From beginner to professional",
  "Video Production Course",
  "Professional Videography & Video Editing",
];

export const badgeIcon = BadgeCheck;
