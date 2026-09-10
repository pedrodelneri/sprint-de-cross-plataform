import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ocorrencia } from '../types';

interface Props {
  ocorrencia: Ocorrencia;
  onVoltar: () => void;
}

export function DetalheScreen({ ocorrencia, onVoltar }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes da Ocorrência</Text>
      
      <View style={styles.card}>
        <Text style={styles.texto}>ID: {ocorrencia.id}</Text>
        <Text style={styles.texto}>Data: {ocorrencia.data}</Text>
        <Text style={styles.texto}>Descrição: {ocorrencia.descricao}</Text>
        <Text style={styles.texto}>Local: {ocorrencia.local}</Text>
        <Text style={styles.texto}>Risco: {ocorrencia.risco.toUpperCase()}</Text>
      </View>

      <Button title="Voltar para Lista" onPress={onVoltar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 8, marginBottom: 20 },
  texto: { fontSize: 16, marginBottom: 10 }
});