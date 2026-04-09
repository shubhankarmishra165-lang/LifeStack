import './password.css'
import { useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import  Card from './Card'
const Password=()=>{
  const [passwordList,setpasswordList]=useState([])
  const [userName,setuserName]=useState('')
  const [userpassword,setuserpassword]=useState('')
  const [sitename,setsitename]=useState('')
  const [search,setsearch]=useState('')
  const [error,seterror]=useState('')
  const [showpassword,setshowpassword]=useState({})
  // Load data
useEffect(() => {
  const data = JSON.parse(localStorage.getItem('passwords')) || []
  setpasswordList(data)
}, [])

  // save data
  useEffect(()=>{
   localStorage.setItem('passwords',JSON.stringify(passwordList))
  },[passwordList])
  
  const onchangeUser=(event)=>{
    setuserName(event.target.value)
  }
  const onChangePassword=(event)=>{
    setuserpassword(event.target.value)
  }
  const onChangesiteName=(event)=>{
    setsitename(event.target.value)
  }
  const addCard=(event)=>{
    event.preventDefault()
    if(userName.trim()===''||userpassword.trim()===''||sitename.trim()===''){
      seterror('⚠️ Please fill all fields')
    }
    else{
    seterror('')
    const newCard = {
    id: uuidv4(),
    userName,
    userpassword,
    sitename
  }
  console.log(newCard)
  setpasswordList([...passwordList, newCard])
    setuserName('')
    setuserpassword('')
    setsitename('')
  }
}
  // Search
  const FilterList=passwordList.filter(each=>
    each.sitename.toLowerCase().includes(search.toLowerCase())
  )
  // Delete
  const deleteCard=(id)=>{
    const Filter=passwordList.filter(each=>each.id!==id)
    setpasswordList(Filter)
  }
  //show Password
  const togglepassword = (id) => {
  setshowpassword(prev => ({
    ...prev,
    [id]: !prev[id]
  }))
}
  
    return(
      <>
      <div className='search-card'>
        <input type="search"
         placeholder='Search Through Site...'
          className='search-title'
           value={search}
           onChange={(e)=>setsearch(e.target.value)}
           >
           </input>
      </div>
       <div className='password'>
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f512/512.webp" type="image/webp"/>
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f512/512.gif" alt="🔒" width="120" height="122"/>
        </picture>
        <div >
      <h1 className='form-fill'><span className='add'>ADD</span> PASSWORD</h1>
    <form className='form-card' onSubmit={addCard}>
      <label htmlFor='title' className='title'>
        Site Name
      </label>
      <input
          className="Title"
          placeholder="Title"
          value={sitename}
          onChange={onChangesiteName}
        />
    <label htmlFor='description' className='title'>
        User_Name
      </label>
      <input placeholder="User Name" 
      className="Title" 
      id='description'
      value={userName}
      onChange={onchangeUser}
      >
      </input>

      <label htmlFor='description' className='title'>
        Password
      </label>
      <input type="password" 
      placeholder="Password"
      className="Title" 
      id='description'
      value={userpassword}
      onChange={onChangePassword}
      >
      </input>
      <p className='para'>{error}</p>
      <button className='submit-btn' type='submit'>Add</button>
    </form>

    
    </div>
    </div>
    <div className="card-container">
          {FilterList.map((each) => (
          <Card
            key={each.id}
            each={each}
            deleteCard={deleteCard}
            showpassword={showpassword}
            togglepassword={togglepassword}
            />
          ))}
        </div>
    </>
    )
}
export default Password