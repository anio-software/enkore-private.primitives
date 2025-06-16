export type NodePackageJSON = {
	name: string
	version: string
	description?: string
	author?: string
	type?: string
	license?: string

	peerDependencies?: Record<string, string>
	dependencies?: Record<string, string>
	devDependencies?: Record<string, string>
	scripts?: Record<string, string>

	repository?: {
		type: string
		url: string
		directory?: string
	}

	files?: string[]

	[prop: string]: unknown
}
