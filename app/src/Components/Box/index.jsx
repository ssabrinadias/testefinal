import React from "react";
import styled from "styled-components";

const StyleBox = styled.section`
    border: 1px solid #d6d6d6;
    border-radius: 10px;
    -webkit-box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
    box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
    width: 100%;
    padding: 36px;
`;

const Box = ({ children, title }) => (
    <StyleBox>{children}</StyleBox>
);

export default Layout;
