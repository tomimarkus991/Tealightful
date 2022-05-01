import { ITea } from "types";

export const teas: ITea[] = [
  {
    id: "1",
    title: "Green Tea",
    description: "Made from the Camellia sinensis tea plant - unoxidized",
    color: "green",
    image: "green_2.jpg",
    brewTime: {
      min: 60,
      max: 120,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 70,
      max: 80,
    },
  },
  {
    id: "1a",
    title: "Chinese Green Tea",
    description: "Made from the Camellia sinensis tea plant - unoxidized",
    color: "green",
    image: "green_2.jpg",
    brewTime: {
      min: 180,
      max: 240,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 70,
      max: 80,
    },
  },
  {
    id: "2",
    title: "Black Tea",
    description: "Made from the Camellia sinensis tea plant - fully, or almost fully oxidized",
    color: "black",
    image: "black_tea.jpg",
    brewTime: {
      min: 180,
      max: 300,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 96,
      max: 100,
    },
  },
  {
    id: "2a",
    title: "Black Tea With Milk and Sugar/Honey",
    description: "Made from the Camellia sinensis tea plant - fully, or almost fully oxidized",
    color: "black",
    image: "black_tea.jpg",
    brewTime: {
      min: 300,
      max: 300,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 96,
      max: 100,
    },
  },
  {
    id: "2b",
    title: "Darjeeling",
    description: "Made from the Camellia sinensis tea plant - fully, or almost fully oxidized",
    color: "black",
    image: "black_tea.jpg",
    brewTime: {
      min: 120,
      max: 120,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 96,
      max: 100,
    },
  },
  {
    id: "3",
    title: "Herbal Tea",
    description: "Made from infused dried herbs, fruits and flowers",
    color: "red",
    image: "green_2.jpg",
    brewTime: {
      min: 180,
      max: 480,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 96,
      max: 96,
    },
  },
  {
    id: "4",
    title: "White Tea",
    description: "Made from the Camellia sinensis tea plant - slightly oxidized",
    color: "orange",
    image: "green_2.jpg",
    brewTime: {
      min: 30,
      max: 120,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 80,
      max: 88,
    },
  },
  {
    id: "5",
    title: "Oolong Tea",
    description: "Made from the Camellia sinensis tea plant - partially oxidized",
    color: "green",
    image: "green_3.jpg",
    brewTime: {
      min: 180,
      max: 180,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 96,
      max: 96,
    },
  },
  {
    id: "6",
    title: "Rooibos Tea",
    description: "Made from the dried rooibos plant - partially oxidized",
    color: "red",
    image: "green_3.jpg",
    brewTime: {
      min: 60,
      max: 120,
    },
    steepTime: 120,
    restTime: 120,
    temperature: {
      min: 70,
      max: 80,
    },
  },
];
