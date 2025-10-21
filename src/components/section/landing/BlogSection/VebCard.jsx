import React from 'react'

const VebCard = (pic, title, date, field, describe, like, dislike, view) => {
    return (
        <div style={{ backgroundColor: "var(--color-white)" }} className ='w-[25%] h-[320px] rounded-[10px]'>
            <img src={pic} className='w-[90%] h-[70px] object-cover'/>
            <p className ='font-[600] text-[12px]'>
                {title}
            </p>
            <div>{date}</div>
            <div>{field}</div>
            <div>{describe}</div>
            <div>{like}</div>
            <div>{dislike}</div>
            <div>{view}</div>
        </div>
    )
}

export default VebCard