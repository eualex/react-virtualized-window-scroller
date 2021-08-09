import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* overflow-x: hidden; */

    background-color: #f1f2fa;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1100px;
  margin: 2rem auto;
`;

export const Title = styled.h1`
  width: 100%;

  text-align: center;

  margin-bottom: 1rem;

  font-size: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;