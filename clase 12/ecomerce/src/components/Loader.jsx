import React from 'react'
import { useEffect, useState } from 'react'
import {ReactLoading} from 'react-loading'


function Loader() {
  const [loader, setLoader] = useState(true)

  useEffect (()=>{
    setTimeout(()=>{
        setLoader(false)
    }, 2000)

  }, [])
  return (
    <div>
        {loader ? (
            <ReactLoading
            type="cubes"
            color="#009933"
            height="180px"
            widht="180"
            />
        ) : (
            <h2> Hola </h2>
        ) 
        }
    </div>
  )
}

export default Loader