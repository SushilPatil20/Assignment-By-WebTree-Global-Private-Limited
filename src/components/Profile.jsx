import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6 py-14">
      <div className="bg-white shadow-lg rounded-xl p-3 md:p-6 md:flex md:items-center max-w-2xl w-full ">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-10 space-y-6">
          <div className="text-xl font-semibold text-gray-600 flex items-center justify-between">
            <p className="text-base md:text-lg">
              First Name :{" "}
              <span className="text-sm md:text-base">{user.name.first}</span>
            </p>
            <p className="text-base md:text-lg">
              Last Name :{" "}
              <span className="text-sm md:text-base">{user.name.last}</span>
            </p>
          </div>
          <div>
            <span className="text-gray-600 font-semibold md:text-lg">
              Gender :{" "}
            </span>
            <span className="text-gray-600 text-sm md:text-base font-semibold">
              {user.gender}
            </span>
          </div>
          <div>
            <span className="text-gray-600 font-semibold md:text-lg">
              Phone :{" "}
            </span>
            <span className="text-gray-600 font-semibold text-sm md:text-base">
              {user.phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
