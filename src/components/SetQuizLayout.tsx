import GameImg from "../assets/game.png";

type Layout_Props = {
  children: JSX.Element
}

export default function SetQuizLayout(props: Layout_Props) {
  const { children } = props;
  return (
    <main className="w-full">
      <div className="flex justify-center items-center mt-12">
        <img src={GameImg} alt="game-image" className="w-16 mr-2" />
        <h1 className="font-erica-one text-6xl font-extrabold">TRIVIA</h1>
      </div>
      {children}
    </main>
  );
}