import {Navigate, Outlet, useLocation} from 'react-router-dom'
import NavBar from '../components/NavBar'
import {currentUser} from '../lib/auth'
export default function Layout(){
 const user=currentUser(), location=useLocation()
 if(!user) return <Navigate to="/login" replace/>
 return <div className="min-h-screen bg-[#f8f9fc] lg:pl-64"><NavBar user={user}/><header className="flex h-20 items-center justify-between gap-4 border-b border-stone-200/70 bg-white px-6 sm:px-10"><div className="text-xs text-stone-400">Your workspace <span className="mx-2">/</span><span className="font-medium text-stone-700">{location.pathname==='/profile'?'My profile':'Overview'}</span></div><span className="flex items-center gap-2 text-xs text-stone-500"><span className="size-1.5 rounded-full bg-emerald-500"/>Logged in</span></header><main className="mx-auto max-w-7xl p-6 sm:p-10"><Outlet context={{user}}/></main></div>
}
