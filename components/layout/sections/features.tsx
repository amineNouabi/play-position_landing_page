import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'Search',
    title: 'Discover Games',
    description:
      'Easily find nearby soccer matches with Play Position’s location-based game discovery. Whether you’re new in town or just looking for a game to join, the app helps you connect with local players and matches.',
  },
  {
    icon: 'UserSearch',
    title: 'Organize Matches',
    description:
      'Want to host a game? Play Position allows you to create and organize soccer matches with ease. Set the location, time, and player requirements to ensure your match runs smoothly.',
  },
  {
    icon: 'Star',
    title: 'Rate Players & Matches',
    description:
      'After each game, leave feedback on the players and overall match experience. Ratings help ensure fair play, improve match quality, and allow everyone to know what to expect from future games.',
  },
  {
    icon: 'TabletSmartphone',
    title: 'Cross-Platform',
    description:
      'Play Position works flawlessly across iOS, Android, and web browsers, allowing you to manage your soccer games from any device, anywhere, ensuring a smooth and connected experience.',
  },
  {
    icon: 'MapPinned',
    title: 'Geolocation-Powered',
    description:
      "With geolocation, Play Position helps you find soccer matches near your current location. Whether you're at home or in a new city, the app automatically shows games around you, making it easy to join or organize a match.",
  },
  {
    icon: 'Handshake',
    title: 'Free & Open Source',
    description:
      'Play Position is fully free and open-source. Contribute to the project, explore the codebase, or customize the app to suit your unique needs—empowering the community to build and improve together.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-5xl text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Play Position offers a range of features designed to help you find,
        join, and manage local soccer games with ease.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
