/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ContentsEntire from "components/ContentsEntire";
import Products from "./Products";
import { ProductProps } from "../types/props";

const Works = () => {
    const productsCSS = css`
        margin-top   : 50px;
        column-count : 3;
    `;

    const products:Array<ProductProps> = [
        {
            title      : "ポートフォリオ",
            description: "ここに説明を記述"
        },
        {
            title      : "タイトル",
            description: "ここに説明を記述"
        },
        {
            title      : "タイトル",
            description: "ここに説明を記述"
        },
        {
            title      : "タイトル",
            description: "ここに説明を記述"
        },
        {
            title      : "タイトル",
            description: "ここに説明を記述"
        },
        {
            title      : "タイトル",
            description: "ここに説明を記述"
        },
    ];

    return (
        <ContentsEntire title="Works">
            <Products products={products} css={productsCSS}/>
        </ContentsEntire>
    );
}

export default Works;