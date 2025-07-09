'use client';

import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconArrowDown, IconBoltFilled } from '@tabler/icons-react';

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
		const navHeight = 80; // Account for fixed navbar height
		const elementPosition = element.offsetTop - navHeight;
		window.scrollTo({
			top: elementPosition,
			behavior: 'smooth',
		});
	}
};

const Hero = () => {
	return (
		<div
			id="hero"
			className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden"
		>
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					'[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
					'inset-x-0 h-full skew-y-12'
				)}
			/>
			<div className="relative z-[1] text-center max-w-screen-md">
				<Badge className="rounded-full border-none">
					<IconBoltFilled
						className="fill-current"
						size={16}
					/>
					React • Next.js • Tailwind • Supabase
				</Badge>
				<h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
					Building Clean & Impactful Web Experiences
				</h1>
				<p className="mt-6 text-[17px] md:text-lg">
					Hey there! I&apos;m Ridza — a frontend-focused fullstack developer who
					enjoys turning ideas into beautiful, user-friendly web apps. I work
					with tools like React, Tailwind, and Next.js to build fast,
					responsive, and delightful digital experiences. Whether it&apos;s a landing
					page or a full SaaS product, I love bringing great ideas to life
					through clean code and thoughtful design.
				</p>
				<div className="mt-12 flex items-center justify-center gap-4">
					<Button
						size="lg"
						className="rounded-full text-base"
						onClick={() => scrollToSection('about')}
					>
						Let&apos;s collaborate{' '}
						<IconArrowDown
							className="ml-2"
							size={22}
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
