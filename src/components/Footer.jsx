import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const Footer = ({ users, setUsers, deleteCards, cardIndex }) => {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchUser = async (count) => {
      const apiUsers = await getUsers(count);
      setUsers([...users, ...apiUsers]);
    };
    fetchUser(count);
  }, [count]);

  const onChangeOfInput = async (e) => {
    const seed = e.target.value;
    setInput(seed);
    setCount(1);
    const apiUsers = await getUsers(1, 2, seed);
    setUsers([...apiUsers]);
  };

  return (
    <footer className=" min-h-20 bg-slate-600 text-white w-full p-6">
      <div className="w-1/2 mx-auto ">
        <input
          className="text-black px-4 py-2 rounded-lg border-none outline-none w-full"
          value={input}
          type="text"
          onChange={onChangeOfInput}
        />
        <div className="mt-6 md:space-x-4 md:flex md:items-center w-fit mx-auto">
          <button
            className="px-6 py-3 rounded-lg text-white bg-slate-900"
            onClick={() => setCount(count + 1)}
          >
            increment : Count - {count}
          </button>

          <button
            onClick={deleteCards}
            className="px-6 py-3 rounded-lg text-white bg-red-600"
          >
            Delete Card
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
