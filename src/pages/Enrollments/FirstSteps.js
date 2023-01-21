import { Form } from "../../components/WelcomePage/WelcomePage"

export default function FirstSteps() {
    return(
        <>
            <h3>Insira as informações Básicas de seu Bias:</h3>
            <Form>
            <input type="text" name="bias name" placeholder="O nome de seu Bias..." />
            <input type="text" name="bias group" placeholder="O grupo de seu bias..." />
            <input type="url" name="bias image" placeholder="Url da foto de seu Bias..." />

            </Form>
        </>
    )
}