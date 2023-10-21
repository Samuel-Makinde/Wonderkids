import { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";








const LearnToCode = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([])
  
  const navigate = useNavigate();

  const authFetch = axios.create({
    withCredentials: true,
})

authFetch.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 404 || error.response.status === 500) {
            navigate('/login');
        }
        return Promise.reject(error);
    }
)
  const baseUrl = import.meta.env.VITE_BASE_URL;
  


  const url = `${baseUrl}/files`;

  const fetchPDF = async () => {
  setLoading(true)
    try {
      const response = await authFetch.get(url);
      const result = response.data.documents
      console.log(result, "this is result")
      setProducts(result)
      console.log(setProducts, "this is products")
      console.log(products, "this is products product")
     
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchPDF();
  }, []);

 


  return (
    <Layout>
       <main className={`w-full h-full md:pt-[60px]  mb-14 `}>
        <div>
          {products.map((product) => {
            return (
              <div key={product._id} className="w-full h-full md:flex md:justify-evenly  pt-[70px]">
               <video className=" w-full md:w-[50%] h-[400px] px-4 md:px-0 "  src={product.path}  controls  loop  preload="metadata"></video>
               
               <div className="w-full py-6 md:py-0 px-6 md:w-[40%]">
                <p className="text-[24px] font-bold text-[rgb(239,116,24)] ">
                {product.name}
                </p>
               {product.description && <div className="font-medium mt-[30px]">
                <span className="text-[rgb(239,116,24)]">Description: </span>
                {product.description}
                </div>}

               </div>
               
              </div>
            )
          })}
        </div>
       
      {loading && <LoadingSpinner />}

      </main>
    </Layout>
  );
};

export default LearnToCode;