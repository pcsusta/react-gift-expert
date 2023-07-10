import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => { // Se desestructura para usar el objeto "image" que venía en las propiedades
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}