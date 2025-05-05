import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../../Firebase/firebase.init';


const Login = () => {

    const signInWithGoogle = () => {
    // ABC2
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider).then((result) => { console.log(result.user.email); }).catch((error) => {
    //         console.error('Error signing in with Google:', error);
    //     });


    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => console.log(result.user.email))
    .catch(error => console.error('Error signing in with Google:', error));

    }

    return (
        <div className='container text-center py-10'>
            <button onClick={signInWithGoogle} className='bg-blue-500 text-white px-4 py-2 cursor-pointer'>
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;
