import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"

export const CandelarApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}