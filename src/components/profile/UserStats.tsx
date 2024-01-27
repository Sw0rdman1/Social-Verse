import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserStats = () => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statContainer}>
        <Text style={styles.statNumber}>0</Text>
        <Text style={styles.statText}>Posts</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.statNumber}>0</Text>
        <Text style={styles.statText}>Followers</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.statNumber}>0</Text>
        <Text style={styles.statText}>Following</Text>
      </View>
    </View>
  );
};

export default UserStats;

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  statContainer: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
  },
});
