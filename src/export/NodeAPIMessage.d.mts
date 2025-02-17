export type NodeAPIMessage = {
	severity: "debug" | "info" | "warn" | "error"
	id: string|undefined
	message: string
}
