import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Clipboard } from 'react-native';

const frases = [
  "A persistência é o caminho do êxito.",
  "A verdadeira felicidade é aquele que conquistamos dia a dia com trabalho e dedicação.",
  "A vida é 10% o que acontece conosco e 90% como reagimos a isso.",
  "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
  "Imagine uma nova história para sua vida e acredite nela.",
  "Não espere por oportunidades, crie você mesmo as suas."
];

const App = () => {
  const [fraseAleatoria, setFraseAleatoria] = useState("");

  const gerarFrase = () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    setFraseAleatoria(frases[indiceAleatorio]);
  }

  const copiarFrase = () => {
    Clipboard.setString(fraseAleatoria);
    alert("Frase copiada para a área de transferência!");
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Frases Aleatórias</Text>
      <Text style={{ fontSize: 18, textAlign: 'center', marginHorizontal: 50 }}>{fraseAleatoria}</Text>
      <TouchableOpacity onPress={copiarFrase} style={{ backgroundColor: '#007AFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Copiar Frase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gerarFrase} style={{ backgroundColor: '#007AFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Gerar Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
