'use strict'

const Antl = use('Antl')

class ForgotPasswordCreateForgot {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      redirect_url: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ForgotPasswordCreateForgot
