import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme['green-500']};
  }

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.625rem;
    font-weight: bold;
  }
`

export const NewTransitionButton = styled(Dialog.Trigger)`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  height: 3.75rem;
  border: 0;
  padding: 0 1.25rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
