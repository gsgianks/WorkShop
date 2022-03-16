export interface IProduct {
    Code: string
    Name: string
    UnitPrice: number
    CodeCategory: string
    CodeUnit: string
}

export class Product implements IProduct{
    Id: string
    Code: string
    Name: string
    UnitPrice: number
    CodeCategory: string
    CodeUnit: string
}