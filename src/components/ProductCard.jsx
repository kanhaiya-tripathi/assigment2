import React,{useState,useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios'


export default function ProductCard() {
 const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; MyApp/1.0)",
            Accept: "application/json",
          },
        });
        setProducts(response.data);
      } catch (error) {
        setProducts([]);
      }
    }

    fetchData();
  }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m-6 mx-auto max-w-[1280px] gap-6">
            {products.map((image, index) => (
                <div key={index} className="flex flex-col rounded-md relative">
                    <img
                        src={image.image}
                        alt={image.title}
                        // width={280}
                        // height={375}
                        className="rounded-tl-lg rounded-tr-md h-[300px] "
                    />
                    <Image src="/images/bookmark-1.png" height={34} width={26} alt={"bookmark"} className="absolute top-4 right-4 text-[#E5DFD9] cursor-pointer" />
                    <p className="flex items-center  tracking-[0.8px] text-[#E5DFD9] mt-2">{image.title}</p>
                    <div className="flex  justify-between ">
                        <div className="flex space-x-[4px] ">
                            <span className="inline-block mt-2.5">₹{image.price}</span>
                            <span className="line-through text-[11.6px] text-[#E5DFD9] inline-block mt-4">{image.originalPrice}</span>
                            <span className="inline-block mt-4 text-[#2FC14F] text-[11.6px]">{image.discount}</span>
                        </div>
                        <Image src="/images/shopping-bag.png" height={40} width={26} alt={"shopping bag"} className='cursor-pointer' />
                    </div>
                </div>
            ))
            }
        </div >
    );
}
