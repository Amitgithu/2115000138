import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Output from "./Output";
import './Output.css'

function Number() {
  let [token, setToken] = useState("");
  let [windowSize, setWindowSize] = useState(0);
  let { numberId } = useParams();
  let [numbers, setNumbers] = useState([]);
  let [message, setMessage] = useState("");
  let header = { Authorization: `Bearer ${token}` };

  console.log("Params : ",numberId);

  async function generateToken(userDetail){
    let response = await axios.post("http://20.244.56.144/test/auth", userDetail);
    // console.log(response.data.access_token);
    setToken(response.data.access_token);
  }

  useEffect(()=>{
    let Object = {
        "companyName": "GLAUniversity",
        "clientID": "e425a89c-7f80-48d8-aa09-8db6d30f06cc",
        "clientSecret": "dTYgdiuAXMLuUuxH",
        "ownerName": "AmitKumar",
        "ownerEmail": "amit.kumar_cs21@gla.ac.in",
        "rollNo": "2115000138"
    }
    generateToken(Object)
  },[])

  useEffect(()=>{
    fetchData();
  }, [numberId]);

  async function fetchData() {
  let result = await axios.get(`http://20.244.56.144/test/${numberId}`, {
      headers: header,
    });
    let currentSize = result.data.numbers.length;
    let average = 0;
    let arr = result.data.numbers;
    console.log(`Arrays response : ${numberId}`, result.data.numbers);
    if(currentSize > windowSize){
        average = calculateAverage(arr);
        setMessage(average);
    }
    else{
        setMessage("Window size is Less than previous");
    }
    setNumbers(result.data.numbers);
    // console.log(result);

  }

  function calculateAverage(arr){
    let totalNumbers = arr.length;
    let totalSum = 0;
    // console.log("Array : " ,arr);
    for(let i =0;i < arr.length;i++){
        totalSum = totalSum + arr[i];
    }
    return totalSum / totalNumbers;
  }

  return (
    <>
        <Output number={numbers}/>
    </>
  );
}

export default Number;
