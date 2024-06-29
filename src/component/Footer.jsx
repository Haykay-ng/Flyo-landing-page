import React from 'react'
import "../CSSF/footer.css"
import logo from "../assets/Images/logo.svg"
import cation from "../assets/Images/icon-location.svg"
import phone from "../assets/Images/icon-phone.svg"
import gmail from "../assets/Images/icon-email.svg"
import face from "../assets/Images/facebook icon.png"
import insta from "../assets/Images/intagram icon.png"
import twit from "../assets/Images/twitter icon.png"

const Footer = () => {
  return (
    <>
        
        <div className='containerfoot'>
            <div className='pushdown'>
            <div className='newlogo' style={{marginLeft: '9%'}}>
            <img src={logo} alt="" />
            </div>
            <div className='footer'>
                 <div className='catext'>
                 <img src={cation} alt="" />
                 <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='conemail'>
                    <span><img src={phone} alt="" style={{marginRight: '10px'}}/>+1-543-123-4567</span>
                    <span><img src={gmail} alt="" style={{marginRight: '10px'}}/>example@fylo.com</span>

                </div>
                <div className="q-links" style={{ paddingBottom: '25px'}}>
                <ul className='q-link'> <h5>About Us</h5>
                    <h4>
                        <a href="#">Jobs</a>
                    </h4>
                    <h4>
                        <a href="#">Press</a>
                    </h4>
                    <h4>
                        <a href="#">Blog</a>
                    </h4>
                    
                </ul>
                
             </div>

             <div className="q-links">
                <ul className='q-link' style={{textDecorationColor: 'white'}}> <h5>Contant Us</h5>
                    <h4>
                        <a href="#">Condition</a>
                    </h4>
                    <h4>
                        <a href="#">Terms</a>
                    </h4>
                    <h4>
                        <a href="#">Privacy</a>
                    </h4>
                    
                    
                </ul>
                
            </div>
            <span className='media'><img src={face} alt="" style={{marginRight: '10px'}} /> <img src={insta} alt=""style={{marginRight: '10px'}} /> <img src={twit} alt=""style={{marginRight: '10px'}}  /></span>
                

            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <p className='text-center'>Copyright &copy; 2024</p>
                </div>
            </div>
            </div>
        </div>
        
      
    </>
  )
}

export default Footer
