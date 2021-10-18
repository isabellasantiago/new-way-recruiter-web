import React, { useState } from 'react';
import './candidato.scss';
import profile from '../../assets/images/profile.svg';
import MaskInput from '../../MaskInput';
<<<<<<< HEAD
import { useForm } from "react-hook-form";
=======
import {useForm} from 'react-hook-form';
import axios from 'axios';


>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d

const initialValues = {
  cpf:'',
  cnpj: ''
};

<<<<<<< HEAD
export function CandidatoForm(){

=======


export function CandidatoForm(){
  const [isBusy, setIsBusy] = useState(false);

 
>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm();

    const [values,setValues] = useState(initialValues);
<<<<<<< HEAD
=======
    
>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d

    function handleChange(event) {
      setValues({
        ...values,
      [event.target.name]: event.target.value
      });
    }
<<<<<<< HEAD
=======
    

  async function onSubmit (data)  {
  
      
      const URL = 'http://localhost:3333/cadcandidato';
     await axios(URL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          data: { 
          nome: data.nome,
          sobrenome: data.sobrenome,
          telefone:data.phoneNumber,
          email:data.email,
          senha:data.passwordConfirmation,
          cpf:data.cpf,
          }
        })
          .then(response => response.data)
          .catch(error => {
            throw error;
          });
    }

 

>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d

  return (
  <div className="cd">
    <header className="cd-header">
          <a href="/" id="logo">
              <h1>New <span>Way</span> Recruiter</h1>
          </a>
    </header>

    <main>
      
      <div className="form-description">

          <h2>Faça agora seu cadastro como candidato!</h2>
          
              <p className="form-paragrafo">Insira seus dados abaixo para efetuar seu cadastro!</p>

<<<<<<< HEAD
            <form onSubmit={handleSubmit((data) => console.log(data))}>
=======
            <form onSubmit={handleSubmit(onSubmit)}>
>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d

              <div className="form-start">
                
             <div className="control-group">
              <label>Nome*</label>
              <input type="text" 
              {...register("nome", { required: "Nome  é obrigatório!" })}
              />
              {errors.nome && (
                <p style={{ color: "red" }}>{errors.nome.message}</p>
              )}

              </div>
                
              <div className="control-group">
              <label>Sobrenome*</label>
              <input type="text"
              {...register("sobrenome", { required: "Sobrenome  é obrigatório!" })}
              />
              {errors.sobrenome && (
                <p style={{ color: "red" }}>{errors.sobrenome.message}</p>
              )} 

              </div>

              </div>

              <div className="form-start">
                
              <div className="control-group">
              <label>CPF*</label>
              <MaskInput
              name= "cpf"
              mask= "999.999.999-99"
              
              {...register("cpf", { required: "CPF  é obrigatório!" })}
              />
              {errors.cpf && (
                <p style={{ color: "red" }}>{errors.cpf.message}</p>
              )}
              
              </div>

              <div className="control-group">
              <label>Número de telefone*</label>
              <input type="phone" 
              {...register("phoneNumber", { required: "Número de telefone é obrigatório!" })}
              />
              {errors.phoneNumber && (
                <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
              )}

              </div>

              </div>

              <br/>

              <div className="form-end">
              <label>E-mail*</label>
              <input type="email" 
              {...register("email", { required: "E-mail é obrigatório!" })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
              
              
              <label>Senha*</label>
              <input type="password" 
              {...register("password", { required: "Senha é obrigatória!", 
              minLength: { value: 8, message: 'Senha não pode ser menor que 8 caracteres.' }
             })}
              
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
              
              
              <label>Confirmação senha*</label>
              <input type="password" 
               {...register("passwordConfirmation", {
                required: "Por Favor confirme a senha!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "As senhas devem corresponder!";
                  }
                }
              })}
            />
            {errors.passwordConfirmation && (
              <p style={{ color: "red" }}>
                {errors.passwordConfirmation.message}
              </p>
            )}
              

            </div>

<<<<<<< HEAD
            <button className="candidato-submit" type="submit">Cadastrar</button>
=======
            <button className="candidato-submit"  type="submit">Cadastrar</button>
>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d

            </form>

            <img src={profile} alt="profile-candidato" className="cdprofile"/>

       </div>

    </main>

<<<<<<< HEAD
  </div>);
}
=======
  </div>
  );
            }
>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d
