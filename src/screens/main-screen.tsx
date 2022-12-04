import  React, { useCallback, useState} from 'react'
import {Pressable} from 'react-native'
import {Box, Text, Center, VStack ,useColorModeValue} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
// import AnimatedCheckbox from '../components/animated-checkbox'
import TaskItem from '../components/task-item'


export default function MainScreen(){
    const [checked, setCheckted] = useState(false)

    const handlePressCheckBox = useCallback(()=>{
        setCheckted(prev => !prev)
    },[checked])
    return(
        <Center 
        _dark={{bg: 'blueGray.900'}} 
        _light={{bg:'blueGray.50'}} 
        px={4} flex={1}>
           <VStack space={5} alignItems="center">
                <Box w='100px' h="100px">
                    <Pressable onPress={handlePressCheckBox}>
                        <TaskItem 
                           isDone={checked}
                           handlePressCheckBox={handlePressCheckBox}
                        //    highlightColor="#4444ff"
                        //    checkmarkColor="#ffffff"
                        //    boxOutlineColor="#4444ff"
                        />

                    </Pressable>
                    
                </Box>
                <Box p={10} bg={useColorModeValue('red.500','yellow.500')} >
                    <Text>Zanjutsu </Text>
                </Box>
                <ThemeToggle/>
            </VStack>
        </Center>
    )
}