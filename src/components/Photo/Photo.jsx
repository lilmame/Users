import useFetch from "../../hooks/useFetch"
import CircularProgress from '@mui/material/CircularProgress';


export default function Photo({params}){
	const { data, error } = useFetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
	
	return (
		<div className='photo'>
      {
        (!data&&!error) ? <CircularProgress/> :
          error ? <p style={{color:'red'}}>Error:{error.toString()}</p> :
            data.map(photo => (
               <Photo key={'photo'+ photo.id} title={photo.title} url={photo.url}/> 
            ))
      }
    </div>
	)
}