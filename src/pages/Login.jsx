// import LoginForm from '../components/Auth/LoginForm';

// const Login = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//     <div className="hidden lg:flex lg:w-1/2 bg-black items-center justify-center">
//       <h1 className="text-6xl font-bold text-white">Board.</h1>
//     </div>
    
//     <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//       <LoginForm />
//     </div>
//   </div>
//   );
// };

// export default Login;

import React from 'react';

import LoginForm from '../components/Auth/LoginForm';


const Login = () => {

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Brand */}
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-8 lg:p-12">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold text-white tracking-tight">Board.</h1>
       
        </div>
      </div>

      <LoginForm/>

   


    </div>
  );
};

export default Login;
