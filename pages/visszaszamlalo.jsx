import Layout from '../components/Layout'
import Head from "next/head"
import Section from '../components/Section'
import {useState, useEffect, useRef } from 'react'

const twoDigits = (num) => String(num).padStart(2, '0')

const TitleWrap = {
  background: '#101B42',
  padding: '6px',
  color: 'white',
  fontWeight: 700,
  marginBottom: '6px'
}

const Clock = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'start',
  position: 'relative'
}

const ClockWrap = {
  fontSize:"48px",
  display:"flex"
}

const ClockSegmentStyle = {
  marginRight: '6px'
}

const DateWrap = {
  color: '#DBFF01',
  background: '#101B42',
  color: 'white',
  fontWeight: 700,
  padding: '4px 8px',
  marginTop: '6px'
}

const DisplayInner = {
  color: 'white',
  fontSize: '48px',
  fontWeight: '700',
  lineHeight: '1.2em',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}


const Desc = {
  color: 'white',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '1.8em',
  width: '100%',
}


const NoWrap = {
  whiteSpace: 'nowrap'
}

const Display = {
  background: '#101B42',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px'
}

const Powered = {
  position: 'absolute',
  right: 3,
  bottom: 0,
  fontSize: '14px',
  color: '#222'
}

const PoweredA = {
  color: '#222',
  border: 'none',
  textDecoration: 'none',
  boxShadow: 'none'
}

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

const end = new Date('2022-04-03T06:00:00.000+01:00')
var now = new Date()
var distance = end - now

const INITIAL_COUNT = Math.ceil(distance / 1000)

const ClockSegment = ({ number, text, width, align, style, textAlign='center' }) => (
  <div style={{...style, ...Display, width}}>
    <div style={{...DisplayInner, width, textAlign }}>
      <div style={{
        textAlign,
        paddingLeft: textAlign === 'left' ? '6px' : 'unset'
        }}>
        {number}
      </div>
      <div style={{
        ...Desc,
        textAlign,
        paddingLeft: textAlign === 'left' ? '6px' : 'unset'
      }}>
        {text}
      </div>      
    </div>
  </div>  
)

function CountDown(props) {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const [status, setStatus] = useState(STATUS.STARTED)

  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60

  const minutesToDisplay = minutesRemaining % 60
  const hoursRemaining = (minutesRemaining - minutesToDisplay) / 60

  const hoursToDisplay = hoursRemaining % 24 
  const daysToDisplay = (hoursRemaining - hoursToDisplay) / 24


  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        setStatus(STATUS.STOPPED)
      }
    },
    status === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  )
  return (
    <div style={Clock} {...props}>
      <div style={TitleWrap}>
        A választásokig hátravan
      </div>
      <div style={ClockWrap}>
        <ClockSegment
          style={ClockSegmentStyle}
          width="1.2em"
          number={daysToDisplay}
          text="nap"
        />
        <ClockSegment
          style={ClockSegmentStyle}
          width="1.2em"
          number={hoursToDisplay}
          text="óra"
        />
        <ClockSegment
          style={{...ClockSegmentStyle, marginRight: 0 }}
          width="3.4em"
          textAlign="left"
          number={(
            <span style={NoWrap}>{
              twoDigits(minutesToDisplay)}
              &thinsp;:&thinsp;
              {twoDigits(secondsToDisplay)}
            </span>
          )}
          text="perc"
        />
        <div style={Powered}><a style={PoweredA} href="https://20k.hu" target="_blank" rel="noreferrer">Készítette: 20k.hu</a></div>
      </div>
      <div style={DateWrap}>
        2022. április 3.
      </div>
    </div>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}


