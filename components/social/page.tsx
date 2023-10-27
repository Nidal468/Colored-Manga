export default function Social() {
    return(
        <div className="Share self-stretch h-[100px] p-[15px] bg-neutral-800 rounded-[5px] shadow flex-col justify-start items-start gap-5 flex">
            <div className="Frame4 self-stretch py-[5px] justify-start items-center gap-2.5 inline-flex">
              <div className="Info w-[15px] h-[15px] relative" />
              <div className="PleaseHelpUsBySharingThisSiteToYourFriends text-white text-[15px] font-light font-['Gilroy'] leading-[15px]">Please help us by sharing this site to your friends</div>
            </div>
            <div className="Frame5 self-stretch justify-end items-center gap-2.5 inline-flex">
              <div className="Frame6 px-5 py-[5px] bg-sky-600 rounded-sm justify-center items-center gap-2.5 flex">
                <div className="Telegram text-white text-sm font-normal font-['SF Pro Text'] leading-[15px]">Telegram</div>
              </div>
              <div className="Frame7 px-5 py-[5px] bg-red-700 rounded-sm justify-center items-center gap-2.5 flex">
                <div className="Reddit text-white text-sm font-normal font-['SF Pro Text'] leading-[15px]">Reddit</div>
              </div>
              <div className="Frame8 px-5 py-[5px] bg-green-700 rounded-sm justify-center items-center gap-2.5 flex">
                <div className="Whatsapp text-white text-sm font-normal font-['SF Pro Text'] leading-[15px]">WhatsApp</div>
              </div>
              <div className="Frame9 px-5 py-[5px] bg-purple-700 rounded-sm justify-center items-center gap-2.5 flex">
                <div className="Discord text-white text-sm font-normal font-['SF Pro Text'] leading-[15px]">Discord</div>
              </div>
              <div className="Frame10 px-5 py-[5px] bg-sky-500 rounded-sm justify-center items-center gap-2.5 flex">
                <div className="Discord text-white text-sm font-normal font-['SF Pro Text'] leading-[15px]">Discord</div>
              </div>
            </div>
          </div>
    )
}