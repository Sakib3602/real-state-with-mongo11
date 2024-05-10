
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Registration = () => {

    const {signWithEP} = useContext(AuthContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const value = {
            name,email,photo,password
        }
        console.log(value)

        // email pass
        signWithEP(email,password)
        .then((result) => {
            toast.success('Sigh Up Successful!')
            console.log(result)
        })
        .catch((error)=>{
            console.log(error.massage)
        })

    }








    return (
        <section className="max-w-4xl p-6 mx-auto text-black rounded-md shadow-md mt-20">
  <h2 className="text-5xl text-center mb-5 text-black">
    Register Now !
  </h2>
  <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <label className="text-black " htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="name"
          className="block w-full px-4 py-2 mt-2  bg-white border  rounded-md text-black border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
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
        <label className="text-black " htmlFor="password">
          Photo URL
        </label>
        <input
       
          type="text"
          name="photo"
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
    </div>
    <div className="flex mt-6">
      <button className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
        Save
      </button>
    </div>
  </form>
</section>

    );
};

export default Registration;