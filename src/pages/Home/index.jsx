import { Link } from 'react-router-dom'
import './index.css'

export const Home = () => {
  return (
    <div className="wrapperInfo">
      <h1>
        <Link to={'/signin'} className="redColor">
          Авторизуйтесь
        </Link>
        , чтобы отобразить список продуктов
      </h1>
      <h1>
        <Link to={'/signup'} className="redColor">
          Пройдите регистрацию
        </Link>
        , если вы не зарегистрированы
      </h1>
    </div>
  )
}
