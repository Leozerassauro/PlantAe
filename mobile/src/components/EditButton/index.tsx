import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  EditButtonContainer,
  TrashSvgButtonContainer,
} from './styles'

import EditButtonSvg from '@assets/editButton.svg'
import TrashSvg from '@assets/trash.svg'

type Props = TouchableOpacityProps & {
  onEdit?: () => void
  onDelete?: () => void
}

export function EditButton({ onEdit, onDelete, ...rest }: Props) {
  return (
    <Container>
      <EditButtonContainer onPress={onEdit} {...rest}>
        <EditButtonSvg />
      </EditButtonContainer>
      <TrashSvgButtonContainer onPress={onDelete} {...rest}>
        <TrashSvg />
      </TrashSvgButtonContainer>
    </Container>
  )
}
