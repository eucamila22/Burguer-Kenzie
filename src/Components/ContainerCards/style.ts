import styled from 'styled-components'

export const ContainerCardsStyle = styled.ul`
   width: 100%;
   height: 100vh;

   .container-cards {
      overflow-x: auto;
      width: 100%;
      display: flex;
      gap: 20px;
      padding: 20px;
   }

   @media (min-width: 968px) {
      .container-cards {
         display: flex;
         flex-wrap: wrap;
         justify-content: flex-start;
         gap: 15px;
      }
   }

   @media (min-width: 1440px) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .container-cards {
         width: 1440px;
         display: flex;
         flex-wrap: wrap;
         justify-content: flex-start;
         /* gap: 65px; */
      }
   }
`
