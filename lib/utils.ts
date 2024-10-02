import fs from 'fs'
import path from 'path'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// extract hostname/domain from an url
export function getHostname(url: string | URL): string {
	if (typeof url === 'string') url = new URL(url)
	const hostname = url.hostname
	return hostname.startsWith('www.') ? hostname.slice(4) : hostname
}

// Add this function to convert image to base64
export function convertImageToBase64(imagePath: string): string {
	const absolutePath = path.join(process.cwd(), imagePath)
	const fileData = fs.readFileSync(absolutePath)
	return fileData.toString('base64')
}
