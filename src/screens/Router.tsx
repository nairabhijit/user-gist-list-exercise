import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./UserForm";
import UserGists from "./UserGists";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/users/:username" element={<UserGists />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
