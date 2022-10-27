import { useContext } from 'react'
import cepDataContext from '../../contexts/cepDataContext'
import isLoadingContext from '../../contexts/isLoadingContext'
import { ThreeDots } from 'react-loader-spinner'
import{
    Container,
    DataContainer,
    Data,
    Content,
    Title
} from './style'


function CepData(){
    const { cepData } = useContext(cepDataContext)   
    const {isLoading, setIsLoading} = useContext(isLoadingContext) 

    return(
        <Container>
            {isLoading?<ThreeDots color="white"/>:null}
            {cepData.status === 200 && !isLoading?
              <DataContainer>
                <Data>
                    <Title>CEP</Title>
                   <Content>{cepData?.code}</Content> 
                </Data>   
                <Data>
                    <Title>Estado</Title>
                    <Content>{cepData?.state}</Content>
                </Data>
                <Data>
                    <Title>Cidade</Title>
                    <Content>{cepData?.city}</Content>
                </Data>
                <Data>
                    <Title>Município</Title>
                    <Content>{cepData?.district}</Content>
                </Data>
                <Data>
                    <Title>Endereço</Title>
                    <Content>{cepData?.address}</Content>
                </Data>
            </DataContainer>
            :null}
            {}          
        </Container>
    );
};

export default CepData