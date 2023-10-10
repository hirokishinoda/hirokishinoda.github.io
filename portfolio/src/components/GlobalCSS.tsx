import { Global, css } from '@emotion/react';
import { ColorConstants } from 'types/color';

const globalCSS = css`
  body {
    background-color: ${ColorConstants.HAIZAKURA};
    color : ${ColorConstants.SAKURA};
  }

  h2 {
    color : ${ColorConstants.IMAYOU};
  }

  h3 {
    color : ${ColorConstants.JINZAMOMI};
  }
`;

const GlobalCSS = () => {
    return <Global styles={globalCSS}/>;
}

export default GlobalCSS;