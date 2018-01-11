Devise.setup do |config|
  require "devise/orm/active_record"
  config.mailer_sender = "please-change-me-at-config-initializers-devise@example.com"
  config.case_insensitive_keys = [:email]
  config.strip_whitespace_keys = [:email]
  config.skip_session_storage = [:http_auth]
  config.stretches = Rails.env.test? ? 1 : 11
  config.reconfirmable = true
  config.expire_all_remember_me_on_sign_out = true
  config.password_length = 6..128
  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/
  config.reset_password_within = 6.hours
  config.sign_out_via = :delete
  config.omniauth :facebook, "476475936032545", "985b99bc7123b3c694de9b5ca1726ec9",
    scope: 'email, public_profile, user_birthday'
  config.omniauth :google_oauth2, "586423883509-2fjk4me1gi4q2et7dhrpomef0hj8jjsn.apps.googleusercontent.com",
    "ekQki3zc7ApVBFXPmnaoir9S", { }
end
