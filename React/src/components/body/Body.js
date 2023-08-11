import { useEffect, useState } from "react";
import { useOnline } from "../../hooks/useOnline";
import { CardComponent } from "../card/card";
import ShimmerUi from "../shimmer-ui/product";

export const BodyComponent = ()=>{


    const [searchText,setSearchText] = useState('Kishore')
    const [productList,setProductList] = useState([]);

    useEffect(()=>{
    apiCall();

     return ()=>{
        console.log("Destroying the component")
     }
    },[]);

    async function apiCall(){
        const data = await fetch(`https://fakestoreapi.com/products`);
        // console.log(await data.json());
        setProductList(await data.json());
    }
      

    const search = ()=>{
        console.log(originalProductList)
        setProductList(searchProductList(searchText,[]))
    }

     const isOnline = useOnline();

     if(!isOnline){
      return (<>
      <h1>Hey Your are offline</h1>
      </>)
     }

    const flexContainer = {
        display:'flex',
    }
    return (<>
        <input value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }}/>
        <button onClick={search}>Search - {searchText}</button>

    {
    productList.length==0?(<ShimmerUi/>):(
        <div style={flexContainer}>
        {
            productList.map((record)=>{
            return  <CardComponent {...record}/>
            })
        }
        </div> 
    )  
    }

     {/* This is body component */}
    </>);

  }

function searchProductList(searchText,productList){
    return productList.filter(record=>record?.name?.includes(searchText));
}
