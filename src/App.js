import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Searcher from "./places/components/Searcher";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <MainNavigation />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <div>
                  <Searcher />
                </div>
                <Users />
              </>
            }
          ></Route>

          <Route path="/:userId/places" exact element={<UserPlaces />}></Route>

          <Route path="/places/new" exact element={<NewPlace />}></Route>

          <Route path="/places/:placeId" element={<UpdatePlace />}></Route>

          <Route path="/auth" element={<Auth />}></Route>
          <Route path="*" exact element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
