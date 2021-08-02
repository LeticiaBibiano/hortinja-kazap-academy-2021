import React from 'react'
import { Flex, 
         Text,
         Image,
         Box,
         Button,
         IconButton,
         Select,
         Input,
        } from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'
import Money from '../../assets/money.svg'
import { DeleteIcon, EditIcon, CalendarIcon, AddIcon } from '@chakra-ui/icons'
import { Card1, CardImage, ItemImage } from '../../components/Card1'
import { Card2, ItemImage2 } from '../../components/Card2'
import { Card3, ItemImage3 } from '../../components/Card3'
import { Separator } from '../../components/Separator'
import { CardInfo, MainCard } from '../../components/MainCard'

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
                paddingLeft= '15%'
                paddingY='2'                              
                />
                <Flex 
                width='35vw' 
                justifyContent='space-between'
                marginRight='250'                
                >

                <Select 
                placeholder="Selecionar categoria"
                variant="filled"
                borderRadius='20px'
                backgroundColor='#D9D2CF'
                ></Select>

                <Input 
                borderRadius='20px'
                backgroundColor='#D9D2CF'
                placeholder='Buscar hortaliça'>
                </Input>
           
                </Flex>
            </Flex>

            {/* Main Card */}

            <MainCard marginBottom='100px'></MainCard>

            <Flex
            width='600px'
            >
            <CardInfo>
                <Text
                marginTop='20px'
                marginLeft='20px'
                ><b>Registros</b></Text>
                <Text
                marginLeft='20px'
                >Número de registros da horta</Text>
                <Flex
                alignItems='center'
                marginTop='35px'
                marginX='110px'
                >
                <CalendarIcon
                boxSize={7} 
                color='teal'
                />
                <Text 
                fontSize='xl'
                marginLeft='10px'
                ><b>#029</b></Text>
                </Flex>
            </CardInfo>

            <CardInfo>
            <Text
                marginTop='20px'
                marginLeft='20px'
                ><b>Valor total</b></Text>
                <Text
                marginLeft='20px'
                >Preço total da horta</Text>
                <Flex
                alignItems='center'
                marginTop='30px'
                marginX='100px'
                >
                <Image src={Money} alt='Money Logo'                             
                />
                <Text 
                fontSize='xl'
                marginLeft='10px'
                ><b>#029</b></Text>
                </Flex>
            </CardInfo>
            </Flex>
    
            <Separator></Separator>
        
            {/* Buttons */}
            <Flex
            width='50%'
            justifyContent='space-between'
            marginTop='-7'
            marginBottom='70px'
            >
                <Button
                borderRadius='20px'
                backgroundColor='#006B5C'
                color='white'
                width='48%'
                leftIcon={<AddIcon/>}
                >Adicionar Hortaliças</Button>
                <Button
                borderRadius='20px'
                backgroundColor='#006B5C'
                color='white'
                width='48%'
                leftIcon={<AddIcon/>}
                >Adicionar Categoria</Button>
            </Flex>

            <Button
            alignSelf='flex-start'
            marginX='220px'
            marginBottom='30px'
            variant="ghost"
            fontSize='30px'
            rightIcon={<EditIcon/>}
            ><b>Verduras</b></Button>

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

           <Button
            alignSelf='flex-start'
            marginX='220px'
            marginBottom='30px'
            variant="ghost"
            fontSize='30px'
            rightIcon={<EditIcon/>}
            ><b>Legumes</b></Button>
           
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

            <Button
            alignSelf='flex-start'
            marginX='220px'
            marginBottom='30px'
            variant="ghost"
            fontSize='30px'
            rightIcon={<EditIcon/>}
            ><b>Frutas</b></Button>

            {/* Card Frutas */}

            <Flex>
            <Card3>
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
                </Card3> 

                <Card3>
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
                </Card3> 

                <Card3>
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
                </Card3> 
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