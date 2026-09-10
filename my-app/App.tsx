import React, { useState, useEffect } from 'react';
import { carregarOcorrencias } from './src/services/storage';
import { Ocorrencia } from './src/types';
import { ListaScreen } from './src/screens/ListaScreen';
import { CadastroScreen } from './src/screens/CadastroScreen';
import { DetalheScreen } from './src/screens/DetalheScreen';

type TelaAtual = 'lista' | 'cadastro' | 'detalhe';

export default function App() {
  const [tela, setTela] = useState<TelaAtual>('lista');
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [itemSelecionado, setItemSelecionado] = useState<Ocorrencia | null>(null);

  const atualizarLista = async () => {
    const dados = await carregarOcorrencias();
    setOcorrencias(dados);
  };

  // Carrega os dados assim que o app abre
  useEffect(() => {
    atualizarLista();
  }, []);

  if (tela === 'cadastro') {
    return (
      <CadastroScreen 
        onVoltar={() => setTela('lista')} 
        onSalvo={() => {
          atualizarLista(); // Busca os dados novos no AsyncStorage
          setTela('lista'); // Volta para a tela inicial
        }} 
      />
    );
  }

  if (tela === 'detalhe' && itemSelecionado) {
    return (
      <DetalheScreen 
        ocorrencia={itemSelecionado} 
        onVoltar={() => setTela('lista')} 
      />
    );
  }

  return (
    <ListaScreen 
      ocorrencias={ocorrencias} 
      onNovaOcorrencia={() => setTela('cadastro')} 
      onVerDetalhe={(item) => {
        setItemSelecionado(item);
        setTela('detalhe');
      }} 
    />
  );
}