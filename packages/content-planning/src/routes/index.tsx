import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContentTypes from "./content-types";
import AddContentType from "./content-types/add";
import EditContentType from "./content-types/edit";
import Root from "./root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<ContentTypes />} />
      <Route path="/add" element={<AddContentType />} />
      <Route path="/edit/:id" element={<EditContentType />} />
    </Route>
  )
);

export default router;
