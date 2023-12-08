import StartNow from '../Buttons/StartNow'
import Whatsapp from '../Buttons/Whatsapp'

export default function CallToActionButtons({size}) {
  

  return (
    <div>
      <StartNow size={ size ?? null }/>
      <Whatsapp size={ size ?? null }/>
    </div>
  )
}
