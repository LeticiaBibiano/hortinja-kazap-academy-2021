import React from 'react'
import { Flex, 
         Spacer,
         Text,
         Image,
         Box,
         Divider,
         Stack,
         Button,
         IconButton 
        } from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Card1, CardImage, ItemImage } from '../../components/Card1'
import { Card2, ItemImage2 } from '../../components/Card2'
import { Card3, ItemImage3 } from '../../components/Card3'
import { Separator } from '../../components/Separator'

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

            {/* Buttons */}
            <Flex>
                <Button>Adicionar Hortaliças</Button>
                <Button>Adicionar Categoria</Button>
            </Flex>

            <Button>Verduras</Button>

            {/* Card verduras */}
            <Flex>
                <Card1>
                    <CardImage>
                        <ItemImage></ItemImage>
                        <Text
                        color='white'
                        marginLeft='5'
                        fontSize='36px'
                        > Alface </Text>
                    </CardImage>
                    <Text
                    alignSelf='flex-start'
                    marginLeft='8'
                    marginY='5'
                    > <b>Alface Crespa</b> </Text>

                    <Text
                    textAlign='justify'
                    fontSize='14px'
                    paddingX='8'                    
                    > A alface crespa é uma hortaliça folhosa muito popular entre os brasileiros. 
                    Costuma ser consumida crua, geralmente em saladas.</Text>

                    <Flex 
                    justifyContent='space-between'
                    width='100%' 
                    alignItems='center'                   
                    >
                        <Flex
                        alignSelf='flex-start'
                        marginTop='5'
                        marginX='8'
                        >
                            <IconButton
                            aria-label="Excluir" 
                            icon={<DeleteIcon/>}
                            alignSelf='flex-start'
                            colorScheme="red"
                            size='sm'
                            ></IconButton>

                            <IconButton
                            aria-label="Editar" 
                            icon={<EditIcon/>}
                            alignSelf='flex-start'
                            colorScheme='blackAlpha'
                            marginLeft='2'
                            size='sm'                        
                            ></IconButton>
                        </Flex>

                        <Flex 
                        marginRight='7' 
                        marginTop='4'
                        alignItems='center'
                        >
                            <Text 
                            fontSize='12px'
                            ><b>Média</b> R$</Text>
                            <Text 
                            fontSize='24px'
                            marginLeft='1'
                            color='#006B5C'
                            ><b>1,99</b></Text>
                            <Text 
                            fontSize='12px'
                            marginLeft='1'
                            >unid</Text>

                        </Flex>
                    </Flex>
                </Card1>

                <Card1>
                    <CardImage>
                        <ItemImage></ItemImage>
                        <Text
                        color='white'
                        marginLeft='5'
                        fontSize='36px'
                        > Alface </Text>
                    </CardImage>
                    <Text
                    alignSelf='flex-start'
                    marginLeft='8'
                    marginY='5'
                    > <b>Alface Crespa</b> </Text>

                    <Text
                    textAlign='justify'
                    fontSize='14px'
                    paddingX='8'                    
                    > A alface crespa é uma hortaliça folhosa muito popular entre os brasileiros. 
                    Costuma ser consumida crua, geralmente em saladas.</Text>

                    <Flex 
                    justifyContent='space-between'
                    width='100%' 
                    alignItems='center'                   
                    >
                        <Flex
                        alignSelf='flex-start'
                        marginTop='5'
                        marginX='8'
                        >
                            <IconButton
                            aria-label="Excluir" 
                            icon={<DeleteIcon/>}
                            alignSelf='flex-start'
                            colorScheme="red"
                            size='sm'
                            ></IconButton>

                            <IconButton
                            aria-label="Editar" 
                            icon={<EditIcon/>}
                            alignSelf='flex-start'
                            colorScheme='blackAlpha'
                            marginLeft='2'
                            size='sm'                        
                            ></IconButton>
                        </Flex>

                        <Flex 
                        marginRight='7' 
                        marginTop='4'
                        alignItems='center'
                        >
                            <Text 
                            fontSize='12px'
                            ><b>Média</b> R$</Text>
                            <Text 
                            fontSize='24px'
                            marginLeft='1'
                            color='#006B5C'
                            ><b>1,99</b></Text>
                            <Text 
                            fontSize='12px'
                            marginLeft='1'
                            >unid</Text>

                        </Flex>
                    </Flex>
                </Card1>

                <Card1>
                    <CardImage>
                        <ItemImage></ItemImage>
                        <Text
                        color='white'
                        marginLeft='5'
                        fontSize='36px'
                        > Alface </Text>
                    </CardImage>
                    <Text
                    alignSelf='flex-start'
                    marginLeft='8'
                    marginY='5'
                    > <b>Alface Crespa</b> </Text>

                    <Text
                    textAlign='justify'
                    fontSize='14px'
                    paddingX='8'                    
                    > A alface crespa é uma hortaliça folhosa muito popular entre os brasileiros. 
                    Costuma ser consumida crua, geralmente em saladas.</Text>

                    <Flex 
                    justifyContent='space-between'
                    width='100%' 
                    alignItems='center'                   
                    >
                        <Flex
                        alignSelf='flex-start'
                        marginTop='5'
                        marginX='8'
                        >
                            <IconButton
                            aria-label="Excluir" 
                            icon={<DeleteIcon/>}
                            alignSelf='flex-start'
                            colorScheme="red"
                            size='sm'
                            ></IconButton>

                            <IconButton
                            aria-label="Editar" 
                            icon={<EditIcon/>}
                            alignSelf='flex-start'
                            colorScheme='blackAlpha'
                            marginLeft='2'
                            size='sm'                        
                            ></IconButton>
                        </Flex>

                        <Flex 
                        marginRight='7' 
                        marginTop='4'
                        alignItems='center'
                        >
                            <Text 
                            fontSize='12px'
                            ><b>Média</b> R$</Text>
                            <Text 
                            fontSize='24px'
                            marginLeft='1'
                            color='#006B5C'
                            ><b>1,99</b></Text>
                            <Text 
                            fontSize='12px'
                            marginLeft='1'
                            >unid</Text>

                        </Flex>
                    </Flex>
                </Card1>                
            </Flex>

           <Separator></Separator>
           
            {/* Card Legumes */}
            <Flex alignSelf='flex-start' marginLeft='195px'>
            <Card2>
                    <CardImage>
                        <ItemImage2></ItemImage2>
                        <Text
                        color='white'
                        marginLeft='5'
                        fontSize='36px'
                        > Beringela </Text>
                    </CardImage>
                    <Text
                    alignSelf='flex-start'
                    marginLeft='8'
                    marginY='5'
                    > <b>Beringela</b> </Text>

                    <Text
                    textAlign='justify'
                    fontSize='14px'
                    paddingX='8'                    
                    > A berinjela ou beringela é o fruto da planta Solanum melongena, 
                    uma solanaceae arbustiva, anual, originária da Índia</Text>

                    <Flex 
                    justifyContent='space-between'
                    width='100%' 
                    alignItems='center'                   
                    >
                        <Flex
                        alignSelf='flex-start'
                        marginTop='5'
                        marginX='8'
                        >
                            <IconButton
                            aria-label="Excluir" 
                            icon={<DeleteIcon/>}
                            alignSelf='flex-start'
                            colorScheme="red"
                            size='sm'
                            ></IconButton>

                            <IconButton
                            aria-label="Editar" 
                            icon={<EditIcon/>}
                            alignSelf='flex-start'
                            colorScheme='blackAlpha'
                            marginLeft='2'
                            size='sm'                        
                            ></IconButton>
                        </Flex>

                        <Flex 
                        marginRight='7' 
                        marginTop='4'
                        alignItems='center'
                        >
                            <Text 
                            fontSize='12px'
                            ><b>Média</b> R$</Text>
                            <Text 
                            fontSize='24px'
                            marginLeft='1'
                            color='#006B5C'
                            ><b>13,99</b></Text>
                            <Text 
                            fontSize='12px'
                            marginLeft='1'
                            >unid</Text>
                        </Flex>
                    </Flex>
                </Card2>                
            </Flex>

            <Separator></Separator>

            {/* Card Frutas */}

            <Flex>
            <Card2>
                    <CardImage>
                        <ItemImage3></ItemImage3>
                        <Text
                        color='white'
                        marginLeft='5'
                        fontSize='36px'
                        > Tomate </Text>
                    </CardImage>
                    <Text
                    alignSelf='flex-start'
                    marginLeft='8'
                    marginY='5'
                    > <b>Tomate</b> </Text>

                    <Text
                    textAlign='justify'
                    fontSize='14px'
                    paddingX='8'                    
                    > O tomate é o fruto do tomateiro. Da sua família, fazem também parte as berinjelas,
                     as pimentas e os pimentões, além de algumas...</Text>

                    <Flex 
                    justifyContent='space-between'
                    width='100%' 
                    alignItems='center'                   
                    >
                        <Flex
                        alignSelf='flex-start'
                        marginTop='5'
                        marginX='8'
                        >
                            <IconButton
                            aria-label="Excluir" 
                            icon={<DeleteIcon/>}
                            alignSelf='flex-start'
                            colorScheme="red"
                            size='sm'
                            ></IconButton>

                            <IconButton
                            aria-label="Editar" 
                            icon={<EditIcon/>}
                            alignSelf='flex-start'
                            colorScheme='blackAlpha'
                            marginLeft='2'
                            size='sm'                        
                            ></IconButton>
                        </Flex>

                        <Flex 
                        marginRight='7' 
                        marginTop='4'
                        alignItems='center'
                        >
                            <Text 
                            fontSize='12px'
                            ><b>Média</b> R$</Text>
                            <Text 
                            fontSize='24px'
                            marginLeft='1'
                            color='#006B5C'
                            ><b>13,99</b></Text>
                            <Text 
                            fontSize='12px'
                            marginLeft='1'
                            >unid</Text>
                        </Flex>
                    </Flex>
                </Card2> 
            </Flex>

            <Separator></Separator>
            

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