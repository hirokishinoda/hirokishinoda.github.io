/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ContentsEntire from "components/ContentsEntire";
import Products from "./Products";
import { ProductProps } from "../types/props";
import ProductsData from "assets/data/products.json";

const Works = () => {
    const productsCSS = css`
        display        : flex;
        flex-wrap      : wrap;
        align-content  : space-between;
        justify-content: space-between;
    `;

    const products:Array<ProductProps> = ProductsData.products;

    return (
        <ContentsEntire id="Works" title="Works">
            <Products products={products} css={productsCSS}/>
        </ContentsEntire>
    );
}

export default Works;