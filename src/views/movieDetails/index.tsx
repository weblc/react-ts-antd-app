import React, { Component } from "react";

import { Row, Col } from "antd";
import Profiles from './components/profiles'
import Comments from './components/comments'
import Details from './components/details'
import styles from "./movie.module.less";




const profiles = {
    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2488675454,2710437303&fm=26&gp=0.jpg',
    releaseTime:'1998年10月28',
    title:'海上钢琴师',
    performer:['蒂姆·罗斯','丹尼·博德曼','马克斯·托尼','杰利·罗尔·莫顿','帕多万'],
    info:'《海上钢琴师》是由朱塞佩·托纳托雷执导，蒂姆·罗斯、比尔·努恩、梅兰尼·蒂埃里主演的剧情片，于1998年10月28日在意大利上映。该片改编自亚利桑德罗·巴里克文学剧本《1900：独白》，讲述了一个被命名为“1900”的弃婴在一艘远洋客轮上与钢琴结缘，成为钢琴大师的传奇故事。该片4K修复版于2019年11月15日在中国内地上映',
    sketch:['1900年的第一天，往返于欧美两地的邮轮Virginian号上，负责邮轮上添加煤炭的工人丹尼·博德曼（比尔·努恩饰）在头等舱上欲捡拾有钱人残留下来的事物时，却意外的在钢琴上发现一个被遗弃的新生儿，装在TD牌柠檬的空纸箱内。由于坚信“TD”正代表了Thanks Danny的缩写，于是丹尼不顾其他工人的嘲笑，独立抚育这个婴儿，并为了纪念这特别的一天，将他取名为：1900。','海上出生的1900（蒂姆·罗斯饰），在陆地上却是个从未存在的人，没有亲人、没有户籍，也没有国籍，大海便是他的摇篮，而他也随着Virginian号往返靠泊各个码头，逐渐长大。然而好景不常，一次的海上意外事件，造成抚养1900的丹尼意外丧生，幸而奇迹似的，某天深夜船上的众人被优美的琴声所惊醒，循着琴声而往，居然是无师自通的1900在钢琴前忘我的演奏着，动人的旋律打动了众人，从此，1900展开了在海上弹奏钢琴的旅程，也吸引了愈来愈多慕名而来的旅客。',' 马克斯（普路特·泰勒·文斯饰）在因缘际会下来到Virginian号加入乐队伴奏，也因此见识到这位传说中的海上钢琴师1900，两人因此结为好友。而1900在与发明爵士乐的传奇钢琴手杰利同船竞技钢琴琴艺之后，声势更是如日中天。但尽管马克斯再三鼓励1900下船去向全世界展露他的天赋，1900却始终未曾踏足陆地一步。直到他在为唱片公司录制个人专辑时，意外见到船舱之外清秀动人的女孩，并在感动之余创作了《1900sTheme》。随着女孩的下船离去，1900的心开始波动']

}
export default class MovieDetails extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }



    componentDidMount(): void {}
    componentWillUnmount(): void {}
    render() {
        return (
            <div className={styles.wrapper}>
                <Row type="flex" justify="space-between">
                    <Col span={14}>
                        <Row >
                            <Col  span={24} className="m_b_max">
                                <Profiles {...profiles}/>
                            </Col>
                            <Col  span={24} className={styles.box}>
                                <Details/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8} className={styles.box }>
                        <Comments/>
                    </Col>
                </Row>
            </div>
        );
    }
}
