import React from 'react'

const Record = ({records}) => {
  return (
    <div>
      {records.map((record, index) => {
        return (
          <div key={index} className="record">
            <h1
            >
              {record.artist}
            </h1>
            <p>
              {record.title}
            </p>
            <p>
              {record.genre}
            </p>
            {/* figure out how to render each review as its own p tag */}
            <div className='review-container'>
              {record.reviews.filter(review => {
                if (review > 1 && review < 6) {
                    return (
                      {review}
                    )
                  }
              })
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Record