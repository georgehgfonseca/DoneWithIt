import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import { Category } from "../../App";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { label: "Furniture", backgroundColor: "red", icon: "apps", value: 1 },
  { label: "Clothing", backgroundColor: "green", icon: "email", value: 2 },
  { label: "Cameras", backgroundColor: "blue", icon: "lock", value: 3 },
];

export default function ListingEditScreen() {
  const [category, setCategory] = useState<Category>();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
        ></AppFormField>
        <AppFormField
          maxLength={8}
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        ></AppFormField>
        <AppFormPicker
          name="category"
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        ></AppFormPicker>
        <AppFormField
          maxLength={255}
          multiline
          autoCapitalize="none"
          name="description"
          placeholder="Description"
        ></AppFormField>
        <SubmitButton title="Post"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
