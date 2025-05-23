// src/components/MealPlan.jsx
import React from "react";
import { Card, CardContent, Typography, Avatar, Box, Grid } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

const mealData = [
  {
    id: 1,
    type: "Breakfast",
    icon: <BreakfastDiningIcon className="text-orange-500" />,
    meal: "Oats with berries & almond butter",
    calories: 350,
    protein: 18,
    carbs: 40,
    fats: 12,
  },
  {
    id: 2,
    type: "Lunch",
    icon: <LunchDiningIcon className="text-green-500" />,
    meal: "Grilled chicken with quinoa & veggies",
    calories: 500,
    protein: 35,
    carbs: 45,
    fats: 18,
  },
  {
    id: 3,
    type: "Dinner",
    icon: <DinnerDiningIcon className="text-purple-500" />,
    meal: "Salmon with brown rice & greens",
    calories: 480,
    protein: 32,
    carbs: 38,
    fats: 20,
  },
  {
    id: 4,
    type: "Snack",
    icon: <EmojiFoodBeverageIcon className="text-pink-500" />,
    meal: "Greek yogurt with honey & nuts",
    calories: 200,
    protein: 15,
    carbs: 20,
    fats: 8,
  },
];

const MealPlan = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Typography
        variant="h4"
        className="text-center font-bold text-gray-800 mb-10"
      >
        🍽 Today's Meal Plan
      </Typography>

      <Grid container spacing={4}>
        {mealData.map((meal) => (
          <Grid item xs={12} sm={6} key={meal.id}>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <CardContent className="flex flex-col gap-3">
                <Box className="flex items-center gap-3">
                  <Avatar className="bg-gray-100">{meal.icon}</Avatar>
                  <Typography variant="h6" className="text-gray-700">
                    {meal.type}
                  </Typography>
                </Box>
                <Typography variant="body2" className="text-gray-600">
                  {meal.meal}
                </Typography>
                <Box className="text-sm text-gray-500 mt-2 flex flex-wrap gap-4">
                  <span>🔥 {meal.calories} kcal</span>
                  <span>🥩 {meal.protein}g protein</span>
                  <span>🍞 {meal.carbs}g carbs</span>
                  <span>🥑 {meal.fats}g fats</span>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MealPlan;
