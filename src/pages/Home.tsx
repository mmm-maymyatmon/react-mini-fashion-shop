import Button from '@/components/Button';

function Home() {
  return (
    <section className="flex grow items-center pt-10 bg-gray-100">
      <div className="container mx-auto p-4 md:text-left text-center">
        <h1 className="text-3xl font-bold mb-5">Welcome to Our Fashion Shop</h1>
        <p className="mb-8 text-gray-600">
          This is a simple landing page built with React, TypeScript, and
          Tailwind CSS.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}

export default Home;
