function Tab({ children, activeTab, setActiveTab }) {
  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
          onClick={() => setActiveTab(index)}
          className={activeTab === index ? 'bg-green-600' : 'bg-red-600'}
          key={index}>
            {tab.props.title}
            </button>
        ))}
      </nav>
      {children[activeTab]}
    </div>
  )
}

Tab.Panel = function({ children, title }) {
  return(
    <div>{children}</div>
  )
}

export default Tab