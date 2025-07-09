'use client';

import { scrollToSection } from '@/lib/utils';

export const Logo = () => (
	<div
		onClick={() => scrollToSection('hero')}
		className="ml-2 text-xl font-bold cursor-pointer"
	>
		Ninzato
	</div>
);
