/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ContentsEntire from "components/ContentsEntire";
import Products from "./Products";
import { ProductProps } from "../types/props";

const Works = () => {
    const productsCSS = css`
        column-count : 3;
    `;

    const products:Array<ProductProps> = [
        {
            title      : "ポートフォリオ",
            description: "ここに説明を記述"
        },
        {
            title      : "会議室管理アプリ",
            description: "ここに説明を記述"
        },
        {
            title      : "手書き文字認識",
            description: "ここに説明を記述"
        },
        {
            title      : "蔵書管理アプリ",
            description: "ここに説明を記述"
        },
        {
            title      : "迷路アプリ",
            description: "ここに説明を記述"
        },
        {
            title      : "テトリス",
            description: "ここに説明を記述"
        },
        {
            title      : "Robots",
            description: "ここに説明を記述"
        },
        {
            title      : "RPG",
            description: "ここに説明を記述"
        },
        {
            title      : "マインスイーパー",
            description: "ここに説明を記述"
        },
    ];

    return (
        <ContentsEntire id="Works" title="Works">
            <Products products={products} css={productsCSS}/>
        </ContentsEntire>
    );
}

export default Works;