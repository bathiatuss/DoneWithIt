import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppButon from "../components/AppButton";
import AppText from "../components/AppText/AppText";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted" },
    backgroundColor: colors.primary,
  },
  {
    title: "My Messages",
    icon: { name: "email" },
    backgroundColor: colors.secondary,
  },
];

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"atakan"}
          subTitle={"atakanbaltac-1@hotmail.com"}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.item}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.backgroundColor}
                />
              }
            />
          )}
        ></FlatList>
      </View>
      <ListItem
        title={"Log Out"}
        ImageComponent={
          <Icon name={"logout"} backgroundColor={colors.yellow} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.light },
  container: { marginVertical: 20 },
});

export default AccountScreen;