import { Navigate, Route, Routes } from "react-router"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import { useAuth } from "@clerk/react"
import PageLoader from "./components/PageLoader"

function App() {
  const { isSignedIn, isLoaded} = useAuth();

  return (
    <div data-theme='abyss' className='min-h-screen'>
      {!isLoaded ? (
        <PageLoader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={ isSignedIn ? <HomePage /> : <Navigate to={'/auth'} replace /> }/>
            <Route path="/auth" element={ !isSignedIn ? <AuthPage /> : <Navigate to={'/'} replace /> }/>
          </Routes>
        </>
      )}
    </div>
  )
}

export default App
