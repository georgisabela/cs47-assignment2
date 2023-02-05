import { StyleSheet, Text, View, Image, Dimensions, PixelRatio } from 'react-native';
import { Icons, Themes } from '../../assets/Themes';

const { height, width } = Dimensions.get('window');

export default function Header() {
  return (
      <View style={styles.header}>

        <Image source={Icons.menu.light} style={styles.headerIcons}/>

        <Text style={styles.title}>
          ensom
        </Text>

        <Image source={Icons.sun} style={styles.headerIcons}/>

      </View>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcons: {
    height: width * 0.15,
    width: width * 0.15,
  },

  title: {
    fontFamily: "Sydney-Bold",
    fontSize: 32,
  },

});
