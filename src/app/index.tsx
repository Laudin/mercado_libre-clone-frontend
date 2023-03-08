/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage/Loadable';
import { UserPage } from './pages/UserPage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { CategoryPage } from './pages/CategoryPage/Loadable';
import { SearchPage } from './pages/SearchPage/Loadable';
import { ProductPage } from './pages/ProductPage/Loadable';
import { PublishPage } from './pages/PublishPage/Loadable';
import { CartPage } from './pages/CartPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { UserProvider } from './context/User';
import { CartProvider } from './context/Cart';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7daL73tZNNX5BMbM5eaqQnYtuPwHA03o",
  authDomain: "mercado-libre-b8b8b.firebaseapp.com",
  projectId: "mercado-libre-b8b8b",
  storageBucket: "mercado-libre-b8b8b.appspot.com",
  messagingSenderId: "908602165699",
  appId: "1:908602165699:web:ac11c53f382725ab62d576",
  measurementId: "G-RK3V1DM5B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <UserProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/publish" element={<PublishPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/c/:category" element={<CategoryPage />} />
            <Route path="/:id" element={<ProductPage />} />
            <Route element={<NotFoundPage />} />
          </Routes>
        </CartProvider>
      </UserProvider>
      <GlobalStyle />

    </BrowserRouter>
  );
}
