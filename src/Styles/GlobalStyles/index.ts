import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #27AE60;
        --primary-50: #93D7AF;
        --secondary: #EB5757;
        --gray-600: #333333;
        --gray-300: #828282;
        --gray-400: #BDBDBD;
        --gray-200: #999999;
        --gray-100: #E0E0E0;
        --gray-0: #F5F5F5;
        --white: #FFFFFF;
        --navigate: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

        --radius-1: 5px;
        --radius-2: 8px;

        --weigth1: 600;
        --weigth2: 500;
        --weigth3: 400;
        --weigth4: 900;
        --weigth5: 700;

        --font-size1: 26px;
        --font-size2: 22px;
        --font-size3: 18px;
        --font-size4: 16px;
        --font-size5: 14px;
        --font-size6: 12px;

        .heading1{
            font-weight: var(--weigth1);
            font-size: var(--font-size1);
        }
        .heading2{
            font-weight: var(--weigth1);
            font-size: var(--font-size2);
        }
        .heading3{
            font-weight: var(--weigth1);
            font-size: var(--font-size3);
        }
        .headline{
            font-weight: var(--weigth2);
            font-size:var(--font-size5);
        }
        .body{
            font-weight: var(--weigth2);
            font-size: var(--font-size3);
        }
        .body-2{
            font-weight: var(--weigth1);
            font-size: var(--font-size5);
        }
        .caption{
            font-weight: var(--weigth3);
            font-size: var(--font-size6);
        }
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none ;
    }

    body{
        font-family: 'Inter', 'sans-serife';
    }

    *{
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
`
