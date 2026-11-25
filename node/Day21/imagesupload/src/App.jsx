import { useState } from "react";

import AddUser from "./components/AddUser";
import ShowUsers from "./components/ShowUsers";

const App = () => {

  const [refresh, setRefresh] = useState(0);

  const refreshUsers = () => {

    setRefresh((prev) => prev + 1);

  };

  return (
    <>
      <h1>User Image Management</h1>

      <AddUser refreshUsers={refreshUsers} />

      <hr />

      <ShowUsers refresh={refresh} />
    </>
  );
};

export default App;