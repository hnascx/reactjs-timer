import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    flex: 1;
    margin-left: 1rem;
    color: white;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 2.5rem;
      height: 2.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['blue-200']};

      &:hover {
        color: ${(props) => props.theme['blue-100']};
        transition: 0.1s;
      }

      &.active {
        color: ${(props) => props.theme['gray-100']};
      }
    }
  }
`
