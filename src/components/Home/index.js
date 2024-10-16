import "./index.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="moblie-view-container">
          <div className="content-container">
            
            <h1 className="heading">
              When <br/>Innovation Meets <br/>
              <span className="hightlight">Investment</span>
            </h1>
            <p className="description">
              Empowering Trading through <br/>
              Advanced Technology
            </p>
            <button className="btn-element">Open dApp</button>
          </div>
           </div>

           <div className="desktop-view-container">
          <div className="content-container">
            
            <h1 className="heading">
              When <br/>Innovation Meets <br/>
              <span className="hightlight">Innovation</span>
            </h1>
            <p className="description">
              Empowering Trading through <br/>
              Advanced Technology
            </p>
            <button className="btn-element">Open dApp</button>
          </div>
           </div>
        
      </div>
    </>
  );
};

export default Home;
