import './App.css';
import './Animated.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
      <div class="area" >
      <div className='header-container'>
        <header id = 'home' className="App-header">
          <div id="quote">
          <p1>"If you can't explain it simply, you don't understand it well enough."</p1>
          <h2>Albert Einstein</h2>
          </div>

          <h1>Kidus <br/>Gebrgiorgis
          </h1>
          <div className='b1-container'>
          <a href='#about-me'><button className='b1' href = ''>Find out more</button></a>
          </div>
        </header>
        <div className='dropdown'>
          <i className="menu-bar fa fa-bars" aria-hidden="true">
            <p1>Menu</p1>
            <ul>
            <a href='#home'> <li>Home</li></a>
              <a href='#about-me'><li>About</li></a>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </i>
        </div>
        <div id = "contact-icons">
              <i class="fa fa-instagram" aria-hidden="true" id = 'instagram'></i>
              <i class="fa fa-linkedin" id = 'linkdeln'></i>
              <i class="fa fa-github"id = 'Github'></i>
        </div>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      </div>
      <body>
        <div id = 'about-me'>
          <h1>About me</h1>
          <p1>Welcome my name is Kidus Gebrgiorgis a Towson university Alumni. I develope website ranging from blogs, to business, and eCommerce sites. This website in particular 
            will be somewhere I can showcase those skills and hopefully help others who are in the same pursuit to understanding and honing web development. I will be sharing my experience on each
            project featuring new technologies I found both helpful and fun to use. I want this website to be a place where others can look at for advice as well as my online progress tracker. I am looking forward 
            to the growth to come.</p1>
        </div>
        <div id = 'portfolio'>

        </div>
      </body>
      <footer>
      </footer>
    </div>
  );
}

export default App;
