import React, {useCallback, useState} from 'react'
import {Header, Reels, Buttons, Counts, ChanceLamp, StarLamp, Lever, ListOfDividends} from './conponents/index'
import './App.css';

function App() {

  const [stopId1, setStopId1] = useState(null)
  const [stopId2, setStopId2] = useState(null)
  const [stopId3, setStopId3] = useState(null)
  const [spinFrag, setSpinFrag] = useState(false)
  const [countFrag, setCountFrag] = useState(false)
  const [credit, setCredit] = useState(100)
  const [payment, setPayment] = useState(0)
  const spin = useCallback(() => {
    if (spinFrag === false) {
      let i = 9;
      let j = 1;
      let chanceFrag = Math.floor(Math.random()*9);

      console.log(chanceFrag);
      if (chanceFrag === 3) {
        i = 3;
        j = 5;
      }

      setStopId1(setInterval(() => {
        document.getElementById('reel1').innerHTML = Math.floor(Math.random()*i) + j;
      }, 50));
      setStopId2(setInterval(() => {
        document.getElementById('reel2').innerHTML = Math.floor(Math.random()*i) + j;
      }, 50));
      setStopId3(setInterval(() => {
        document.getElementById('reel3').innerHTML = Math.floor(Math.random()*i) + j;
      }, 50));
      setSpinFrag(true);
      setCountFrag(true);
      setCredit((credit) => credit - 3);
    }
  },[spinFrag])

  const stop1 = useCallback(() => {
    clearInterval(stopId1);
    setStopId1(null);
    if (stopId2 == null && stopId3 == null){
      setSpinFrag(false)
      if (countFrag === true) {
        changeCreditAndPayment()
        setCountFrag(false)
      }
    }
  },[stopId1,stopId2,stopId3,countFrag])
  const stop2 = useCallback(() => {
    clearInterval(stopId2);
    setStopId2(null);
    if (stopId1 == null && stopId3 == null){
      setSpinFrag(false)
      if (countFrag === true) {
        changeCreditAndPayment()
        setCountFrag(false)
      }
    }
  },[stopId1,stopId2,stopId3,countFrag])
  const stop3 = useCallback(() => {
    clearInterval(stopId3);
    setStopId3(null);
    if (stopId1 == null && stopId2 == null){
      setSpinFrag(false)
      if (countFrag === true) {
        changeCreditAndPayment()
        setCountFrag(false)
      }
    }
  },[stopId1,stopId2,stopId3,countFrag])

  const changeCreditAndPayment = () => {
    const real1 = Number(document.getElementById('reel1').innerHTML)
    const real2 = Number(document.getElementById('reel2').innerHTML)
    const real3 = Number(document.getElementById('reel3').innerHTML)

    switch(true){
      case (real1 === 7 && real2 === 7 && real3 === 7):
        setCredit((credit) => credit + 250);
        setPayment(250);
        break;
      case (real1 % 2 === 0 && real2 % 2 === 0 && real3 % 2 === 0):
        setCredit((credit) => credit + 3);
        setPayment(3);
        break;
      case (real1 % 2 === 1 && real2 % 2 === 1 && real3 % 2 === 1):
        setCredit((credit) => credit + 10);
        setPayment(10);
        break;
      default:
        setPayment(0);
        break;
    }
  }

  const deb = () => {
    console.log(credit);
    console.log(spinFrag);
    console.log(stopId1);
    console.log(stopId2);
    console.log(stopId3);
    console.log(countFrag);
  }




  return (
    <div>
      <div>
      <Header />
      </div>
      <main>
        <div>
          <ChanceLamp />
          <StarLamp />
          <Lever spin={spin}/>
        </div>
        <div>
          <Reels />
          <Counts credit={credit} payment={payment}/>
          <Buttons stop1={stop1} stop2={stop2} stop3={stop3}/>
          <button onClick={deb}>aaaaa</button>
        </div>
        <div>
          <ListOfDividends />
        </div>
      </main>
    </div>
  );
}

export default App;
