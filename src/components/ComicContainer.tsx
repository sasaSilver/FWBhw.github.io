import React, { FC, useState } from 'react'
import Comic from './Comic'

interface emailProps{
  email: string;
}
const ComicWithButton:FC<emailProps> = (props: emailProps) => {
  const [on, setOn] = useState(false);

  const handleClick = () => {
      setOn((on) => !on);
  };

  return (
    <>
    <button className={on ? "comic-link-on" : "comic-link-off"} onClick={handleClick}>
            Show funny comic from homework!!!
    </button>
    {!on ? null : <Comic email={props.email}/>}
    </>
  )
}

export default ComicWithButton
