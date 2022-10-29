
import Input from "../components/Input/Input";
import CepData from "../components/CepData/CepData";
import Map from "../components/Map/Map";
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
            <Map />
        </Container>
    </>
    )
}

export default Layout;