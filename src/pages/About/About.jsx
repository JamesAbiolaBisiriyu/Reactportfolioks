import React from 'react'
import Service from './Service'
import Testimonial from './Testimonial'
// import './App.css'
const testimonialData =

[
  {
    "name": "Daniel Lewis",
    "avatar": "/images/avatar-1.png",
    "testimonial": "James was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client."
  },
  {
    "name": "Jessica Miller",
    "avatar": "/images/avatar-2.png",
    "testimonial": "James was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client."
  },
  {
    "name": "Emily Evans",
    "avatar": "/images/avatar-3.png",
    "testimonial": "James was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client."
  },
  {
    "name": "Henry William",
    "avatar": "/images/avatar-4.png",
    "testimonial": "James was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client."
  }
]


const serviceData = 
[
  {
    "title": "Web design",
    "icon": "/images/icon-design.svg",
    "description": "The most modern and high-quality design made at a professional level."
  },
  {
    "title": "Web development",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the professional level."
  },
  {
    "title": "Mobile apps",
    "icon": "/images/icon-app.svg",
    "description": "Professional development of applications for iOS and Android."
  },
  {
    "title": "Photography",
    "icon": "/images/icon-photo.svg",
    "description": "I make high-quality photos of any category at a professional level."
  }
]


const About = () => {
  return (
    <div style={{
      marginTop:'-80px',
      marginLeft:'-30px'

      
    }}>
      <header style={{
        marginBottom:'0px',
        width: '500px',
      }}>      
        <h2>About Me</h2>
        
      </header>
      <section>
      <p>
          I am a creative Director from Lagos Nigeria, working as a Web
          Developer. I enjoy turning complex problems into simple, beautiful and
          intuitive designs
        </p>

        <p>
          My Job is to build your website so that it is functional and user
          friendly but at the same time attractive. Moreover, I add personal
          touch to your product and make sure, its eye catching and easy to use.
          My aim is to bring across you messages and identity in the most
          creative way. I look forward to turning your designs into reality.
        </p>
      </section>
      {/* services */}
      <section>
        <h2>What i Do</h2>
        <ul className='service-list'>
          {
            serviceData.map((service,index)=>(
              <Service key={index} title={service.title} icon={service.icon} description={service.description} />
            ))
          }
        </ul>
      </section>
      {/* Testimonials section */}
      <section className='testimonials'>
        <h2 className='h2 testimonials-title'>Testimonial</h2>
        <ul className='testimonials-list has-scrollbar'>
          {
            testimonialData.map((testimonial,index)=>(
            <Testimonial key={index} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial}/>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default About