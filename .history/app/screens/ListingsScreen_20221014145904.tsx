import React from "react";
import { FlatList } from "react-native";

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
      <FlatList data={}></FlatList>
    </Screen>
  );
}
