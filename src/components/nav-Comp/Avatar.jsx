import avatar from "../../assets/profile.jpg";

function Avatar() {
  return (
    <div className=" flex flex-col justify-center mx-auto align-center ">
      <div
        style={{ backgroundImage: `url(${avatar})` }}
        className="group w-40 bg-no-repeat bg-center bg-cover avatar rounded-full lg:rounded-lg mb-8 mt-24 lg:my-4 ring-1 ring-white flex text-center justify-center align-center mx-auto"
      >
        <div className="opacity-0 lg:group-hover:opacity-100 lg:group-hover:cursor-default lg:group-hover:bg-slate-300 lg:group-hover:duration-100 lg:group-hover:rounded-lg lg:ease-linear lg:duration-200">
          <div className="text-2xs pt-4 px-6 ">
            Computer Science Ph.D. Student{" "}
          </div>
          <div className="text-2xs pt-2 px-1">
            University of Southern California
          </div>
          <div className="text-xs pt-8 text-info">
            <a href="/" target="_blank" className="hover:text-warning">
              | (out-dated) CV |
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl tracking-wider text-center text-white cursor-default">
          Ali Omrani
          <div>
            <div className="text-md pt-4 lg:hidden">
              Computer Science Ph.D. Student{" "}
            </div>
            <div className="text-sm pt-2 px-1 lg:hidden">
              University of Southern California
            </div>
            <div className="text-lg pt-4 text-info lg:hidden">
              <a href="/" target="_blank" className="hover:text-warning">
                | (out-dated) CV |
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center text-lg tracking-wide font-bold lg:pt-4 pt-12 lg:pb-2 pb-8 cursor-default">
        Socials
      </div>
    </div>
  );
}
export default Avatar;
