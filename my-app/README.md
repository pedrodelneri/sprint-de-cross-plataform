# Motiva - Sprint 3

## O que o app resolve (Motiva)
[Descreva brevemente o problema que seu app soluciona - 2 a 3 linhas]

## Equipe
- Pedro Del Neri Coreria - RM 562168
- Vitor Limeira dos Santos - RM 565280
- Lucas de Freitas Barbosa - RM 564685
- Arthur da Silva Alencar - RM 563684
- Felipe Paula Burba Molonhoni - RM 564395

## Como rodar o projeto
1. Clone este repositório: `link do github`
2. Instale as dependências: `npm install`
3. Inicie o projeto: `npx expo start`

## Como os dados são persistidos
Os dados são persistidos utilizando a biblioteca `@react-native-async-storage/async-storage`. 
A lógica de armazenamento está isolada na pasta `src/services/storage.ts`, garantindo que as telas não acessem o banco de dados diretamente. O fluxo salva uma string JSON localmente que sobrevive ao fechamento do aplicativo.

## Fluxo do App
1. **Listar:** A tela inicial carrega os dados persistidos.
2. **Criar:** O usuário preenche o formulário e salva no AsyncStorage.
3. **Ver detalhe:** Ao clicar em um OcorrenciaCard, os detalhes completos são exibidos.
4. **Persistência:** Feche o app no Expo Go e abra novamente, os dados criados continuarão lá.