// Native
import { TouchableOpacityProps } from 'react-native'
// Styles
import {
  Container,
  EditButtonContainer,
  TrashSvgButtonContainer,
} from './styles'
// Assets
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
