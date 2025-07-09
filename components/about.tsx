import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconDownload } from '@tabler/icons-react';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { GithubLogo } from './icons';

const About = () => {
	return (
		<section
			id="about"
			className="relative py-20 px-6"
		>
			<div className="max-w-screen-md mx-auto">
				<div className="flex flex-col md:flex-row-reverse items-center gap-12">
					<ProfileImage className="hidden md:block" />

					{/* Content */}
					<div className="flex-1 md:text-left">
						<Badge
							variant="secondary"
							className="mb-4"
						>
							About Me
						</Badge>
						<ProfileImage className="mt-3 mb-8 block md:hidden" />
						<h2 className="text-4xl font-bold mb-4 tracking-tight">
							👋 Hi, I&apos;m Ridza!
						</h2>
						<div className="text-muted-foreground mb-6 text-justify flex flex-col gap-2">
							<p>
								I&apos;m a fullstack web developer with a frontend focus — I
								build clean, responsive, and functional web apps using React,
								Tailwind CSS, Next.js, and shadcn/ui. Previously a designer and
								PC builder, I now spend my days crafting interfaces that feel as
								good as they look.
							</p>
							<p>
								My journey into tech started with a dream of becoming a hacker
								(still think it&apos;s pretty cool). But then I discovered web
								development, and it opened up a whole new world for me — one
								where I could bring ideas to life and build things that actually
								help people. That&apos;s when I knew I&apos;d found my path.
							</p>
              <p className="mt-2 text-sm text-muted-foreground italic">Fun fact: When you see Ninzato as a username, it&apos;s likely me 🥷</p>
						</div>
						<div className="flex flex-wrap gap-4 justify-start">
							<Button className="rounded-full">
								<GithubLogo />
								View Github
							</Button>
							<Button
								variant="outline"
								className="rounded-full"
							>
								<IconDownload size={16} />
								Download CV
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ProfileImage = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn('mt-10 w-48 h-48 md:w-64 md:h-64', className)}
		{...props}
	>
		<div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
			<Image
				src="/profilePhoto.jpg"
				alt="Profile Photo"
				className="object-cover"
				fill
			/>
		</div>
	</div>
);
export default About;
