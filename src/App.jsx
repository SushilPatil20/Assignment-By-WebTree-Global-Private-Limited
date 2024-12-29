import { useEffect, useState } from "react";
import { getUsers } from "./services/api";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedIndexs, setSelectedIndexs] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const apiUsers = await getUsers();
      if (apiUsers) setUsers([...users, ...apiUsers]);
    };
    fetchUser();
  }, []);

  const deleteCards = () => {
    const filteredArray = users.filter(
      (_, index) => !selectedIndexs.includes(index)
    );
    setUsers([...filteredArray]);
    setSelectedIndexs([]);
  };

  const toggleSelection = (index) => {
    setSelectedIndexs((prevState) =>
      prevState.includes(index)
        ? prevState.filter((idx) => idx !== index)
        : [...prevState, index]
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6 py-12 space-y-4">
        {users.map((user, index) => (
          <Profile
            key={index}
            user={user}
            idx={index}
            handleSelectedIndexs={toggleSelection}
            isSelected={selectedIndexs.includes(index)}
          />
        ))}
      </div>
      <Footer users={users} setUsers={setUsers} deleteCards={deleteCards} />
    </div>
  );
}

export default App;
