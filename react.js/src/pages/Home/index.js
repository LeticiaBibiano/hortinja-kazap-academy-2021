import React from 'react'
import { Flex, 
         Spacer,
         Text,
         Image,
         Box,
         Divider,
         Stack,
         Button 
        } from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Card1 } from '../../components'

export const Home = () => {
    return(
        
        <Flex 
        bg='#E5E5E5'
        flexDirection='column'
        justifyContent='space-between'
        minHeight='100vh'   
        alignItems='center' 
        >
            {/* Header */}
            <Flex
            bg='#FBFAFA'
            alignItems='center'
            width='100vw'
            justifyContent='space-between'            
            >
                <Image src={Logo} alt='Hortinja Logo'
                paddingLeft= '250'
                paddingY='2'                              
                />
                <Flex 
                width='35vw' 
                justifyContent='space-between'
                marginRight='250'                
                >
                <Button 
                width='47%' 
                rightIcon={<ChevronDownIcon/>}
                onClick={ () => console.log('Mostrar categorias')}
            
                >Selecionar categoria</Button>

                <Button width='47%'>Buscar hortaliça</Button>
                </Flex>
            </Flex>

            {/* Container 1 */}
            <Flex 
            height='100%'
            width='50%'           
            bg='black'
            > 
            <Box>
                <Flex                 
                bg='#FFFFFF'
                borderRadius='32px'
                paddingY='4'
                paddingLeft='6'
                width='80'
                
                >
                <Stack spacing='0'>
                <Text fontSize='18px'>Registros</Text>                
                <Text fontSize='14px' textAlign='justify'>Número de registros da Horta</Text>
                </Stack>
                </Flex>                
            </Box>

            <Divider></Divider>

            <Box>
                <Flex                 
                bg='#FFFFFF'
                borderRadius='32px'
                paddingY='4'
                paddingLeft='6'
                width='80'
                >
                <Stack spacing='-6'>
                <Text fontSize='18px'>Valor total</Text>
                <br></br>
                <Text fontSize='14px'>Preço total da Horta</Text>
                </Stack>
                </Flex>
            </Box>
            </Flex>

            <Box>
                <Card1/>
            </Box>

            {/* Footer */}
            <Box marginY='5'>
                <Text
                textAlign='center'
                fontSize='16px'
                color='#111111'
                >Copyright © 2021 Feito com &#128154; por Kazap Tecnologia - Todos os direitos reservados</Text>
            </Box>
        </Flex>

    )
}