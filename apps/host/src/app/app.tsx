import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import wrapComponent from './ModuleFederationWrapper/wrapComponent';

// wrapComponent is an HOC with an ErrorBoundary & React.Suspense to lazy load the module/MicroFrontend
const Shop = wrapComponent(React.lazy(() => import('shop/Module')));
const Payment = wrapComponent(React.lazy(() => import('payment/Module')));
const About = wrapComponent(React.lazy(() => import('about/Module')));

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/payment"> Payment </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <Shop
              delayed={<div>Loading shop ...</div>}
              error={<div>Error Loading shop remote</div>}
            />
          }
        />

        <Route
          path="/payment"
          element={
            <Payment
              delayed={<div>Loading payment ...</div>}
              error={<div>Error Loading payment remote</div>}
            />
          }
        />

        <Route
          path="/about"
          element={
            <About
              delayed={<div>Loading about ...</div>}
              error={<div>Error Loading about remote</div>}
            />
          }
        />
      </Routes>
    </>
  );
}
