import { SiLinkedin, SiWhatsapp, SiX } from '@icons-pack/react-simple-icons'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { ProfileSubheading } from '@/components/profile/profile-subheading'

import { cn } from '@/lib/utils'

import type { Profile, ContactItemTypes } from '@/lib/types'

export function ProfileContact({
	profile,
	className,
}: {
	profile: Profile
	className?: string
}) {
	if (!profile.socials) return null

	return (
		<section className={cn(className)}>
			<ProfileSubheading>Contact</ProfileSubheading>
			<ul className="grid gap-2.5">
				{profile.socials.map((item) => (
					<ContactItem key={item.type} type={item.type} url={item.url} />
				))}
				<ContactItem key="email" type="email" url={profile.email} />
			</ul>
		</section>
	)
}

function ContactItem({ type, url }: { type: ContactItemTypes; url: string }) {
	return (
		<li>
			<a
				href={type === 'email' ? `mailto:${url}` : url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button
					variant="secondary"
					size="sm"
					className="w-full justify-start gap-3"
				>
					{getButtonIcon(type)}
					{getButtonLabel(type)}
					<div className="ml-auto text-[10px] font-normal text-muted-foreground">
						{getButtonSublabel(type, url)}
					</div>
				</Button>
			</a>
		</li>
	)
}

function getButtonLabel(type: ContactItemTypes) {
	switch (type) {
		case 'email':
			return 'Email'
		case 'whatsapp':
			return 'WhatsApp'
		case 'x':
			return 'X'
		case 'linkedin':
			return 'LinkedIn'
	}
}

function getButtonSublabel(type: ContactItemTypes, url: string) {
	switch (type) {
		case 'email':
			return url
		case 'whatsapp':
			return url.split('/').pop() || ''
		case 'x':
			return `@${url.split('/').pop() || ''}`
		case 'linkedin':
			return `/in/${url.split('/').pop() || ''}`
	}
}

function getButtonIcon(type: ContactItemTypes) {
	const iconClassName = 'h-4 w-4 text-foreground/60'

	switch (type) {
		case 'email':
			return <EnvelopeClosedIcon className={cn(iconClassName)} />

		case 'whatsapp':
			return <SiWhatsapp className={cn(iconClassName)} />
		case 'x':
			return <SiX className={cn(iconClassName)} />

		case 'linkedin':
			return <SiLinkedin className={cn(iconClassName)} />
	}
}
