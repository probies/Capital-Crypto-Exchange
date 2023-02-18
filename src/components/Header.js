export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 px-2 bg-white z-50 shadow-md">
        <div className="container">
          <div
            className={`flex justify-between text-3xl font-extrabold tracking-wide items-center h-16 text-blue-500`}
          >
            Capital Crypto Exchange
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
