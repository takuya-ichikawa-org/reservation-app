import { Image, Platform, StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">探索</ThemedText>
      </ThemedView>
      <ThemedText>
        このアプリには、開始するためのサンプルコードが含まれています。
      </ThemedText>
      <Collapsible title="ファイルベースのルーティング">
        <ThemedText>
          このアプリには2つの画面があります：
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>と
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>
          のレイアウトファイルがタブナビゲーターを設定します。
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">詳細はこちら</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android、iOS、およびWebのサポート">
        <ThemedText>
          このプロジェクトはAndroid、iOS、およびWebで開くことができます。Webバージョンを開くには、このプロジェクトを実行しているターミナルで
          <ThemedText type="defaultSemiBold">w</ThemedText>を押してください。
        </ThemedText>
      </Collapsible>
      <Collapsible title="画像">
        <ThemedText>
          静的画像の場合、異なる画面密度に対応するために
          <ThemedText type="defaultSemiBold">@2x</ThemedText>および
          <ThemedText type="defaultSemiBold">@3x</ThemedText>
          のサフィックスを使用できます。
        </ThemedText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">詳細はこちら</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="カスタムフォント">
        <ThemedText>
          <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>
          を開いて、このようなカスタムフォントの読み込み方法を確認してください。
          <ThemedText style={{ fontFamily: "SpaceMono" }}>
            このフォントのように。
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">詳細はこちら</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="ライトモードとダークモードのコンポーネント">
        <ThemedText>
          このテンプレートにはライトモードとダークモードのサポートがあります。
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>
          フックを使用すると、ユーザーの現在のカラースキームを確認でき、それに応じてUIの色を調整できます。
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">詳細はこちら</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="アニメーション">
        <ThemedText>
          このテンプレートにはアニメーションコンポーネントの例が含まれています。
          <ThemedText type="defaultSemiBold">
            components/HelloWave.tsx
          </ThemedText>
          コンポーネントは強力な
          <ThemedText type="defaultSemiBold">
            react-native-reanimated
          </ThemedText>
          ライブラリを使用して、手を振るアニメーションを作成します。
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>
              コンポーネントはヘッダー画像にパララックス効果を提供します。
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
