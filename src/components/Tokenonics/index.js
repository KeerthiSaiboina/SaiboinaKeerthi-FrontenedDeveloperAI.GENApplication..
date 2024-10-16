import "./index.css";

const Tokenonics=() =>{
    return (
        <>
         <div className="Tokenomics-moblie-view-container">
            <h1 className="token-heading">Tokenomics</h1>
         <div class="donut-chart"></div>
          <div class="legend">
    <div class="legend-item">
        <div class="legend-color"></div>
        
    </div>
    <div class="legend-item">
        <div class="legend-color"></div>
        
    </div>
    <div class="legend-item">
        <div class="legend-color"></div>
        
    </div>
   </div>
   <div className="details-container">
    <p className="details">Name                 : EthAi  </p>
    <p className="details">Token Name           : $EthAi  </p>
    <p className="details">Token Standard       : ERC20  </p>
    <p className="details">Blockchain           : Ethereum  </p>
    <p className="details">Total Supply         : 100 Million  </p>
    <p className="details">Tax                  : 5%/5%  </p>
    </div>
   <div className="details-container-2">
    <p className="details">Team                 : 35%  </p>
    <p className="details">Marketing            : 5%  </p>
    <p className="details">Liquidity Pool       : 90%  </p>
</div>
    </div>
        </>
    )
}

export default Tokenonics