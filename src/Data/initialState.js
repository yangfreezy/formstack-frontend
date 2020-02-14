const initialState = [
  {
    id: 0,
    text: "This should be first on created, third on priority!",
    priority: "Low",
    priorityValue: 1
  },
  {
    id: 1,
    text: "This should be second on created, second on priority!",
    priority: "Medium",
    priorityValue: 2
  },
  {
    id: 2,
    text: "This should be third on created, fourth on priority!",
    priority: "Very Low",
    priorityValue: 0
  },
  {
    id: 3,
    text: "This should be fourth on created, first on priority!",
    priority: "Very High",
    priorityValue: 5
  }
];

const initialId = 4;
export { initialState, initialId };
