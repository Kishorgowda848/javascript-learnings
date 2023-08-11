import {Link} from 'react-router-dom'
export const CardComponent = ({title,completed,image,id})=>{
    console.log(title,"iiiii",completed,image)

    
    return (<>
    <Link to={'details/'+id}>
    <div style={{'padding': '1%'}}>
    <img src={image} />
    <h6>{title}</h6>
    <p>{completed}</p>
    </div>
    </Link>
    </>);
}