import React, {useContext} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Pages/HeaderComponents/Navbar";
import "./Global.css";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import SignUp from "./Components/AuthComponent/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContext";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import UserHome from "./UserComponent/UserHome";


const App = () => {
  let state = useContext(AuthContextApi);
    return (
      <section id="SpotifyMainBlock">
        <article>
          <Router>
            <header>{!state?<Navbar />:""}</header>
            <ToastContainer />
            <main>
              {/* dynamic rounting start */}
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/signup" exact>
                  <SignUp />
                </Route>
                {/* start authentication */}
                
                <Route path="/UserHome">
                  <UserHome />
                </Route>
                {/* END OF AUTHENTICATION */}
                <Route path="*">
                <PageNotFound />
                </Route>
              </Switch>
            </main>
          </Router>
        </article>
      </section>
    );
  };
export default App;
