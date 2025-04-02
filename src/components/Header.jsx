
const Header = ({ user, extraInfo }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <div>
        <p className="font-bold">{user}</p>
        <p>{new Date().toLocaleString()}</p>
      </div>
      <div>
        {extraInfo}
      </div>
    </header>
  )
}

export default Header
