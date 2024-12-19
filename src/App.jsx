import { useEffect, useState } from "react";
import { getUsers } from "./services/api";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUsers();
      if (user) setUser(user);
    };
    fetchUser();
  }, []);

  return <div>{user && <Profile user={user} />}</div>;
}

export default App;
