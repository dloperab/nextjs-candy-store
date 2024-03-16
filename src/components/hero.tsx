
export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:mb-12">
      <div className="md:w-1/2">
        <div className="text-4xl xl:text-5xl leading-normal py-8 font-fredoka">
          Welcome to <br />
          The <span className="text-orange-300">Candy</span> Store
        </div>
        <div className="text-xl">
          Shop artisan candy, gourmet dark chocolates, milk chocolates and white chocolates, and candy gifts
        </div>
        <div>
          <a>
            <div className="text-black mt-9 inline-flex bg-white p-4 rounded-full font-bold px-7">
              Shop now
            </div>
          </a>
        </div>
      </div>
      <div className="flex md:w-1/2 align-middle justify-center pt-10">
        <img className="w-56 md:w-72 xl:w-80" src="./lollipop.png" alt="lollipop" />
      </div>
    </div>
  )
}
