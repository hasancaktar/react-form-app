import { useEffect, useState } from "react";
import TextBox from "./TextBox";
import React from 'react'

//propertilerimizi tanımladık. 
interface Props {
    //formdaki değişiklikleri tutmak için onsubmit metodunun türünü FormEventHandler oalrak ayarladık.
    onSubmit?: React.FormEventHandler | undefined;
    onChangeName: (value: string) => void;
    onChangeSurname: (value: string) => void;
    onChangeMail: (value: string) => void;
    onChangeAge: (value: string) => void;
    name: string;
    surname: string;
    mail : string;
    age: string;
}
//MyForm Componentimiz.burada bizim formuzum ve props ları mevcut. app.tsx den gönderdiğimiz değerleri burada tutuyoruz. gelen değerleri allta oluşturduğumuz const'lara yerleştiriyoruz.
const MyForm: React.FunctionComponent<Props> = ({ onSubmit, onChangeName, onChangeSurname, onChangeMail,onChangeAge, name, surname, mail, age }) => {
    const [nameValue, setName] = useState<string>(name);
    const [surNameValue, setSurName] = useState<string>(surname);
    const [mailValue, setMail] = useState<string>(mail);
    const [ageValue, setAge] = useState<string>(age);

//Uygulamanın ayaga kalkma asamasinda, uygulamanin bagimli oldugu yan islemleri cagirmak icin kullandigimiz bir yontem. kendisine verecegimiz iki parametreye dayaniyor. Bunlardan ilki, gerceklestirmesini istedigimiz islemleri iceren fonksiyon, ikincisi ise soz konusu fonksiyonun hangi durumlarda calisip hangi durumlarda calismayacagini belirtebilecegimiz bir array degeri. https://erdemuslu.medium.com/useeffect-kullanimi-uzerine-30328ac22742 
    useEffect(() => {
        setName(name);
        setSurName(surname);
        setMail(mail);
        setAge(age);
    }, [name, surname, age,mail]);

    //bu metodlar sayesinde textboxlara gelen değerleri onchange ile texboxdaki gibi e.target.value ile ulaşabiliyoruz
    const handleName = (value: string) => {
        setName(value);//state''deki veri
        onChangeName(value);
    };

    const handleSurname = (value: string) => {
        setSurName(value);
        onChangeSurname(value);
    };
    const handleMail = (value: string) => {
        setMail(value);
        onChangeMail(value);

    };const handleAge = (value: string) => {
        setAge(value);
        onChangeAge(value);
    };
    return (
        //formun onSupmit property'sine  bizim yazdığımız onSumit metodunu koyuyurz Bunu da app.tsx de MyForm u kullanırken listeyi yazdırmamızı sağlıyor. 
        //listeyi de texxtboxların value'lerini değişkenklerine atayıp sonra bu değişkenleri listeye ekledikten sonra gönderiyoruz.
        <form onSubmit={onSubmit}>
            <TextBox
                placeholder='İsim girin'
                onChange={(e) => handleName(e.target.value)}
                value={nameValue}
            />
            <TextBox
                placeholder='Soyisim girin'
                onChange={(e) => handleSurname(e.target.value)}
                value={surNameValue}
            />
            <br />
            <TextBox
                placeholder='Mail girin'
                onChange={(e)=>handleMail(e.target.value)}
                value={mailValue}
            />
             <TextBox
                placeholder='Yaş girin'
                onChange={(e)=>handleAge(e.target.value)}
                value={ageValue}
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default MyForm;