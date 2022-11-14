import React, { useState, useContext } from 'react';
import { CandidatePage } from '../../../../../components/CandidatePage';
import { useQuery } from 'react-query';
import * as S from './style'
import { ProfilePic } from '../../../../../components/ProfilePic';
import { useNavigate } from 'react-router-dom';
import { getAllJobVacanciesThatMatch } from '../../../../../shared/functions/jobVacancie';
import { AuthContext } from '../../../../../services/contexts/auth';
import { Toaster } from 'react-hot-toast';


export const CandidateHomePage = () => {
    const { user, authenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [show, setShow] = useState(true);

    const { data: jobVacancieList, isLoading } = useQuery('jobVacancieList', async () => {
        const { data } = await getAllJobVacanciesThatMatch(user?.id);

        return data;
    })

    const handleClick = (id) => {
        navigate(`/job-vacancie/profile/${id}`)
    }

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (!authenticated) {
        navigate('/home');
    }

    return(
        <>
            <CandidatePage>
                <S.Content>
                <S.Title>Selecionamos as vagas que mais combinam com seu objetivo!</S.Title>
                <S.List show={show}>
                    {
                        jobVacancieList?.length ? (
                            jobVacancieList?.map((data) => {        
                                const { jobVacancie, isApplied } = data;
                                return !isApplied && jobVacancie && (
                                    <>
                                    <S.Card key={jobVacancie?.id}>
                                        <S.CompanyName>
                                            {jobVacancie?.corporateName}
                                        </S.CompanyName>
                                        <S.JVContainer>
                                            <h1>{jobVacancie?.title}</h1>
                                            <span>{jobVacancie?.level}</span>
                                            <span>{jobVacancie?.cityAndState}</span>
                                            <span>{jobVacancie?.salary?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                        </S.JVContainer>
                                        <S.SeeMoreLink onClick={() => handleClick(jobVacancie?.id)}>
                                            Ver mais
                                        </S.SeeMoreLink>
                                    </S.Card>
                                    
                                    </>
                                )
                            })
                        ) : (<p>Nenhuma vaga foi encontrada, volte mais tarde!</p>)
                    }
                    </S.List>
                </S.Content>
                <Toaster />
            </CandidatePage>
        </>
    )
}