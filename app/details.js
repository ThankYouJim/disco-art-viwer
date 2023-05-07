import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import { useSelector } from "react-redux";

export default function Details() {
  const artworks = useSelector((state) => state.artworks.items);
  const params = useSearchParams();
  const [artwork, setArtwork] = useState();

  useEffect(() => {
    if (params.id) {
      const artwork = artworks.find((item) => item.id === params.id);
      console.log('get', artwork);
      setArtwork(artwork);
    }
  }, [params.id]);

  if (!artwork) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Stack.Screen
        options={{
          title: artwork.title,
        }}
      />
      <Image
        source={{ uri: artwork.image }}
        style={{
          flex: 1,
          backgroundColor: "white",
          maxHeight: "30%",
          paddingHorizontal: 16,
        }}
      />
      <View style={{ paddingHorizontal: 8 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            lineHeight: 24,
            marginVertical: 12,
          }}
        >
          {artwork.title}
        </Text>
      </View>
      <ScrollView
        style={{
          margin: 16,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: "grey",
          borderRadius: 16,
        }}
      >
        <Text style={{ fontSize: 16 }}>
          {artwork.artist}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          hendrerit nisl nec dui malesuada, quis laoreet ipsum sodales. Donec
          dignissim magna sit amet libero pharetra, sed convallis nunc
          malesuada. In eu turpis augue.
        </Text>
      </ScrollView>
    </View>
  );
}
