import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-3xl font-mono font-bold'> Blogs</h2>
            <h1 className='text-xl font-mono'>Qes: How will you improve the performance of a React Application?</h1>

            <div className='p-5 shadow-lg '>
                <p className='font-semibold'>
                    Ans: If you’re benchmarking or experiencing performance problems in your React apps, make sure you’re testing with the minified production build.

                    By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.

                    If you aren’t sure whether your build process is set up correctly, you can check it by installing React Developer Tools for Chrome. If you visit a site with React in production mode, the icon will have a dark background:
                </p>
            </div>
            <div className='p-5 shadow-lg'>
                <h2 className='text-xl font-mono'>Qes: What are the different ways to manage a state in a React application?</h2>
                <p>
                    Ans: React has an excellent tool for providing data across multiple components. The primary goal of Context is to avoid prop-drilling. Our goal is to get an easy-to-use tool to manage the state in various scenarios likely to be encountered in enterprise applications: frequent updates, redesigns, the introduction of new features, and so on.

                    While all this is theoretically doable with Context, it would require a custom solution that requires time to set up, support, and optimize. The only advantage of Context is that it doesn’t depend on a third-party library, but that can’t outweigh the effort to maintain this approach.


                </p>
            </div>
            <div className='p-5 shadow-lg'>
                <h2 className='text-xl font-mono'>Qes: How does prototypical inheritance work?</h2>
                <p>
                    Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.


                </p>
            </div>
            <div className='p-5 shadow-lg'>
                <h2 className='text-xl font-mono'>Qes: Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h2>
                <p>
                    Ans: One should never update the state directly because of the following reasons:

                    If update it directly, calling the setState() afterward may just replace the update you made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components.



                </p>
            </div>
            <div className='p-5 shadow-lg'>
                <h2 className='text-xl font-mono'>Qes:What is a unit test? Why should write unit tests?</h2>
                <p>
                    Ans: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    So we should write it.





                </p>
            </div>
        </div>
    );
};

export default Blogs;