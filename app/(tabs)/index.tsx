import { StyleSheet, Text, View } from "react-native";

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚚 Seguimiento de Mudanzas</Text>

      <Text style={{ color: "white" }}>
        Aplicacion en desarollo
        </Text>

        <View style={styles.card}>

      <Text style={{color: "white", fontWeight: "bold" }}>
        SEGUIMIENTO ACTUAL
        </Text>


      <Text style={{color: "white", marginTop: 10}}>
        🏡 Origen: Quilmes
        </Text>      

      <Text style={{ color: "white", marginTop: 20 }}>
         📦 Estado: En transito
         </Text>

         <Text style={{ color: "white", marginTop: 10 }}>
          📍 Ubicacion Actual: Florencio Varela
          </Text>

          <Text style={{color: "white", marginTop: 10}}>
             🏠 Destino: Berazategui
          </Text>

          <Text style={{ color: "white", marginTop: 10 }}>
            🚚 Unidad: Camion 03
            </Text>

            <Text style={{ color: "white", marginTop: 10 }}>
              📅 Fecha estimada: 12/07/2026

            </Text>
          
          <Text style={{ color: "white", marginTop: 20}}>
            Progreso: 🏠════🚚══════🏡
          </Text>


      </View>

   </View>    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },

  card: {
  backgroundColor: "#1f2937",
  padding: 20,
  borderRadius: 12,
  marginTop: 20,
  width: "85%",

 },
});


