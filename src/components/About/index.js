import "./index.css";

const About=() =>{
    return(
        <>
        <div className="about-mobile-view-container">
            <div className="top-container">
                <h1 className="heading">About EthAi</h1>
                <p className="description">
                   At EthAi, we're all about making crypto <br/> 
                   trading and more intuitive.
                   we provide <br/> tools that helps traders keep up with all new <br/> market trends, track 
                   top traders' movements. 
                </p>
                <button className="btn-element">Read More</button>
            </div>

            <div className="bottom-container">
                <div className="mini-container">
                    <h1 className="about-card-header">Stay Ahead</h1>
                    <p className="about-description">No more guesswork—get clear, trustable insights.</p>
                </div>

                <div className="mini-container">
                    <h1 className="about-card-header">Know Your Assets</h1>
                    <p className="about-description">Always stay on top of how your investments are performing.</p>
                </div>

                <div className="mini-container">
                    <h1 className="about-card-header">Simple, Not Overwhelming</h1>
                    <p className="about-description">Our tools are designed to make complex market analysis easy to understand and act on.</p>
                </div>

                <div className="mini-container">
                    <h1 className="about-card-header">Future-Proof</h1>
                    <p className="about-description">We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About