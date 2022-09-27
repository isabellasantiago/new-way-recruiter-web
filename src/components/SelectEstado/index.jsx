import {useEffect, useState} from 'react';
import { fetchStates, parseStates } from '../../helpers/ibge';

export const SelectEstado = ({className, id, name, onChange = ()=>{}, register, defaultValue}) => {
    const [states, setStates] = useState([]);

    useEffect(()=>{
        fetchStates().then(parseStates).then(setStates);
    }, []);

    return (
        <select class={className} id={id || name} name={name || id} onChange={onChange} {...register(`${name}`)} defaultValue={defaultValue}>
            <option value="">Seleciona um estado</option>
            {states.map((state)=>{
                const {label, value} = state;
                return (<option key={value} value={value}>{label}</option>)
            })}
        </select>
    );
}