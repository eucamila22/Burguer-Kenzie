import styled from 'styled-components'

export const CardStyle = styled.li`
   min-width: 300px;
   height: 346px;

   background: var(--white);
   border: 2px solid var(--gray-100);
   border-radius: 5px;
   cursor: pointer;

   :hover {
      border: 2px solid var(--primary);
   }

   .box-img{
      width: 296px;
      height: 150px;
      background: #F5F5F5;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .box-img img{
      width: 180px;
      height: 180px;
      object-fit: cover;
   }

   .name{
      color: var(--gray-600);

   }

   .category{
      color: var(--gray-200);
   }

   .price{
      color: var(--primary);
   }

   .description{
      padding: 14px 21px 26px 21px;
      line-height: 30px;
   }

   .btn-add{
      width: 106px;
      height: 40px;
      background: var(--gray-400);
      border: 2px solid var(--gray-400);
      border-radius: var(--radius-2);
      margin-top: 20px;
      color: var(--white);
   }
   .btn-add:hover{
      background: var(--primary);
      border: 2px solid var(--primary);

   }
`
