/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Link, Typography } from "@mui/material";
import { ProductProps, ProductsProps } from "../types/props";
import { ColorConstants } from "types/color";
import { useState } from "react";

const Product = (props:ProductProps) => {
    const {title, description, url} = props;

    const [displayState, setDisplayState] = useState("none");

    const titleCSS = css`
        width : fit-content;
        height: fit-content;
        margin: 10px;
        
        &:hover{
            color : ${ColorConstants.SAKURA};
        }
    `;

    const descriptionCSS = ( displayType : string) => {
        return css`
            display : ${displayType};
            margin  : 10px;
        `;
    } 

    const productCSS = css`
        margin-bottom   : 20px;
        width           : 250px;
        height          : 250px;
        background-color: ${ColorConstants.OMESHIONANDO};
        border-radius   : 10px;
        overflow        : hidden;
    `;

    return (
        <Box component="div" css={productCSS} onMouseEnter={() => setDisplayState("block")} onMouseLeave={() => setDisplayState("none")}>
            <Link href={url} underline="none" target="_blank" rel="noopener noreferrer">
                <Typography variant="h3" css={titleCSS}>
                    {title}
                </Typography>
            </Link>
            <Typography css={descriptionCSS(displayState)}>
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
                const {title, description, url} = item;

                return (
                    <Product key={title} title={title} description={description} url={url}/>
                )
            })}

        </Box>
        
    )
};

export default Products;