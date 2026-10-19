import {useState} from 'react'
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import {currentUser, read, digest} from '../lib/auth'
import Brand from './Brand'
import Icon from './Icon'
function Field({label, name, type='text', ...props}) {
 const [show, setShow] = useState(false)
 return <div><label htmlFor={name} className="mb-2 block text-xs font-semibold text-stone-700">{label}</label><div className="relative"><span className="pointer-events-none absolute left-4 top-3.5 text-stone-400"><Icon name={type==='password'?'lock':type==='email'?'mail':'user'} className="size-4"/></span><input id={name} name={name} type={type==='password' && show ? 'text' : type} className="form-input" required {...props}/>{type==='password' && <button type="button" aria-label={show?'Hide password':'Show password'} aria-pressed={show} onClick={()=>setShow(!show)} className="absolute right-3 top-3 rounded p-1 text-stone-400 hover:text-violet-600"><Icon name="eye" className="size-4"/></button>}</div></div>
}
export default function AuthPage({register=false}) {
 const navigate=useNavigate(), location=useLocation()
 const [year]=useState(()=>new Date().getFullYear())
 const [error,setError]=useState(''), [busy,setBusy]=useState(false)
 if(currentUser()) return <Navigate to="/home" replace/>
 async function submit(event){
  event.preventDefault();setError('')
  const data=new FormData(event.currentTarget), email=data.get('email').trim().toLowerCase(), password=data.get('password')
  const name=register?data.get('name').trim():''
  if(register && name.length<2) return setError('Please enter a name with at least 2 characters.')
  if(register && password!==data.get('confirm')) return setError('Your passwords do not match.')
  setBusy(true)
  try {
   const stored=read('firstregister',[]), accounts=Array.isArray(stored)?stored:[]
   const account=accounts.find(item=>item.email?.toLowerCase()===email)
   if(register){
    if(account){setError('This email is already registered. Please log in.');return}
    const salt=crypto.randomUUID(), passwordHash=await digest(password,salt)
    localStorage.setItem('firstregister',JSON.stringify([...accounts,{userid:Date.now(),name,email,salt,passwordHash}]))
    navigate('/login',{replace:true,state:{registered:true}})
   } else {
    const valid=account && (account.passwordHash ? await digest(password,account.salt)===account.passwordHash : account.password===password)
    if(!valid){setError('The email or password is incorrect. Please try again.');return}
    localStorage.setItem('isActive',JSON.stringify({userid:account.userid,name:account.name,email:account.email}))
    navigate('/home',{replace:true})
   }
  } catch {setError('Unable to save your session. Check that browser storage is enabled.')} finally {setBusy(false)}
 }
 return <div className="min-h-screen bg-[#f0efeb] p-4 sm:p-7 lg:p-10"><div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl overflow-hidden rounded-[28px] border border-white bg-white shadow-xl shadow-stone-200/40 lg:grid-cols-2">
 <aside className="auth-art relative flex flex-col overflow-hidden p-8 text-white sm:p-12 lg:p-14"><Link to="/" className="relative z-10 w-fit" aria-label="Orbit home"><Brand/></Link><div className="relative z-10 my-auto py-12"><span className="eyebrow text-violet-200">YOUR SPACE TO DO MORE</span><h1 className="mt-5 text-4xl font-semibold leading-[1.13] tracking-tight sm:text-5xl lg:text-[56px]">Big ideas.<br/>Fresh starts.<br/><span className="text-lime-200">All in your orbit.</span></h1><p className="mt-6 max-w-xs text-sm leading-7 text-violet-200">A little more focus. A lot more possibility. Make room for what matters to you.</p><div className="orbit-art mx-auto mt-10 hidden h-48 w-72 sm:block" aria-hidden="true"><div className="orbit-ring one"/><div className="orbit-ring two"/><div className="orbit-core">?</div><span className="orbit-dot"/><div className="floating-card"><span className="flex size-8 items-center justify-center rounded-full bg-lime-200 text-violet-900"><Icon name="check"/></span><div><strong className="block text-xs text-stone-800">A fresh start</strong><span className="text-[10px] text-stone-500">Great things begin here</span></div></div></div></div><div className="relative flex items-center gap-3 text-xs text-violet-200"><span className="flex -space-x-2">{['J','A','M'].map((x,i)=><span key={x} className={`flex size-8 items-center justify-center rounded-full border-2 border-[#34215e] font-semibold ${['bg-orange-200 text-orange-900','bg-lime-200 text-lime-900','bg-violet-200 text-violet-900'][i]}`}>{x}</span>)}</span><span>Good things begin with a fresh start.</span></div></aside>
 <main className="flex flex-col px-6 py-8 sm:px-14 lg:px-16 xl:px-20"><div className="text-right text-xs text-stone-500">{register?'Already have an account?':'New around here?'} <Link className="ml-1 font-semibold text-violet-700 hover:underline" to={register?'/login':'/register'}>{register?'Log in':'Create an account'} ?</Link></div><div className="my-auto py-12"><span className="eyebrow text-violet-600">{register?'LET?S GET YOU STARTED':'WELCOME BACK'}</span><h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">{register?'Your next chapter starts here.':'Right where you belong.'}</h2><p className="mb-7 mt-3 text-sm leading-6 text-stone-500">{register?'Create an account. Make a little space for yourself.':'Log in to your space and pick up where you left off.'}</p>
 {!register && location.state?.registered && <p role="status" className="mb-5 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">Your account is ready! Log in to get started.</p>}
 <form onSubmit={submit} className="space-y-5">{register && <Field label="Full name" name="name" placeholder="e.g. Alex Morgan" autoComplete="name" minLength={2} maxLength={70}/>}<Field label="Email address" name="email" type="email" placeholder="you@example.com" autoComplete="email"/><Field label="Password" name="password" type="password" placeholder={register?'At least 8 characters':'Enter your password'} autoComplete={register?'new-password':'current-password'} minLength={register?8:undefined}/>{register && <Field label="Confirm password" name="confirm" type="password" placeholder="Enter your password again" autoComplete="new-password" minLength={8}/>}{error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}<button disabled={busy} className="primary-button w-full">{busy?'Please wait?':register?'Create account':'Log in'}<Icon name="arrow"/></button></form>
 <p className="mt-7 text-center text-xs text-stone-500">{register?'Already part of Orbit?':'A fresh start awaits.'} <Link to={register?'/login':'/register'} className="font-semibold text-violet-700 hover:underline">{register?'Log in':'Join Orbit'}</Link></p><p className="mt-8 border-t border-stone-100 pt-5 text-center text-[11px] leading-5 text-stone-400">Learning demo ? Accounts are saved in this browser.</p></div><p className="text-center text-[11px] text-stone-400">? {year} Orbit. A little space for your next big thing.</p></main></div></div>
}
