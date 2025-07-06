import type {TargetIdentifiers} from "./TargetIdentifiers.ts"

export function getTargetIdentifiers(): TargetIdentifiers {
	return [
		"c",
		"js-none",
		"js-web",
		"js-node",
		"js-hybrid",
		"js-hybrid-lite",
//		"jsx-none",
		"jsx-web",
//		"jsx-node",
		"jsx-hybrid"
	]
}
