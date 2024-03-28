import { useEffect, useState } from 'react'

interface ActionsKeyboard {
  [keyof: string]: string

  KeyW: string
  KeyS: string
  KeyA: string
  KeyD: string
  Space: string
  Shift: string
}

const ACTIONS_KEYBOARD_MAP: ActionsKeyboard = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  Shift: 'spring',
}

export function useKeyBoard() {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        // if (actions[action]) return
        setActions(prevActions => ({
          ...prevActions,
          [action]: true,
        }))
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        // if (!actions[action]) return
        setActions(prevActions => ({
          ...prevActions,
          [action]: false,
        }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actions
}
