export type ProductProps = {
    title      : string,
    description: string,
    url        : string,
}

export type ProductsProps = {
    products : Array<ProductProps>,
    className? : string
}