import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import TickerBar from './components/TickerBar'


function App() {

  const [btcData, setBtcData] = useState({})
  const [ltcData, setLtcData] = useState({})
  const [ripData, setRipData] = useState({})
  const [ethData, setEthData] = useState({})
  function btcPull(){
    let btcInfo = `https://api.cryptonator.com/api/ticker/btc-usd`
    axios.get(btcInfo)
    .then(data => setBtcData(data.data.ticker))
  }
  function ltcPull(){
    let ltcInfo = `https://api.cryptonator.com/api/ticker/ltc-usd`
    axios.get(ltcInfo)
    .then(data => setLtcData(data.data.ticker))
    // console.log(ltcData)
  }
  function ripPull(){
    let ripInfo = `https://api.cryptonator.com/api/ticker/xrp-usd`
    axios.get(ripInfo)
    .then(data => setRipData(data.data.ticker))
    // console.log(ripData)
  }
  function ethPull(){
    let ethInfo = `https://api.cryptonator.com/api/ticker/eth-usd`
    axios.get(ethInfo)
    .then(data => setEthData(data.data.ticker))
    // console.log(ethInfo)
  }

useEffect(()=>{
  btcPull()
  ltcPull()
  ripPull()
  ethPull()

// axios.get(btcInfo)
// .then(data => setBtcData(data.data.ticker))
  // console.log(btcData)
  //
  // axios.get(ltcInfo)
  // .then(data => setLtcData(data.data.ticker))
  // console.log(ltcData)

}, [])





  return (
    <div className="App">
  <TickerBar btcData={btcData} ltcData={ltcData} ripData={ripData} ethData={ethData} />
    </div>





  );
}

export default App;
