export const commonBoxLayoutProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
}

export const commonTextProps = {
  as: 'p',
  lineHeight: 1.2,
  fontSize: '14px',
  fontWeight: 500,
  color: 'gray.600',
}

export const commonH2Props = {
  fontWeight: 'semibold',
  as: 'h2',
  lineHeight: 'tight',
  size: 'md',
}

export const commonH3Props = {
  as: 'h3',
  size: 'xs',
  color: 'gray.400',
}

export const commonGridProps = {
  columns: [1, 2, 3, 4, 6],
  spacing: 10,
  mt: ['5', '7', '10'],
}

export const commonContainerProps = {
  maxW: ['100%', '90%', '90%', '85%'],
  my: ['5'],
}
