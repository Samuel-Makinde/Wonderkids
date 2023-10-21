import React, {useState, useContext, useEffect,} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";




const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    const [user, setUser] =useState(null)
    const [books, setBooks] =useState([])
    const [userId, setUserId] = useState([])
  const baseUrl = import.meta.env.VITE_BASE_URL;




    const Login = async (data, e) => {
  e.preventDefault();
  setLoading(true)
  try {
    const response = await axios.post(`${baseUrl}/login`, {
        email: data.email,
        password: data.password,
      }, {
              withCredentials: true,
})
    setLoading(false)
    setUser(response.data.username)
    setUserId(response.data.userId)
    navigate("/");
  } catch (error) { 
    setLoading(false)
    toast.error(error.response.data.msg, {
    autoClose: false,
    closeOnClick: true,
    onClose: () => {
  },
});
  }
};


const fetchUser = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/showMe`, {},
      {
        withCredentials: true, // Include cookies in the request
      }
      );
      setUser(data.username);
    } catch (error) {
      setUser(null);
    }
    setLoading(false);
  };

    useEffect(() => {
   const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUser(storedUsername);
        } else {
            fetchUser();
        }
  }, []);


const LogOut = async (e, ) => {
  e.preventDefault();
  setLoading(true)
  try {
    const axiosInstance = axios.create({
      withCredentials: true,
    });

    // Send the user ID in the request body
    const response = await axiosInstance.post(
      `${baseUrl}/logOut`,
      { user: userId } // Include the user ID in the request body
    );
   setLoading(false)
   setUser(null);
    navigate("/");
  } catch (error) {
    setLoading(false)
    toast.error(error.response.data.msg, {
    autoClose: false,
    closeOnClick: true,
    onClose: () => {
  },
});
  }
  

}

  // const getBooks = async () => {
  //   try {
  //     const response = await axios.get("https://jupeb-site-backend.onrender.com/api/v1/books")
  //   setBooks(response.data)
  //   } catch (error) {
  //   }
  // }

  //  useEffect(() => {
  //   getBooks();
  // }, []);


  return (
    <UserContext.Provider
     value={{
      loading,
      user,
      books,
      setUser,
      Login,
      setLoading,
      LogOut
     }}
    >
      {children}
    </UserContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
