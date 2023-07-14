import Button from '@/componets/button'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
    <div className='grid grid-cols-5 bg-[#f5f5f5]'>
      <div className='hidden lg:col-span-2 lg:flex bg-black text-white h-[100vh] justify-center items-center'>
        <h1 className='h-fit text-5xl'>Board.</h1>

      </div>

      <div className='col-span-5 lg:col-span-3'>

        <div className='grid grid-cols-8 h-[100vh]'>
          <div className='col-span-full lg:col-start-3 lg:col-span-4 flex flex-col m-10 lg:m-6 p-2 justify-center items-start'>
    
            <div className='my-2'>
              <h1 className="pl-3 mb-1">Sign In</h1>
              <h5 className='pl-3 text-sm '>Sign in to your account</h5>
            </div>
              <div className='flex flex-row justify-between w-full '>
                <Button text="Sign in with Google"></Button>
                <Button text="Sign in with Apple"></Button>
              </div>
    
              <div className='flex flex-col mx-1 m-2 py-8 px-4 bg-gray-100 w-full card'>
                  <label className='px-2 font-semibold '>Username</label>
                  <input className='m-2 px-2 bg-[#f5f5f5] rounded-lg h-10' type='text'></input>
                  <label className='px-2 font-semibold '>Password</label>
                  <input className='m-2 px-2 bg-[#f5f5f5] focus:bg-[#eaeaea] h-10 rounded-lg' type='password'></input>
                  <Link className='mx-4 font-light text-blue-400' href='#'>
                    forgot password ??
                  </Link>
                  <button className='bg-black mx-1 mt-3 h-10 text-white font-semibold'>
                    Sign In
                  </button>
              </div>
              <div className='flex justify-center items-center'>
                <h5 className='px-6 text-[#858585]'>Don't have an account? <Link href='#'><span className='text-blue-700'>Register here</span></Link></h5>
              </div>
    
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
