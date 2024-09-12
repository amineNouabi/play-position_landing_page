import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import Link from 'next/link';

const TEAM_MEMBERS = [
  {
    name: 'Ahmed Amine Nouabi',
    role: 'Project Manager & Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/ahmed-amine-nouabi-2508461b9/',
    github: 'https://github.com/amineNouabi',
  },
  {
    name: 'Youssef Acherki',
    role: 'Full Stack Developer',
    linkedin: '',
    github: '',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <h2 className="text-5xl text-primary text-center mb-2 tracking-wider">
        About
      </h2>
      <h3 className="md:w-1/2 mx-auto text-2xl text-center text-foreground my-8">
        What Inspired Play Position?
      </h3>

      <p className="text-muted-foreground text-center">
        Play Position was inspired by the personal experiences of our team as
        avid soccer players who often faced the challenge of finding local
        matches or organizing games with friends. Whether it was moving to a new
        city or having last-minute cancellations, the frustration of not being
        able to play when we wanted motivated us to create an app that solved
        these common issues. The idea was born out of a passion for the game and
        a desire to bring soccer enthusiasts together, no matter where they are.
      </p>

      <p className="text-muted-foreground text-center my-12">
        The project began as a Portfolio Project for Holberton School, where we
        aimed to build something meaningful and useful to the global soccer
        community. Play Position represents months of hard work, from concept to
        final execution, and it’s a platform we’re excited to share with the
        world.
      </p>

      <h3 className="md:w-1/2 mx-auto text-2xl text-center text-foreground mb-4 mt-10">
        Meet the Team
      </h3>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {TEAM_MEMBERS.map(({ name, role, linkedin, github }) => (
          <div key={name}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name="User"
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{role}</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                <div className="flex justify-center space-x-4">
                  <Link href={linkedin} target="_blank">
                    <Icon
                      name="Linkedin"
                      size={24}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </Link>
                  <Link href={github} target="_blank">
                    <Icon
                      name="Github"
                      size={24}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
