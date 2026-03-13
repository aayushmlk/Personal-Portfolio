import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Aayush’s contribution to our full-stack project was invaluable. From designing robust backend systems to crafting intuitive frontend interfaces, he consistently delivered high-quality solutions that exceeded our expectations.",
    author: "Nischal Malla",
    role: "Full Stack Developer",
    avatar: "/avatar1.png", // local image
  },
  {
    quote:
      "Working with Aayush was a game-changer for our project. He applied his Python and AI skills to our analytics project, transforming complex datasets into intelligent, actionable insights that made our work more effective.",
    author: "Anubhav Acharya",
    role: "Data Analyst",
    avatar: "/avatar2.png", // local image
  },
  {
    quote:
      "Teaming up with Aayush significantly strengthened our mobile app project. He applied his expertise to deliver intelligent, innovative features, optimize workflows, and create a reliable, high-performing, user-friendly application.",
    author: "Ananya Timsina",
    role: "Mobile App Developer",
    avatar: "/avatar3.png", // local image
  },
  {
    quote:
      "Collaborating with Aayush significantly elevated our compliance project. He applied his skills to streamline workflows, ensure accuracy, and deliver secure, efficient systems that strengthened our operations.",
    author: "Bikesh Poudel",
    role: "Compliance Officer",
    avatar: "/avatar4.png", // local image
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-3xl md:p-6 glow-border animate-fade-in relative"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-8 pt-4">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};