// src/components/OcorrenciaCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ocorrencia } from '../types';

interface Props {
  ocorrencia: Ocorrencia;
  onPress: () => void;
}

export function OcorrenciaCard({ ocorrencia, onPress }: Props) {
  // Define a cor baseada no risco
  const corRisco = 
    ocorrencia.risco === 'alto' ? 'red' : 
    ocorrencia.risco === 'medio' ? 'orange' : 'green';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.titulo}>{ocorrencia.descricao}</Text>
      <Text>Local: {ocorrencia.local}</Text>
      <Text style={{ color: corRisco, fontWeight: 'bold' }}>
        Risco: {ocorrencia.risco.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginVertical: 8, backgroundColor: '#f9f9f9', borderRadius: 8 },
  titulo: { fontSize: 16, fontWeight: 'bold' }
});