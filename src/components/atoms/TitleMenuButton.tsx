import { PropsWithChildren, useMemo } from "react";
import { Link } from "react-router-dom";
import { audio } from "utils/AudioManager";
import ClickSFX from "../../assets/sfx/button.wav"

type Props = {
  [key: string]: any;
}

const TitleMenuButton = ({
  onClick,
  to,
  attention,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const Attention = () => <span> !</span>

  const className = useMemo(()=>
    ["menu-item", attention ? "attention" : "", props.className ?? ""]
      .filter(Boolean).join(" "),
    [attention, props.className]
  )

  const action = () => {
    audio.playSE(ClickSFX)
    onClick?.()
  }

  if (to) {
    return (
      <Link {...props} to={to} className={className} onClick={action}>
        {children}
        {attention && <Attention />}
      </Link>
    )
  } else {
    return (
      <button {...props} className={className} onClick={action}>
        {children}
        {attention && <Attention />}
      </button>
    )
  }
}

export default TitleMenuButton