const VisszaszamlaloPage = () => {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>    
      <Layout>
        <Section>
          <h2>Szeretnél ilyen számlálót az oldaladba?</h2>
          <br /><br />
          <div>
            <CountDown />
          </div>
          <br /><br />
          <p>
            Ha szeretnél ilyen visszaszámlálót az oldaladra, helyezd el a lenti kódot az oldalad kódjába a nyitó <pre style={{ display: 'inline'}}>{`<body>`}</pre> tag után:
            <br />
            A pozicionlálást a <pre style={{ display: 'inline'}}>{`<div id="counter-20k">`}</pre> elem stílusával határozhatod meg inline css vagy külső css fájl segítségével.<br />
            Mobil szélességhez igazításhoz javasoljuk hogy használj media-query-t és <em>scale</em>-t.<br />
            A számláló betűtípusát kicserélheted ha jónak látod.<br />
            <br />
            <strong>Kérjük, hagyd meg a 20k.hu-ra mutató linket a számlálóban!</strong>
            <br /><br />
            <textarea style={{ width: '100%', height: '460px' }}>
            {`<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />  
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js"></script>
<div id="counter-20k" style="font-family: 'Poppins', sans-serif;"></div>  
<script type="text/javascript">
"use strict";function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}try{const{useState:e,useEffect:t,useRef:n}=React,l=e=>String(e).padStart(2,"0"),r={background:"#101B42",padding:"6px",color:"white",fontWeight:700,marginBottom:"6px"},a={display:"inline-flex",flexDirection:"column",alignItems:"start",position:"relative"},i={fontSize:"48px",display:"flex"},c={marginRight:"6px"},o={color:"#DBFF01",background:"#101B42",color:"white",fontWeight:700,padding:"4px 8px",marginTop:"6px"},s={color:"white",fontSize:"48px",fontWeight:"700",lineHeight:"1.2em",textAlign:"center",display:"flex",flexDirection:"column",position:"relative"},d={color:"white",fontSize:"14px",fontWeight:700,lineHeight:"1.8em",width:"100%"},u={whiteSpace:"nowrap"},p={background:"#101B42",display:"flex",flexDirection:"column",padding:"8px"},m={position:"absolute",right:3,bottom:0,fontSize:"14px",color:"#222"},g={color:"#222",border:"none",textDecoration:"none",boxShadow:"none"},x={STARTED:"Started",STOPPED:"Stopped"},f=new Date("2022-04-03T06:00:00.000+01:00");var now=new Date,distance=f-now;const h=Math.ceil(distance/1e3),y=({number:e,text:t,width:n,align:l,style:r,textAlign:a="center"})=>React.createElement("div",{style:{...r,...p,width:n}},React.createElement("div",{style:{...s,width:n,textAlign:a}},React.createElement("div",{style:{textAlign:a,paddingLeft:"left"===a?"6px":"unset"}},e),React.createElement("div",{style:{...d,textAlign:a,paddingLeft:"left"===a?"6px":"unset"}},t)));function CountDown(t){const[n,s]=e(h),[d,p]=e(x.STARTED),f=n%60,R=(n-f)/60,E=R%60,v=(R-E)/60,w=v%24,D=(v-w)/24;return useInterval(()=>{n>0?s(n-1):p(x.STOPPED)},d===x.STARTED?1e3:null),React.createElement("div",_extends({style:a},t),React.createElement("div",{style:r},"A választásokig hátravan"),React.createElement("div",{style:i},React.createElement(y,{style:c,width:"1.2em",number:D,text:"nap"}),React.createElement(y,{style:c,width:"1.2em",number:w,text:"óra"}),React.createElement(y,{style:{...c,marginRight:0},width:"3.4em",textAlign:"left",number:React.createElement("span",{style:u},l(E)," : ",l(f)),text:"perc"}),React.createElement("div",{style:m},React.createElement("a",{style:g,href:"https://20k.hu",target:"_blank",rel:"noreferrer"},"Készítette: 20k.hu"))),React.createElement("div",{style:o},"2022. április 3."))}function useInterval(e,l){const r=n();t(()=>{r.current=e},[e]),t(()=>{if(null!==l){let e=setInterval(function(){r.current()},l);return()=>clearInterval(e)}},[l])}ReactDOM.render(React.createElement(CountDown,null),document.getElementById("counter-20k"))}catch(e){const t=()=>"Hiba történt.";console.log(e),ReactDOM.render(React.createElement(t,null),document.getElementById("counter-20k"))}
</script>`}
            </textarea>
            <br /><br />
            Ha react komponensként szeretnéd beilleszteni, akkor pedig használd ezt a kódot (A font-családot külön be kell állítani ebben az esetben.)
            <br /><br />
            <textarea style={{ width: '100%', height: '460px' }}>
              {`  import {useState, useEffect, useRef } from 'react'

  const twoDigits = (num) => String(num).padStart(2, '0')

  const TitleWrap = {
    background: '#101B42',
    padding: '6px',
    color: 'white',
    fontWeight: 700,
    marginBottom: '6px'
  }

  const Clock = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative'
  }

  const ClockWrap = {
    fontSize:"48px",
    display:"flex"
  }

  const ClockSegmentStyle = {
    marginRight: '6px'
  }

  const DateWrap = {
    color: '#DBFF01',
    background: '#101B42',
    color: 'white',
    fontWeight: 700,
    padding: '4px 8px',
    marginTop: '6px'
  }

  const DisplayInner = {
    color: 'white',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.2em',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  }


  const Desc = {
    color: 'white',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '1.8em',
    width: '100%',
  }


  const NoWrap = {
    whiteSpace: 'nowrap'
  }

  const Display = {
    background: '#101B42',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px'
  }

  const Powered = {
    position: 'absolute',
    right: 3,
    bottom: 0,
    fontSize: '14px',
    color: '#222'
  }

  const PoweredA = {
    color: '#222',
    border: 'none',
    textDecoration: 'none',
    boxShadow: 'none'
  }

  const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
  }

  const end = new Date('2022-04-03T06:00:00.000+01:00')
  var now = new Date()
  var distance = end - now

  const INITIAL_COUNT = Math.ceil(distance / 1000)

  const ClockSegment = ({ number, text, width, align, style, textAlign='center' }) => (
    <div style={{...style, ...Display, width}}>
      <div style={{...DisplayInner, width, textAlign }}>
        <div style={{
          textAlign,
          paddingLeft: textAlign === 'left' ? '6px' : 'unset'
          }}>
          {number}
        </div>
        <div style={{
          ...Desc,
          textAlign,
          paddingLeft: textAlign === 'left' ? '6px' : 'unset'
        }}>
          {text}
        </div>      
      </div>
    </div>  
  )

  function CountDown(props) {
    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
    const [status, setStatus] = useState(STATUS.STARTED)

    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60

    const minutesToDisplay = minutesRemaining % 60
    const hoursRemaining = (minutesRemaining - minutesToDisplay) / 60

    const hoursToDisplay = hoursRemaining % 24 
    const daysToDisplay = (hoursRemaining - hoursToDisplay) / 24


    useInterval(
      () => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1)
        } else {
          setStatus(STATUS.STOPPED)
        }
      },
      status === STATUS.STARTED ? 1000 : null,
      // passing null stops the interval
    )
    return (
      <div style={Clock} {...props}>
        <div style={TitleWrap}>
          A választásokig hátravan
        </div>
        <div style={ClockWrap}>
          <ClockSegment
            style={ClockSegmentStyle}
            width="1.2em"
            number={daysToDisplay}
            text="nap"
          />
          <ClockSegment
            style={ClockSegmentStyle}
            width="1.2em"
            number={hoursToDisplay}
            text="óra"
          />
          <ClockSegment
            style={{...ClockSegmentStyle, marginRight: 0 }}
            width="3.4em"
            textAlign="left"
            number={(
              <span style={NoWrap}>{
                twoDigits(minutesToDisplay)}
                &thinsp;:&thinsp;
                {twoDigits(secondsToDisplay)}
              </span>
            )}
            text="perc"
          />
          <div style={Powered}><a style={PoweredA} href="https://20k.hu" target="_blank" rel="noreferrer">Készítette: 20k.hu</a></div>
        </div>
        <div style={DateWrap}>
          2022. április 3.
        </div>
      </div>
    )
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }              
            `}              
            </textarea>
          </p>
        </Section>
      </Layout>
    </>
  )
}

export default VisszaszamlaloPage
