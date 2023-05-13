import Header from "../components/Heading";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <>
      <div className="w-full h-screen bg-slate-300">
        <nav className="h-14 px-10 py-4 bg-slate-900">
          <h3 className="dark:text-gray-100">Fireworks Entertainment</h3>
        </nav>
        <div className="mt-10">
          <Header
            heading="Signup to create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
          <Signup />
        </div>
      </div>
    </>
  );
}
