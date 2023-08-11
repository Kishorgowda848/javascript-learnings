import {useRouteError} from 'react-router-dom';

export const Error = ()=>{

    const err = useRouteError();
    
    return (<>
    <p>{err.status} :- {err.statusText}</p>
    Oops!!
    Something went wrong !
    </>)
}