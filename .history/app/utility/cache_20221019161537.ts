import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment"

const prefix = "cache"
const expiryInMinutes = 5;

const store = async (key: string, value: any) => {
  try {
    const item = {value, timestamp: Date.now()}
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
}

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value as string);

    if (!item) return null;

    const now = moment(Date.now())
    const storedTime = moment(item.timestamp)
    const isExpired = now.diff(storedTime, "minutes") > expiryInMinutes;
    if (isExpired) {
      AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value

  } catch (error) {
    console.log(error);
  }
}



export default {
  store
}