export type Profile = {
	name: string
	title: string
	company?: string
	description?: string
	email: string
	phone?: string
	x?: string
	socials?: {
		type: 'linkedin' | 'x' | 'whatsapp'
		url: string
	}[]
	links?: {
		title: string
		url: string
	}[]
}

export type ContactItemTypes = 'email' | 'whatsapp' | 'linkedin' | 'x'

export type Vcard = {
	name: string
	title: string
	company: string
	phone?: string
	email: string
	photo?: string // Base64 encoded image data
}
