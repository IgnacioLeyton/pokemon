import Head from "next/head"
import { FC } from "react"
import { NavBar } from "../ui/NavBar"


interface Props {

    title?: string

}


//listado de pokemons
export const Layout: FC<Props> = ({ children, title }) => {
    return (    
        <>
        
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Ignacio"/>
                <meta name="description" content={`Información sobre el pokemon: XXXX ${ title }`} />
                <meta name="keywords" content={ `${title}, "Pokemon, Pokedex"}`}/>
            </Head>

        <NavBar />

            <main style= {{
            padding : "0px 20px",
            }}>
                {children}
            </main>
        </>   
            
            )
        };