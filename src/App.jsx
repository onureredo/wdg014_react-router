import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Dashboard from './components/NestedRoutes/Dashboard';
import Profil from './components/NestedRoutes/Profil';
import Settings from './components/NestedRoutes/Settings';
import NotFound from './components/NotFound';
import Welcome from './components/Navigate/Welcome';
import Goodbye from './components/Navigate/Goodbye';
import ProductList from './components/DynamicRoutes/ProductList';
import Products from './components/DynamicRoutes/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='goodbye' element={<Goodbye />} />

        {/* NESTED ROUTES */}
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='profil' element={<Profil />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* DYNAMIC ROUTES */}
        <Route path='products' element={<ProductList />} />
        <Route path='products/:productId' element={<Products />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
