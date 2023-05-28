import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthPage from "./Components/Auth/AuthPage";
import HomePage from "./Components/Home/HomePage";
import StorePage from "./Components/StorePage/StorePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactUsPage from "./Components/ContactUsPage/ContactUsPage";
import ProductDetails from "./Components/StorePage/Products/ProductDetails";
import UserProfile from "./Components/Auth/Profile/UserProfile";
import Image1 from "./Components/Images/Album-1.png";
import Image2 from "./Components/Images/Album-2.png";
import Image3 from "./Components/Images/Album-3.png";
import Image4 from "./Components/Images/Album-4.png";
import CoffeeCup from "./Components/Images/coffeeCup.png";
import Tshirt from "./Components/Images/t-shirt.png";

import AuthContext from "./Components/Auth/AuthContext/Auth-context";

const items = [
  {
    id: "Colors",
    imageSrc: Image1,
    price: 100,
    star: 4,
    rating: 100,
    review: 50,
  },
  {
    id: "Black-And-White",
    imageSrc: Image2,
    price: 50,
    star: 4.1,
    rating: 90,
    review: 40,
  },
  {
    id: "Black-And-Yellow",
    imageSrc: Image3,
    price: 70,
    star: 4.3,
    rating: 95,
    review: 35,
  },
  {
    id: "Blue",
    imageSrc: Image4,
    price: 100,
    star: 4,
    rating: 80,
    review: 20,
  },
  {
    id: "T-Shirt",
    imageSrc: Tshirt,
    price: 300,
    star: 4.5,
    rating: 200,
    review: 70,
  },
  {
    id: "Coffee-Cup",
    imageSrc: CoffeeCup,
    price: 200,
    star: 4.2,
    rating: 150,
    review: 20,
  },
];
function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>
      {!isLoggedIn && (
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
      )}
      {isLoggedIn && (
        <Route path="/home" exact>
          <HomePage />
        </Route>
      )}

      {isLoggedIn && (
        <Route path="/store" exact>
          <StorePage />
        </Route>
      )}

      {isLoggedIn && (
        <Route path="/aboutpage" exact>
          <AboutPage />
        </Route>
      )}
      {isLoggedIn && (
        <Route path="/contactuspage" exact>
          <ContactUsPage />
        </Route>
      )}
      {isLoggedIn && (
        <Route path="/store/:productId" exact>
          <ProductDetails items={items} />
        </Route>
      )}
      {isLoggedIn && (
        <Route path="/profile" exact>
          <UserProfile />
        </Route>
      )}

      <Route path='*'>
        <Redirect to='/'/>
      </Route>
    </Switch>
  );
}

export default App;


