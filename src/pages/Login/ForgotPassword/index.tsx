import { Link } from 'react-router-dom';
import LogoSVG from '../../../shared/assets/logo';

export default function ForgotPassword() {
  return (
    <>
      <div className="flex min-h-screen flex-1 2xl:p-5">
        <div className="flex flex-1 flex-col justify-center bg-white px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot Password?
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                No worries, enter your email to begin the password reset process.
              </p>
            </div>

            <div className="mt-5">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    {/* <Link to="/superadmin"> */}
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-royal-blue px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send Email
                    </button>
                    {/* </Link> */}
                  </div>

                  <div className="text-sm leading-6">
                    <Link
                      to="/login"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Return to login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="absolute inset-0 h-full w-full overflow-hidden bg-gradient-to-r from-royal-blue to-purple-900 object-cover">
            {/* Large transparent circle on left */}
            <div
              className="absolute -ml-24 -mt-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-r from-transparent to-emerald-200 opacity-10"
              data-testid="large-circle"
            />

            {/* Smaller transparent circle on left */}
            <div
              className="absolute -ml-80 -mt-4 h-[32rem] w-[32rem] rounded-full bg-gradient-to-r from-transparent to-emerald-200 opacity-10"
              data-testid="small-circle-1"
            />

            {/* Smaller circle on right */}
            <div className="flex flex-row-reverse">
              <div
                className="absolute mr-10 mt-[32rem] h-20 w-20 rounded-full bg-gradient-to-r from-emerald-200 to-transparent opacity-20"
                data-testid="small-circle-2"
              />
            </div>

            <div className="absolute left-1/2 top-1/2 flex -translate-x-28 -translate-y-16 transform items-center justify-center gap-2">
              <div className="h-20 w-20">
                <LogoSVG color="#FFFFFF" />
              </div>
              <div className="mt-10 flex flex-col">
                <p translate="no" className="font-logo text-4xl font-semibold text-white">
                  The
                </p>
                <p translate="no" className="-mt-2 font-logo text-4xl font-semibold text-white">
                  JanitorCart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
