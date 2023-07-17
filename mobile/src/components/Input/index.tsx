// Native
import React, { useCallback, useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'
// Styles
import { Container } from './styles'

type Props = TextInputProps & {
  borderColor: string
  errorMessage?: string | null
  isPassword?: boolean
  inputRef?: React.RefObject<any>
}

export function Input({
  borderColor,
  errorMessage = null,
  isPassword,
  inputRef,
  ...rest
}: Props) {
  const invalid = !!errorMessage
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const secureTextEntry = isPassword && !showPassword
  const { colors } = useTheme()

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container
      isFocused={isFocused}
      isInvalid={invalid}
      placeholderTextColor={colors.green_700}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      secureTextEntry={secureTextEntry}
      ref={inputRef}
      borderColor={borderColor}
      {...rest}
    />
  )
}
