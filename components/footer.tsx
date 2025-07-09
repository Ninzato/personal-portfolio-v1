'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { IconBrandBehance, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const Footer = () => {
	return (
		<footer className="mt-20">
			<div className="max-w-screen-md mx-auto">
				<Separator />
				<div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
					{/* Copyright */}
					<span className="text-muted-foreground">
						&copy; {new Date().getFullYear()} Ridza Kalimanto. All rights reserved.
					</span>

					<div className="flex items-center gap-5 text-muted-foreground">
						<Link
							href="https://github.com/Ninzato"
							target="_blank"
						>
							<IconBrandGithub className="h-5 w-5" />
						</Link>
						<Link
							href="https://linkedin.com/in/ridza-kalimanto"
							target="_blank"
						>
							<IconBrandLinkedin className="h-5 w-5" />
						</Link>
						<Link
							href="https://www.behance.net/ridzakalimanto1"
							target="_blank"
						>
							<IconBrandBehance className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
