import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { Card } from "../Card";
import { useEffect, useState } from "react";
import { getCharacters } from "../../services/ApiService";
import { Character } from "../../@types/Default";

export function List() {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await getCharacters(page);
      const newData = response.data.results;

      setData((prevData) => [...prevData, ...newData]);

      if (newData.length === 0) {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={Card}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={<Text style={styles.title}>Rick and Morty</Text>}
      ListFooterComponent={
        loading ? <ActivityIndicator size={24} color={"#fff"} /> : null
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    flex: 1,
  },
});
