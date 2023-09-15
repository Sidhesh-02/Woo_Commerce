import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { NextResponse } from "next/server";


//initialise the WoocommerceRestApi
const api = new WooCommerceRestApi({
    url : "http://sneakerstreet.local",
    consumerKey: process.env.WOOCOMMERCE_KEY!,
    consumerSecret: process.env.WOOCOMMERCE_KEY!,
    version : "wc/v3"
});

//fetch all products from WooCommerce

export async function fetchWooProducts()
{
    try{
        const response = await api.get("products");
        return response;
    }
    catch(error){
        throw new NextResponse("An Error Occurred.");
    }
}

