import { ReflectMetadataKeys } from "../constants";

export function Model(params?: Partial<{ parent: any, name: string }>) {
	return function (model: Object) {
		if (typeof model === 'object' && !!model.constructor) {
			const snakeCaseName = params || toSnakeCase(model.constructor.name)
			const pluralizedName = snakeCaseName + 's'
			Reflect.defineMetadata(ReflectMetadataKeys.STORE_PATH, pluralizedName, model)
		}

		throw new Error("@Model decorator can only be applied to class types");
	}
}

const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function toSnakeCase(str: string): string {
	let output = str.charAt(0).toLowerCase()
	for (let i = 1; i < str.length; i++) {
		if (abc.includes(str.charAt(i))) {
			output += "_"
		}
		output += str.charAt(i).toLowerCase()
	}
	return output
}