import styled from 'styled-components'

export const NotFoundS = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }

    h1 {
        font-size: 1rem;
    }

    @media(min-width: 768px){
        img {
            width: 500px;
            height: 500px;
        }

        h1 {
            font-size: 2.5rem;
        }
    }

    *{
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
`