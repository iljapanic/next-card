import { DownloadIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { generateVCard } from '@/lib/vcard'

import type { Profile } from '@/lib/types'
import { Button } from '@/components/ui/button'

export function ProfileDownload({
	profile,
	className,
}: {
	profile: Profile
	className?: string
}) {
	return (
		<section className={cn(className)}>
			<a href={generateVCard(profile)} download className="block">
				<Button
					variant="outline"
					size="sm"
					className="h-7 w-full gap-2 border-dashed border-muted-foreground/30 px-2 font-normal text-foreground/90 shadow-none"
				>
					<DownloadIcon className="h-3.5 w-3.5 text-foreground" />
					<span>Download contact</span>
				</Button>
			</a>
		</section>
	)
}
