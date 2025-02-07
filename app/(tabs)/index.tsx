import { Image, Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ようこそ！</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ステップ1: 試してみる</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>
          を編集して変更を確認してください。開発者ツールを開くには
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>
          を押してください。
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ステップ2: 探索する</ThemedText>
        <ThemedText>
          このスターターアプリに含まれている内容を学ぶために、Exploreタブをタップしてください。
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ステップ3: 新しいスタートを切る</ThemedText>
        <ThemedText>
          準備ができたら、
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>
          を実行して新しい
          <ThemedText type="defaultSemiBold">app</ThemedText>
          ディレクトリを取得してください。現在の
          <ThemedText type="defaultSemiBold">app</ThemedText>は
          <ThemedText type="defaultSemiBold">app-example</ThemedText>
          に移動されます。
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
