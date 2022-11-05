import React from 'react'
interface Props {
    value: string;
    placeholder?: string;

        //React'te bir öğenin onChange olayını yazmak için türünü React.ChangeEvent<HTMLInputElement> olarak ayarladık . 
        //Türün , öğeye atıfta ChangeEvent bulunan bir özelliği vardır. targetElemanın değerine event.target.value şeklinde  erişilebilir .
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const TextBox: React.FC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
    />
  );
}

export default TextBox;