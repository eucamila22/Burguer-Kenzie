import styled from 'styled-components'

export const DivLogin = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;

   .btn-register {
      padding: 20px 50px;
      border: none;
      background-color: var(--gray-0);
      border-radius: var(--radius-2);
      margin-top: 5px;
      color: var(--gray-300);
      cursor: pointer;
   }

   .btn-register:hover {
      background-color: var(--gray-300);
      color: var(--white);
   }

   @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 50px;
   }
`

export const DivMessageLogin = styled.div`
   width: 100%;
   max-width: 377px;
   height: 250px;
   display: flex;
   flex-direction: column;
   padding: 0 10px;

   img {
      width: 245px;
      height: 55px;
      margin-top: 20px;
   }

   .bagMessageLogin {
      width: 100%;
      max-width: 377px;
      height: 95px;
      display: flex;
      align-items: center;
      background: var(--white);
      border: 1px solid var(--gray-100);
      box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
      border-radius: var(--radius-1);
      gap: 10px;
      padding: 0 10px;
      margin-top: 20px;
   }

   .iconBagLogin {
      width: 60px;
      height: 60px;
      background: rgba(39, 174, 96, 0.1);
      border-radius: var(--radius-1);
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .iconBagLogin svg {
      color: var(--primary);
      font-size: var(--font-size2);
   }

   .messageLogin {
      width: 300px;
      height: 60px;
   }

   .divBollLogin {
      display: none;
   }

   @media (min-width: 768px) {
      width: 80%;
      max-width: 450px;
      height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 28px;

      img {
         width: 245px;
         height: 55px;
      }

      .bagMessageLogin {
         width: 377px;
         height: 95px;
         display: flex;
         align-items: center;
         background: var(--white);
         border: 1px solid var(--gray-100);
         box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
         border-radius: var(--radius-1);
         gap: 10px;
         padding: 0 10px;
         margin-top: 20px;
      }

      .iconBag {
         width: 60px;
         height: 60px;
         background: rgba(39, 174, 96, 0.1);
         border-radius: var(--radius-1);
         display: flex;
         align-items: center;
         justify-content: center;
      }

      .iconBag img {
         width: 25px;
         height: 25px;
         object-fit: cover;
      }

      .messageLogin {
         width: 300px;
         height: 60px;
      }

      .divBollLogin {
         width: 180px;
         height: 80px;
         display: flex;
      }
      .divBollLogin {
         width: 180px;
         height: 80px;
         object-fit: cover;
      }
   }
`

export const DivFormLogin = styled.div`
   width: 100%;
   max-width: 377px;
   height: 461px;
   background: var(--white);
   border: 2px solid var(--gray-0);
   border-radius: var(--radius-1);
   padding: 20px;
   display: flex;
   flex-direction: column;
   text-align: center;

   nav {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
   }

   form {
      display: flex;
      flex-direction: column;
   }

   form > p {
      color: var(--navigate);
   }

   form fieldset {
      border: none;
      padding: 15px 0;
      display: flex;
      flex-direction: column;
   }

   label {
      position: absolute;
      transform: translateY(-50%);
      background-color: white;
      color: var(--gray-600);
      padding: 5px;
      margin-left: 20px;
      margin-top: 8px;
   }

   input {
      width: 100%;
      height: 50px;
      border: none;
      background: var(--gray-0);
      border-radius: var(--radius-2);
      margin-top: 10px;
      padding-left: 10px;
   }

   input:focus {
      border: 2px solid var(--gray-600);
      background-color: var(--white);
   }

   .btnLogin {
      width: 100%;
      height: 60px;
      border: none;
      background-color: var(--primary);
      border-radius: var(--radius-2);
      margin-top: 8px;
      color: var(--gray-0);
   }

   .btnLogin:hover {
      background: var(--primary-50);
   }

   .footerLogin {
      width: 80%;
      font-weight: var(--weigth3);
      font-size: var(--font-size5);
      text-align: center;
      color: var(--gray-200);
      margin: 10px 0 0 30px;
   }

   @media (min-width: 768px) {
      width: 80%;
      max-width: 450px;

      form button {
         width: 100%;
         max-width: 456px;
         height: 60px;
         border: none;
         background: var(--gray-0);
         border-radius: var(--radius-2);
         margin-top: 15px;
      }
   }
`
