export type NodePackageJSON = {
	name: string
	version: string
	description?: string
	author?: string
	license?: string

	[prop: string]: unknown
}
