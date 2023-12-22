import PropTypes from 'prop-types';
export const FirtsApp = ({title, subTitle,name}) => {
    //console.log(props);
    
  return (
    <>
        <h1>{title}</h1>
        {/* <h1>{ newMessage}</h1> */}
        <p>{subTitle }</p>
        <p>{name }</p>
    </>

  )
}


FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

FirtsApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Fernando Herrera',
}