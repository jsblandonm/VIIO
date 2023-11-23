import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> Home Page</h1>} />
        <Route path="/login" element={<h1> Login</h1>} />
        <Route path="/register" element={<h1> Register </h1>} />
        <Route path="/products" element={<h1> Task Page </h1>} />
        <Route path="/add-products" element={<h1> new task </h1>} />
        <Route path="/tasks/:id" element={<h1> Update task </h1>} />
        <Route path="/profile" element={<h1> profile </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
