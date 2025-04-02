import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Jack Thompson",
    username: "@jackdev",
    body: "The AI integration is mind-blowing! Reduced my development time by 50% and the code quality is outstanding.",
    img: "https://avatar.vercel.sh/jack",
    role: "Senior Developer",
    rating: 5,
  },
  {
    name: "Jill Martinez",
    username: "@jilltech",
    body: "As a tech lead, I'm impressed by the intuitive interface and robust features. Perfect for both beginners and experts.",
    img: "https://avatar.vercel.sh/jill",
    role: "Tech Lead",
    rating: 5,
  },
  {
    name: "John Chen",
    username: "@johnc",
    body: "Game-changing productivity tools. The AI suggestions are surprisingly accurate and helpful.",
    img: "https://avatar.vercel.sh/john",
    role: "Full Stack Developer",
    rating: 4,
  },
  {
    name: "Jane Wilson",
    username: "@janew",
    body: "Been using it for 6 months now. The continuous improvements and updates keep making it better and better.",
    img: "https://avatar.vercel.sh/jane",
    role: "Software Engineer",
    rating: 5,
  },
  {
    name: "Jenny Kumar",
    username: "@jennyk",
    body: "The collaboration features are exceptional. Makes remote pair programming feel natural and efficient.",
    img: "https://avatar.vercel.sh/jenny",
    role: "Frontend Developer",
    rating: 4,
  },
  {
    name: "James Rodriguez",
    username: "@jamesr",
    body: "Outstanding documentation and community support. Haven't found a single issue that couldn't be resolved quickly.",
    img: "https://avatar.vercel.sh/james",
    role: "DevOps Engineer",
    rating: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const TestimonialsPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      id="testimonials"
      className="flex w-full flex-col items-center justify-center overflow-hidden min-h-screen"
    >
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-serif mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-10">
          Testimonials
        </h1>
      </div>

      {/* Desktop / Tablet View - Marquee */}
      {!isMobile && (
        <>
          <Marquee 
            pauseOnHover 
            className="[--duration:20s] [--gap:1rem] sm:[--gap:2rem] md:[--gap:3rem]"
          >
            {firstRow.map((review) => (
              <ReviewCard 
                key={review.username} 
                {...review} 
                isTablet={isTablet}
              />
            ))}
          </Marquee>
          <Marquee 
            reverse 
            pauseOnHover 
            className="[--duration:20s] [--gap:1rem] sm:[--gap:2rem] md:[--gap:3rem] mt-4 sm:mt-6"
          >
            {secondRow.map((review) => (
              <ReviewCard 
                key={review.username} 
                {...review} 
                isTablet={isTablet}
              />
            ))}
          </Marquee>
        </>
      )}

      {/* Mobile View - Scrollable Grid */}
      {isMobile && (
        <div className="w-full px-4 pb-12 mt-4">
          <div className="flex flex-col gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} isMobile={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewCard = ({
  img,
  name,
  username,
  body,
  role,
  rating,
  isMobile,
  isTablet,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  role: string;
  rating: number;
  isMobile?: boolean;
  isTablet?: boolean;
}) => {
  // Adjust card width based on device size
  const cardWidth = isMobile ? "w-full" : isTablet ? "w-60" : "w-80";
  // Truncate text on smaller screens
  const truncatedBody = isTablet && body.length > 100 ? body.substring(0, 100) + "..." : body;
  
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden rounded-xl border p-4 sm:p-6 transition-all duration-300",
        cardWidth,
        // light styles
        "border-white-950/[.1] bg-white-950/[.01] hover:bg-white-950/[.05]",
        // dark styles
        "dark:border-white-50/[.1] dark:bg-white-50/[.10] dark:hover:bg-white-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img 
          className="rounded-full" 
          width={isMobile || isTablet ? "40" : "48"} 
          height={isMobile || isTablet ? "40" : "48"} 
          alt={`Avatar of ${name}`}
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm sm:text-base font-medium text-white dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs sm:text-sm font-medium text-white/40 dark:text-white/40">
            {username}
          </p>
          <p className="text-xs text-white/60 dark:text-white/60 mt-1">
            {role}
          </p>
        </div>
      </div>
      <div className="mt-1 flex">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <blockquote className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-white/90 dark:text-white/90">
        {isMobile || isTablet ? truncatedBody : body}
      </blockquote>
    </figure>
  );
};

export default TestimonialsPage;
