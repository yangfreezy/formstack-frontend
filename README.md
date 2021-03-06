# Formstack Frontend Challenge - Yang Yu

# Instructions

To install and start:
git clone https://github.com/yangfreezy/formstack-frontend.git && cd formstack-frontend && npm install && npm start

To test: 
- npm run test, then press a

# The Process

Using: Create-React-App, Material UI, Jest and React testing library.

Containers: TodoList, TodoForm

Components: TodoItem, Selection, InputBar

Handlers: createTodo, deleteTodo, sortTodos

Sort: Able to sort todo items by priority (very high - very low) and order created (id number)

Selection: Able to highlight a todo

# Time log

Session 1:
Time: 4:15 PM - 6:35 PM

Priorities: Meet basic requirements

Completed:
- pick a component library - material ui
- sketch component hierarchy
- added initialState.js
- added TodoList
- added TodoForm
- added TodoItem
- added Select functionality
- added Delete functionality
- added Create functionality
- added Sort functionality
_________

Session 2:
Time: 10:30 AM - 12:00 PM

Priorities: Clean up any redundant code, refactor for reusability, add tests to components/containers

Completed:
- refactored InputBar, Selection components to be reusable
- added render tests to all components/containers
- moved create, delete and sort todos to handlers folder
- cleaned up redundant code
