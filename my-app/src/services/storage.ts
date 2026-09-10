// src/services/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ocorrencia } from '../types';

const STORAGE_KEY = '@motiva_ocorrencias';

// 1. Busca os dados salvos
export const carregarOcorrencias = async (): Promise<Ocorrencia[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Erro ao carregar dados", e);
    return [];
  }
};

// 2. Salva uma nova ocorrência junto com as que já existem
export const adicionarOcorrencia = async (novaOcorrencia: Ocorrencia): Promise<void> => {
  try {
    const ocorrenciasAtuais = await carregarOcorrencias();
    const novaLista = [...ocorrenciasAtuais, novaOcorrencia];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
  } catch (e) {
    console.error("Erro ao salvar dado", e);
  }
};