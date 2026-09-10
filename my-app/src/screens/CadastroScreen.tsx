import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { adicionarOcorrencia } from '../services/storage';
import { Ocorrencia } from '../types';

interface Props {
  onVoltar: () => void;
  onSalvo: () => void;
}

export function CadastroScreen({ onVoltar, onSalvo }: Props) {
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [risco, setRisco] = useState<'baixo' | 'medio' | 'alto'>('baixo');

  const handleSalvar = async () => {
    if (!descricao || !local) {
      Alert.alert('Erro', 'Preencha descrição e local!');
      return;
    }

    const novaOcorrencia: Ocorrencia = {
      id: Date.now(),
      descricao,
      local,
      risco,
      data: new Date().toLocaleDateString('pt-BR')
    };

    await adicionarOcorrencia(novaOcorrencia);
    onSalvo(); // Atualiza a lista e volta pra tela inicial
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova Ocorrência</Text>
      
      <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} style={styles.input} />
      <TextInput placeholder="Local" value={local} onChangeText={setLocal} style={styles.input} />
      
      <Text style={styles.label}>Nível de Risco:</Text>
      <View style={styles.botoesRisco}>
        <Button title="Baixo" color={risco === 'baixo' ? 'green' : 'gray'} onPress={() => setRisco('baixo')} />
        <Button title="Médio" color={risco === 'medio' ? 'orange' : 'gray'} onPress={() => setRisco('medio')} />
        <Button title="Alto" color={risco === 'alto' ? 'red' : 'gray'} onPress={() => setRisco('alto')} />
      </View>

      <View style={styles.acoes}>
        <Button title="Cancelar" color="red" onPress={onVoltar} />
        <Button title="Salvar Ocorrência" onPress={handleSalvar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  label: { fontSize: 16, marginBottom: 10 },
  botoesRisco: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  acoes: { flexDirection: 'row', justifyContent: 'space-between' }
});