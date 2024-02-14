import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Router from "../Router/Router";
import Footer from "../Footer/Footer";
import { GlobalStyle } from "../../utils/styles/Layout.style";
import { StyleSheetManager } from 'styled-components';
import ContextProvider from "../../utils/context/Context";

export default function Layout() {
  return (
    <ContextProvider>
      <StyleSheetManager shouldForwardProp={prop => prop !== 'config' && prop !== 'place'}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </StyleSheetManager>
    </ContextProvider>
  )
}
