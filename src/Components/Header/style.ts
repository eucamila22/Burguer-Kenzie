import styled from 'styled-components'

export const HeaderHomeStyle = styled.header`
   width: 100vw;
   height: 88px;
   background-color: var(--gray-0);
   display: flex;
   justify-content: center;
   align-items: center;

   .containerHeader > div > img {
      width: 158px;
      height: 36px;
   }

   .containerIcon {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
   }

   .containerIcon input {
      width: 382px;
      height: 70px;
      border: 2px solid var(--gray-600);
      border-radius: var(--radius-2);
      display: none;
      padding-left: 10px;
      color: var(--gray-300);
   }

   .containerIcon input:focus {
      border: 1px solid var(--gray-300);
   }

   .containerHeader {
      width: 96%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .icon {
      color: var(--gray-300);
      font-weight: var(--weigth4);
      font-size: var(--font-size1);
   }

   @media (min-width: 768px) {
      .containerIcon input {
         display: flex;
         align-items: center;
         border: 1px solid var(--gray-100);
      }

      .containerIcon input:focus {
         border: 1px solid var(--gray-300);
      }

      .divSearch {
         width: 50px;
         height: 50px;
         border-radius: var(--radius-2);
         background-color: var(--primary);
         display: flex;
         align-items: center;
         justify-content: center;
         margin-left: -80px;
      }

      .search {
         color: var(--gray-0);
         font-weight: var(--weigth4);
         font-size: var(--font-size1);
      }

      
   }

   @media (min-width: 1440px) {
      .containerHeader {
         width: 1400px;
      }
      
      .containerIcon input {
         display: flex;
         align-items: center;
         border: 1px solid var(--gray-100);
      }

      .containerIcon input:focus {
         border: 1px solid var(--gray-300);
      }
   }
`
