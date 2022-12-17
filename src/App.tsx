import { ToastContainer } from 'react-toastify'
import { UserProvider } from './Contexts/UserContext'
import RoutesMain from './Routes'
import { GlobalStyle } from './Styles/GlobalStyles'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
   return (
      <>
         <UserProvider>
            <RoutesMain />
         </UserProvider>
         <GlobalStyle />
         <ToastContainer
            position='bottom-left'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
         />
      </>
   )
}

export default App
