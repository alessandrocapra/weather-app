import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import SearchResultList from "./SearchResultList";
import { useDispatch } from "react-redux";
import { setShouldFetch } from "../redux/shouldFetch/shouldFetchSlice";

function SearchLocation() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm === "") {
      Keyboard.dismiss();
    }
  }, [searchTerm]);

  return (
    <View className="relative z-10">
      <View className="flex-row">
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Type city name..."
          className="h-12 flex-1 rounded px-4 pr-12 bg-white shadow-sm"
        />
        {searchTerm && (
          <Pressable
            onPress={handleResetText}
            className="absolute right-0 bottom-0 top-0 p-3"
          >
            <Ionicons name="close-circle-outline" size={20} />
          </Pressable>
        )}
      </View>
      <SearchResultList query={searchTerm} setQuery={setSearchTerm} />
    </View>
  );

  function handleResetText() {
    setSearchTerm("");
    dispatch(setShouldFetch(false));
  }
}

export default SearchLocation;
