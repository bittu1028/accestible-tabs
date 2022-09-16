import styled from 'styled-components'

interface ITabLink {
    isActive: boolean;
}

const TabNav = styled.ul`
    display: 'flex',
    gap: '1px',
    listStyleType: 'none',
    margin: '0 0 1px'
`
  
  const TabItem = styled.li`
    flex: '1 0 auto',
    margin: 0
  `
  
  // 1. Stretch the link to fill its parent
  const TabLink = styled.a`
    backgroundColor: ${(props:ITabLink) => props.isActive ? 'var(--gray-light)' : 'var(--gray-lightest)' }
    display: 'flex',
    flexGrow: 1 /* 1 */,
    padding: '10px 15px',
    textTransform: 'uppercase'
  `
  
  const Tab = styled.div`
    backgroundColor: 'var(--gray-light)',
    marginBottom: '1px',
    minHeight: '400px',
    padding: '15px',
    display: ${(props:ITabLink) => props.isActive ? 'none' : undefined }
  `