import { ReactNode } from "react";

export type ContentTitleProps = {
    title: string
};

export type TwoLinesProps = {
    className? : string
};

export type ContentsEntireProps = {
    title      : string,
    className? : string,
    children?  : ReactNode
};