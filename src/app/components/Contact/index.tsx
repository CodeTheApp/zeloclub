'use client';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import OptionGroup from '../OptionGroup';
import Button from '../UI/Button';
import { useState } from 'react';
import { MailTypes } from '@zeloclub/app/types/apiTypes';
import {
  formatName,
  phoneNumberFlatFormat,
} from '@zeloclub/app/helpers/formatters';
import { POST } from '@zeloclub/app/api/signup';
import Input from '../UI/Input';
import PhoneInput from '../PhoneInput';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [clientType, setClientType] = useState<MailTypes['type']>();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('full-name') as string;

    const payload: MailTypes = {
      name: formatName(name),
      email: data.get('email') as string,
      type: clientType as MailTypes['type'],
    };

    const phone = data.get('phone-number') as string;

    if (phone) {
      payload.phone = `+55${phoneNumberFlatFormat(phone)}`;
    }

    const res = await POST(payload);

    if (res.ok) {
      toast.success('Cadastro realizado com sucesso!', {
        position: 'bottom-right',
        style: {
          backgroundColor: '#62e4bb',
        },
      });
      setIsLoading(false);
      form.reset();
    } else {
      toast.error('Erro ao realizar cadastro!', {
        position: 'bottom-right',
        style: {
          backgroundColor: '#fcbeb3',
        },
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className='relative isolate bg-white' id='contact'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
          <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
              <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gradient-to-l from-white to-[#abedd86d] lg:w-1/2'>
                <svg
                  className='absolute inset-0 h-full object-cover opacity-10'
                  aria-hidden='true'
                  width='1728'
                  height='1117'
                  viewBox='0 0 1728 1117'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='867.996'
                    y='856.414'
                    width='1891.82'
                    height='1891.82'
                    transform='rotate(45.1709 867.996 856.414)'
                    stroke='#2A2A2Ae7'
                    strokeWidth='2'
                  />
                  <rect
                    x='868.119'
                    y='414.414'
                    width='1891.82'
                    height='1891.82'
                    transform='rotate(45.1709 868.119 414.414)'
                    stroke='#2A2A2Ae7'
                    strokeWidth='2'
                  />
                  <rect
                    x='868.119'
                    y='-27.5858'
                    width='1891.82'
                    height='1891.82'
                    transform='rotate(45.1709 868.119 -27.5858)'
                    stroke='#2A2A2Ae7'
                    strokeWidth='2'
                  />
                  <rect
                    x='867.996'
                    y='-469.586'
                    width='1891.82'
                    height='1891.82'
                    transform='rotate(45.1709 867.996 -469.586)'
                    stroke='#2A2A2Ae7'
                    strokeWidth='2'
                  />
                </svg>
              </div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                Cadastre-se na lista de interesse
              </h2>
              <p className='mt-6 text-lg leading-6 text-gray-600'>
                Se você é um cuidador dedicado e experiente, gostaríamos de
                conhecê-lo. Preencha o formulário ao lado para se cadastrar em
                nossa plataforma e começar a fazer a diferença na vida dos
                idosos.
                <br />
                <br />
                Se você está em busca de cuidadores qualificados para seus entes
                queridos, você está no lugar certo.Preencha o formulário ao lado
                para que possamos entender melhor suas necessidades e ajudá-lo a
                encontrar o cuidador perfeito para sua família.
              </p>
              <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>E-mail</span>
                    <EnvelopeIcon
                      className='h-7 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    <a
                      className='hover:text-gray-900'
                      href='mailto:contato@zeloclub.com.br'
                    >
                      contato@zeloclub.com.br
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            method='POST'
            className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
          >
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='full-name'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Nome completo
                  </label>
                  <div className='mt-2.5'>
                    <Input
                      type='text'
                      id='full-name'
                      name='full-name'
                      autoComplete='given-name'
                      required
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    E-mail
                  </label>
                  <div className='mt-2.5'>
                    <Input
                      type='email'
                      id='email'
                      name='email'
                      autoComplete='email'
                      required
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='phone-number'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Telefone
                  </label>
                  <div className='mt-2.5'>
                    <PhoneInput />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='client-type'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Grupo de interesse
                  </label>

                  <OptionGroup callback={(x) => setClientType(x)} />
                </div>
              </div>
              <div className='mt-8 flex justify-end'>
                <Button disabled={isLoading} type='submit'>
                  Registrar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
