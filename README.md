# Simulador para taxas MDR

Projeto acadêmico com o intuito de desenvolver um simulador onde o usuário seja possível consultar taxas MDR. 

O usuário preenche os valores que necessita e os dados são enviados em uma requisição HTTP, retornando os valores atualizados.



## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [React](https://pt-br.reactjs.org/) - O framework web usado
* [Typescript](https://www.typescriptlang.org/) - Linguagem utilizada
* [Styled-Components](https://styled-components.com/) - Usado para estilização
* [Axios](https://axios-http.com/ptbr/docs/intro) - Para consulta da API



## ⚙️ API

Api para consulta: https://frontend-challenge-7bu3nxh76a-uc.a.run.app

 Parâmetro      | Obrigatório? | Tipo            | Descrição                                                                              |
| -------------- | ------------ | --------------- | -------------------------------------------------------------------------------------- |
| `amount`       | Sim          | `number`        | Valor total da transação em centavos                                                   |
| `installments` | Sim          | `number`        | Número de parcelas                                                                     |
| `mdr`          | Sim          | `number`        | É a taxa cobrada pelas adquirentes sobre cada transação de cartão de crédito ou débito |
| `days`         | Não          | `Array<number>` | Uma lista com os dias a serem calculadas as antecipações                               |

### Exemplo

```bash
$ curl --request POST \
  --url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
  --header 'content-type: application/json' \
  --data '{
	"amount": 15000,
	"installments": 3,
	"mdr": 4
}'

{"1":13267,"15":13536,"30":13824,"90":14400}
```

### Exemplo informando períodos

```bash
$ curl --request POST \
  --url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
  --header 'content-type: application/json' \
  --data '{
	"amount": 15000,
	"installments": 3,
	"mdr": 4,
	"days": [30, 60, 90]
}'
{"30":13824,"60":14208,"90":14400}
```



## 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Para começar:

```
git clone git@github.com:lucasvale95/mdr_simulations.git

```

Na pasta clonada:

```
yarn start

```

Open http://localhost:3000 to view it in the browser.


## ⚡ Deploy

Para acesso e testes em produção:

* [Projeto em produção](https://mdr-simulations-6miq4asrf-lucasvale95.vercel.app/) - Deploy realizado no vercel