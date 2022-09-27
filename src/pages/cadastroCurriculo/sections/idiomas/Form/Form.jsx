import React from 'react';

import Button from '../../../../../components/Button/Button';

import { FormIdioma, InputWrapper } from './formIdiomas.js'
import { Wrapper } from '../../../components/Wrapper';
import { useFieldArray } from 'react-hook-form';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


export function Form({ useForm }) {
    const { register, control, errors } = useForm;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'languagesInfo'
    });

    const add = () => {
        append({
            languageName: '',
            languageLevel: 0,
        })
    }

    return (
        <>
            <FormIdioma id="idiomas">
            <Button onClick={add}><a href="#idiomas">Adicionar</a></Button>
                {fields?.map((field, index) => {
                    return (
                        <>
                            <InputWrapper>
                                <Wrapper>
                                    <label>Idioma</label>
                                    <input name="languageName" type="text" {...register(`languageInfo.${index}.languageName`)} defaultValue={field.languageName}/>
                                    {errors.languagesInfo?.[index]?.languageName && (
                                        <span>
                                            {errors.languagesInfo?.[index]?.languageName.message}
                                        </span>
                                    )}
                                </Wrapper>
                                <Wrapper>
                                    <label htmlFor="languageLevel">Nível</label>
                                    <select name="languageLevel" {...register(`languageInfo.${index}.languageLevel`)} defaultValue={field.languageLevel}>
                                        <option value="">Selecione</option>
                                        <option value={1}>Básico</option>
                                        <option value={2}>Intermediario</option>
                                        <option value={3}>Avançado</option>
                                        <option value={4}>Fluente</option>
                                    </select>
                                    {errors.languageInfo?.[index]?.languageLevel && (
                                        <span>
                                            {errors.languageInfo?.[index]?.languageLevel.message}
                                        </span>
                                    )}
                                </Wrapper>
                                <button onClick={() => remove(field.id)}>
                                <DeleteOutlineIcon
                                    color="#fff"
                                >
                                    <a href="#idiomas"></a>
                                </DeleteOutlineIcon>
                            </button>
                            </InputWrapper>
                        </>
                )})}

            </FormIdioma>
        </>
    )
}