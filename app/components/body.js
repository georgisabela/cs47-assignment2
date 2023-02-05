import { StyleSheet, Text, View, Image, Dimensions, PixelRatio, ImageBackground } from 'react-native';
import { Icons, Themes } from '../../assets/Themes';
import Profiles from "../../assets/Profiles";

const { height, width } = Dimensions.get('window');

export default function Body() {
  return (
      <View styles={styles.bodyHolder}>

        <ImageBackground source={Profiles.mtl.image} style={styles.profileImage} imageStyle={styles.imageStyle}>

          <Text style={styles.nameText}>{Profiles.mtl.name}</Text>
          <Text style={styles.distanceText}>{Profiles.mtl.caption}</Text>

        </ImageBackground>

        <View style = {styles.voiceContainer}>
          <Text style={{fontFamily: "Sydney", fontSize: 25}}> My hottest take: </Text>

          <View style = {styles.voiceIconContainer}>
            <Image source={Icons.player.light} style={styles.voiceIcons}/>
            <Image source={Icons.audioWave.light} style={styles.voiceIcons}/>
          </View>

        </View>

      </View>
  );
}

const styles = StyleSheet.create ({

  bodyHolder: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between"
  },

  profileImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1/1.1,
    marginTop: 25,
    marginLeft: "5%",
    padding: 20,
    justifyContent: "space-between",
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },

  imageStyle: {
    borderRadius: 8,
  },

  nameText: {
    fontFamily: "Sydney",
    padding: "0.1%",
    fontSize: 32,
    color: "white",
  },

  distanceText: {
    fontFamily: "Sydney",
    padding: "0.1%",
    fontSize: 18,
    color: "white",
  },

  voiceContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    height: "23%",
    marginTop: 20,
    marginLeft: "5%",
    padding: 20,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },

  voiceIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  voiceIcons: {
    height: height * 0.07,
    width: width * 0.6,
    resizeMode: 'contain',
    marginTop: 20,
    marginLeft: -80,
  },

});
