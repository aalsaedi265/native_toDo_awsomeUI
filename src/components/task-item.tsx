import Raact,{useCallback} from 'react'
import { Pressable } from 'react-native'
import { Box,useTheme, themeTools, useColorMode, useColorModeValue } from 'native-base'
import AnimatedCheckbox from './animated-checkbox'

interface Props{
    isDone: boolean,
    handlePressCheckBox?: () => void
}
function TaskItem(props: Props){
    const { isDone, handlePressCheckBox} = props
    const theme =useTheme()
    const highlightColor = themeTools.getColor(
        theme,
        useColorModeValue('blue.500', 'blue.400')
    )
    const boxStroke = themeTools.getColor(
        theme,
        useColorModeValue( 'muted.300','mute.500')
    )
    const checkMarkColor = themeTools.getColor(
        theme,
        useColorModeValue('white', 'white')
    )
    const activeTextColor = themeTools.getColor(
        theme,
        useColorModeValue('darkText', 'lightText')
    )
    const doneTextColor = themeTools.getColor(
        theme,
        useColorModeValue('muted.400','muted.600')
    )
    
    return (
        <Box width={30} height={30} mr={2}>
            <Pressable onPress={handlePressCheckBox}>
                <AnimatedCheckbox
                highlightColor={highlightColor}
                checkmarkColor={checkMarkColor}
                boxOutlineColor={boxStroke}
                checked={isDone}
                />
            </Pressable>
        </Box>
    )
}
export default TaskItem