import { Content, Images, Button } from "../../components/WelcomePage/WelcomePage";
import NewBias from "../../assets/img/addnewbias.jpg"
import ListBias from "../../assets/img/listyourbias.jpg"
import { Link } from "react-router-dom";

export default function WelcomePage(userId) {
    userId = 1;
    return (
        <Content>
            <h1>Start here:</h1>
            <Images>
                <Button>
                    <Link to={`/${userId}/addBias`}>
                        <img src={NewBias} alt="add bias Felix"/>
                    </Link>
                    <h3>Add New Bias</h3>
                </Button>

                <Button>
                    <Link to={`/${userId}/listBias`}>
                        <img src={ListBias} alt="add bias Felix"/>
                    </Link>
                    <h3>List Your Biases</h3>
                </Button>
            </Images>
        </Content>
    );
}