export type NodeAPIMessage = {
	severity: "debug" | "info" | "warning" | "error"
	id: string|undefined
	message: string
}
