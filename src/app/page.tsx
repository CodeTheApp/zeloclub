import Countdown from './components/countdown';
import Logo from './components/logo';

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center p-8 gap-14 md:p-24'>
        <Logo />
        <Countdown date='2023-06-01T15:00:00' />
      </main>
    </>
  );
}
