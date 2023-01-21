import { Box1, Box2, Image } from "../../components/Enrollments/InfoBox";

function Page1() {
    return (
        <Image src="https://i.pinimg.com/564x/85/2f/83/852f83692979cc98e5597c4c9d678eb9.jpg" alt="Felix 1">

        </Image>
    );
}

export default function InfoBox() {
    return (
            <Box1>
                <Box2>
                    <Page1 />
                </Box2>
            </Box1>
    );
}