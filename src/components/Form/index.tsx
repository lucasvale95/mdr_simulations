import { useForm } from "react-hook-form";
import { Simulation } from "./style";

function Form () {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <Simulation >

                <h2>Simule sua Antecipação</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="value">Informe o valor da venda*</label>
                        <span className="prefix">R$</span>
                        <input type='number' className="input-pref" {...register("value", { required: true })} />
                        {errors.value && <span className="error">Campo obrigatório</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="value">Em quantas parcelas*</label>
                        <input type='number' {...register("installments", { required: true })} />
                         {errors.installments && <span className="error">Campo obrigatório</span>} <span className="max">Máximo de 12 parcelas</span>
                    </div>

                    <div>
                        <label htmlFor="value">Informe o porcentual de MDR*</label>
                        <input type='number' {...register("mdr", { required: true })} />
                        {errors.mdr && <span className="error">Campo obrigatório</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="days">Dias a serem calculados</label>
                        <input {...register("days")} />
                        <span className="max">Exemplo: 15, 30, 60</span>

                    </div>
                
                    <input className="submit" type="submit" value="Simular" onClick={(e)=> {}}/>
                </form>
            </Simulation>
        </>
    )
}


export default Form