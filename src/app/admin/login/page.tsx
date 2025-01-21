'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
  const [loading,setLoading] = useState(false);
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const router = useRouter();

  const loginHandler = (e : React.FormEvent)=>{
    e.preventDefault();
    setLoading(true);
    // Get username and password from process.env and form and compare them
    if(password === process.env.PASSWORD && userName === process.env.USER_NAME){
      // sign username and password using jwt
      // set that token on local storage
      router.push('/admin')
    }
    // toast message of 'Either userName or Password is incorrect'
    router.push('/');
  }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Login
            </h2>
            <form onSubmit={loginHandler}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Username
                </label>
                <input
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                  type="text"
                  id="username"
                  placeholder="Enter admin username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="Enter admin password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
              >
                {loading ? "Logging In ..." : "Login" }
              </button>
            </form>
          </div>
        </div>
      );
}

export default page