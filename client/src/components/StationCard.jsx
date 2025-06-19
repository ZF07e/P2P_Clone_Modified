import React from 'react'

function StationCard({obj}) {
  return (
    <div className='px-4 py-8 shadow-sm bg-stone-100 flex justify-between'>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h4>{"{Name}"} <span>{"• {Operator}"}</span></h4>
          <div>{"{Address}"}</div>
        </div>
        <div>
          <button>View Schedule</button>
        </div>

    </div>
  )
}

export default StationCard