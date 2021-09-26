import React from 'react'
import list from './githublist.jpeg'; 
const Navbar = () => {
   console.log(list)
  return (
        <div>
            <header className  = "header">
                <nav className = "navbar" >
    <div className="navbar-container container">
        <div>
            <h1 className="navbar-brand">Param Choudhary</h1>
        </div>
   <ul className="menu-items">
     <li><a href="#about">About</a></li>
     <li><a href="#my-works">Portfolio</a></li>
     <li><a href="#contact-me">Contact</a></li>
     
   </ul>
    </div>

                </nav>
                <div className= "home-content" id = "home-page">
        <div className= "name">
            <h1>Hi <span class="wave">👋</span>, I'm Param</h1>
            <p>A web Developer in training.</p>
        </div>
        <div className= "angle-down-icon">
            <a href="#about"><i className="fas fa-angle-down"></i></a>
        </div>
   </div>
 </header>
<section className="about-me" id="about">
  <div className="container">
<div className="about-content">
<div className="left-content">
<div>
<h1 className="about-heading">About Me</h1>

</div>
<img src="https://i.postimg.cc/Hx4nChpH/fbavatar-1630400663387-6838396024049256103.png" alt="boy" />
<p>
I am 18 year old, Computer Science student studied at Lovely Proffesional University.
            I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new
            things; the more, the better.
</p>
<div className="work-arrow">
 <p>
 <a href="#my-works">Check out my work <i className="fas fa-arrow-down"></i></a>
 </p>

</div>
  
</div>
<div className="skills">
<div className="right-content">
<div>
<h1 className="skills-heading">My Skills</h1>

</div>
<div className="skills-bar">
<div className="bar">
  <div className="info">
    <span>HTML</span>
  </div>
  <div className="progress-line"><span className="html"></span></div>
  <div className="bar">
    <div className="info">
      <span>CSS</span>
    </div>
    <div className="progress-line"><span className="css"></span></div>
  </div>
  <div className="bar">
    <div className="info">
      <span>Javascript</span>
    </div>
  </div>
  <div className="progress-line"><span className="javascript"></span></div>
  <div className="bar">
    <div className="info">
      <span>Java</span>
    </div>
  </div>
  <div className="progress-line"><span className="java"></span></div>
</div>

</div>

</div>

</div>


</div>
  
  
  
  
  </div>

<div className="work-arrow-2">
<p>
  <a href="#my-works">Check out my work</a>
</p>


</div>



</section>
<section id="my-works">
<div className="portfolio">
<div className="proj-heading">
  <h1>Portfolio</h1>
</div>
<div className="portfolio-content container">
  <div className="proj-1">
    <img src={list} alt="github" />
    <div className="proj1-details">
   <i className="fab fa-html5"></i>
   <i className="fab fa-css3-alt"></i>
   <i className="fab fa-js"></i>
   <h2>Github user list</h2>
   <p>Build Using HTML,CSS,JS,API</p>
   <button><a href="https://github.com/Paramchoudhary/github-user-api" target="_blank">View source <i className="fas fa-external-link-alt"></i></a></button>
    </div>
  </div>
</div>
</div>


</section>
<div className="contact" id="contact-me">
<div className="container">
  <div className="contact-content">
 <h2>Contact Me</h2>
<p className="mail">
  get in touch with me <i className="fas fa-arrow-right"></i>choudharyparam99@gmail.com
</p>
<p className="links">Or find me on:</p>
<a href="https://github.com/Paramchoudhary" ><i className="fab fa-github">Github</i></a>
<a href="https://twitter.com/param__25" ><i className="fab fa-Twitter">Twitter</i></a>
<a href="https://www.instagram.com/param.choudharyy/" ><i className="fab fa-instagram">Instagram</i></a>
  </div>
</div>

</div>



        </div>
    )
}

export default Navbar
