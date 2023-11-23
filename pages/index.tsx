import { NextPage } from "next"
import { Button } from "@nextui-org/react"
import { Layout } from "../components/layouts/layout"

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu, 
  NavbarMenuItem} from "@nextui-org/navbar";


const HomePage: NextPage = () => {

  return (
    <Layout title = "Listado de Pokemons">
    <Button color ="gradient">
      Hola mundo
    </Button>
    </Layout>
  )
}



export default HomePage;
