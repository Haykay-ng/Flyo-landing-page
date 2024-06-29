import React from 'react'
import "../CSSF/flyo.css"
import { Link } from 'react-router-dom'
import illu from "../assets/Images/illustration-intro.png"
import access from "../assets/Images/icon-access-anywhere.svg"
import secure from "../assets/Images/icon-security.svg"
import colab from "../assets/Images/icon-collaboration.svg"
import file from "../assets/Images/icon-any-file.svg"
import product from "../assets/Images/illustration-stay-productive.png"
import arrow from "../assets/Images/icon-arrow.svg"
import quote from "../assets/Images/bg-quotes.png"
import profileone from "../assets/Images/profile-1.jpg"
import profiletwo from "../assets/Images/profile-2.jpg"
import profilethr from "../assets/Images/profile-3.jpg"

const Flyo = () => {
  return (
    <>
        <header>
      
      <div className='centre'>
      <div className='next-floor'>
       <img src={illu} alt="" />
       </div>
       <ul className='worddys'>
       <h2>All your files in one secure location, accessible anywhere.</h2>
       <h6>Fylo stores all your most important files in one secure location. Access them wherever 
         you need, share and collaborate with friends family, and co-workers.</h6>
        <button className= "btn"style={{backgroundColor: 'aqua', color: 'white'}}>Get Started</button>
        </ul>
     
      </div>
 
        <div className='icon'>
        <div className='iconeone'>
         <div className='access'>
         <img src={access} alt="" />
         <h2>Access your files, anywhere</h2>
         <h6>The ability to use a smartphone, tablet, or computer to access your account means your 
             files follow you everywhere.</h6>
         </div>
         
         <div className='secure'>
         <img src={secure} alt="" />
         <h2>Security you can trust</h2>
         <h6>2-factor authentication and user-controlled encryption are just a couple of the security 
             features we allow to help secure your files.</h6>
         </div>
         
        </div>
         
        <div className='icontwo'>
         <div className='colab'>
         <img src={colab} alt="" />
         <h2>Real-time collaboration</h2>
         <h6>Securely share files and folders with friends, family and colleagues for live collaboration. 
             No email attachments required.</h6>
          </div>
         
         <div className='file'>
         <img src={file} alt="" />
         <h2>Store any type of file</h2>
         <h6>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
             file types to be securely stored and shared.</h6>
          </div>
         
        </div>
 
         
       </div>
 
        <div className='staypro'>
         <div className='stayimg'>
           <img  className= " newimag"src={product} alt="" />
         </div>
         <div className='imagetext'>
           <h2>Stay productive, wherever you are</h2>
           <h6>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
               storage needs.</h6>
           <h4> Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                attachments required.</h4>
 
 
                
 
                <Link to='/Faylo' style={{textDecoration: 'underline', textDecorationColor: 'aqua'}}>
                <p className='fylo' style={{color: 'aqua'}}>See how Fylo works <img src={arrow} alt="" /></p>
                     </Link>
                
           </div>
        </div>
 
        <div className='container'>
        
        
        <div className='quote'>
         <div className='gree' >
         <img src={quote} alt="" />
         </div>
          <h4>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</h4>
              <div className='notable' >
              <img src={profileone} alt=""style={{marginRight: '10px'}}/>
              <p style={{color: 'white'}}> Satish Patel <br />Founder & CEO, Huddle</p>
              
              </div>
           
          </div>
 
           <div className='radiant'>
           <h4 >Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</h4>
              <div className='raddy' >
              <img src={profiletwo} alt=""style={{marginRight: '10px'}}/>
              <p style={{color: 'white'}}>Bruce McKenzie <br />Founder & CEO, Huddle</p>
              </div>
           </div>
          
             <div className='goodstart'>
             <h4 >Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</h4>
              <div className='start'>
              <img src={profilethr} alt=""style={{marginRight: '10px'}}/>
              <p style={{color: 'white'}}>Iva Boyd <br />Founder & CEO, Huddle </p>
              </div>
             </div>
         
          
          </div>
 
          
     
          
 
   
        </header>
        </>
      
    
  )
}

export default Flyo
