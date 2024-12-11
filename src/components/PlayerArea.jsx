const PlayerArea = ({ number, score, reversed }) => {
  return (
    <>
      <div
        className={`area relative ${reversed ? "rotate-180 transform" : ""}`}
      >
        <div className="playerArea relative flex h-20 w-72 items-center justify-center rounded-lg border-4 border-solid border-main bg-secondary">
          <h1
            className={`text-xl ${reversed ? "rotate-180 transform pl-20" : "pr-20"} font-poppins font-bold`}
          >
            Player {number}
          </h1>

          <div
            className={`circle-overlay absolute right-[-20px] top-[50%] flex h-28 w-28 translate-y-[-50%] items-center justify-center rounded-full border-4 border-solid border-main bg-secondary`}
          >
            <h1
              className={`text-3xl ${reversed ? "rotate-180 transform" : ""} font-poppins font-bold`}
            >
              {score}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerArea;
