import React, { FormEvent, useState } from 'react';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  //bu Const'lar bizim state'lerimiz.
  const [isVisibleForm, setIsVisibleForm] = React.useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [surname, setSurName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [isimler, setIsımler] = useState<string[]>([]);
  

  //checkbox kontrolü için. Yukarıda default olarak false verdik. burada o default değeri değiştiriyoruz. true ise false yap false ise true yap.
  const handleCheck = () => {
    setIsVisibleForm(!isVisibleForm);
  };
  //Checkbox komponentimiz
  const checkbox = <input type="checkbox" id="checkbox" onChange={handleCheck} />;


  const handleSubmit = (e: FormEvent) => {
    //preventDefault kullanmamızın sebebi butona tıklayınca sanki başka bir siteye gitmek istiyor gibi davrandığından bunu engellemek için kullandık.
    e.preventDefault();

    if (!name.trim() || !surname.trim()) {
      alert("İsim ve soyisim boş olamaz!");

      return;
    }

    const isim = name + ' ' + surname;
    //setIsimler arrayımız. bu metod çalıştığı zaman textboxlarımızdaki anlık değerleri bu listeye koyuyoruz.
    setIsımler((isimler) => [...isimler, isim]);
    //butona tıklayıp isim soyisim listeye eklendikten sonra textboxları boşaltıyoruz
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setSurName('');
    setMail('')
    setAge('')
  };

  return (
    <div className='App'>
      <label htmlFor="checkbox">Sözleime Koşullarını Kabul Et</label>
      {checkbox}
      {isVisibleForm && <MyForm
      //burada formun içindeki props'lara burada elde ettiğimiz name surname mail age ve bunların state'lerinin değerlerini gönderiyoruz.
        name={name}
        surname={surname}
        mail={mail}
        age = {age}
        onSubmit={handleSubmit}
        //burada da  state'deki veriyi myform'daki proplara state'deki verileri koyuyoruz
        onChangeName={(value: string) => setName(value)}
        onChangeSurname={(value: string) => setSurName(value)}
        onChangeMail={(value: string) => setMail(value)}
        onChangeAge={(value: string) => setAge(value)}
      />}
      {/* Burada isimlere arrayine eklenilen verileri p tagı içine maplaip ve key unique değer de istediği için indexisin key keye veriyoruz */}
      {isVisibleForm && <div>
        <h3>Liste:</h3>
        
        {isimler.map((isim: string, index: number) => (
          <p key={index}>{isim}</p>
        ))}
      </div>}
    </div>
    
  );
  
}

export default App;
