import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`@font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`}
  />
);

export default Fonts;
