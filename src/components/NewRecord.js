import React from 'react'

function testFun(e) {
  const recordToAdd = {
    title: '',
    artist: '',
    year: ''
  }
  e.preventDefault();
  // iterate the event.target array and assign new object the properties from the form
  e.target.foreach((formInput) => {
  })
  console.log(e.target[2].value)
}
const NewRecord = () => {
  return (
    <div>
      <h1>NewRecord</h1>
      <form onSubmit={testFun}>
        <div>
          <label>
            Title:
            <input name="title"></input>
          </label>
        </div>
        <div>
          <label>
            Artist:
            <input name="artist"></input>
          </label>
        </div>
        <div>
          <label>
            Year:
            <input name="year"></input>
          </label>
        </div>
        <div>
          <label>
            Genre:
            <input name="genre"></input>
          </label>
        </div>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default NewRecord