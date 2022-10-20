import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";

//Determines the rules for validating the form with yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const [error, setError] = useState<string>("");
  const auth = useAuth();

  const handleSubmit = async (userInfo: any) => {
    const result = await usersApi.register(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
        console.log(result);
      }
      return;
    }

    const { data } = await authApi.login(userInfo.email, userInfo.password);
    auth.logIn(data);
  };

  // const registerApi = useApi(usersApi.register);
  // const loginApi = useApi(authApi.login);
  // const auth = useAuth();
  // const [error, setError] = useState<string>();

  // const handleSubmit = async (userInfo: any) => {
  //   const result: any = await registerApi.request(userInfo);

  //   if (!result.ok) {
  //     if (result.data) setError(result.data.error);
  //     else {
  //       setError("An unexpected error occurred.");
  //       console.log(result);
  //     }
  //     return;
  //   }

  //   const { data } = await loginApi.request(userInfo.email, userInfo.password);
  //   auth.logIn(data);
  // };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContetType="emailAddress"
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContetType="password"
        ></AppFormField>
        <SubmitButton title="Register"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
