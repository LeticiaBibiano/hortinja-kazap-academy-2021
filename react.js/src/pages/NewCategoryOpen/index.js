import React from 'react'
import { Button, Flex,
         Input,
         Text,
         IconButton
        } from "@chakra-ui/react"
import { Category, 
         NcBg, 
         NewCategory, 
        } from '../../components/NewCategory'
import { CloseIcon } from '@chakra-ui/icons'


export const NewCategoryOpen = () => {
    return(
        <Flex
        width='100vw'
        height='100vh'
        bgColor='#D9FFFFFF'
        flexDirection='row'
        alignItems='center'
        flexWrap='wrap'
        justifyContent='center'  
        >
            <NewCategory>
                <IconButton
                 aria-label="Fechar" 
                 icon={<CloseIcon/>}
                position='absolute'
                color='#fff'
                zIndex='2'
                marginLeft='400px'
                marginTop='20px'
                variant="ghost"
                ></IconButton>
                <Text
                zIndex='2'
                position='absolute'
                color='#fff'
                marginTop='125px'
                fontSize="lg"
                ><b>Nova Categoria</b></Text>            
                <NcBg></NcBg>
                <Category>
                    <Text 
                    mb="8px"
                    alignSelf='flex-start'
                    marginLeft='5'
                    marginTop='8'
                    ><b>Categoria:</b></Text>
                    <Input                     
                    placeholder="Categoria, ex. Verduras" 
                    colorScheme="pink"
                    width='90%'
                    variant="filled"
                    />
                </Category>
                <Flex
                marginTop='100px'
                width='75%'
                justifyContent='space-between'
                >
                    <Button
                    width='28%'
                    borderRadius='20px'
                    backgroundColor='#111111'
                    color='#fff'
                    >Fechar</Button>
                    <Button
                    width='70%'
                    colorScheme="teal"
                    borderRadius='20px'
                    >Salvar</Button>
                </Flex>
            </NewCategory>            
        </Flex>
    )
}