import { useState, useEffect } from 'react';

const HookCurrentDateTime = () => {
  const [date, setDate] = useState(new Date())
  const [date2, setDate2] = useState(new Date())
  const [a, setA] = useState(true);
  // the useState hook accepts 1 argument: the initial state
  // it returns an array with two elements:
  // 1) the state
  // 2) a function to update the state

  console.log('Component Rendred');
  useEffect(() => {
    console.log('useEffect fired');
    const b = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(b);
    }
  }, [])

  useEffect(() => {
    setDate2(new Date())
  }, [a])

  // useEffect replaces componentDidMount if you pass an empty array as the 2nd argument
  // replaces componentDidUpdate if you add values to diff array
  // replaces componentWillUnmount

  return(
    <div>
      <p>{date.toLocaleString()}</p>
      <button onClick={() => setA(!a)}></button>
      <p style={{backgroundColor: 'blue'}}>{date2.toLocaleString()}</p>
    </div>
  )
}

export default HookCurrentDateTime;