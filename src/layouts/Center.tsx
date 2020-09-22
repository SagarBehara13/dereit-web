import Styled from 'styled-components'

type CenterOptions = {
  height: string | '100%' | '100vh' | 'auto'
  width: string | '100%' | '100vw' | 'auto'
}

const Content = Styled.div(
  (
    props: CenterOptions = {
      height: 'auto',
      width: 'auto',
    }
  ) => `
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: ${props.width};
  height: ${props.height};
`
)

export default Content
