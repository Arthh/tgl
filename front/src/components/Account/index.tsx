import React from 'react';


import { Button, LogInButton, TitleOfForm } from './styles';
import arrowRightYellow from '../../assets/icons/arrow-right(yellow).svg';

import { IUserProps } from '../../@types/User';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

interface IAuthProps {
  clickHandler: (event: any) => (IUserProps);
}

const AccountForm: React.FC<IAuthProps> = ({ clickHandler }) => {
  const handleSubmit = (event: any) => {
   console.log('oi');
  }

  return (
    <>
    <TitleOfForm>Account</TitleOfForm>
    <Form onSubmit={handleSubmit}>
      <Input name="name" placeholder="name" required/>
      <Input name="email" placeholder="Email" required />
      <Input name="password" placeholder="Password" type="password" required/>
      <LogInButton>
        <Button inputColor="#B5C401">
          Update
          <img src={arrowRightYellow} alt="" />
        </Button>
      </LogInButton>
    </Form>
    </>
  );
};

export default AccountForm;