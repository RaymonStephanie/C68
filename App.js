import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Facebook from "./screens/fb";
import Instagram from "./screens/in";

export default createAppContainer(
  createBottomTabNavigator({
    FaceBook: { screen: Facebook },
    InstaGram: { screen: Instagram },
  })
);
