// src/types/index.ts
export type Ocorrencia = {
  id: number;
  descricao: string;
  local: string;
  risco: "baixo" | "medio" | "alto";
  data: string;
  // Pode adicionar extras da Motiva aqui, ex:
  // foto?: string;
  // status?: string;
};