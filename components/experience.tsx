import { Badge } from "@/components/ui/badge";
import { IconBuilding, IconCalendar } from "@tabler/icons-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <IconBuilding className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <IconCalendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Mandaya Royal Hospital Puri",
      period: "Jan 2025 - Present",
      description:
        "Maintained and extended a legacy internal system. Developed a new dashboard for hospital staff to manage patient data and medical records, including secure document delivery to patients. Ensured smooth functionality and integration with existing workflows.",
      technologies: ["Vue", "Keycloak", "TypeScript", "Nginx", "Docker", "Socket.io"],
    },
    {
      title: "Full Stack Developer",
      company: "TRWeb Consultant",
      period: "Apr 2024 - Present",
      description:
        "Worked closely with a designer to bring websites to life, building landing pages and SaaS marketing sites from scratch using Next.js and Tailwind. Responsible for frontend and backend development, optimization, and deployment to production.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Supabase", "Stripe", "Resend", "Vercel"],
    },
    {
      title: "Frontend Developer",
      company: "PostiveLab",
      period: "2018 - 2019",
      description:
        "Collaborated with a backend team to develop a clean and responsive frontend app using various frontend framework. Contributed to UX planning, feature scoping, and frontend architecture to ensure a polished user experience.",
      technologies: ["React", "Vue", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
