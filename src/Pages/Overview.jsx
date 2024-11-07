import React, { useState } from "react";
import bgImg from "../assets/overview_pastandpresent_background.png";
import Navigation from "../components/Navigation";
import OverviewContent from "../components/OverviewContent";
import Confucius from "../assets/overview/confucius.png";
import Mencius from "../assets/overview/mencius.png";
import Xunzi from "../assets/overview/xunzi.png";
import Zhuzi from "../assets/overview/zhuzi.png";
import FiveRV from "../assets/overview/rive_rites.png";
import RiteofPassage from "../assets/overview/marriage_rites.png";
import HumanNatureView from "../assets/overview/human_relationship.png";
const Overview = () => {
  const [selectedKey, setSelectedKey] = useState(2);
  const [selectedClass, setSelectedClass] = useState([]);

  const historicalChanges = [
    {
      class: "춘추전국시대",
      title: "[춘추전국시대_BC 8세기~BC 3세기]",
      text: "춘추전국 시대는 끊이지 않는 전쟁으로 혼란스러웠고, 기존의 가치관과 제도가 무너지면서 사람들은 도덕적 지침과 사회 질서 회복을 갈망했다. 이러한 시기에 등장한 공자는 세상이 혼란스러운 이유가 개인의 윤리의식이 타락했기 때문이며 모든 사람의 윤리의식이 높아지면 좋은 세상이 온다고 생각했다. 따라서 공자는 스스로가 어떻게 군자와 성인이 될 수 있는지를 고민하는 개인 윤리를 집대성했고 이를 ‘유학'이라 한다. \n이후 공자의 제자였던 맹자는 공자의 가르침을 보완하고 확장했으며, 남송 시대 유학자 주자는 공자, 맹자, 순자 등 유교 성현들의 학설을 바탕으로 성리학을 완성했다.",
    },
    {
      class: "고려시대",
      title: "[고려시대_918년~1392년]",
      text: "고려는 불교를 근간으로 하는 국가였지만 다양한 문화를 포용하며 유교를 국가 운영에 참고했다. 유교는 사람 사이의 관계와 그 안에서 지켜야 할 예절을 중시하며, 이를 따를 때 사회 질서가 유지된다고 보았다. 이에 따라 고려 사회는 국립 교육 기관인 국자감을 설립하여 유교 경전을 가르쳤고, 관료를 선발할 때 유교 경전을 시험 과목으로 포함하는 등 유교를 활용했다.",
    },
    {
      class: "조선시대",
      title: "[조선시대_1392년~1897년]",
      text: "고려를 멸망시키고 조선시대를 건국한 성리학자 세력은 성리학을 국가의 근본 이념으로 삼아 발전시켰다. 이들은 불교를 억압하고 탄압하며, 다른 학문을 인정하지 않았다. 또한, 유교의 이념을 백성에게 전파하기 위해 많은 노력을 기울였다. 1429년, 세종대왕은 글을 모르는 백성도 유교를 배울 수 있도록 '삼강행실도'라는 그림책을 출간하게 했으며, 백성들이 생활 속에서 지켜야 할 예인 '관혼상제'를 강조했다.",
    },
    {
      class: "현재",
      title: "[현재]",
      text: "현대 사회에서 다양한 인식 변화가 일어나고 있지만, 유교 문화는 여전히 한국 사회에 깊이 뿌리박혀 있다. 대표적으로는 제사 문화와 어른 공경, 위계질서가 있다. 최근 제사 문화가 간소화되고 있으며, 일부 가정에서는 제사를 생략하는 경우도 있지만 그럼에도 불구하고 많은 사람들에게 중요한 문화로 남아있다. 연장자에 대한 존경심을 가지는 유교적 가치관은 젊은 세대 사이에서 그 중요성이 약화되고 있지만 여전히 많은 사람들이 이를 지키며 살아가고 있다. 또한 위계질서는 사회 전반에 걸쳐 나타난다. 선배와 후배 간, 직장 상사와 직원 간의 관계에서 나이와 경력에 따른 서열이 존재하며 이를 기반으로 의사소통과 의사결정이 이루어진다.",
    },
  ];

  const philosophers = [
    {
      class: "공자",
      title: "[공자_BC 551년~BC 479년]",
      src: Confucius,
      width: "369px",
      height: "374.36px",
      text: "공자는 중국 춘추 시대의 위대한 사상가이자 교육자로, 유교의 시조로 존경받는 인물이다. 공자가 태어난 시대는 중국 역사상 혼란과 변화의 시기였다. 공자는 개인 수양을 통해 가정과 나라를 다스려 세상을 평화롭게 만드는 것을 목표로 삼았다. 또한, 인, 예, 교육을 통해 사회적 조화와 인재 양성을 강조했다. 그는 제자들에게 예절과 도덕적 가치를 가르쳤고 그의 가르침은 제자들에 의해 ‘’논어’로 정리됐다.",
    },
    {
      class: "맹자",
      title: "[맹자_BC 5372년~BC 289년]",
      src: Mencius,
      width: "369px",
      height: "330.43px",
      text: "맹자는 공자 이후 유교를 더욱 발전시킨 중요한 사상가다. 그는 공자의 ‘인’에 ‘의’를 덧붙여 인의를 강조했고, 통치자가 덕으로 모범을 보여 백성들이 따르게 하는 정치 ‘왕도정치’를 긍정했다. 또한 그는 사람의 천성은 본래부터 선한 것이며 이 착한 본성을 지키고 가다듬는 것이 도덕적 책무라는 ’성선설’ 을 주장했다.",
    },
    {
      class: "순자",
      title: "[순자_BC 298년~BC 238년]",
      src: Xunzi,
      width: "369px",
      height: "315px",
      text: "순자는 중국 전국시대 말기의 유교 사상가이자 정치가로, 공자와 맹자 이후 유교를 더욱 발전시킨 인물이다. 그는 성악설을 주장하며 인간 본성의 악을 강조했으며, 예로 교화하여 다스려야한다는 예치와 법을 통해 사회 질서를 유지하는 법치를 주장했다.",
    },
    {
      class: "주자",
      title: "[주자_1130년~1200년]",
      src: Zhuzi,
      width: "369px",
      height: "335.63px",
      text: "주자는 송나라 시대의 학자이자 철학자로, 성리학을 집대성한 인물이다. 그는 사후세계를 증명할 수 없다는 유학의 한계를 극복하고자 했다. 현실 문제에만 국한된 기존 원리를 뛰어넘어 인간의 심성과 우주 만물의 이치를 탐구하는 학문적 움직임 창조하고 집대성했으며, 이를 ‘성리학’이라 한다. ",
    },
  ];

  const coreIdeology = [
    {
      class: "오륜오상",
      title: "[오륜오상]",
      text: "오륜은 인간관계에서 지켜야 할 다섯 가지 기본 도덕 규범으로 부자유친, 군신유의, 부부유별, 장유유서, 붕우유신이 있다. 각각 아버지와 아들의 친함, 임금과 신하 사이의 의리, 남편과 아내 사이의 구별, 윗사람과 아랫사람의 서열, 친구와 친구 사이에 지켜야 할 도리를 의미한다. 오상은 인간의 다섯 가지 기본적 덕성으로 인, 의, 예, 지, 신을 말한다. 인은 사람을 사랑하는 마음, 의는 도리에 맞는 일, 예는 예절, 지는 지혜, 신은 신뢰를 뜻한다.",
      src: FiveRV,
      width: "505px",
      height: "595px",
    },
    {
      class: "관혼상제",
      title: "[관혼상제]",
      text: "관혼상제는 결혼, 장례, 제사를 포함한 인간 삶의 중요한 사건을 의미하며, 유교에서는 이를 통해 인간관계를 강화하고 사회 질서를 유지하는 중요한 의미를 부여했다. 관혼상제는 관례, 혼례, 상례, 제례로 구성되며 각각 다음과 같다. 관례는 성인이 되는 것을 기념하는 의식, 혼례는 남녀가 혼인하여 가정을 이루는 의식, 상례는 사람이 죽었을 때 행하는 의식, 제례는 조상이나 신에게 제물을 바치고 예를 갖추는 의식이다.",
      src: RiteofPassage,
      width: "505px",
      height: "239px",
    },
    {
      class: "대동사회",
      title: "[대동사회]",
      text: "대동사회는 이상세계를 가리키는 유교의 교리로, 모든 구성원이 혈연을 초월한 인류애를 실천하며 누구도 소외되거나 차별받지 않고 안정된 삶의 기반으로 인간답고 가치 있는 삶을 살아가는 사회를 말한다. 서로를 남이라는 생각하지 않으며, 마치 국가가 하나의 가정처럼 되는 것이다. 천하가 공평무사하게 운영되고, 모든 사람이 평등하게 대우받는다. 또한 빈부격차가 없고 모두가 안전하고 풍요로운 삶을 누린다.",
    },
  ];
  const humanNatureView = [
    {
      title: "[유교의 인간관]",
      src: HumanNatureView,
      width: "505px",
      height: "357px",
    },
    {
      class: "성인",
      title: "[성인]",
      text: "유교에서 성인은 최고의 도덕적 경지에 이른 인물로, 하늘에서 타고난 본래의 성품을 완벽하게 회복하여 실천하고 있는 사람을 말한다. 성인은 도덕적 판단과 행동에서 오류가 없으며, 모든 사람을 사랑하고 자신을 낮추며 타인을 존중하는 인물이다. 대표적으로 공자와 맹자 같은 인물들이 성인으로 여겨진다.",
    },
    {
      class: "현인",
      title: "[현인]",
      text: "현인은 높은 도덕성과 지혜를 갖춘 사람으로, 성인의 경지에 가까이 갔으나 아직 성인이 되지는 못한 사람을 말한다. ",
    },
    {
      class: "인자",
      title: "[인자]",
      text: "인자는 사람을 사랑하는 마음을 매우 중시하는 사람을 말한다. 남과 자신을 동일시하기 떄때문에 타인의 입장에서 생각하고, 그들을 존중하며 배려하기 떄문에 남의 불행을 자기의 불행으로 알고 돕는 장점도 있지만 타인의 힘이나 권위를 이용하여 자기가 덕을 보려는 의타심이 생길 수도 있다.",
    },
    {
      class: "지자",
      title: "[지자]",
      text: "지자는 이성적인 판단과 지식을 중시하는 사람으로, 상황을 잘 분석하고 이성적으로 올바른 판단을 내린다. 이들은 개인적 주체성과 책임감을 강조하고 법질서와 규칙을 잘 지킨다는 장점이 있지만, 남의 불행을 보고도 냉담하게 대처하는 단점이 있을 수 있다. 따라서 유교에서는 인자와 지자의 덕성을 균형 있게 갖추는 것이 이상적이다.",
    },
    {
      class: "군자",
      title: "[군자]",
      text: "군자와 소인은 상대적인 개념이다. 선을 행하는 정도가 악을 행하는 정도보다 많은 사람은 모두 군자의 범주에 포함된다. 군자중에서도 덕을 가진 정도가 완벽하면 성인이고, 완벽한 상태에 근접하면 현인인 것이다.",
    },
    {
      class: "소인",
      title: "[소인]",
      text: "군자와 반대로 소인은 악을 행하는 정도가 선을 행하는 정도보다 많은 사람으로, 유교에서 부정적인 인간 유형으로 간주한다. 소인은 주로 자신의 이익과 욕망을 추구하며 도덕적 원칙을 잘 지키지 않는다. 그러나 소인이라 해도 스스로 그것을 인식하고 벗어나기 위해 노력한다면 문제가 없으며, 가장 문제는 노력을 포기하는 경우다.",
    },
  ];

  return (
    <div
      className="background"
      style={{
        background: `
      linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 20%, rgba(255, 255, 255, 0) 100%), 
      linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 20%, rgba(255, 255, 255, 0) 100%)
    `,
      }}
    >
      <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <img className="background-image" src={bgImg} alt="background" />
      <div className="title">
        <span>***</span>
        유교의 기원부터 현재에 이르기까지의 역사와 주요 사상가, 기본 이념,
        인간관을 간략하면서도 깊이 있게 다룹니다.
        <span>***</span>
      </div>
      <div className="overview-container">
        <OverviewContent title="변천사" type="" contents={historicalChanges} />
        <OverviewContent title="사상가" type="top" contents={philosophers} />
        <OverviewContent
          title="기본 이념"
          type="bottom"
          contents={coreIdeology}
        />
        <OverviewContent title="인간관" type="top" contents={humanNatureView} />
      </div>
    </div>
  );
};

export default Overview;
