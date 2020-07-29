import React,{useState} from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar'
import ListCards from './components/ListCards'
import pixabayURL from './apiConfig'
import Pagination from './components/Pagination';

const App = () => {

 const [result, setResult] = useState([]);//result of API query 
 const [error,setError] = useState(null)
 const [value, setValue] = useState('') //Value of searching form
 const [pagination, setPagination] = useState({page:1,maxPages:99}) 


 //*<----------Fetch--------->
 const fetchResource = async () =>{
  try {
      let query = pixabayURL + `&q=${value}&image_type=photo&page=${pagination.page}`
      let res = await fetch(query)
      let data = await res.json()
      //console.log(data)
      let hits = data['hits']
      pagination.maxPages = Math.round(data['total']/20) //Round total hits/PER_PAGE 
      //console.log("Max Pages: " + pagination.maxPages)
      //console.log(hits)
      setResult(hits)
      setError(null)
      //setLoading(false)

  } catch (error) {
      //setLoading(false)
      setError(error)
  }
}

 //*  <----------Handle on Submit---------->
 const handleSubmit = (e) =>{
   e.preventDefault() //Prevent reload
   pagination.page = 1
   if(value !== ''){
    fetchResource();
   }
   else{
     alert("Introduzca un valor de búsqueda")
   }
 }

 //*  <----------Handle on Change---------->
 const handleChange = (e)=>{
  setValue(e.target.value)
  //console.log(value)
 }

 //*<---------- Pagination ------------->
 const handlePaginationNext =() => {
  if((pagination.page < pagination.maxPages)&& (error==null) && (result.length>0)){
    pagination.page ++
    //console.log(`page ${pagination.page}`)
    fetchResource()
    
  } 
 }

 const handlePaginationPrev =() => {
   if((pagination.page > 1) && (error==null) && (result.length>0)){
    pagination.page --
    //console.log(`page ${pagination.page}`)
    fetchResource()
   }
}

 //* <---------- Render ----------->
  if(error){
    return <div> No se ha podido cargar la busqueda </div>
  }
  return (
    <React.Fragment >
      <SearchBar 
        onSubmit= {handleSubmit}
        onChange = {handleChange}
        value = {value}/>
      <ListCards data = {result} />
      <Pagination
        onNext = {handlePaginationNext}
        onPrev = {handlePaginationPrev}
      />
    </React.Fragment>
  );
}

export default App;
