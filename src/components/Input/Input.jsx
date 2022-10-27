import { useState } from "react";
import { fetchCEP } from "../../services/api";
import { useContext } from "react";
import  cepDataContext from "../../contexts/cepDataContext"
import isLoadingContext from "../../contexts/isLoadingContext"
import { toast } from 'react-toastify';
import {
    InputContainer,
    InputCatch,
    Button
} from "./styles"

import { FiSearch } from "react-icons/fi"

function Input(){
    
    const [cep, setCep] = useState("");   
    
    const { setCepData } = useContext(cepDataContext)
    const {isLoading, setIsLoading} = useContext(isLoadingContext)

    function maskCep(value){
        return (value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(-\d{3})(\d)/, '$1')            
        )
    } 

    function takeMask(cep){
        return (cep
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1$2')
            .replace(/(\d{3})(\d)/, '$1$2')
            .replace(/(-\d{3})(\d)/, '$1')            
        )
    }
    function notify(message){
        toast(message)
    }
        
    async function submitData(e){
        e.preventDefault();
        setIsLoading(true)
        try{
            const cepWithouMask = takeMask(cep)
            const response = await fetchCEP(cepWithouMask)
            setCepData(response) 
            setCep("")
            setIsLoading(false)            
        }catch(e){
            setIsLoading(false)  
            setCep("")
        }
    }

    return (
        <>            
            <form onSubmit={submitData}>
                <InputContainer>
                    <InputCatch
                        type="integer"
                        id="CEP" 
                        value={cep}
                        onChange={(e) =>{
                            setCep(maskCep(e.target.value))
                        }} 
                        placeholder="   Digite o CEP ..." 
                        maxLength="10"
                        disabled={isLoading}
                    >
                    </InputCatch>
                    <Button type="submit" onClick={notify} disabled={isLoading}>
                        <FiSearch />
                    </Button>                      
                </InputContainer>
            </form>
        </>
    );    
}

export default Input