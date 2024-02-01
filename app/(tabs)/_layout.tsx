import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable, useColorScheme } from 'react-native';
import { colorTheme, stylesColors } from '../../components/utility_ar/components/colors/styleColors';
import { DevicePermission, DeviceReturn, DeviceReturnWeb } from '../../components/utility_ar/utils/deviceCek/deviceCek';
import { TabOneScreen } from '.';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log(`dev return=>`, DeviceReturn({ data: true, only: 'web' }), 'web', DevicePermission('android'), Platform.OS)
  return (
    <>
    {!DevicePermission('web')?
      <Tabs
        screenOptions={{
          tabBarHideOnKeyboard: !DevicePermission('web'),
          tabBarActiveTintColor: colorTheme().icon,
          tabBarActiveBackgroundColor: colorTheme().block,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: 'Home Screen',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="support" color={color} />,
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
      <><TabOneScreen/></>
      }
    </>
  );
}
