import { Avatar, Flex, Text, Button, SimpleGrid } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function Home() {
    return (
        <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'} bgColor={'var(--custom-black)'}>
            <SimpleGrid maxWidth={'320px'} columns={[1,1,1,1]} textAlign={'center'} bgColor={'var(--custom-dark-grey)'} borderRadius={10} p={6} pt={4}>
                <Avatar size={'xl'} mx={'auto'} my={2} name='Jessica Randall' src={'/avatar-jessica.jpeg'} />
                <Text color={'var(--custom-white)'} fontSize={'3xl'} fontWeight={'400'} >Jessica Randall</Text>
                <Text color={'var(--custom-green)'} fontSize={'sm'} fontWeight={'600'} >London, United Kingdom</Text>
                <Text color={'var(--custom-white)'} fontSize={'sm'} my={4}>"Front-End Developer and Avid Reader"</Text>
                <Button as={NextLink} href={'#'} w={'100%'} my={1} variant={'solid'} fontSize={'sm'} bgColor={'var(--custom-grey)'} color={'var(--custom-white)'} _hover={{bg: 'var(--custom-green)', color: 'var(--custom-grey)'}} >GitHub</Button>
                <Button as={NextLink} href={'#'} w={'100%'} my={1} variant={'solid'} fontSize={'sm'} bgColor={'var(--custom-grey)'} color={'var(--custom-white)'} _hover={{bg: 'var(--custom-green)', color: 'var(--custom-grey)'}} >Frontend Mentor</Button>
                <Button as={NextLink} href={'#'} w={'100%'} my={1} variant={'solid'} fontSize={'sm'} bgColor={'var(--custom-grey)'} color={'var(--custom-white)'} _hover={{bg: 'var(--custom-green)', color: 'var(--custom-grey)'}} >LinkedIn</Button>
                <Button as={NextLink} href={'#'} w={'100%'} my={1} variant={'solid'} fontSize={'sm'} bgColor={'var(--custom-grey)'} color={'var(--custom-white)'} _hover={{bg: 'var(--custom-green)', color: 'var(--custom-grey)'}} >Twitter</Button>
                <Button as={NextLink} href={'#'} w={'100%'} my={1} variant={'solid'} fontSize={'sm'} bgColor={'var(--custom-grey)'} color={'var(--custom-white)'} _hover={{bg: 'var(--custom-green)', color: 'var(--custom-grey)'}} >Instagram</Button>
            </SimpleGrid>
        </Flex>
    );
}
