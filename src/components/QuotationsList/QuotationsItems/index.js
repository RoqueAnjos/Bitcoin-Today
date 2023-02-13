import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function QuotationsItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logoBitcoin}
                    source={require("../../../img/bitcoin.png")}/>
                    <Text style={styles.dayCotation}>12/02/2023</Text>
                </View>
            </View>

            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ 545331.052</Text>
            </View>
            
        </View>
    )
}
