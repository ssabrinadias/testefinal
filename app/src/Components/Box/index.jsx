import React from "react";
import styled from "styled-components";

const StyleBox = styled.section`
`;

const Box = ({ children, title }) => (
    <StyleBox>{children}</StyleBox>
);

export default Layout;
