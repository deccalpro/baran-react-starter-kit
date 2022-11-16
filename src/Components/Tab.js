function Tab({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

Tab.Panel = function({ children, title }) {
  return(
    <div>{children} {title}</div>
  )
}

export default Tab