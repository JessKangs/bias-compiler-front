import { Item, Name, Image, Content } from "../../components/MainPage/Menu";
import ShootingStar from "../../assets/img/shooting-star.png"

export default function Menu() {
    return (
        <Content>
            <Item>
                <Name>Kang Young Hyun</Name>                 
                <Image src={ShootingStar} alt="shooting star"></Image>
            </Item>
            <Item>
                <Name>Lee Yong Bok</Name>
                <Image src={ShootingStar} alt="shooting star"></Image>
            </Item>
            <Item>
                <Name>Park Jin Young</Name>
                <Image src={ShootingStar} alt="shooting star"></Image>
            </Item>
        </Content>
    )
}
