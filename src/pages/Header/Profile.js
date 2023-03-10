import { useEffect, useState } from "react"
import { ProfileBox, Content, Image, Nickname } from "../../components/Header/Profile"
import UserContext from "../../contexts/UserContext";
import useToken from "../../hooks/useToken";
import Menu from "./Menu"
import axios from "axios";
import useUserData from "../../hooks/useUserData";

export default function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileData, setProfileData] = useState('');
  const userData = useUserData();
  const token = useToken();

  function openMenu() {
    if (!isMenuOpen) setIsMenuOpen(true)
    if (isMenuOpen) setIsMenuOpen(false)
  }

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
  }
}

  useEffect( () => {
    
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile/${userData.userid}`, config)

        response.then((res) => {
          setProfileData(res.data)
        })
        
        response.catch((e) => console.log(e))
      
    
  }, [])

    return(
        <Content>
          <ProfileBox>
            {!isMenuOpen ? <ion-icon onClick={openMenu} name="chevron-down-outline"></ion-icon> :
            <ion-icon onClick={openMenu} name="chevron-up-outline"></ion-icon>}
            <Nickname>{profileData.nickname} </Nickname>
            <Image src={profileData.imageurl} alt="Felix with flowers"></Image>
          </ProfileBox>
          {isMenuOpen ?  <Menu /> : null}
        </Content>
    )
}


