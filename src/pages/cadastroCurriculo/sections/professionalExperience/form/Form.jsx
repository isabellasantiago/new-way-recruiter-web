import React from 'react';
import { Form } from './style';
import { Wrapper } from '../../../components/Wrapper';
import Button from '../../../../../components/Button/Button'
import { FormWrapper } from '../../infoAcademicas/Form/style'
import { useFieldArray } from 'react-hook-form';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


export function ProfessionalExpierenceForm({ useForm }) {
    const { register, control, errors } = useForm;
    const { append, remove, fields } = useFieldArray({
        name: 'previousJobsInfo',
        control
    });

    const add = () => {
        append({
            previousCompanyName: '',
            role: '',
            level: 0,
            fromDate: '',
            toDate: '',
            jobDescription: '',
        })
    }

    return (
        <Form>
            <Button onClick={add}>
                Adicionar
            </Button>
            {fields.map((field, index) => {
                return (
                    <>
                        <FormWrapper id="row1">
                            <Wrapper>
                                <label htmlFor="previousCompanyName">Empresa</label>
                                <input type="text" name="previousCompanyName" defaultValue={field.previousCompanyName} {...register(`previousJobsInfo.${index}.previousCompanyName`)} />
                                {errors.previousJobsInfo?.[index]?.previousCompanyName && (
                                    <span>
                                        {errors.previousJobsInfo?.[index]?.previousCompanyName.message}
                                    </span>
                                )}
                            </Wrapper>
                            <Wrapper>
                                <label htmlFor="role">Cargo</label>
                                <input type="text" defaultValue={field.role} {...register(`previousJobsInfo.${index}.role`)} />
                                {errors.previousJobsInfo?.[index]?.role && (
                                    <span>
                                        {errors.previousJobsInfo?.[index]?.role.message}
                                    </span>
                                )}
                            </Wrapper>
                        </FormWrapper>
                        <FormWrapper>
                        <Wrapper>
                                <label htmlFor="level">Nível operacional</label>
                                <select name="level" defaultValue={field.level} {...register(`previousJobsInfo.${index}.level`)}>
                                    <option value="">Selecione</option>
                                    <option value={1}>Estágio</option>
                                    <option value={6}>Agente</option>
                                    <option value={5}>Analista</option>
                                    <option value={2}>Junior</option>
                                    <option value={3}>Pleno</option>
                                    <option value={4}>Senior</option>
                                </select>
                                {errors.previousJobsInfo?.[index]?.level && (
                                    <span>
                                        {errors.previousJobsInfo?.[index]?.level.message}
                                    </span>
                                )}
                            </Wrapper>
                            <Wrapper>
                                <label>Data de inicio</label>
                                <input type="date" name="fromDate" defaultValue={field.fromDate} {...register(`previousJobsInfo.${index}.fromDate`)} />
                                {errors.previousJobsInfo?.[index]?.fromDate && (
                                    <span>
                                        {errors.previousJobsInfo?.[index]?.fromDate.message}
                                    </span>
                                )}
                            </Wrapper>
                            <Wrapper>
                                <label htmlFor="toDate">Data final</label>
                                <input type="date" name="toDate" defaultValue={field.toDate} {...register(`previousJobsInfo.${index}.toDate`)} />
                                {errors.previousJobsInfo?.[index]?.toDate && (
                                    <span>
                                        {errors.previousJobsInfo?.[index]?.toDate.message}
                                    </span>
                                )}
                            </Wrapper>
                        </FormWrapper>
                        <FormWrapper justify="space-evenly">
                            <Wrapper>
                                <label htmlFor="jobDescription">Descrição</label>
                                <textarea name="jobDescription" cols="30" rows="10" defaultValue={field.jobDescription} maxLength="600"></textarea>
                                {errors.previousJobsInfo?.[index]?.jobDescription && (
                                    <span>
                                        {errors.previousJobsInfo?.[index]?.jobDescription.message}
                                    </span>
                                )}
                            </Wrapper>
                            <button onClick={() => remove(field.id)}>
                                <DeleteOutlineIcon
                                    color="#fff"
                                >
                                    <a href="#infoac" />
                                </DeleteOutlineIcon>
                            </button>
                        </FormWrapper>
                    </>
                )
            })}
        </Form>
    )
}