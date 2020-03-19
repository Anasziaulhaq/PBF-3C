import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cctv from './cctv.jpg';
import gopro from './gopro.jpg';
import kamera from './kamera.jpg';
import Taba from './taba.jpg';
import lg from './lg.png';
import poly from './poly.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,
  useLocation
} from "react-router-dom";
export default function AuthExample() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/about">BukaAja.com</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <AuthButton />
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ShopRoute path="/shop">
            <ShopPage />
          </ShopRoute>
        </Switch>
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">© 2020 Copyright:BukaAja.com</div>
        </footer>
      </div>
    </Router>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return fakeAuth.isAuthenticated ? (
    <button class="btn btn-danger" onClick={() => {
      fakeAuth.signout(() => history.push("/"));
    }}>
      Sign out
    </button>
  ) : (
      <button className="btn btn-primary" onClick={login}>Log in</button>
    );
}
function ShopRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
function AboutPage() {
  return (
    <h3>Politeknik Negeri Malang</h3>
  );
}
function ShopPage() {
  return (
    <Router>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/electroniks">Electroniks</Link>
          </li>
          <li className="list-group-item">
            <Link to="/kameras">Kameras</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/electroniks">
            <Electroniks />
          </Route>
          <Route path="/kameras">
            <Kameras />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>You must log in {from.pathname}</p>
      <button className="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}
function Kameras() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Kamera</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column productbox" to={`${url}/CCTV  IDR 2.199.000`}>
            <img src={cctv} alt="" className="productimg" />
            <div class="producttitle">Cctv kamera</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/GOPRO, IDR 400.000`}>
            <img src={gopro} alt="" className="productimg" />
            <div class="producttitle">Gopro</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Kamera Mirorlless IDR 8.199.000`}>
            <img src={kamera} alt="" className="productimg" />
            <div class="producttitle">Kamera Mirorless</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h2>Detail dan Harga</h2>
        </Route>
        <Route path={`${path}/:productId`}>
          <Kamera />
        </Route>
      </Switch>
    </div>
  );
}
function Kamera() {
  let { productId } = useParams();
  return (
    <div>
      <h3>{productId}</h3>
    </div>
  );
}
function Electroniks() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Electroniks</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column productbox" to={`${url}/LG 21 Inch IDR 2.260.000`}>
            <img src={lg} alt="" className="productimg" />
            <div class="producttitle">LG 21 Inch</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Polytroon 32 Inch, IDR 4.100.000`}>
            <img src={poly} alt="" className="productimg" />
            <div class="producttitle">Polytroon 32 Inch</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Samsung Tab A, T295, IDR 2.100.000`}>
            <img src={Taba} alt="" className="productimg" />
            <div class="producttitle">Samsung Tab A</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h2>Detail dan Harga</h2>
        </Route>
        <Route path={`${path}/:productId`}>
          <Electronik />
        </Route>
      </Switch>
    </div>
  );
}
function Electronik() {
  let { productId } = useParams();
  return (
    <div>
      <h3>{productId}</h3>
    </div>
  );
}


