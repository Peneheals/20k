const MaterialMenuIcon = ({ size = 24, fill = 'black', ...rest }) => (
  <svg width={size} height={size} {...rest} focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="MenuIcon">
    <path fill={fill} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>    
)

export default MaterialMenuIcon
