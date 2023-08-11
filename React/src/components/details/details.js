import {useParams} from 'react-router-dom';
import { useDetails } from '../../hooks/useDetails';

export const Details = ()=>{

    const { id } = useParams();
    const product = useDetails(id);
    return (<>
    {id}
    <p>{product?.title}</p>
    <img src={product?.image}></img>
    </>)
}