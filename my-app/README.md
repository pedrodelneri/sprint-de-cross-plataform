# Motiva - App de Gestão de Ocorrências

Aplicativo mobile desenvolvido em **React Native com Expo e TypeScript** para gerenciar o fluxo de ocorrências da Motiva, garantindo rastreabilidade, classificação de risco e persistência local dos dados.

---

## 👥 Integrantes
- Pedro Del Neri Coreria - RM 562168
- Vitor Limeira dos Santos - RM 565280
- Lucas de Freitas Barbosa - RM 564685
- Arthur da Silva Alencar - RM 563684
- Felipe Paula Burba Molonhoni - RM 564395
---

## 🚀 Sobre o Projeto (Challenge Motiva)

### O Problema e a Solução
A **Motiva** precisa otimizar o registro e o acompanhamento de ocorrências em campo. O aplicativo soluciona esse problema ao permitir que os operadores registrem incidentes rapidamente, informando local, descrição e o nível de risco associado, mantendo tudo organizado em uma lista acessível e detalhada.

### Ação Principal do Usuário
Cadastrar novas ocorrências, monitorar o nível de risco (com classificações visuais na listagem e na tela de detalhes) e garantir que os dados não sejam perdidos ao fechar o aplicativo.

---

## 🛠️ Stack Tecnológica
* **React Native** (com **Expo**)
* **TypeScript**
* **AsyncStorage** (para persistência de dados local)

---

## 📂 Estrutura de Pastas

A organização do projeto segue uma arquitetura modular limpa:

```text
src/
│
├── @types/          # Definições de tipos globais (ex: Ocorrencia)
├── components/      # Componentes reutilizáveis (botões, cards, etc.)
├── screens/         # Telas principais do app (Lista, Cadastro, Detalhes)
├── storage/         # Funções de persistência (AsyncStorage)
└── utils/           # Funções utilitárias e formatadores