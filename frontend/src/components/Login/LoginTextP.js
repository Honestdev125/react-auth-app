const LoginTextP = ({text}) => {
  return (
    <p className={text === 'Forgot password?' ? "text-lg font-normal leading-7 underline" : " text-base md:text-lg font-normal leading-7"}>
      { text }
    </p>
    )
}

export default LoginTextP
