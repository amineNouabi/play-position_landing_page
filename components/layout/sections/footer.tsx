import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image
                className="mr-2"
                src="/logo1024x1024.png"
                alt="Play Position"
                width={40}
                height={40}
              />
              <h3 className="text-2xl">Play position</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link
                href="https://github.com/amineNouabi"
                className="opacity-60 hover:opacity-100"
              >
                Github
              </Link>
            </div>

            {/* <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div> */}

            <div>
              <Link
                href="https://www.linkedin.com/in/ahmed-amine-nouabi-2508461b9"
                className="opacity-60 hover:opacity-100"
              >
                Linkedin
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>

            <div>
              <Link href="#about" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </div>

            {/* <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div> */}
          </div>

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitch
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Dribbble
              </Link>
            </div>
          </div> */}
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Brought to you by
            <Link
              target="_blank"
              href="https://github.com/amineNouabi"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Nouabi
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
