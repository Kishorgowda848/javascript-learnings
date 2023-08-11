import { useState , useEffect} from  'react'

export const useDetails = (productId)=>{

    const [product,setProduct] = useState(null);

    useEffect(()=>{
        (async()=>(
            setProduct(await getDetails(productId))
        ))();

        return ()=>{
            console.log("Component Destroying ")
        }
    },[]);

    return product;
}


async function getDetails(id){
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    return  (await data.json());
}
