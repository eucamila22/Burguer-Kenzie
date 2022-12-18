import styled from 'styled-components'

export const LiCard = styled.li`
   height: 92px;
   margin-top: 10px;
   padding-bottom: 10px;
   margin-left: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: var(--white);
   gap: 10px;

   .divCart {
      width: 75%;
      height: 90px;
      margin-right: 10px;
   }

   .divImg {
      width: 90px;
      height: 90px;
      background-color: var(--gray-100);
      border-radius: var(--radius-1);
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .divImg > img {
      width: 80px;
      height: 80px;
      object-fit: cover;
   }

   .countCart {
      background-color: var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 105px;
      height: 35px;
      padding: 15px;
   }

   .countCart > p {
      font-weight: var(--weight5);
      font-size: var(--font-size3);
      margin: -8px;
      cursor: pointer;
   }

   .trash {
      font-weight: var(--weight5);
      font-size: var(--font-size2);
      color: var(--gray-200);
      cursor: pointer;
   }

   .white {
      background-color: var(--white);
      width: 50px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
   }

   .titleCart {
      display: flex;
      justify-content: space-between;
      margin: 12px 0;
   }

   .titleCart > p {
      font-weight: var(--weight5);
      font-size: var(--font-size3);
      color: var(--gray-600);
   }
`
