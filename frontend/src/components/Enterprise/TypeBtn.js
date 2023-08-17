const TypeBtn = ({ text }) => {
  return (
    <div className="py-5 px-6 bg-white rounded-[20px] w-full md:w-[357px] mb-[25px] md:mb-0">
      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.1588 22.6768L33.9057 5.39255L35.9846 7.28659L18.3029 26.6942L8.66382 17.5311L10.6018 15.4926L18.1588 22.6768ZM34.8926 12.6155L32.6994 15.0303C33.0178 16.2528 33.1875 17.5346 33.1875 18.8555C33.1875 27.2298 26.3743 34.043 18 34.043C9.62567 34.043 2.8125 27.2298 2.8125 18.8555C2.8125 10.4811 9.62567 3.66797 18 3.66797C21.8795 3.66797 25.4232 5.1308 28.1107 7.53296L30.0067 5.44528C26.7014 2.4787 22.4756 0.855469 18 0.855469C13.1921 0.855469 8.67178 2.72781 5.27206 6.12753C1.87234 9.52725 0 14.0476 0 18.8555C0 23.6634 1.87234 28.1837 5.27206 31.5834C8.67178 34.9831 13.1921 36.8555 18 36.8555C22.8079 36.8555 27.3282 34.9831 30.7279 31.5834C34.1277 28.1837 36 23.6634 36 18.8555C36 16.6917 35.6196 14.5867 34.8926 12.6155Z" fill="#8748FF" />
      </svg>
      <span>{ text }</span>
    </div>
  )
}

export default TypeBtn
