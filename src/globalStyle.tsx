import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html[theme="light"]{
    --playerBg:rgba(148, 148, 148, 0.35);
    --slider:rgb(231, 231, 231);
    --library:rgba(255, 255, 255, 0.5);
    --libraryMobile:rgba(255, 255, 255, 0.95);
    --librarySongSelected:rgb(196, 233, 255);
    --librarySongHover:rgb(219, 242, 255);
    --librarySongText:black;
    --coverImageFilter:none;
    --logoColor:black;
    --settingsBg:rgba(0,0,0,0.5);
    --settingsOverlay:rgba(255, 255, 255, 0.1);
}
html[theme="dark"]{
    --playerBg:rgba(94, 94, 94, 0.5);
    --slider:rgb(70, 70, 70);
    --library:rgba(99, 99, 99, 0.5);
    --libraryMobile:rgba(99, 99, 99, 0.95);
    --librarySongSelected:rgb(45, 52, 56);
    --librarySongHover:rgb(57, 60, 61);
    --librarySongText:#d4d4d4;
    --coverImageFilter:brightness(70%) contrast(110%);
    --logoColor:#000000;
    --settingsBg:rgba(0,0,0,0.6);
    --settingsOverlay:rgba(139, 139, 139, 0.3);
}

body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    font-display: optional;
    
}

.App {
    transition: margin ease-in-out 0.5s;
}

.adjust {
    margin-left: 25%;
}

.settingsVisible {
    transform: translate(0%) !important;
    opacity: 1 !important;
  }

.logoutVisible{
    opacity:1 !important;
    pointer-events:auto !important;
}
@media screen and (max-width:768px) {
    .adjust {
        margin-left: 0%;
    }
}
`;

export default GlobalStyle;
