import type { Profile } from '@/lib/types'

export const profile: Profile = {
	name: 'John Doe',
	title: 'Design Engineer',
	company: 'ACME Inc.',
	description:
		'I am a designer and technologist with a passion for building bespoke experiences.',
	email: process.env.EMAIL!,
	phone: process.env.PHONE_NUMBER,
	socials: [
		{
			type: 'linkedin',
			url: 'https://linkedin.com/johndoe',
		},
		{
			type: 'whatsapp',
			url: `https://wa.me/${process.env.WHATSAPP_NUMBER}`,
		},
		{
			type: 'x',
			url: 'https://x.com/johndoe',
		},
	],
	links: [
		{
			title: 'Vercel',
			url: 'https://vercel.com/',
		},
		{
			title: 'Next.js',
			url: 'https://nextjs.org/',
		},
		{
			title: 'Personal website',
			url: 'https://rauno.me/',
		},
	],
}
