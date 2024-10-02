import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { ProfileSubheading } from '@/components/profile/profile-subheading'

import { cn, getHostname } from '@/lib/utils'

import type { Profile } from '@/lib/types'

export function ProfileLinks({
	profile,
	className,
}: {
	profile: Profile
	className?: string
}) {
	if (!profile.links) return null

	return (
		<section className={cn(className)}>
			<ProfileSubheading>Links</ProfileSubheading>
			<ul className="flex flex-wrap gap-2.5">
				{profile.links.map((item) => (
					<LinkItem key={item.title} title={item.title} url={item.url} />
				))}
			</ul>
		</section>
	)
}

function LinkItem({ title, url }: { title: string; url: string }) {
	return (
		<li>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="group block"
			>
				<Button
					variant="outline"
					size="sm"
					className="h-7 w-fit justify-start gap-2 rounded-full border-border/60 bg-background/30 pl-2 pr-3 text-foreground/80"
				>
					<Image
						src={`https://www.google.com/s2/favicons?domain=${getHostname(
							url,
						)}&sz=128`}
						alt={title}
						width={15}
						height={15}
						className="opacity-80 group-hover:opacity-100"
					/>
					{title}
				</Button>
			</a>
		</li>
	)
}
