## Instalação
Instale utilizando o npm (certifique-se de que seu Node.js esteja na versão 8 ou ssuperior):

```
npm install
```

## Configurando variaveis de ambiente
Será necessário copiar o arquivo .env.example para configurar as variaveis de ambiente.

> A configuração de conexão com o mongo estará disponivel no Heroku pois dados sensiveis não podem ficar no repositorio.

```
cp .env.example .env
```

## Iniciar servidor
> É recomendado que tenha conhecimentos básicos de javascript e um pouco de Node.

```
npm run dev
```