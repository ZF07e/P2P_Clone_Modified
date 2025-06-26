import React from 'react'

function TimeCard({time}) {
  return (
    <tr className='w-full p-2 odd:bg-stone-200 even:bg-stone-100'>
        <td className='border-1 rounded border-neutral-400'>
            <p className='p-2 text-lg'>{time}</p>
        </td>
    </tr>
  )
}

export default TimeCard