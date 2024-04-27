const  createNav = () =>  {
    let Nav = document.querySelector('.nav');
    Nav.innerHTML = `
    <div class="nav">
    <marquee behavior="" direction="rights">Please join us to save environment </marquee>
    <header>
  <img src="Images/save green.jpeg" alt="" height="100px" width="1000px">
  <i><h1>Ever Green Foundation</h1></i>
    </header>
  <br>
    <nav>
  <ul>
    <li><a href="Home.html">Home</a></li>
    <li><a href="About.html">About</a></li>
    <li><a href="Service.html">Services</a></li>
    <li><a href="Career.html">Career</a></li>
    <li><a href="Contact.html">Contact Us</a></li>
  </ul>
    </nav> 
    <br>
    <br>
  </div>

    `;
}
createNav ();
const  createfooter = () =>  {
  let footer = document.querySelector('.footer');
  footer.innerHTML = `
  <div class="footer">
  <footer>
    <center>
    <p>&copy; 2023 Ever Green Foundation . All rights reserved.</p>
    <p>| Privacy Policy | Terms of Service |</p> 
    <p>Visit us on social plartform</p>
    <img id="about" src="../facebook.png" alt="">
    <img id="about" src="../tweeter.png" alt="">
    <img id="about" src="../facebook.png" alt=""> <br>
    Designed and developed by <a href="../ABC.html">ABC developer</a>
   </center>

</div>

  `;
}
createfooter ();

