import Button from './Button';

function NotFound() {
  return (
    <section className="flex grow items-center py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-7xl bold">404</h1>
        <p className="mb-5">Oops! The page you're looking for doesn't exist.</p>
        <Button>Go Back Home</Button>
      </div>
    </section>
  );
}

export default NotFound;
