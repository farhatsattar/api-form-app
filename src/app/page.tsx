"use client"
import { useEffect, useState } from "react";



export default function Home() {

  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userContact, setUserContact] = useState("");
 
 

  useEffect(()=>{
    getUsers()

  },[])

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users");
    if (response.ok) {
      const UserData = await response.json();
      setUserData(UserData);
    } else {
      console.error("Failed to fetch users");
    }
  };
  const handleName= (e:any)=>{
    setUserName(e.target.value)
  }
  const handlecontactnumber= (e:any)=>{
    setUserContact(e.target.value)
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    const userObject={
     name : userName,
     contactnumber:userContact
 
    }
 
    const requestBackend= await fetch("http://localhost:3000/api/users",{
      method:"POST",
      headers:{
          'content-type' :'application/json'
      },
      body:JSON.stringify(userObject)
  })
  if(requestBackend.ok){
    getUsers()
    setUserName("")
    setUserContact("")
  }

  
  
};
    
return(
<>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="contactnumber">
            Contact Number
          </label>
          <input
            type="text"
            id="contactnumber"
            value={userContact}
            onChange={(e) => setUserContact(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 mt-5">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {userData.length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-2 px-4 text-center border-b">No users found</td>
                </tr>
              ) : (
                userData.map((user:any) => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.contactnumber}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}






















