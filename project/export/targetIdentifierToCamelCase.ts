import type {TargetIdentifier} from "./TargetIdentifier.ts"

function kebabCaseToCamelCase(str: string): string {
	let newStr = ``
	let capitalizeNextCharacter = true

	for (let i = 0; i < str.length; ++i) {
		const ch = str[i]

		if (ch === "-") {
			capitalizeNextCharacter = true
		} else {
			newStr += capitalizeNextCharacter ? ch.toUpperCase() : ch
			capitalizeNextCharacter = false
		}
	}

	return newStr
}

export function targetIdentifierToCamelCase(targetIdentifier: TargetIdentifier) {
	if (targetIdentifier.startsWith("jsx-")) {
		targetIdentifier = "JSX-" + targetIdentifier.slice(4)
	} else if (targetIdentifier.startsWith("js-")) {
		targetIdentifier = "JS-" + targetIdentifier.slice(3)
	}

	return kebabCaseToCamelCase(targetIdentifier)
}
