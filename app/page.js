import Homepage from './components/Homepage/Homepage';

export const metadata = {
  title: 'Top 5 Espresso Machines for Home – 2025',
  description: 'Discover affordable espresso machines that deliver café-quality shots without the café price.',
}

export default function Home() {
    return <Homepage className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"/>;
}