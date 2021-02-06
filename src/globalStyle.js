import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    font-display: optional;
    
}

.App {
    transition: margin ease-in-out 0.5s;
}

.adjust {
    margin-left: 25%;
}

@media screen and (max-width:768px) {
    .adjust {
        margin-left: 0%;
    }
}
`;

export default GlobalStyle;
