import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import AddService from "./pages/AddNewFood/AddNewFood";
import FoodDetails from "./pages/Details/FoodDetails/FoodDetails";
import Footer from "./pages/Home/Footer/Footer";
import Header from "./pages/Home/Header/Header";
import Home from "./pages/Home/Home/Home";
import ManageAllOrder from "./pages/ManggeAllOrder/ManageAllOrder";
import MyOrder from "./pages/MyOrder/MyOrder";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/order">
              <MyOrder />
            </Route>

            <Route path="/allOrder">
              <ManageAllOrder />
            </Route>

            <Route path="/addService">
              <AddService />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>

            <PrivateRoute path="/details/:id">
              <FoodDetails />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
