import { useState } from 'react'
import Footer from '../Components/Footer'
import {Header} from '../Components/Home'

function Reservation() {
const [user,setUser]=useState('')
const[phone,setPhone]=useState('')
const [date,setDate]=useState('')
const[time,setTime]=useState('')
const[guest,setGuest]=useState('')
const [occasion,setOccasion]=useState('')
const handleUser=(e)=>{
  e.preventDefault()
  setUser(e.target.value)
  }

const handleTime=(e)=>{
  e.preventDefault()
  setTime(e.target.value)
}
const handleGuest=(e)=>{
  e.preventDefault()
  setGuest(e.target.value)
}
const handleOccasion=(e)=>{
  e.preventDefault()
  setOccasion(e.target.value)
}
const handleSubmit=(e)=>{
 
  
  alert(`Table has been booked for:
  ${user}
  Contact:${phone}
  Date: ${date}
  Time: ${time}
  Number of guests: ${guest}
  Occasion: ${occasion}`)
 setUser('')
 setPhone('')
 setDate('')
 setGuest('')
}




  return(
  <>
  
  <Header text='No more hastle !
  Easily book a table at Litle lemon
  through the online reservation form. '/>
  <h1 className='booking'>Book a table at Little Lemon</h1>
  <form className='form-container'>
      <label htmlFor='res-name' className='label' >Name</label>
      <input type="text" id="resName" className='input'  value={user} required onChange={handleUser}/>
      <label htmlFor='res-number' className='label'>Mobile number</label>
      <input type="number" id="res-number" className='input'  value={phone} required onChange={(e)=>{setPhone(e.target.value)}}/>
      <label htmlFor='res-date' className='label'>Choose Date</label>
      <input type="date" id="res-date" className='input' required  value={date} onChange={(e)=>{setDate(e.target.value)}}/>
      <label for="res-time" className='label'>Choose time</label>
   <select id="res-time " className='input' required  value={time} onChange={handleTime}>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests" className='label'>Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" className='input' required  value={guest} onChange={handleGuest}/>
   <label for="occasion" className='label'>Occasion</label>
   <select id="occasion" className='input' required  value={occasion} onChange={handleOccasion}>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Office meeting</option>
      <option>Get-togethering</option>
   </select>
   <input type="submit" value="Make Your reservation" className='input btn' disabled={!user+!guest} onClick={handleSubmit}/>
  </form>
  <Footer/>
 </>
 )
}
export default Reservation