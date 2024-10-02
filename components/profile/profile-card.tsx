import { profile } from '@/profile'

import { ProfileHeader } from '@/components/profile/profile-header'
import { ProfileContact } from '@/components/profile/profile-contact'
import { ProfileLinks } from '@/components/profile/profile-links'
import { ProfileDownload } from '@/components/profile/profile-download'

export function ProfileCard() {
	return (
		<article className="mx-auto flex min-h-[100dvh] max-w-md flex-col px-8 pb-6 pt-8">
			<ProfileHeader profile={profile} />
			<ProfileLinks profile={profile} className="mt-8" />
			<ProfileContact profile={profile} className="mt-8" />
			<ProfileDownload profile={profile} className="mt-5" />
		</article>
	)
}
