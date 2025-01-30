import { FlatList, Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "./components/ThemedText";
import useThemeColors from "@/hooks/useThemeColors";
import Card from "./components/Card";
import PokemonCard from "./components/pokemon/PokemonCard";

export default function Index() {
  const colors = useThemeColors();

  const pokemons = Array.from({ length: 35 }, (_, index) => ({
    name: "Pokemon name",
    id: index + 1,
  }));

  return (
    <SafeAreaView style={[styles.container, , { backgroundColor: colors.tint }]}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/pokeball.png")} style={{ width: 24, height: 24 }} />
        <ThemedText variant="headline" color="grayLight">
          Pokédex
        </ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          columnWrapperStyle={styles.gripGap}
          contentContainerStyle={[styles.gripGap, styles.list]}
          renderItem={({ item }) => <PokemonCard id={item.id} name={item.name} style={{ width: "33.33%" }} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12,
  },
  body: {
    flex: 1,
  },
  gripGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
});
