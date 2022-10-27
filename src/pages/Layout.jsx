
import Input from "../components/Input/Input";
import CepData from "../components/CepData/CepData";
import { 
    Container,
    Title
} from "./styles";

function Layout(){    
    return(
    <>
        <Container>
            <Title>Busque CEP</Title>
            <Input/> 
            <CepData />
        </Container>
    </>
    )
}

export default Layout;