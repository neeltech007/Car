import React, { useEffect, useState } from 'react'
import MobileOrCom from './MobileOrCom'


export default function Home() {
    const [data, setData] = useState(null)


    useEffect(() => {
        fetch("cars.json")
        .then(res =>res.json())
        .then(data => setData(data))
    },[])

    return (
        <div>
            {data !== null && <MobileOrCom data={data}></MobileOrCom>}
        </div>
    )
}
