import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { OcorrenciaCard } from '../components/OcorrenciaCard';
import { Ocorrencia } from '../types';

interface Props {
  ocorrencias: Ocorrencia[];
  onNovaOcorrencia: () => void;
  onVerDetalhe: (ocorrencia: Ocorrencia) => void;
}

export function ListaScreen({ ocorrencias, onNovaOcorrencia, onVerDetalhe }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ocorrências Motiva</Text>
      <Button title="Cadastrar Nova Ocorrência" onPress={onNovaOcorrencia} />
      
      {ocorrencias.length === 0 ? (
        <Text style={styles.vazio}>Nenhuma ocorrência registrada.</Text>
      ) : (
        <FlatList
          data={ocorrencias}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <OcorrenciaCard ocorrencia={item} onPress={() => onVerDetalhe(item)} />
          )}
          style={{ marginTop: 15 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  vazio: { marginTop: 20, textAlign: 'center', color: '#666' }
});