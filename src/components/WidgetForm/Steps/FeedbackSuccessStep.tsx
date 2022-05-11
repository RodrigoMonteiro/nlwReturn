import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}
export function FeedbackSuccessStep({onFeedbackRestartRequested} : FeedbackSuccessStepProps){
    return (
      <>
        <header>
          <CloseButton></CloseButton>
        </header>
        <div className="flex flex-col items-center py-10 w-[304px]">
          <img src="" alt="alt" />
          <span className=" text-xl mt-2">Agradecemos o feedback!</span>
          <button className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 "
          onClick={onFeedbackRestartRequested}
          >
            Quero enviar outro
          </button>
        </div>
      </>
    );
}