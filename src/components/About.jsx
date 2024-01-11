const About = () => {
  return (
    <section className="flex justify-center font-mont ">
      <article className="bg-grey flex w-3/5 justify-center gap-x-6">
        <img
          src="src/assets/Photo floutée.jpeg"
          alt=""
          className="border-lightGrey w-1/4 border-4 border-double object-cover "
        />
        <div className="flex h-full flex-col">
          <div className="border-1 border-lightGrey flex flex-col border-b border-solid">
            <p className=" mb-2 text-lg font-semibold">Hello,</p>
            <p className="mb-4 font-semibold">
              I AM A FULL STACK JUNIOR DEVELOPER
            </p>
            <p className="mb-4">
              Lorem, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aperiam quia quisquam sit rerum voluptatem. Numquam quia corporis
              eveniet, mollitia, veniam asperiores placeat enim quo fugit
              reprehenderit aperiam veritatis maiores cupiditate.ipsum dolor sit
              amet consectetur adipisicing elit. Sit, cupiditate?
            </p>
          </div>
          <div>Hello</div>
        </div>
      </article>
    </section>
  );
};

export default About;
