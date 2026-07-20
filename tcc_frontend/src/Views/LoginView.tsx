import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JWTContext } from '../Contexts.ts';

function LoginView()
{
        const [login, setLogin] = useState('');
        const [password, setPasword] = useState('');

        const navigate = useNavigate();
        const authJWT = useContext(JWTContext);

        function Login(submitEvent: any) 
        {
            submitEvent.preventDefault();

            // todo: make login logic
            const payload: Object = {userLogin: login, userPass: password};

            if (true)
                navigate("/main");
        }

		return(
                <form className="flex h-screen items-center justify-center" onSubmit = {(submitEvent) => Login(submitEvent)} >
                    <div className="p-6 bg-gray-500/25 text-white rounded shadow-lg border-2 border-white [box-shadow:10px_10px_rgb(82_82_82)]">

                        <div className="relative w-full max-w-sm">
                            <label htmlFor="user-login" className="absolute top-3 z-10 -translate-y-4 scale-100 transform text-lg text-white">Login</label>
                            <input type="text" id="user-login" className="peer block w-full appearance-none rounded-t-md border-0 border-b-2 border-gray-300 bg-transparent pt-5 text-lg text-gray-500 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder="Your user Login." onChange = {(t) => setLogin(t.target.value)} />
                        </div>

                        <br /> 

                        <div className="relative w-full max-w-sm">
                            <label htmlFor="user-password" className="absolute top-3 z-10 -translate-y-4 scale-100 transform text-lg text-white">Password</label>
                            <input type="password" id="user-password" className="peer block w-full appearance-none rounded-t-md border-0 border-b-2 border-gray-300 bg-transparent pt-5 text-lg text-gray-500 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder="Your user Password." onChange = {(t) => setPasword(t.target.value)} />
                        </div>

                        <br /> 

                        <div className="py-1 text-center">
                        <button type="submit" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-white transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]"> Try !</button>
                        </div>
                    </div>
                </form>
		);
}

export default LoginView;
