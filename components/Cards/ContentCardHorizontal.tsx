import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

type ContentCardHorizontalProps = {
  image?: any;
  onPress?: () => void;
};

export default function ContentCardHorizontal({
  image,
  onPress,
}: ContentCardHorizontalProps) {
  return (
    <TouchableOpacity style={styles.contentCard} onPress={onPress}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.contentCard]}>
          <Text style={styles.contentCardTitle}>No content</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const CARD_WIDTH = 160;
const CARD_HEIGHT = 100;

const styles = StyleSheet.create({
  contentCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.contentCard,
    borderRadius: 12,
    margin: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  contentCardTitle: {
    color: colors.secondaryTextColor,
    fontSize: 16,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT, // * 0.8, use ~80% height for image, adjust as needed
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
});

// import React from "react";
// import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
// import { colors } from "../../themes/colors";

// type ContentCardHorizontalProps = {
//   // title: string; * IMPLEMENT LATER?
//   image?: any;
//   onPress?: () => void;
// };

// export default function ContentCardHorizontal({
//   // title,
//   image,
//   onPress,
// }: ContentCardHorizontalProps) {
//   return (
//     <TouchableOpacity style={styles.contentCard} onPress={onPress}>
//       {image ? (
//         <Image source={image} style={styles.image} />
//       ) : (
//         <View style={[styles.image, styles.contentCard]}>
//           <Text style={styles.contentCardTitle}>No content</Text>
//         </View>
//       )}
//       {/* <Text style={styles.contentCardTitle}>{title}</Text> */}
//     </TouchableOpacity>
//   );
// }
