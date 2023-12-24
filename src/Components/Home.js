import React from 'react'
import food from '../icons_assets/restauranfood.jpg'
import  salad from '../icons_assets/greek salad.jpg'
import delivery from '../icons_assets/local_shipping_FILL0_wght400_GRAD0_opsz24.svg'
import user1 from '../icons_assets/user1.png'
import user2 from '../icons_assets/user2.jpg'
import owner1 from '../icons_assets/Mario and Adrian A.jpg'
import owner2 from '../icons_assets/Mario and Adrian b.jpg'
import '../App.css'

const Header=()=>{
    return(
        <header className='header'>
            <div className='intro'>
                <h1 className='heading'>Little Lemon</h1>
                <h2 className='heading-two'>Chicago</h2>
                <p className='para'>We are a family owned
                    meditteranean restaursant,
                    focused on traditional recipes served with a 
                    modern twist.
                </p>
            </div>
            <img src={food} alt='food' className='hero'/>
        </header>
    )
}

const SpecialsSection=()=>{
    return(
        <section>
        <div className='section'>
            <div className='section-info'>
                <h1 style={{'fontSize':'2.5rem'}}>This week's specials !</h1>
                
            </div>
            < div className=''>
            <button className='btn'>Online Menu</button>
            </div>
        </div>
        <div className='card-main'>
            <div className='card-details'>
                <img src={salad} alt='food' className='food-image'/>
                <div className='title'>
                    <h2>Greek salad</h2>
                    <p style={{'color':'#ee9972'}}><strong>$ 12.99</strong></p>
                </div>
                <div>
                    <p style={{'padding':'5px'}}>The famous Greek salad of crispy lettuce, peppers,
                        olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary petals.
                    </p>
                </div>
                <div className='set'>
                    <p><strong>Order a Delivery</strong></p>
                    <img src={delivery} alt='deliverylogo'/>
                </div>
            </div>
            <div className='card-details'>
            <img src={salad} alt='food' className='food-image'/>
                <div className='title'>
                    <h2>Greek salad</h2>
                    <p style={{'color':'#ee9972'}}><strong>$ 12.99</strong></p>
                </div>
                <div>
                    <p style={{'padding':'5px'}}>The famous Greek salad of crispy lettuce, peppers,
                        olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary petals.
                    </p>
                </div>
                <div className='set'>
                    <p><strong>Order a Delivery</strong></p>
                    <img src={delivery} alt='deliverylogo'/>
                </div>
            </div>
            <div className='card-details'>
            <img src={salad} alt='food' className='food-image'/>
                <div className='title'>
                    <h2>Greek salad</h2>
                    <p style={{'color':'#ee9972'}}><strong>$ 12.99</strong></p>
                </div>
                <div>
                    <p style={{'padding':'5px'}}>The famous Greek salad of crispy lettuce, peppers,
                        olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary petals.
                    </p>
                </div>
                <div className='set'>
                    <p><strong>Order a Delivery</strong></p>
                    <img src={delivery} alt='deliverylogo'/>
                </div>
            </div>
        </div>
        </section>
    )
}

const Testimonials=()=>{
    return(
       
       <>
        <section className='testimonials'>
             <p className='center'>Testimonials</p>
        </section>
        <section className='test-section '>
            <div className='each-testimonial'>
                <div className='user-info'>
                <div className='user'>
                    <img src={user1} alt="user" className='userpic'/>
                </div>
                <div>
                    <ul style={{'listStyleType':'none'}}>
                        <li style={{'fontSize':'1.2rem', 'fontWeight':'600', 'color':'#495657'}}>User Name</li>
                        <li style={{'fontSize':'0.8rem', 'fontWeight':'600', 'color':'#495657'}}>some Info</li>
                    </ul>
                </div>
                </div>
                <p style={{'textAlign':'right', 'marginLeft':'5em'}}>⭐⭐⭐⭐⭐</p>
                <div>
                    <h3 style={{'color':'#495657','fontWeight':'500' , 'paddingTop':'1rem'}}>Great customer service</h3>
                    <p style={{'color':'#495657','fontWeight':'400' , 'paddingTop':'1rem'}}>I highly recommend this place,
                        The place is good and has good food.
                    </p>
                </div>
            </div>
            <div className='each-testimonial'>
            <div className='user-info'>
                <div className='user'>
                    <img src={user2} alt="user" className='userpic'/>
                </div>
                <div>
                    <ul style={{'listStyleType':'none'}}>
                        <li style={{'fontSize':'1.2rem', 'fontWeight':'600', 'color':'#495657'}}>User Name</li>
                        <li style={{'fontSize':'0.8rem', 'fontWeight':'600', 'color':'#495657'}}>some Info</li>
                    </ul>
                </div>
                </div>
                <p style={{'textAlign':'right', 'marginLeft':'5em'}}>⭐⭐⭐⭐⭐</p>
                <div>
                    <h3 style={{'color':'#495657','fontWeight':'500' , 'paddingTop':'1rem'}}>Great customer service</h3>
                    <p style={{'color':'#495657','fontWeight':'400' , 'paddingTop':'1rem'}}>I highly recommend this place,
                        The place is good and has good food.
                    </p>
                </div>
            </div>
            <div className='each-testimonial'>
            <div className='user-info'>
                <div className='user'>
                    <img src={user1} alt="user" className='userpic'/>
                </div>
                <div>
                    <ul style={{'listStyleType':'none'}}>
                        <li style={{'fontSize':'1.2rem', 'fontWeight':'600', 'color':'#495657'}}>User Name</li>
                        <li style={{'fontSize':'0.8rem', 'fontWeight':'600', 'color':'#495657'}}>some Info</li>
                    </ul>
                </div>
                </div>
                <p style={{'textAlign':'right', 'marginLeft':'5em'}}>⭐⭐⭐⭐⭐</p>
                <div>
                    <h3 style={{'color':'#495657','fontWeight':'500' , 'paddingTop':'1rem'}}>Great customer service</h3>
                    <p style={{'color':'#495657','fontWeight':'400' , 'paddingTop':'1rem'}}>I highly recommend this place,
                        The place is good and has good food.
                    </p>
                </div>
            </div>
        </section>
       </>
    )
}

const About=()=>{
    
    return(
        <section className='about'> 
          <div style={{'width':'30vw'}}>
          <h1 style={{'fontWeight':'800', 'padding':'1.3rem', 'fontSize':'3rem'}}>Little Lemon</h1>
            <p style={{'fontWeight':'500','color':'#495e57','width':'30vw','marginLeft':'3rem'}}></p>Little Lemon is a charming neighbour hood bistro,
            that serves simple food and classic cocktails in a lively but casual
            environment. The restaurant features a locally-sourced menu withdaily specials.
          </div>
            <img src={owner1} alt='owners' className='owners owner1'/>
            <img src={owner2} alt='owners' className='owners owner2'/>
        </section>
    )
}

function Home() {
  return (
    <div>
        <Header/>
        <SpecialsSection/>
        <Testimonials/>
        <About/>
    </div>
  )
}

export default Home