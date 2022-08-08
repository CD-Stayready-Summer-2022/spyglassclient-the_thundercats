import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ForgotPassword } from "./pages/page-links/ForgotPassword";
import { SeeAllGoals } from "./pages/SeeAllGoals";
import { UpdateGoal } from "./pages/UpdateGoal";
import { CreateGoal } from "./pages/CreateGoal";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ( ForgotPassword);


const firebaseConfig = {
  type: "service_account",
  project_id: "vanguard-spyglass",
  private_key_id: "2fc2fcff1787cda02dcd295e5d13336a41602ab3",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCnWXgsNeD0x25b\nEM1sHn+YGT2BPmaLpC1o99EqTJ6gpTDetk61DDjgctBKEpsRhy7H5RcGX9LtLMAX\nfUAawMq8BoZ6rjllwAyslw+OvjhZq0WFEXhsI1NXIsAuSq+LpOJ+ozF5tMnLaLT9\nfwN6H9Tcc/Z/rATbyUU3396jUhLIjhufaVHzyw60cvxbZmcCbVPUL3bfKPBbVzlT\n2RMycjvVxxAsdIecAlxviICfnaVt3PWgzemUmeNI1i5FECHQf3rKoHX96cqI0IP9\nND85xooq7ZDxQ79siVZ/bVoU7+ha/FWHCBnpRkNZXq8xyKZxOtTWOkA+bojl5oc4\npLKkZyQRAgMBAAECggEAAVeupt4kyJnr+PeMylQBTolPTMDhJjgiNCAe0bHNKPlC\nR9sbDQlE0IojQSDelRiqR6i/E0pEASqVfOrAj6ZhyfncbNIGfFo6z8yjb4/3mEKP\nO3bNKkLrSXzqIUTwnRRsy7rH7BPG9aaIoyr4bmugc8dLYDFTVacK8tyNJu7C31B/\nMvsUoYyC8mXUXWlA3LEWVS1/sd2CJTRb+Xmz062waiUkm7fByxiWDC/+sdx+uH5D\nJoJ7rAdoL2ccPQuuMO+TKK8ygxDFwQbneFziAPQInHjBiIUTKLMA9Ey/b03Whkgi\nA8b1wwZFqyE7wG6nn8smJ3S8FRLEiLt2eNjp2PPIxQKBgQDi5Y6uKJv/opwgzBcR\ndj7YE6KfOw8sZOIKUIEFD3bWfa2BEKwkoS5LXhjaobGzg8ncCt2styoCv2Klv18h\nD7gZHeeXqLYUnID6mhGiXK6QGtmLj+irbQIQFVco/ccUMzvlGERwZFgNFK7SKlYi\nPRMH10Zu9wJPEkcJ4VwoMDz1pQKBgQC80Jpu5kKo3CSjM/REp1osQS4TeiBVcvx2\nEAofPKjRKBwdHU8jJITfJZ9smtywTqHxKQvIPbAL9zr7PQ69/Of1kr3itXlttm26\nMWs6tOd/HK5fkf7XPiP9WY37gO65j0SdwqYvL/IimHxOpSJj2TYRmdkjyMYh96gn\nnPgahtjg/QKBgQC+qmjbsQRmLR9F8DryUYs9yEI/zEFT7PKF+GBzACu80p+adYgy\nv79HVitMjdPmJjjaz8a3/LMw2+LppYcrISpy8M5Mg1l+uIUqEY4AAiIutmFZBfVf\nGJtDKKu1poxETUlnmpzoVWook9jUgv8ehnQXgq+NT8SA7bsEcnweyWpwgQKBgQCh\nNue1autdrGGn65NUDyQiByElRjBXZU+EKtvJogxuUXX3se/BDMxaj5AYtf1amDkT\nZT2HIoyvGtAEdjShKVCQ0FNLQDHG6G21/b4VqSLD2KRWO5zBAXDPP+jH5mVukJJA\ntVMZlTGEMnho2fyMDolo69iIAkSR+hhcgl0goSSKrQKBgQDT7m9SpE/qnjX22bja\nQBfSim6DrE2Wl+Ba2BKpH3Lzf+tTdkODitsNYw9hH3QL6jmA+32QdI+7tinoyv7y\nkHo2Y+RIuc8c9H/mVni+tOgrBXim1xkUhvvgwIMKPaB58Zpjm9MqljIdMMICgbip\nImZtfRheMlhYkOUaynDdNMpqAw==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-fsev7@vanguard-spyglass.iam.gserviceaccount.com",
  client_id: "110954728983657127888",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fsev7%40vanguard-spyglass.iam.gserviceaccount.com",
};
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/allgoals" element={<SeeAllGoals />} />
          <Route path="/updategoal" element={<UpdateGoal />} />
          <Route path="/creategoal" element={<CreateGoal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx
export function signIn(email, password) {
  var userEmail = email.value;
  var userPassword = password.value;
  var userEmailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var userPasswordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
  var checkUserEmailValid = userEmail.match(userEmailFormat);
  var checkUserPasswordValid = userPassword.match(userPasswordFormat);
  const auth = getAuth(firebaseConfig);
  signInWithEmailAndPassword(auth, userEmail, userPassword).then((success) => {
    console.log("success").then((value) => {});
  });
}
