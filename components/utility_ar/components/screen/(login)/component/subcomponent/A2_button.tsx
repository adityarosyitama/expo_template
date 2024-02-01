import { router } from "expo-router"
import { useState, useEffect } from "react"
import { Pressable, View } from "react-native"
import { DevicePermission } from "../../../../../utils/deviceCek/deviceCek"
import { heightCal, widthScreen } from "../../../../../utils/screenSize/Screensize"
import { Undefinedcek } from "../../../../../utils/undefinedCek/Undefinedcek"
import { colorTheme } from "../../../../colors/styleColors"
import { H1, H3 } from "../../../../text/styleText"

export const ButtonLogin = ({ item }) => {
    const [modal, setModal] = useState(false)
    const handleIn = () => {
        if (!Undefinedcek(item.login)) {
            router.push('(tabs)')
        } else {
            if (DevicePermission('web')) {
                setModal(true)
            }
        }
    }
    useEffect(() => {
        if (!modal) { return }
        const timerId = setTimeout(() => {
            setModal(false);
        }, 3000);
        return () => clearTimeout(timerId);
    }, [modal]);
    return (
        <Pressable onPress={handleIn} style={{ borderColor: colorTheme().border, borderWidth: heightCal(2), borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
            <H1>Login Screen</H1>
            {modal ? <View style={{ position: 'absolute', backgroundColor: 'rgba(255,0,255,1)', width: widthScreen, alignItems: 'center' }}><H3 style={{ color: 'rgba(255,255,255,1)' }}>Login First</H3></View> : null}
        </Pressable>
    )
}