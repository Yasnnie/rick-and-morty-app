import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Character } from "../../@types/Default";

interface Props {
  item: Character;
}

export function Card({ item }: Props) {
  const statusStyle =
    styles[item.status as keyof StatusStyles] || styles.unknown;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>

        <View style={[styles.status, statusStyle]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );
}

interface StatusStyles {
  Alive: ViewStyle;
  Dead: ViewStyle;
  unknown: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    gap: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },

  name: {
    fontWeight: "600",
    fontSize: 18,
  },

  status: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "flex-start",
    flexShrink: 1,
  },

  statusText: {
    fontSize: 14,
    color: "#fff",
  },

  Alive: {
    backgroundColor: "#02a011",
  } as ViewStyle,

  Dead: {
    backgroundColor: "#d30000",
  } as ViewStyle,

  unknown: {
    backgroundColor: "#656565",
  } as ViewStyle,
});
