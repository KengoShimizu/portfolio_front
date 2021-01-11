import React from 'react';
import Input from './../atoms/Input';
import TextArea from './../atoms/TextArea';
import Button, { ButtonThemes } from './../atoms/Button';
import Text, { TextThemes } from './../atoms/Text';
import CommonStyle from '../../common/CommonStyle';

const Contact: React.FC = () => {
  const section_title = `
    font-size: ${CommonStyle.TextLarge};
    padding: 20px 20px 50px 20px;
    ${window.innerWidth < 768 ? 'display: block;' : 'display: none;'}
  `;

  const disable_submit = () => {
    alert('現在お問い合わせは停止しております。')
  }

  return (
    <>
      <Text 
        theme={[TextThemes.CUSTOM, TextThemes.BOLD]}
        style={section_title}>
        Contact
      </Text>
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
        .padding{
          padding-top: 132px;
        }
        .contact-wrapper{
          margin: 0 auto;
          max-width: 300px;
        }
        /* ipad - pc */
        @media screen and (min-width: 768px) {
          .padding{
            padding-top: 0;
          }
          .contact-wrapper{
            margin: 72px auto 0;
            max-width: 500px;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;