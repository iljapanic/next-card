import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { profile } from '@/profile'

import '@/app/globals.css'

const sansSerif = Inter({
	variable: '--font-sans-serif',
	subsets: ['latin-ext'],
})

export const metadata: Metadata = {
	title: `${profile.name} — ${profile.title}`,
	description: profile.description,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${sansSerif.variable} relative`}>
				{children}
				<div className="bg-noise pointer-events-none absolute inset-0 bottom-0 left-0 top-0 -z-10 h-full w-full"></div>
			</body>
		</html>
	)
}
