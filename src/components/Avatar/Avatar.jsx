import styles from './avatar.module.css';
const Avatar = (props) => {
    return (
        <img width={500} height={600} src={props.path} alt=""/>
            // props.hidden === true ? <h1>Картинка скрыиа</h1> : <img width={500} height={600} src={props.path} alt="" />;
        
    );
}


export default Avatar;