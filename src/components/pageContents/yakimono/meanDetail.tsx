import BaseTitleText from "@/components/base/baseTitleText";
import { Divider, Grid, Text } from "@chakra-ui/react";

function MeanDetail() {
  return (
    <>
      <Text textAlign="center" fontSize="48px" fontWeight="bold">
        豚肉の部位
      </Text>
      <Divider mb="30px" />
      <Grid templateColumns="repeat(4, 1fr)" gap="10px" justifyItems="center">
        <BaseTitleText
          title="カシラ（こめかみ）"
          description="生肉に近く肉の旨みたっぷりです。"
        />
        <BaseTitleText
          title="豚トロ（ネック）"
          description="首まわりのお肉で脂が甘いで。"
        />
        <BaseTitleText
          title="タン（舌）"
          description="牛よりも柔らかき淡白です。"
        />
        <BaseTitleText
          title="ペラ（喉）"
          description="一人前で豚５頭分、程良い硬さが美味しいです。"
        />
        <BaseTitleText
          title="ドーナッツ（喉仏）"
          description="カリカリに焼いて味よりも食感を楽しんでください。"
        />
        <BaseTitleText
          title="豚ナンコツ（食道）"
          description="歯応えは名前の通り軟骨そっくりです。"
        />
        <BaseTitleText
          title="コリコリ（大動脈）"
          description="豚ナンコツよりも歯応えがあり脂の乗ってます。"
        />
        <BaseTitleText
          title="ガツ元（胃）"
          description="硬すぎずシャキシャキとした歯応えです。"
        />
      </Grid>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap="10px"
        justifyItems="center"
        m="10px 0"
      >
        <BaseTitleText
          title="おっぱい（乳）"
          description="サクサクとした歯応えでやわらかくさっぱりしてます。"
        />
        <BaseTitleText
          title="ホルモン（大腸）"
          description="牛ホルモンに比べて薄くて固めの食感。"
        />
        <BaseTitleText
          title="仔袋（子宮）"
          description="コリコリとした歯応えで歯切れよく淡白な味わいです。"
        />
      </Grid>
    </>
  );
}

export default MeanDetail;
