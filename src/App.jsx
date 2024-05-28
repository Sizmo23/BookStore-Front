import { Route, Routes } from "react-router-dom";
import ShowBooks from "./pages/ShowBooks.jsx";
import DeleteBooks from "./pages/DeleteBooks.jsx";
import UpdateBooks from "./pages/UpdateBooks.jsx";
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";

const App = () => {
  console.log('abc123');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBooks />} />
        <Route path="/books/update/:id" element={<UpdateBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />
      </Routes>
    </>
  );
};

export default App;
