import { Link } from "react-router-dom"
import styles from "../styles/button.module.scss"
import { audio } from "utils/AudioManager"
import ClickSFX from "../../assets/sfx/button.wav"
import { PropsWithChildren } from "react"

interface PropsButton {
	onClick: ()=>void
}
interface PropsLink {
	to: string
}

type Props = {
	className?: string
	[key: string]: any
} & (PropsButton | PropsLink)

/**
 * A button or Link already styled
 */
const MenuButton = ({children, onClick, to, className, ...props}: PropsWithChildren<Props>) => {
	const action = () => {
    audio.playSE(ClickSFX)
    onClick?.()
  }
	
	const button = onClick ? (
		<button
			onClick={action}
			className={`${styles.menuBtn} menu-btn ${className || ""}`}
			{...props}>
			{children}
		</button>
	) : (
		<Link
			to={to}
			onClick={action}
			className={`${styles.menuBtn} menu-btn ${className || ""}`}
			{...props}>
			{children}
		</Link>
	)
	return button
}

export default MenuButton