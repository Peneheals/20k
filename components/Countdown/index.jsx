import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

const TitleWrap = styled.div`
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
`

const Clock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const ClockWrap = styled.div`
  font-size: 48px;
  display: flex;
  > * {
    margin-right: 6px;
  }
  > *:last-child {
    margin-right: 0;
  }
`

const DateWrap = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.text};
  color: white;
  font-weight: 700;
  padding: 4px 8px;
  margin-top: 6px;
`

const DisplayInner = styled.div`
  color: white;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2em;
  min-width: ${({ $width }) => $width};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: ${({ $align = 'left' }) => $align};
  position: relative;
  `

const NumberWrap = styled.div`
  text-align: ${({ $align }) => $align};
`

const Desc = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.8em;
  width: 100%;
  text-align: ${({ $align }) => $align};
  padding-left: ${({ $align }) => $align === 'left' ? '3px' : 'unset'};
`


const NoWrap = styled.span`
  white-space: nowrap;
`

const Display = styled.div`
  background: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

// const INITIAL_COUNT = 120

// const end = new Date('04/3/2022 7:0 AM')
const end = new Date('2022-04-03T06:00:00.000+02:00')
var now = new Date()
var distance = end - now

const INITIAL_COUNT = Math.ceil(distance / 1000)

const ClockSegment = ({ number, text, width, align }) => (
  <Display>
    <DisplayInner $width={width} $align={align}>
      <NumberWrap
        $align={align}
      >
        {number}
      </NumberWrap>
      <Desc
        $align={align}
      >
        {text}
      </Desc>      
    </DisplayInner>
  </Display>  
)

export default function CountDown(props) {
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
    <Clock {...props}>
      <TitleWrap>
        A választásokig hátravan
      </TitleWrap>
      <ClockWrap>
        <ClockSegment
          width="1.2em"
          number={daysToDisplay}
          text="nap"
        />
        <ClockSegment
          width="1.2em"
          number={hoursToDisplay}
          text="óra"
        />
        <ClockSegment
          width="3.4em"
          align="left"
          number={(
            <NoWrap>{
              twoDigits(minutesToDisplay)}
              &thinsp;:&thinsp;
              {twoDigits(secondsToDisplay)}
            </NoWrap>
          )}
          text="perc"
        />


      </ClockWrap>
      <DateWrap>
        2022. április 3.
      </DateWrap>
    </Clock>
  )
}

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
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

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0')

