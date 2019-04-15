import React from 'react'

export default function About() {
  return (
    <div className="container">
      <h2 className="mb-4">About this app</h2>
      <p>This app was made as an exercise for Turbine.</p>
      <p>I used React as Framework, Bootstrap for styling, Json-server to serve as an API and axios to fetch data from the API.</p>
      <p>Json-server needs to run in port 3000 to fetch the data properly. You can use the "npm run json:server" command.</p>
    </div>
  )
}
