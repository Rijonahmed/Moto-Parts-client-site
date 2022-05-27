import React from 'react';

const Blog = () => {
  return (
    <div className='mx-12'>

      <div className='my-5'>
        <h1 className='text-2xl my-3'><big>Question: </big>How will you improve the performance of a React Application?</h1>
        <p><big className='font-bold'>Ans: </big>To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>

      </div>

      <div className='my-5'>
        <h1 className='text-2xl my-3'><big>Question: </big>What are the different ways to manage a state in a React application?</h1>
        <p><big className='font-bold'>Ans: </big>The state is a built-in React object that is used to contain data or information about the component.useState() useState() hook allows you create and mange a state variable that can be a simple JavaScript primitive or an object.In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.</p>

      </div>

      <div className='my-5'>
        <h1 className='text-2xl my-3'><big>Question: </big>How does prototypical inheritance work?</h1>
        <p><big className='font-bold'>Ans: </big>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. Classical inheritance is limited to classes inheriting from other classes. However prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.</p>

      </div>
      <div className='my-5'>
        <h1 className='text-2xl my-3'><big>Question: </big>Why you do not set the state directly in React ? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
        <p><big className='font-bold'>Ans: </big>If the setter of state is unused, you can avoid it the useState . You can keep the value in a const (in the body of the component), or move outside of the component. setState is used when it's needed to be aware of the changes in the value stored in state. This way the component knows when to re-render.</p>

      </div>


      <div className='my-5'>
        <h1 className='text-2xl my-3'><big>Question: </big>What is a unit test? Why should write unit tests?</h1>
        <p><big className='font-bold'>Ans: </big>Unit testing is testing the smallest testable unit of an application. It is done during the coding phase by the developers. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct.</p>

      </div>

    </div>

  );
};

export default Blog;