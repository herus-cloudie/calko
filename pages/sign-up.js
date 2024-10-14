import Layout from '@/components/layout/Layout'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const SignIn = () => {
    const router = useRouter()
    const [state , setState] = useState({
        email : '',
        userName : '',
        password : '',
        password_confirmation : '',
        Err : ''
    });

    const changeHandler = (e) => setState({...state , [e.target.name] : e.target.value});

    const submitHandler = async () => {
        
        const sendReq = await fetch(`http://185.243.48.181:8093/api/v1/register` , {
            method : 'POST',
            body : JSON.stringify({name : state.userName , email : state.email , password : state.password , password_confirmation : state.password_confirmation}),
            headers : {"Content-type": "application/json"}
        })
        const Data = await sendReq.json();

        if(Data.errors) setState({...state , Err : Data.errors})
        else {
            setState({...state , Err : ''})
            document.cookie = `${Data.data.access_token}; SameSite=None; Secure`
            router.push('/')
        }
    };
  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={'ایجاد حساب کاربری'}>
          <section>
            <div className='flex justify-center' style={{alignItems : 'center'}}>
                <div className='sign-in-form'>
                    <h4>ایجاد حساب کاربری</h4>
                    
                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input dir='ltr'  type="input" onChange={changeHandler} value={state.email} name='email' class="form__field" placeholder="ایمیل" required=""/>
                          <label for="name" class="form__label">ایمیل</label>
                      </div>
                    </div>
                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input dir='ltr'  type="input" onChange={changeHandler} value={state.userName} name='userName' class="form__field" placeholder="نام کاربری" required=""/>
                          <label for="name" class="form__label">نام کاربری</label>
                      </div>
                    </div>
                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input dir='ltr'  type="input" onChange={changeHandler} value={state.password} name='password' class="form__field" placeholder="رمز عبور" required=""/>
                          <label for="name" class="form__label">رمزعبور</label>
                      </div>
                    </div>
                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input dir='ltr'  type="input" onChange={changeHandler} value={state.password_confirmation} name='password_confirmation' class="form__field" placeholder="رمز عبور" required=""/>
                          <label for="name" class="form__label"> تکرار رمزعبور</label>
                      </div>
                    </div>
                    <div style={{fontSize : '12px'}}>
                      <Link style={{color : 'blue'}} href="/sign-in"> ورود </Link> <span> حساب کاربری دارید؟  </span>
                    </div>
                    <div style={{display : 'flex' , justifyContent : 'center', flexDirection : 'column' , alignItems : 'end'}}>
                       {
                         state.Err.password && state.Err.password.map(item => <p style={{color : 'red'}}>{item}</p>)
                       }
                       {
                         state.Err.email && state.Err.email.map(item => <p style={{color : 'red'}}>{item}</p>)
                       }
                       {
                         state.Err.name && state.Err.name.map(item => <p style={{color : 'red'}}>{item}</p>)
                       }
                    </div>
                    <button onClick={submitHandler} class="button-p" data-text="Awesome">
                        <span style={{lineHeight : '40px'}} class="actual-text">&nbsp;ایجاد&nbsp;</span>
                        <span style={{lineHeight : '40px'}} aria-hidden="true" class="hover-text">&nbsp;ایجاد &nbsp;</span>
                    </button>
                </div>
            </div>
          </section>
    </Layout>
  )
}

export default SignIn;
