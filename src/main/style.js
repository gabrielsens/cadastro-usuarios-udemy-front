import styled from "styled-components";

export const AppStyle = styled.div`
    margin: 0px;
    display: grid;
    grid-template-columns: var(--aside-width) 1fr;
    grid-template-rows:
        var(--header-height)
        1fr
        var(--footer-height);
    grid-template-areas: 
        "logo header"
        "menu content"
        "menu footer";
    height: 100vh;

    .logo {
        grid-area: logo;
    }
    .header {
        grid-area: header;
    }
    .menu-area {
        grid-area: menu;
    }
    .content {
        grid-area: content;
    }
    .footer {
        grid-area: footer;
    }
`;
