import React from 'react'

interface iaPPprop {
  item: string,
  className: string,
  clickPopup: any
}

const Button = ({ item, className, clickPopup }: iaPPprop) => {
  return (
      <button onClick={clickPopup} className={`${className} px-3 rounded-xl text-white text-[1rem] bg-black md:text-xl py-2 dark:bg-blue-600`}
      >
        {item}
      </button>
  )
}

export default Button
