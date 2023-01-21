import { useState } from "react"
import { ProfileBox, Content, Image, Nickname } from "../../components/MainPage/Profile"
import Menu from "./Menu"

export default function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  function openMenu() {
    if (!isMenuOpen) setIsMenuOpen(true)
    if (isMenuOpen) setIsMenuOpen(false)
  }

    return(
        <Content>
          <ProfileBox>
            <Image src="https://i.pinimg.com/564x/d3/b3/c5/d3b3c5f0a95a612c901ed4cf14d0599d.jpg" alt="Felix with flowers"></Image>
            <Nickname>Newest Felix Stan</Nickname>
            {!isMenuOpen ? <ion-icon onClick={openMenu} name="chevron-down-outline"></ion-icon> :
            <ion-icon onClick={openMenu} name="chevron-up-outline"></ion-icon>}
          </ProfileBox>
          {isMenuOpen ? <Menu /> : null}
        </Content>
    )
}


