import React, { useState } from 'react';
import Button from '../../../../../components/Button/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Wrapper } from '../../../components/Wrapper';
import { Form, FormWrapper } from './style';
import { useFieldArray } from 'react-hook-form';


export function FormInfoAcad({ useForm }) {
    const { register, errors, control, watch } = useForm;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'academicsInfo'
    })

    const add = () => {
        append({
            instituitionName: '',
            courseName: '',
            academicFormation: '',
            academicFormationStatus: '',
            graduationEndDate: '',
            graduationStartDate: '',
        })
    }

    return (
        <>
            <Button onClick={add}>
                <a href="#infoac">Adicionar</a>
            </Button>
            {fields.map((field, index) => {
                const moment = watch(`academicsInfo[${index}].academicFormationStatus`)
                return (
                    <Form key={field.id} id="infoac">
                        <FormWrapper>
                            <Wrapper>
                                <label>Instituição de ensino</label>
                                <input type="text" name="instituitionName" {...register(`academicsInfo.${index}.instituitionName`)} defaultValue={field?.instituitionName} />
                                {errors?.academicsInfo?.[index]?.instituitionName && (
                                    <span>
                                        {errors.academicsInfo?.[index]?.instituitionName.message}
                                    </span>)}
                            </Wrapper>
                            <Wrapper>
                                <label>Curso</label>
                                <input type="text" name="courseName" {...register(`academicsInfo.${index}.courseName`)} defaultValue={field.coursenName} />
                                {errors.academicsInfo?.[index]?.courseName && (
                                <span>
                                    {errors.academicsInfo?.[index]?.courseName.message}
                                </span>)}
                            </Wrapper>
                            <Wrapper>
                                <label htmlFor="tipoFormacao">Formação</label>
                                <select id="tipoFormacao" name="academicFormation" {...register(`academicsInfo.${index}.academicFormation`)} defaultValue={field.academicFormation}>
                                    <option value="">Selecione</option>
                                    <option value={1}>Ensino regular</option>
                                    <option value={7}>Extra curricular</option>
                                    <option value={2}>Tecnico</option>
                                    <option value={3}>Superior</option>
                                    <option value={4}>Pós graduação</option>
                                    <option value={5}>Mestrado</option>
                                    <option value={6}>Doutorado</option>
                                </select>
                                {errors.academicsInfo?.[index]?.academicFormation && (
                                    <span>
                                        {errors.academicsInfo?.[index]?.academicFormation.message}
                                    </span>
                                )}
                            </Wrapper>
                        </FormWrapper>
                        <FormWrapper>
                            <Wrapper>
                                <label htmlFor="statusFormacao">Status</label>
                                <select id="statusFormacao" name="academicFormationStatus" {...register(`academicsInfo.${index}.academicFormationStatus`)} defaultValue={field.academicFormationStatus}>
                                    <option value="">Selecione</option>
                                    <option value={1}>Cursando</option>
                                    <option value={2}>Concluído</option>
                                    <option value={3}>Trancado</option>
                                </select>
                                {errors.academicsInfo?.[index]?.instituitionName && (
                                    <span>
                                        {errors.academicsInfo?.[index]?.instituitionName.message}
                                    </span>
                                )}
                            </Wrapper>
                            <Wrapper>
                                <label>Data de inicio</label>
                                <input type="date" {...register(`academicsInfo.${index}.graduationStartDate`)} defaultValue={field.graduationStartDate} />
                                {errors.academicsInfo?.[index]?.graduationStartDate && (
                                    <span>
                                        {errors.academicsInfo?.[index]?.graduationStartDate.message}
                                    </span>
                                )}
                            </Wrapper>
                            {moment !== 'cursando' && (
                                <Wrapper>
                                    <label>Data de término</label>
                                    <input type="date" {...register(`academicsInfo.${index}.graduationEndDate`)} defaultValue={field.graduationEndDate} />
                                    {errors.academicsInfo?.[index]?.graduationEndDate && (
                                        <span>
                                            {errors.academicsInfo?.[index]?.graduationEndDate.message}
                                        </span>
                                    )}
                                </Wrapper>
                            )}
                            <button onClick={() => remove(field.id)}>
                                <DeleteOutlineIcon
                                    color="#fff"
                                >
                                    <a href="#infoac" />
                                </DeleteOutlineIcon>
                            </button>
                        </FormWrapper>
                    </Form>
                )
            })}
        </>
    )
}