# Testes Utilitários com Jest em React Native (Expo + TypeScript)

Este é um projeto simples criado com Expo, usando TypeScript, para servir como referência pessoal sobre como escrever testes **unitários para funções utilitárias** utilizando **Jest**.

---

## 📚 Objetivo

Guardar um exemplo prático de como configurar e executar testes unitários em funções puras (utils/helpers) dentro de um ambiente React Native com TypeScript.

---

## 🛠️ Tecnologias utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)

---

## 🧪 Exemplos de funções testadas

### `formatTemperature.ts`

Função simples que formata um número decimal para temperatura com símbolo de graus Celsius:

```ts
export function formatTemperature(temp: number): string {
  return `${Math.round(temp)}°C`;
}
```

🚀 Como executar os testes

1.Instale as dependências:
```bash
npm install```

2.Execute os Testes:
```bash
npx jest```

🧠 Notas importantes
-Este projeto é apenas para fins de estudo/memória.

-A pasta de testes segue o padrão __tests__ usado pelo Jest.

-O Jest foi configurado com suporte ao TypeScript via ts-jest.

##📌Propósito
Este repositório serve como referência futura sempre que for necessário relembrar como configurar e escrever testes para funções auxiliares em projetos React Native com Expo + TS + Jest.