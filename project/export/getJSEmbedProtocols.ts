import type {JSEmbedProtocols} from "./JSEmbedProtocols.ts"

export function getJSEmbedProtocols(): JSEmbedProtocols {
	return [
		"text",
		"js",
		"js-bundle",
		"dts"
	]
}
