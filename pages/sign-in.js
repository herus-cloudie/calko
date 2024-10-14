import Layout from '@/components/layout/Layout'
import Link from 'next/link';
import React from 'react'

const SignIn = () => {
  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={'ورود به حساب کاربری'}>
          <section>
            <div className='flex justify-center' style={{alignItems : 'center'}}>
                <div className='sign-in-form'>
                    <h4>ورود به حساب کاربری</h4>
                    
                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input type="input" class="form__field" placeholder="ایمیل" required=""/>
                          <label for="name" class="form__label">ایمیل</label>
                      </div>
                    </div>

                    <div dir='rtl'> 
                      <div class="form__group field">
                          <input type="input" class="form__field" placeholder="رمز عبور" required=""/>
                          <label for="name" class="form__label">رمز عبور</label>
                      </div>
                    </div>
                    <div style={{fontSize : '12px'}}>
                      <Link style={{color : 'blue'}} href="/sign-up"> ساخت اکانت </Link> <span> حساب کاربری ندارید؟  </span>
                    </div>
                    <button class="button-p" data-text="Awesome">
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