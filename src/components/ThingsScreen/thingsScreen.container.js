import React from "react";
import { ThingsScreenComponent } from "./thingsScreen.component";

export const ThingsScreenContainer = ({setThingsScreen}) => {
  const things = [
    {
      name: 'orange',
      category: 'eatable',
    },
    {
      name: 'ball',
      category: 'uneatable'
    }
  ]
 const thingsScreenChanger = () => {
   setThingsScreen(things[Math.random()])
 }
  return (
    <ThingsScreenComponent/>
  );
};
