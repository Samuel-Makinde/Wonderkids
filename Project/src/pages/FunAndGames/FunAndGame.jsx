import Layout from "../../layout/Layout"
import games from "../../data/Games";


const FunAndGame = () => {
  return (
    <Layout>

    <div className="w-full px-4 bg-white mb-12">
      {/* front page */}

      <div className="text-center pt-[120px]">
        <h2 className="md:text-5xl text-[24px] font-bold">
          Play Games of your choice 
        </h2>
        <p className="pt-[15px] text-[18px] text-gray-700">
          engage in brain tasking games 
        </p>
      </div>

      <section className="mb-[60px] ">
        {games.map((product) => {
         return (
              <div key={product.id} className="w-full h-full md:flex md:justify-evenly  pt-[70px]">
               <video className=" w-full md:w-[50%] h-[400px] px-4 md:px-0 "  src={product.link}  controls  loop  preload="metadata"></video>
               
               <div className="w-full py-6 md:py-0 px-6 md:w-[40%]">
                <p className="text-[24px] font-bold text-[rgb(239,116,24)] ">
                {product.title}
                </p>
               {product.description && <div className="font-medium mt-[30px]">
                <span className="text-[rgb(239,116,24)]">Description: </span>
                {product.description}
                </div>}

               </div>
               
              </div>
            )
         })}
      </section>
    </div>
    </Layout>

  );
};

export default FunAndGame;