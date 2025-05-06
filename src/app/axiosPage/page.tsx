"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import { api } from "../constants/api"

interface IData{
    name: string;
    films: string;
    videoGames: string;
    enemies: string;
    imageUrl: string;
}

const axiosPage = () =>{
    const[data,setData] = useState <IData[]>([])

    useEffect(() => {
        api.get(`/character`).then((res : any) => {
            console.log(res.data.data)
            setData(res.data.data)
        }).catch((error) => {
            console.log("deu ruim ff gg")
        })
    },[])


    return(
        <>
        <h1>Axios page client side</h1>
            <Suspense fallback={<div>loadConfig....</div>}>
            {data.map((item, index )=>(
                <div key={index}>
                    <h2>{item.name}</h2>
                    <Image src={item.imageUrl} alt={item.name} width={200} height={200}></Image>
                    <p>{item.films}</p>
                    <p>{item.videoGames}</p>
                    <p>{item.enemies}</p>
                    
                </div>
            ))}
            </Suspense>
        </>
    )
}

export default axiosPage