import { Metadata } from "next"
import Image from "next/image";
type IData = {
    data: {
        name:string;
        films: string;
        videoGames: string;
        imageUrl: string;
    }[];
}

export const metadata: Metadata = {
    title: "Lista de Personagens RM",
    description: "Aplicação teste com consumo de api"
}

const ServerSide = async () => {

    const res = await fetch("http://api.disneyapi.dev/character");
    const data: IData = await res.json()

  return (
    <>
    <div>Server Side Page try</div>
    {data?.data.map((item, index) => {
        return(
            <div className="mb-20" key={index}>
                <h1>{item.name}</h1>
                <h2>{item.videoGames}</h2>
                <p>{item.films}</p>
                <Image src={item.imageUrl} alt={item.name} width={200} height={200}/>
            </div>
        )
    })}
    </>
  )
}

export default ServerSide