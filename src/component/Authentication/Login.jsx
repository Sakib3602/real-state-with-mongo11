import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

    const { signInEmailPassword , google,github} = useContext(AuthContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const value = {
            name,email,password
        }
        console.log(value)

        // email pass
        signInEmailPassword(email, password)
        .then((userCredential) => {
            toast.success('Log In Successful!')
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            console.log(error.message)
          });
       

    }



    
  function submitGoogle(){
    google()
    .then(()=>{
      toast.success('Log In Successful with Google.');
    
      
    })
  }
  function submitGitHub(){
    github()
    .then(()=>{
      toast.success('Log In Successful with GitHub.');
    
      
    })
  }


















    return (
        <section className="max-w-4xl p-6 mx-auto text-black rounded-md shadow-md mt-20">
  <h2 className="text-5xl text-center mb-5 text-black">
    Sigh In 
  </h2>
  <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 gap-6 mt-4">
      <div>
        <label className="text-black " htmlFor="username">
          Username
        </label>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <input
          id="username"
          type="text"
          name="name"
          className="block w-full px-4 py-2 mt-2  bg-white border  rounded-md text-black border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-black "
          htmlFor="emailAddress"
        >
          Email Address
        </label>
        <input
          id="emailAddress"
          type="email"
          name="email"
          className="block w-full px-4 py-2 mt-2 text-black border-gray-200 bg-white border  rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      
      <div>
        <label
          className="text-black "
          htmlFor="passwordConfirmation"
        >
          Password 
        </label>
        <input
        name="password"
          type="password"
          className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="space-x-5 space-y-4 lg:space-y-0 md:space-y-0 flex flex-col md:flex-row lg:flex-row">
        <button onClick={submitGoogle} className=" ml-5 lg:ml-0 md:ml-0 btn btn-wide rounded-md  btn-outline   text-xl">Google</button>
        <button onClick={submitGitHub} className=" btn btn-wide rounded-md  btn-outline  text-xl">GitHub</button>
      </div>
    </div>
    <div className="flex mt-6">
      <button className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
        Log In
      </button>
    </div>
  </form>
</section>
    );
};

export default Login;