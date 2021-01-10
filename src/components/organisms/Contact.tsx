import React from 'react';
import Input, { InputThemes } from './../atoms/Input';
import TextArea, { TextAreaThemes } from './../atoms/TextArea';
import Button, { ButtonThemes } from './../atoms/Button';

const Contact: React.FC = () => {

  const disable_submit = () => {
    alert('現在お問い合わせは停止しております。')
  }

  return (
    <>
      <div className="contact-wrapper">
        <Input name="subject" label="件名"/>
        <Input name="email" label="メールアドレス"/>
        <TextArea 
          name="main" 
          label="お問い合わせ内容" 
          cols={3} 
          rows={4}
          maxLength={200}
          placeholder=""/>
        <Button 
          theme={[ButtonThemes.DISABLE]} 
          onClick={disable_submit}>
          送信（現在停止中）
        </Button>
      </div>
      <style jsx>{`
        .contact-wrapper{
          margin: 72px auto 0;
          max-width: 500px;
        }
      `}</style>
    </>
  );
}

export default Contact;