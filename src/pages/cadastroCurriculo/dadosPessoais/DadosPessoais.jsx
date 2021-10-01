import React, {useState} from 'react';


import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../components/forms/FormNew/validation';


import './style.js';

import { SelectEstado } from '../../../components/SelectEstado';
import { SelectCidade } from '../../../components/SelectCidade';
import Button from '../../../components/Button/Button';






export function DadosPessoais(){

    const [formValues, setFormValues] = useState({});
    const [pcd, setPcd] = useState(false);


    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        setFormValues({...formValues, [name]:value});
    }
    
    const dadosPessoais = (data) => {
        console.log(data)
    };

    const isPcd = () =>{
        setPcd(true);
    }

    return(
        <section id="dados-pessoais">
            <h1>Dados Pessoais</h1>
            <form action="#" onSubmit={handleSubmit(dadosPessoais)} id="dadosPessoais">
                <div id="sec1">
                    <div id="wrapper">
                        <label htmlFor="image">Imagem</label>
                        <input type="url" name="image" className="image" placeholder="Adicione o link da sua imagem" {...register('image')}/>
                    </div>
                
                    <div id="wrapper">
                        <label htmlFor="linkedin">Linkedin</label>
                        <input type="url" name="linkedin" className="linkedin" {...register('linkedin')}/>
                    </div>
                </div>
                <div id="sec2">
                    <div id="wrapper">
                        <label htmlFor="naturalness">Naturalidade *</label>
                        <select name="naturalness" id="naturalness" className="naturalness" {...register('naturalness')}>
                            <option value="">Selecione</option>
                            <option value="br">Brasileira(o)</option>
                            <option value="estrangeiro">Estrangeira(o)</option>
                        </select>
                    </div>

                    <div id="wrapper">
                        <label htmlFor="gender">Gênero*</label>
                        <select name="gender" id="gender" className="gender" {...register('gender')}>
                            <option value="">Selecione...</option>
                            <option value="mulher">Mulher</option>
                            <option value="homem">Homem</option>
                            <option value="mtrans">Mulher Trans</option>
                            <option value="htrans">Homem Trans</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>

                    <div id="wrapper">
                        <label htmlFor="birthDate">Data de nascimento*</label>
                        <input type="date" className="birthDate" name="birthDate" {...register('birthDate')}/>
                    </div>
                </div>
                <div id="sec3">
                    <div id="wrapper">
                        <label htmlFor="state" >Estado*</label>
                        <SelectEstado className="state" name="state" {...register('state')} onChange={handleInputChange}/>
                    </div>

                    <div id="wrapper">
                        <label htmlFor="city" className="city">Cidade*</label>
                        <SelectCidade id="city" name="city" state={formValues.state}  onChange={handleInputChange} {...register("city")}/>
                    </div>

                    <div id="wrapper">
                        <label htmlFor="phone" className="phone">Celular</label>
                        <input type="tel" name="phone" className="phone" {...register('phone')}/>
                    </div>
                </div>
                <div id="sec4">
                    <div id="wrapper">
                        <label htmlFor="etnia">Etnia*</label>
                        <select name="etnia" id="entnia" className="etnia" {...register('etnia')}>
                            <option value="negro">Negro</option>
                            <option value="branco">Branco</option>
                            <option value="indigena">Indígena</option>
                        </select>
                    </div>

                    <div id="wrapper">
                        <label htmlFor="pcd">PCD (pessoa com deficiência)*</label>
                        <select name="pcd" className="pcd" {...register('pcd')}>
                            <option value="">Selecione...</option>
                            <option value={true}>Sim</option>
                            <option value={false}>Não</option>
                        </select>
                    </div>

                    <div id="wrapper">
                        <label htmlFor="typePcd" >Tipo</label>
                        <input type="text" name="typePcd" className="typePcd" {...register('typePcd')}/>
                    </div>
                </div>
                <div id="sec5">
                    <div id="wrapper">
                        <label htmlFor="contactViaWhatsapp">Deseja receber mensagens via whatsapp?*</label>
                        <div id="radio-button">
                            <input type="radio" name="contactViaWhatsapp" id="contactViaWhatsapp" className="contactViaWhatsapp" value={true}/> Sim
                            <input type="radio" name="contactViaWhatsapp" id="contactViaWhatsapp" className="contactViaWhatsapp" value={false}/> Não
                        </div>
                    </div>
                
                    <Button as="a" href="#info-academicas">
                        Próximo passo
                    </Button>
                </div>
            </form>
        </section>
    )
}