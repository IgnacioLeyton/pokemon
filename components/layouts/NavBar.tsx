import { useTheme } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

export const NavBar = () => {
        
    const { theme } = useTheme();

    return (

            

        <div style ={{
            display : "flex",
            width : "100%",
            flexDirection : "row",
            alignItems : "center",
            justifyContent : "start",
            padding : "0 20px",
            backgroundColor : theme?.colors.gray900.value
        }}>
        
        <Text color= "white" h2>P</Text>
        <Text color= "white" h3>okémon</Text>

        <Spacer css={{flex: 1}}/>

        <Text color= "white">Favoritos</Text>





        </div>
)};