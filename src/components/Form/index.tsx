import { useState } from "react";
import { useForm } from "react-hook-form";
import { Api } from "../../service/api";
import Received from "../Received";
import { Simulation } from "./style";


function Form (): JSX.Element {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const [response, setResponse] = useState<Array<any>>()

    async function onSubmit ( data: any ): Promise<void> {

        data.mdr = data.mdr.replace(',', '.')

        if (data.days) {
            const length = data.days.length

            if (data.days[length-1] === ',') {data.days = data.days.slice(0,-1)}
            data.days = data.days.split(',')
            const result = await Api.post('', data)
            setResponse(result.data)

            return 
        }

        data.days = ['1', '15', "30", "90"]
        
        const result = await Api.post('', data)

        setResponse(result.data)
    }

    return (
        <>
            <Simulation >

                <h2>Simule sua Antecipação</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="amount">Informe o valor da venda*</label>
                        <span className="prefix">R$</span>
                        <input type='float' className="input-pref" {...register("amount", { required: true })} />
                        {errors.amount && <span className="error">Campo obrigatório</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="installments">Em quantas parcelas*</label>
                        <input type='number' max="12" {...register("installments", { required: true })} />
                         {errors.installments && <span className="error">Campo obrigatório</span>} <span className="max">Máximo de 12 parcelas</span>
                    </div>

                    <div>
                        <label htmlFor="mdr">Informe o porcentual de MDR*</label>
                        <input type='float' {...register("mdr", { required: true })} />
                        {errors.mdr && <span className="error">Campo obrigatório</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="days">Dias a serem calculados</label>
                        <input {...register("days")} />
                        <span className="max">Exemplo: 15, 30, 60</span>

                    </div>
                
                    <input className="submit" type="submit" value="Simular" />
                </form>
            </Simulation>
           {response && <Received response={Array(response)} />}
            
        </>
    )
}


export default Form