import React, { useRef } from 'react'

const Dom = () => {
    const cc = useRef(null);
    const changer = ()=>{
        cc.current.focus();
        cc.current.style.backgroundColor = '#000';
    }
  return (
    <>
      <section>
        <div className="container">
            <input type="text" className='text_white' ref={cc}/>
            <button onClick={changer} className='text_white ss'>Submit</button>
        </div>
      </section>
    </>
  )
}

export default Dom
