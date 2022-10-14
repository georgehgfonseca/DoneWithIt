import React from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";

const listings = [
    {id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg")}
    {id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: require("../assets/couch.jpg")}
    ]

export default function ListingsScreen(props: any) {
  return (
    <Screen>
      <FlatList data={listings} keyExtractor={listing => listing.id } renderItem={({item}) => <Card></Card>}></FlatList>
    </Screen>
  );
}
