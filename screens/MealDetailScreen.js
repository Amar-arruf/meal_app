import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}> 
      <Text>The Meal Detail  Screen</Text>
      <Button 
        title="Go Back to Categories" 
        onPress={() => {
          props.navigation.popToTop()
        }} />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle : selectedMeal.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;