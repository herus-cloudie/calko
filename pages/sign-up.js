import Layout from '@/components/layout/Layout'
import Link from 'next/link';
import React, { useState } from 'react'

const SignIn = () => {

    const [state , setState] = useState({
        email : '',
        name : '',
        password : '',
        secondPassword : '',
        Err : ''
    });

    const changeHandler = (e) => setState({...state , [e.target.name] : e.target.value});

    const submitHandler = async () => {
        if(state.password !== state.secondPassword) return setState({...state , Err : 'رمزهای عبور همخوانی ندارند'})
        const sendReq = await fetch(`http://185.243.48.181:8093/api/v1/register` , {
            method : 'POST',
            body : JSON.stringify({name : state.name , email : state.email , password : state.password}),
            headers : {"Content-type": "application/json"}
        })
        const data = await sendReq.json();
        if(data.errors) setState({...state , Err : data.errors})
        else setState({...state , Err : ''})
        console.log(data)
    };
    console.log(state.Err)
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
                          <input dir='ltr'  type="input" onChange={changeHandler} value={state.name} name='name' class="form__field" placeholder="نام کاربری" required=""/>
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
                          <input dir='ltr'  type="input" onChange={changeHandler} value={state.secondPassword} name='secondPassword' class="form__field" placeholder="رمز عبور" required=""/>
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
