import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { fetchWooProducts } from "@/utils/woo-commerce-api";
import { Product } from "@/utils/woo-commerce-types";

const inter = Inter({ subsets: ['latin'] })

// declare types for the functional component props
interface Props {
  products : Product[];
}

export default function Home(props: Props) {
  //destructure props
  const { products } = props;
  console.log("--WooCommerce Products: ", products);

  return (
   <h1 className="p-2 text-4x uppercase ${inter.className}">
      Hello! Wasted a Lot of Time
   </h1>

  );
}


export const getStaticProps : GetStaticProps = async()=> {
    const wooCommerceProducts = await fetchWooProducts().catch((error)=>
    console.error(error)
  );
  if(!wooCommerceProducts){
    return{
      notFound : true,
    };
  }

  return{
    props:{
      products: wooCommerceProducts.data,
    }
  };
}