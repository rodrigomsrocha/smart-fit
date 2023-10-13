import Image from 'next/image'
import logo from '../../public/images/logo.svg'

export function Header() {
  return (
    <header className="w-full bg-black flex items-center justify-center p-8">
      <Image priority src={logo} alt="Smart Fit" />
    </header>
  )
}
