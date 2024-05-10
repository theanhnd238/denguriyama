import BaseTitleText from "@/components/base/baseTitleText";
import { Box, Divider, Grid, Text } from "@chakra-ui/react";

function MeanDetail() {
  return (
    <Box display={{ base: "none", md: "block" }} m="20px">
      {" "}
      <Text
        textAlign="center"
        fontSize={{ base: "24px", mid: "42px" }}
        fontWeight="bold"
      >
        牛肉の部位
      </Text>
      <Divider mb="30px" />
      <Grid
        templateColumns={{ md: "repeat(3, 1fr)", mid: "repeat(4, 1fr)" }}
        gap="10px"
        justifyItems="center"
      >
        <BaseTitleText
          title="タンモト"
          description="やわらかく栄養たっぷり。美味しい根元部分だけを使用"
        />
        <BaseTitleText
          title="タンシタ"
          description="舌の下の部分。あっさりしていて味もしっかりしっかりしています。"
        />
        <BaseTitleText
          title="ハラミ（ほほ肉）"
          description="牛ー頭からわずか数百グラム。味はハラミに近いです。"
        />
        <BaseTitleText
          title="ハツ（心臓）"
          description="脂肪分が少なくさっぱりしています。"
        />
        <BaseTitleText
          title="ハツモト（大動脈）"
          description="独特な噛み応えにあまい脂がたっぷりとついてます。"
        />
        <BaseTitleText
          title="ウルテ（食道）"
          description="ハードな食感がその魅力。"
        />
        <BaseTitleText
          title="シビレ（胸腺）"
          description="やわらかく濃厚な味。"
        />
        <BaseTitleText
          title="レバー（肝臓）"
          description="鉄分ビタミンA、B がとても豊富です。"
        />

        <BaseTitleText
          title="ミノサンド"
          subTitle="（第一胃袋）"
          description="ミノにあまい脂がサンドされています。"
          width="162px"
        />
        <BaseTitleText
          title="上ミノ"
          subTitle="（第一胃袋）"
          description="弾力性に富んで食感で独特なあまみがあります。"
          width="150px"
        />
        <BaseTitleText
          title="ハチノス"
          subTitle="（第二胃袋）"
          description="蜂の巣のような形状からの名に。"
          width="150px"
        />
        <BaseTitleText
          title="センマイ"
          subTitle="（第三胃袋）"
          description="淡白な味わいと独特な舌触りが特徴。"
          width="150px"
        />
        <BaseTitleText
          title="ギャラ"
          subTitle="（第四胃袋）"
          description="適度な歯応えで噛めば噛むほどコクのある味です。"
          width="150px"
        />

        <BaseTitleText
          title="ハラミ（横隔膜）"
          description="赤身肉のように見られますが実はホルモン。"
        />
        <BaseTitleText
          title="コプチャン（小腸）"
          description="歯応えがしっかりしてホルモンより脂肪が多い。"
        />
        <BaseTitleText
          title="ホルモン（大腸）"
          description="口の中で脂がとろけます。"
        />
        <BaseTitleText
          title="テール（尾）"
          description="スープでよく使われ噛む程に濃厚な味が広がります。"
        />
      </Grid>
    </Box>
  );
}

export default MeanDetail;
