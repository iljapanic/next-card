import { convertImageToBase64 } from '@/lib/utils'

import type { Profile } from '@/lib/types'

export function generateVCard(profile: Profile): string {
	const profilePhotoBase64 = convertImageToBase64('./public/avatar.jpg')
	const currentDate = new Date().toISOString().split('T')[0].replace(/-/g, '')

	const vcardData = [
		'BEGIN:VCARD',
		'VERSION:3.0',
		'PRODID:-//next-card//-',
		`FN:${profile.name}`,
		`N:${profile.name.split(' ').reverse().join(';')}`,
		profile.title ? `TITLE:${profile.title}` : '',
		profile.company ? `ORG:${profile.company}` : '',
		profile.phone ? `TEL:${profile.phone}` : '',
		profile.email ? `EMAIL:${profile.email}` : '',
		profilePhotoBase64
			? `PHOTO;ENCODING=b;TYPE=JPEG:${profilePhotoBase64}`
			: '',
		// Add WhatsApp
		profile.socials && profile.socials.find((s) => s.type === 'whatsapp')?.url
			? `item1.URL;CHARSET=utf-8;type=pref:${profile.socials.find((s) => s.type === 'whatsapp')?.url}`
			: '',
		profile.socials && profile.socials.find((s) => s.type === 'whatsapp')?.url
			? 'item1.X-ABLabel:WhatsApp'
			: '',
		// Add LinkedIn
		profile.socials && profile.socials.find((s) => s.type === 'linkedin')?.url
			? `item2.URL;CHARSET=utf-8;type=pref:${profile.socials.find((s) => s.type === 'linkedin')?.url}`
			: '',
		profile.socials && profile.socials.find((s) => s.type === 'linkedin')?.url
			? 'item2.X-ABLabel:LinkedIn'
			: '',
		// Add Twitter/X
		profile.socials && profile.socials.find((s) => s.type === 'x')?.url
			? `item3.URL;CHARSET=utf-8;type=pref:${profile.socials.find((s) => s.type === 'x')?.url}`
			: '',
		profile.socials && profile.socials.find((s) => s.type === 'x')?.url
			? 'item3.X-ABLabel:Twitter'
			: '',
		// Add links
		...(profile.links?.flatMap((link, index) => [
			`item${index + 4}.URL;CHARSET=utf-8;type=pref:${link.url}`,
			`item${index + 4}.X-ABLabel:${link.title}`,
		]) ?? []),
		// Add date connected
		profile.links &&
			`item${profile.links.length + 4}.X-ABDATE;type=pref:${currentDate}`,
		profile.links && `item${profile.links.length + 4}.X-ABLabel:Date connected`,
		'END:VCARD',
	]
		.filter(Boolean)
		.join('\n')

	return 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcardData)
}
