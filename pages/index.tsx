import { Grid, Card, Row, Text } from '@nextui-org/react'
import { GetStaticProps } from 'next'
import { NextPage } from "next"
import { Layout } from "../components/layouts/layout"
import { pokeapi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'



interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ( {pokemons} ) => {

  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <Grid xs= { 6 } sm={3} md={2} xl={1} key={pokemon.id}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 1}}>
                <Card.Image
                src={pokemon.img }
                width= "100%"
                height= { 120 }
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">

              <Text h4>{pokemon.name}</Text>
              <Text h5>{pokemon.id}</Text>
              
              </Row>
            </Card.Footer>
            
            
            
            
            
            </Card>

          </Grid>
        ))}
      </Grid.Container>
    
    </Layout>

  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeapi.get<PokemonListResponse>("/pokemon?limit=151")

  console.log(data)

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
  }))  


return {
    props: {
        pokemons
      }
  }

}
export default HomePage;
