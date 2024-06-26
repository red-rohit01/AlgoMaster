import React from 'react'
import './style.css'
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from 'react';


function ProblemList() {
  const [Questions, setQ] = useState();

  const callProblemList = async () => {
    try {
      let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/questions`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
    })
    result = await result.json();
    setQ(result);
}
  catch (err) {
  console.log(err);
}
  };

useEffect(() => {
   callProblemList();
  });

return (

  <div className='container'>
    
    <h2 className='text-white mt-2'>Problems List</h2>
    <hr />
    {Questions ? (
      <table className="table table-striped table-dar">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Problem Tag</th>
            <th>Difficulty</th>
          </tr>

        </thead>
        <tbody>
          {Questions.map((item) =>
            <tr>
              <td>{item.sequence}</td>
              <td><a className='title' type='button' href={'/question/' + item.uniquename}>{item.title}</a></td>
              <td>{item.tag}</td>
              <td style={{ color: item.difficulty === 'Easy' ? "#02ab02" : item.difficulty === 'Medium' ? "#FFA116" : "#c70c02" }}>{item.difficulty}</td>
            </tr>
          )}
        </tbody>

      </table>
    ) :
      (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
          <ClockLoader color='#fff' loading={true} size={100} />
        </div>
        
      )}
  </div>

)
}
export default ProblemList