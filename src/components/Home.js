export default function Home() {
  return(
    <>
      <section id="home">
        <div className="home-wrapper">
          <span>
            <h1>Hi, I'm Sushant Thakur.</h1>
            <h3>A hobbyist programmer and 3D Modeler.</h3>
            <br />
            <br />
            <br />
          </span>
          <img src="https://ia601703.us.archive.org/6/items/twitter-default-pfp/e.png" 
          alt="display picture" />
        </div>
        {console.log(document.body.scrollTop)}
        <div className="check-project">Scroll down to see my projects ↓</div>
      </section>
    </>
  )
}