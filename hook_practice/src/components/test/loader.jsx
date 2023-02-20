import React,{useEffect, useState} from 'react'

const loader = () => {
    const[loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    })
  return (
    <div>
      {loader ? <div className="loader"> </div> : <div>not loading</div>}
    </div>
  );
}

export default loader