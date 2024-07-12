import React from "react";
import {Link} from 'react-router-dom'
import './Output.css'

const Output = ({number}) => {
    console.log("Numbers : ", number);
  return (
    <div>
      <Link to='/numbers/primes' className="btn btn-success">Prime Number</Link>
      <Link to='/numbers/fibo' className="btn btn-primary">Fibonacci</Link>
      <Link to='/numbers/even' className="btn btn-warning">Even</Link>
      <Link to='/numbers/rand' className="btn btn-danger">Random</Link>
      <ul>
        {number.map((data, index)=>{
            return (<li key={index}>{data}</li>)
        })}
      </ul>
    </div>
  );
};

export default Output;
