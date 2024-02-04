import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Router from "../Router/Router";
import Footer from "../Footer/Footer";
import { GlobalStyle } from "../../utils/styles/Layout.style";

export default function Layout() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
    </BrowserRouter>
  )
}
