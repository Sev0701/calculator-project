import React, { useCallback, useContext } from 'react'
import { MyContext } from './context';

 function Equal() {

    const changeEval = useContext(MyContext);

  return (
    <div className='equal'> 
        <button value="=" className='btn' onClick={() => { let text = eval(changeEval.number.join('')); changeEval.setNumber(String(text).split("")); }}>=</button>
    </div>
  )
}

export default Equal;