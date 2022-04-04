import { useEffect, useState } from "react";
import { Form, WrapperVaga, InputWrapper, Row } from "../../dadosVaga/form/style";
import { Wrapper } from '../../../../cadastroCurriculo/components/Wrapper'
import { InputSkills } from "../../../../cadastroCurriculo/sections/Skills/InputSkills";
import Button from '../../../../../components/Button/Button'
import TagsInput from 'react-tagsinput'
import Api from '../../../../../services/mainApi'

//inputskills nao estao funcionando como deveriam
//faixa passa o estado somente depois do segundo clique
//ao pressionar enter no input skills ele volta para a sessao de dados
//nada acontece ao clicar em "cadastrar"

export function FormFiltragem(props){
    const { register, handleSubmit, errors } = props;
    const [especificGender, setEspecificGender] = useState(false)
    const [ especificEtnia, setEspecificEtnia] = useState(false)
    const [hardSkills, setHardSkills] = useState([])
    const [softSkills, setSoftSkills] = useState([])
    const [suggestion, setSuggestion] = useState([])


    useEffect(() => {
        const getSuggestion = async () => {
            const suggestions = await Api.get()
        }

    }, [])

    console.log(hardSkills)

    return(
        <Form >
            <Row>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="genderRadio">Esta vaga é destinada a um gênero específico?*</label>
                    <InputWrapper>
                        <input type="radio" name="genderRadio" value={true} onClick={() => setEspecificGender(true)}/>Sim
                        <input type="radio" name="genderRadio" value={false} onClick={() => setEspecificGender(false)} />Não
                        {especificGender && (
                            <Wrapper>
                                <select name="gender" id="gender" className="gender" {...register('gender')}>
                                <option value={0}>Mulher Cis</option>
                                <option value={1}>Mulher Trans</option>
                                <option value={2}>Pessoas Trans</option>
                                <option value={3}>Mulher cis e pessoas trans</option>
                                </select>
                                {errors.gender?.message}
                            </Wrapper>
                        )}
                    </InputWrapper>
                </WrapperVaga>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="etniaRadio">Esta vaga é destinada a uma Etnia específica?*</label>
                    <InputWrapper>
                        <input type="radio" name="etniaRadio" value={true} onChange={() => setEspecificEtnia(true)}/>Sim
                        <input type="radio" name="etniaRadio" value={false} onChange={() => setEspecificEtnia(false)}/>Não

                        {especificEtnia && (
                        <Wrapper>
                            <select name="etnia" id="entnia" className="etnia" {...register('ethnicity')}>
                                <option value={0}>Negra</option>
                                <option value={1}>Indígena</option>
                                <option value={2}>Amarela</option>
                            </select>
                            {errors.etnia?.message}
                        </Wrapper>
                        )}
                    </InputWrapper>
                </WrapperVaga>
            </Row>
            <Row>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="pcdRadio">Esta vaga é destinada a somente pessoas com deficiência?*</label>
                    <InputWrapper>
                        <input type="radio" name="pcdRadio" value={true} {...register('pcd')}/>Sim
                        <input type="radio" name="pcdRadio" value={false} {...register('pcd')}/>Não
                    </InputWrapper>
                </WrapperVaga>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="niveis">Aceita candidatura de todos os níveis?*</label>
                    <InputWrapper>
                        <input type="radio" name="niveis" value={true} {...register('acceptsAllLevels')}/>Sim
                        <input type="radio" name="niveis" value={false} {...register('acceptsAllLevels')}/>Não
                    </InputWrapper>
                </WrapperVaga>
            </Row>
            <Row>
                <TagsInput value={hardSkills} onChange={setHardSkills}/>
                {/* <InputSkills 
                    label="Hard Skills"
                    setSkills={setHardSkills}
                /> */}
            </Row>
            <Row>
                <InputSkills 
                    label="Soft Skills"
                    setSkills={setSoftSkills}
                />
            </Row>
            <Button type="submit" >Cadastrar</Button>
        </Form>
    )    
}