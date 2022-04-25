import { Model } from "src/core/decorators/model.class"

export interface IProduct {
	code: string
	name: string
	unitPrice: number
	codeCategory: string
	codeUnit: string
}

@Model({
	parent: Product,

})
export class Product implements IProduct {
	id: string
	code: string
	name: string
	unitPrice: number
	codeCategory: string
	codeUnit: string
}