export type ProductProps = {
    title      : string,
    description: string,
}

export type ProductsProps = {
    products : Array<ProductProps>,
    className? : string
}