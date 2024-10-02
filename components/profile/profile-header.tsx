import profileImage from '@/public/avatar.jpg'
import Image from 'next/image'

import type { Profile } from '@/lib/types'

export function ProfileHeader({ profile }: { profile: Profile }) {
	return (
		<header>
			<Image
				src={profileImage}
				height={150}
				width={150}
				alt={`${profile.name} profile image`}
				className="max-w-24 rounded"
			/>
			<h1 className="mt-2.5 text-xl font-semibold">{profile.name}</h1>
			<p className="mt-0 text-sm font-medium text-muted-foreground">
				{profile.title}{' '}
				{profile.company && (
					<>
						<span className="mx-1 text-muted-foreground/40"> | </span>
						<span className="text-muted-foreground/70">{profile.company}</span>
					</>
				)}
			</p>
			{profile.description && (
				<p className="mt-2 text-balance text-xs text-muted-foreground">
					{profile.description}
				</p>
			)}
		</header>
	)
}
