import Layout from '@/components/layout/Layout'
import Link from 'next/link';
import React, { useState } from 'react'

const SignIn = () => {

  const [state , setState] = useState({
    email : '',
    password : '',
  });

  const changeHandler = (e) => setState({...state , [e.target.name] : e.target.value});

  const submitHandler = async () => {
    const sendReq = await fetch('/' , {
      method : 'POST',
      body : JSON.stringify({state}),
      headers : {"Content-type": "application/json"}
    })
    const data = await sendReq.json();
    console.log(data)
  };

  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={'ورود به حساب کاربری'}>
          <section>
            <div className='flex justify-center' style={{alignItems : 'center'}}>
                <div className='sign-in-form'>
                    <h4>ورود به حساب کاربری</h4>
                    
                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input dir='ltr' type="input" onChange={changeHandler} value={state.email} name='email' class="form__field" placeholder="ایمیل" required=""/>
                          <label for="name" class="form__label">ایمیل</label>
                      </div>
                    </div>

                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input dir='ltr' type="input" onChange={changeHandler} value={state.password} name='password' class="form__field" placeholder="رمز عبور" required=""/>
                          <label for="name" class="form__label">رمزعبور</label>
                      </div>
                    </div>
                    <div style={{fontSize : '12px'}}>
                      <Link style={{color : 'blue'}} href="/sign-up"> ساخت اکانت </Link> <span> حساب کاربری ندارید؟  </span>
                    </div>
                    <button onClick={submitHandler} class="button-p" data-text="Awesome">
                        <span style={{lineHeight : '40px'}} class="actual-text">&nbsp;ورود&nbsp;</span>
                        <span style={{lineHeight : '40px'}} aria-hidden="true" class="hover-text">&nbsp;ورود&nbsp;</span>
                    </button>
                </div>
            </div>
          </section>
    </Layout>
  )
}

export default SignIn;  
