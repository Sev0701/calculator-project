import React, { useContext } from 'react'
import { MyContext } from './context';

 function Acdel() {

    const changeAcdel = useContext(MyContext);

  return (
    <div className='acdel'>
        <button value="AC" className='btn' onClick={() => {changeAcdel.setNumber([""])}} >AC</button>
        <button value="DE" className='btn' onClick={() => {changeAcdel.setNumber(changeAcdel.number.slice(0, -1))}}>DE</button>
    </div>
  )
}

export default Acdel;
