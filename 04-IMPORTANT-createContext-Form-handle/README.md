# React Practice Project

This project is a practice ground for learning and implementing various React concepts and features. Below are the key topics covered in this project, along with their purpose and usage.

---

## Topics Covered

### 1. **React Components**
   - **What**: Components are the building blocks of a React application.
   - **Why**: They allow you to break the UI into reusable, independent pieces.
   - **How**: This project uses both functional components (e.g., `SimpleForm`, `FamilyTree`) to structure the application.

---

### 2. **State Management**
   - **What**: State is used to manage dynamic data within components.
   - **Why**: To handle changes in data and re-render the UI accordingly.
   - **How**: 
     - `useState` is used in components like `ProductManagement` and `ControlForm` to manage form inputs and product lists.

---

### 3. **Props**
   - **What**: Props are used to pass data from parent to child components.
   - **Why**: To enable communication between components.
   - **How**: 
     - Example: `ProductForm` passes the `handleAddProduct` function as a prop to manage product addition.

---

### 4. **Context API**
   - **What**: Context API is used for state sharing across components without prop drilling.
   - **Why**: To manage global state like `money` and `assets` in the `FamilyTree` component.
   - **How**: 
     - `AssetContext` and `MoneyContext` are created using `createContext` and used in components like `MySelf` and `Brother`.

---

### 5. **Controlled Components**
   - **What**: Components where form inputs are controlled by React state.
   - **Why**: To dynamically handle form validation and input changes.
   - **How**: 
     - Example: `ControlForm` uses `useState` to manage and validate password input.

---

### 6. **Uncontrolled Components**
   - **What**: Components where form inputs are managed using `ref`.
   - **Why**: Useful for simple forms where state management is not required.
   - **How**: 
     - Example: `UncontrolledField` uses `useRef` to access input values directly.

---

### 7. **Custom Hooks**
   - **What**: Reusable functions that encapsulate logic using React hooks.
   - **Why**: To avoid code duplication and improve reusability.
   - **How**: 
     - Example: `useInputField` is a custom hook used in `HookForm` to manage input fields.

---

### 8. **Form Handling**
   - **What**: Techniques to handle form submissions and validations.
   - **Why**: To collect and process user input effectively.
   - **How**: 
     - Example: `SimpleForm` and `FormAction` demonstrate different ways to handle form data using `e.target` and `FormData`.

---

### 9. **Dynamic Rendering**
   - **What**: Rendering components or elements based on dynamic data.
   - **Why**: To create interactive and data-driven UIs.
   - **How**: 
     - Example: `ProductTable` dynamically renders rows based on the `products` array.

---

### 10. **CSS Styling**
   - **What**: Styling components using CSS and TailwindCSS.
   - **Why**: To create visually appealing and responsive designs.
   - **How**: 
     - TailwindCSS is imported in `index.css` for utility-based styling.
     - Custom styles are applied in files like `FamilyTree.css`.

---

### 11. **Component Composition**
   - **What**: Combining multiple components to build complex UIs.
   - **Why**: To maintain modularity and reusability.
   - **How**: 
     - Example: `FamilyTree` is composed of `Grandpa`, `Dad`, `Uncle`, and `Aunt` components.

---

### 12. **Error Handling**
   - **What**: Managing and displaying errors in the UI.
   - **Why**: To provide feedback to users for invalid inputs.
   - **How**: 
     - Example: `ProductForm` and `ControlForm` display error messages for invalid inputs.

---

### 13. **React StrictMode**
   - **What**: A development tool to highlight potential problems in an application.
   - **Why**: To ensure best practices and catch issues early.
   - **How**: 
     - Used in `main.jsx` to wrap the root component.

---

### 14. **Project Setup with Vite**
   - **What**: Vite is a fast build tool for modern web projects.
   - **Why**: To leverage its speed and simplicity for React development.
   - **How**: 
     - Configured in `vite.config.js` with React and TailwindCSS plugins.

---

### 15. **ESLint for Code Quality**
   - **What**: A tool to enforce coding standards and catch errors.
   - **Why**: To maintain consistent and error-free code.
   - **How**: 
     - Configured in `eslint.config.js` with React and hooks plugins.

---

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```

## Project Structure

```markdown
src/
├── [App.jsx](http://_vscodecontentref_/1)
├── [App.css](http://_vscodecontentref_/2)
├── [index.css](http://_vscodecontentref_/3)
├── [main.jsx](http://_vscodecontentref_/4)
├── hooks/
│   └── [useInputField.jsx](http://_vscodecontentref_/5)
├── component/
│   ├── SimpleForm/
│   │   └── [SimpleForm.jsx](http://_vscodecontentref_/6)
│   ├── FormAction/
│   │   └── [FormAction.jsx](http://_vscodecontentref_/7)
│   ├── ControlForm/
│   │   └── [ControlForm.jsx](http://_vscodecontentref_/8)
│   ├── UncontroledField/
│   │   └── UncontrolledField.jsx
│   ├── HookForm/
│   │   └── [HookForm.jsx](http://_vscodecontentref_/9)
│   ├── ProductManagement/
│   │   ├── [ProductForm.jsx](http://_vscodecontentref_/10)
│   │   ├── [ProductManagement.jsx](http://_vscodecontentref_/11)
│   │   └── [ProductTable.jsx](http://_vscodecontentref_/12)
│   └── FamilyTree/
│       ├── [FamilyTree.jsx](http://_vscodecontentref_/13)
│       ├── [Grandpa.jsx](http://_vscodecontentref_/14)
│       ├── [Dad.jsx](http://_vscodecontentref_/15)
│       ├── [Uncle.jsx](http://_vscodecontentref_/16)
│       ├── [Aunt.jsx](http://_vscodecontentref_/17)
│       ├── [Brother.jsx](http://_vscodecontentref_/18)
│       ├── [Sister.jsx](http://_vscodecontentref_/19)
│       ├── [MySelf.jsx](http://_vscodecontentref_/20)
│       ├── [Cousin.jsx](http://_vscodecontentref_/21)
│       ├── [Friend.jsx](http://_vscodecontentref_/22)
│       ├── [Sepcial.jsx](http://_vscodecontentref_/23)
│       └── [FamilyTree.css](http://_vscodecontentref_/24)
```

Key Learnings
This project demonstrates how to build a React application with modern practices, including state management, context API, form handling, and reusable components. It also highlights the importance of tools like Vite, TailwindCSS, and ESLint for efficient development.