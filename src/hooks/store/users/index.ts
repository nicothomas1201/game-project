import { useAppDispatch } from '..'
import { deleteUserById } from '../../../store/users'

export function useUserActions() {
  const dispatch = useAppDispatch()

  const removeUser = (id: string) => {
    dispatch(deleteUserById(id))
  }

  return { removeUser }
}
