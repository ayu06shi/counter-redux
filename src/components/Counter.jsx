import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
     const count = useSelector(state => state.counter.value);

     const dispatch = useDispatch();

  return (
    <div className='bg-yellow-50 p-5 flex flex-col justify-center items-center mt-24 gap-y-5'>
        <button className='bg-orange-500 rounded hover:scale-105 hover:bg-orange-400 transition-all duration-200 text-white px-2 py-2' onClick={() => dispatch(increment())}>
            Increment
        </button>

        <div className='text-orange-700'>Count: {count}</div>

        <button className='bg-orange-500 rounded hover:scale-105 hover:bg-orange-400 transition-all duration-200 text-white px-2 py-2'  onClick={() => dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter