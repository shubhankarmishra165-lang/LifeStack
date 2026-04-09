import './index.css'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
// import { format } from "date-fns"
 import AppointmentItem from '../AppointmentItem'

const Events = () => {
  // const [isLoading, setisLoading] = useState(true)
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setisLoading(false)
  //   }, 3000)
  // }, [])

  // const [appointment, setappointment] = useState([])
  // const [title, settitle] = useState('')
  // const [dateTime, setdateTime] = useState('')
  // const [isFilterActive, setisFilterActive] = useState(false)
  // const [errorMessage, seterrorMessage] = useState('')
  // const [description, setdescription] = useState('')

  // if (isLoading) {
  //   return (
  //     <div className='loader-container'>
  //       <picture>
  //         <source
  //           srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
  //           type="image/webp"
  //         />
  //         <img
  //           src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.gif"
  //           alt="🐬"
  //           width="60"
  //           height="60"
  //         />
  //       </picture>
  //     </div>
  //   )
  // }

  // useEffect(() => {
  //   const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || []
  //   setappointment(storedAppointments)
  // }, [])

  // const onFilter = () => {
  //   setisFilterActive(prevState => !prevState)  // ✅ FIXED
  // }

  // useEffect(() => {
  //   if (appointment.length > 0) {
  //     localStorage.setItem('appointments', JSON.stringify(appointment))
  //   }
  // }, [appointment])

  // const toggleIsStarred = id => {
  //   setappointment(prevList =>
  //     prevList.map(appt =>
  //       id === appt.id
  //         ? { ...appt, isStarred: !appt.isStarred }
  //         : appt
  //     )
  //   )
  // }

  // const onchangeTitle = (event) => {
  //   settitle(event.target.value)
  // }

  // const onchangeDate = (event) => {
  //   setdateTime(event.target.value)
  // }

  // const onchangeDescription = (event) => {  // ✅ FIXED - two 'n's
  //   setdescription(event.target.value)
  // }

  // const onAddappointment = event => {
  //   event.preventDefault()
  //   if (!title || !dateTime || !description) {
  //     seterrorMessage("Please fill all the details!!")
  //     return
  //   }

  //   const formattedDate = format(new Date(dateTime), 'dd MMMM yyyy, EEEE')

  //   const newAppointment = {
  //     id: v4(),
  //     title: title,
  //     date: formattedDate,
  //     description: description,
  //     isStarred: false,
  //   }

  //   const updatedAppointmentsList = [...appointment, newAppointment]
  //   setappointment(updatedAppointmentsList)

  //   settitle('')
  //   setdateTime('')
  //   seterrorMessage('')
  //   setdescription('')
  // }

  // const getFilteredAppointmentsList = () => {
  //   if (isFilterActive) {
  //     return appointment.filter(appt => appt.isStarred === true)
  //   }
  //   return appointment
  // }

  // const filterClassName = isFilterActive ? 'filter-filled' : 'filter-empty'
  // const filteredAppointmentsList = getFilteredAppointmentsList()

  // return (
  //   <div className='app-container'>
  //     <div className="responsive-container">
  //       <div className="appointments-container">
  //         <div className="add-appointment-container">
  //           <form className="form" onSubmit={onAddappointment}>
  //             <h1 className="add-appointment-heading">Add Appointment</h1>
              
  //             <label htmlFor="title" className="label">TITLE</label>
  //             <input
  //               type="text"
  //               id="title"
  //               value={title}
  //               onChange={onchangeTitle}
  //               className="input"
  //               placeholder="Title"
  //             />

  //             <label htmlFor="date" className="label">DATE</label>
  //             <input
  //               type="date"
  //               id="date"
  //               value={dateTime}
  //               onChange={onchangeDate}
  //               className="input"
  //             />

  //             <label htmlFor="description" className="label">DESCRIPTION</label>
  //             <textarea
  //               id="description"
  //               value={description}
  //               onChange={onchangeDescription}  // ✅ FIXED
  //               className="input"
  //             />

  //             {errorMessage && <p className="error-message">{errorMessage}</p>}
  //             <button type="submit" className="add-button">Add</button>
  //           </form>

  //           <img
  //             src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
  //             alt="appointments"
  //             className="appointments-img"
  //           />
  //         </div>

  //         <hr className="hr" />

  //         <div className="header-with-filter-container">
  //           <h1 className="appointments-heading">Appointments</h1>
  //           <button
  //             type="button"
  //             className={`filter-style ${filterClassName}`}
  //             onClick={onFilter}
  //           >
  //             Starred
  //           </button>
  //         </div>

  //         <ul className="appointments-list">
  //           {filteredAppointmentsList.map(eachAppointment => (
  //             <AppointmentItem
  //               key={eachAppointment.id}
  //               appointmentDetails={eachAppointment}
  //               toggleIsStarred={toggleIsStarred}
  //             />
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
  <>
   <div className='search-card'>
        <input type="search" placeholder='Search Through Title...' className='search-title'></input>
      </div>
    <div className='app-container'>
    <div className='set-pen-form'>
    <div className='pen' >
        <picture>
          <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp" type="image/webp"/>
          <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.gif" alt="🎯" width="120" height="120"/>
        </picture>
         <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-img"
            />
    </div>
    <div >
      <h1 className='form-fill'><span className='add'>ADD</span> APPOINTMENT</h1>
    <form className='form-card'>
      <label htmlFor='title' className='title'>
        Title
      </label>
      <input
          className="Title"
          placeholder="Title"
        />
      <label htmlFor='description' className='title'>
        Description
      </label>
      <textarea placeholder="Description" className="description" id='description'>

      </textarea>
      <label htmlFor="date" className="title">DATE</label>
      <input
        type="date"
        id="date"
        className="Title"
        name="date" 
        required
        min="2026-01-01"
        max="2030-12-31"
      />
      <button className='submit-btn'>Add</button>
    </form>
    </div>
    </div>
    <ul>
    </ul>
    </div>
    </>
  )
}

export default Events