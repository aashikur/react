import React from 'react';

const blogData = [
  {
    title: 'What is useState and how does it work in React?',
    content: `
useState is a Hook in React that allows functional components to have state. It returns a state variable and a function to update that state. When the state changes, React re-renders the component with the new state.

Example:
const [count, setCount] = useState(0);
Here, count is the current state and setCount updates it.
    `,
  },
  {
    title: 'What is the purpose of useEffect in React?',
    content: `
useEffect is a Hook used to handle side effects like API calls, subscriptions, or manually changing the DOM. It runs after the component renders and can be controlled using a dependency array.

Example:
useEffect(() => {
  fetchData();
}, []);
The empty array means this runs only once after the initial render.
    `,
  },
  {
    title: 'What is a custom hook in React and when should you use one?',
    content: `
A custom hook is a reusable function that starts with "use" and can call other hooks inside it. Use it to share logic between components (e.g., fetching data, form handling).

Example:
function useAuth() {
  const [user, setUser] = useState(null);
  // logic here...
  return user;
}
Custom hooks promote cleaner and more maintainable code.
    `,
  },
  {
    title: 'Difference between controlled and uncontrolled components. Which one is better?',
    content: `
Controlled components have their form state managed by React (via useState), while uncontrolled components manage their own state via the DOM.

Controlled Example:
<input value={value} onChange={e => setValue(e.target.value)} />

Uncontrolled Example:
<input ref={inputRef} />

Controlled components offer more control and validation, making them the preferred approach in most cases.
    `,
  },
  {
    title: 'Tell us something about useFormStatus() in React.',
    content: `
useFormStatus is a React Hook used in conjunction with <form> and <form action>. It provides information like whether the form is currently being submitted. This is particularly useful for showing loading states or disabling buttons during submission.

Example:
const { pending } = useFormStatus();
<button disabled={pending}>Submit</button>
It's part of React’s new form-handling features for better UX.
    `,
  },
];

const BlogPage = () => {
  return (
    <section className="bg-white text-gray-800 px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">📚 Blogs Page</h1>
      <div className="space-y-10">
        {blogData.map((blog, index) => (
          <article key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{blog.title}</h2>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed text-[15px]">{blog.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
