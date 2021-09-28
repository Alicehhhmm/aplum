import React from "react";


function Footer(){
    return(
        <home style={ Sy.mou} >
           我是尾部
        </home>
    
    );
}

const Sy = StyleSheet.create({
   mou:{
    borderColor: '#ffc900',
   },

});
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: px(32),
      paddingHorizontal: px(24),
    },
    sectionTitle: {
      fontSize: px(24),
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: px(8),
      fontSize: px(18),
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    input: {
      height: px(80),
      fontSize: px(24),
      paddingTop: px(20),
      paddingBottom: px(20),
      color: '#666666',
      // backgroundColor:'#333',
    },
    container: {
      width: px(100),
      height: px(100),
      paddingTop: px(10),
      // backgroundColor: 'green',
    },
    tinyLogo: {
      width: px(90),
      height: px(90),
      borderRadius: px(45),
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default Footer;