import { Link } from "react-router-dom";
import ElectricBorder from "./ElectricBorder";


interface ElectricButtonProps {
  buttonText: string;
}

export default function ElectricButton( props:ElectricButtonProps)  {
  return (
    <ElectricBorder
      color="#fffb00"
      speed={1}
      chaos={1}
      thickness={6}
      style={{ borderRadius: 'none' }}
    >
      <Link to="/library">
        <button
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '12px 24px',
            borderRadius: 16,
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.buttonText}
        </button>
      </Link>
    </ElectricBorder>
  );
}
