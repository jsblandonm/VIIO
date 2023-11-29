import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchProduct from "./components/SearchProduct";
import Panel from "./components/Panel";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import men_banner from "../src/assets/banner_mens.png";
import women_banner from "../src/assets/banner_women.png";
import kid_banner from "../src/assets/banner_kids.png";

function App() {
  return (
    <TaskProvider>
      <AuthProvider>
        <BrowserRouter>
          {/* Componente de navegación compartido */}
          <Navbar />

          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Rutas de productos */}
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Product />} />

            {/* Rutas protegidas */}
            <Route element={<ProtectedRoute />}>
              {/* Categorías de tienda */}
              <Route
                path="/mens"
                element={<ShopCategory banner={men_banner} category="men" />}
              />
              <Route
                path="/womens"
                element={
                  <ShopCategory banner={women_banner} category="women" />
                }
              />
              <Route
                path="/kids"
                element={<ShopCategory banner={kid_banner} category="kid" />}
              />

              {/* Otras rutas protegidas */}
              <Route path="/buscar" element={<SearchProduct />} />
              <Route path="/panel" element={<Panel />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>

          {/* Componente de pie de página compartido */}
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </TaskProvider>
  );
}

export default App;
