import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { colorTheme, stylesColors } from '../../components/utility_ar/components/colors/styleColors';
import { DevicePermission } from '../../components/utility_ar/utils/deviceCek/deviceCek';
import { TabOneScreen } from '.';
import { BarLabel, HomeIcon, ProfileIcon } from '../../components/utility_ar/components/screen/(tabs)/component/A3_navigation';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <>
      {!DevicePermission('web') ?
        <Tabs
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: colorTheme().icon,
            tabBarActiveBackgroundColor: colorTheme().block,
          }}>
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              tabBarLabel: ({ focused, color }) => (<BarLabel barTitle={'Home Screen'}color={color}focused={focused}/>),
              tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            }}
          />
          <Tabs.Screen
            name="two"
            options={{
              headerShown: false,
              tabBarLabel: ({ focused, color }) => (<BarLabel barTitle={'Profile'}color={color}focused={focused}/>),
              tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={stylesColors[colorScheme ?? 'light'].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
        </Tabs>
        :
        <><TabOneScreen /></>
      }
    </>
  );
}
