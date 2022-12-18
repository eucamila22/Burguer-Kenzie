import styled from 'styled-components'

export const DivRegister = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   margin-top: 10px;

   @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      gap: 5%;
   }
`
export const DivMessageRegister = styled.div`
   width: 80%;
   max-width: 377px;
   height: 527px;
   display: none;
   margin-top: 100px;

   @media (min-width: 768px) {
      width: 80%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      padding: 28px;

      img {
         width: 245px;
         height: 55px;
      }

      .bagMessage {
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

      .iconBag svg {
         color: var(--primary);
         font-size: var(--font-size2);
      }

      .message {
         width: 300px;
         height: 60px;
      }

      .divBoll {
         width: 180px;
         height: 80px;
         object-fit: cover;
      }
      .divBoll img {
         width: 180px;
         height: 80px;
         object-fit: cover;
         margin-top: 50px;
      }
   }
`
export const DivFormRegister = styled.div`
   width: 100%;
   max-width: 377px;
   height: 527px;
   background: var(--white);
   border: 2px solid var(--gray-0);
   border-radius: var(--radius-1);
   padding: 20px;
   display: flex;
   flex-direction: column;

   nav {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   nav a {
      color: var(--gray-300);
      cursor: pointer;
      text-decoration: underline;
   }

   form {
      display: flex;
      flex-direction: column;
   }

   form > p {
      color: var(--navigate);
      font-size: var(--font-size5);
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

   button {
      width: 100%;
      height: 60px;
      border: none;
      background: var(--gray-0);
      border-radius: var(--radius-2);
      margin-top: 15px;
      color: var(--gray-300);
      font-size: var(--font-size4);
      font-weight: var(--weigth1);
   }

   button:hover {
      background: var(--gray-300);
      color: var(--white);
   }

   @media (min-width: 768px) {
      width: 80%;
      max-width: 500px;

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
