import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;

     color: var(--white);
   }

   html, body, #root {
     max-height: 100vh;
     max-width: 100vw;

     width: 100%;
     height: 100%;
   }

   *, button, input {
     border: 0;
     background: none;
     font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
   }

   html {
     background: var(--background);
   }

   :root {
     --primary: #000;
     --secondary: #15181C;
     --search: #202327;
     --white: #FFFFFF;  
     --white-second: #D9D9D9;
     --like: #33A1F2;
     --like-light-hover: #ccebff;
     --background: #e6f2ff;
     --gray: #808080;
     --green:  #73e600;
     --orange:  #ffa64d;
   }
`;