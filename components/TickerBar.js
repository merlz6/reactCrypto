import React, {useState, useEffect} from 'react';

// import './App.css';
// import axios from 'axios'


function TickerBar(props){
  console.log(props)
  return(
    <div className="scrollingTickers">
      <div className="tickerHolders">
      <div class="tickerBlock">
        <h2>{props.btcData.base} - {Number(props.btcData.price).toFixed(2)}</h2>
      </div>
      <div class="tickerBlock">
        <h2>{props.ltcData.base} - {Number(props.ltcData.price).toFixed(2)}</h2>
      </div>
      <div class="tickerBlock">
        <h2>{props.ripData.base} - {Number(props.ripData.price).toFixed(2)}</h2>
      </div>
      <div class="tickerBlock">
        <h2>{props.ethData.base} - {Number(props.ethData.price).toFixed(2)}</h2>
      </div>
    </div>
    </div>
  )
}

export default TickerBar;
