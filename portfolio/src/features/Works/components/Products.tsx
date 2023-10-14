/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { ProductProps, ProductsProps } from "../types/props";
import { ColorConstants } from "types/color";

const Product = (props:ProductProps) => {
    const {title, description} = props;

    const productCSS = css`
        margin-bottom   : 20px;
        width           : 250px;
        height          : 250px;
        background-color: ${ColorConstants.OMESHIONANDO};
        border-radius   : 10px;
        overflow        : hidden;
    `;

    const titleCSS = css`
        width : fit-content;
        height: fit-content;
        margin: 10px
    `;

    const descriptionCSS = css`
        margin: 10px
    `;

    return (
        <Box component="div" css={productCSS}>
            <Typography variant="h3" css={titleCSS}>
                {title}
            </Typography>
            <Typography css={descriptionCSS}>
                {description}
            </Typography>
        </Box>
    );
};

const Products = (props:ProductsProps) => {
    const {products, className} = props;

    return (
        <Box component="div" className={className}>
            {products.map( (item) => {
                return (
                    <Product key={item.title} title={item.title} description={item.description}/>
                )
            })}
        </Box>
        
    )
};

export default Products;